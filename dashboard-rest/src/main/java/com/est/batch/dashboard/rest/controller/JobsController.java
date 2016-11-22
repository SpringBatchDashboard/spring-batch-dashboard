package com.est.batch.dashboard.rest.controller;

import com.est.batch.dashboard.rest.assembler.JobResourceAssembler;
import com.est.batch.dashboard.rest.model.Job;
import com.est.batch.dashboard.rest.repo.JobInstanceRestRepository;
import com.est.batch.dashboard.rest.resource.JobResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

/**
 * @author Tiberiu
 * @since 20/11/2016.
 */
@RestController
public class JobsController {

    private JobInstanceRestRepository jobInstanceRestRepository;
    private JobResourceAssembler jobResourceAssembler;

    @Autowired
    public JobsController(JobInstanceRestRepository jobInstanceRestRepository, JobResourceAssembler jobResourceAssembler) {
        this.jobInstanceRestRepository = jobInstanceRestRepository;
        this.jobResourceAssembler = jobResourceAssembler;
    }

    @GetMapping("api/jobs")
    public ResponseEntity<Resources<JobResource>> getAllJobs() {
        List<Job> jobs = new ArrayList<>();

        StreamSupport
                .stream(jobInstanceRestRepository.findAll().spliterator(), false)
                .map(Job::new)
                .forEach(job -> {
                    int index = jobs.indexOf(job);
                    if (index < 0) {
                        jobs.add(job);
                    } else {
                        jobs.get(index).incExecutionCount();
                    }
                });
        final Resources<JobResource> wrapped = jobResourceAssembler.toEmbeddedList(jobs);
        return ResponseEntity.ok(wrapped);
    }
}
