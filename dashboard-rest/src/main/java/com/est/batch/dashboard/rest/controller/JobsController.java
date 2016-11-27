package com.est.batch.dashboard.rest.controller;

import com.est.batch.dashboard.persistence.entity.JobInstance;
import com.est.batch.dashboard.rest.assembler.JobResourceAssembler;
import com.est.batch.dashboard.rest.model.Job;
import com.est.batch.dashboard.rest.repo.JobInstanceRestRepository;
import com.est.batch.dashboard.rest.resource.JobResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resources;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

/**
 * @author Tiberiu
 * @since 20/11/2016.
 */
@RestController
@RequestMapping(value = "/api/jobs", produces = MediaType.APPLICATION_JSON_VALUE)
public class JobsController {

    private JobInstanceRestRepository jobInstanceRestRepository;
    private JobResourceAssembler jobResourceAssembler;

    @Autowired
    public JobsController(JobInstanceRestRepository jobInstanceRestRepository, JobResourceAssembler jobResourceAssembler) {
        this.jobInstanceRestRepository = jobInstanceRestRepository;
        this.jobResourceAssembler = jobResourceAssembler;
    }

    @GetMapping
    public ResponseEntity<Resources<JobResource>> getAllJobs() {
        List<Job> jobs = new ArrayList<>();

        StreamSupport
                .stream(jobInstanceRestRepository.findAll().spliterator(), false)
                .forEach(jobInstance -> {
                    Job job = new Job();
                    job.setName(jobInstance.getJobName());

                    int index = jobs.indexOf(job);

                    if (index < 0) {
                        jobs.add(job);
                    } else {
                        jobs.get(index).getJobInstances().add(jobInstance);
                    }

                });
        final Resources<JobResource> wrapped = jobResourceAssembler.toEmbeddedList(jobs);
        return ResponseEntity.ok(wrapped);
    }

    @GetMapping("/{jobName}")
    public ResponseEntity<JobResource> getJob(@PathVariable String jobName) {
        List<JobInstance> jobInstances = jobInstanceRestRepository.findAllByJobNameOrderByIdDesc(jobName);

        // TODO Optional result, check if any values was returned
        Job job = new Job();
        job.setName(jobInstances.get(0).getJobName());
        job.getJobInstances().addAll(jobInstances);

        return ResponseEntity.ok(jobResourceAssembler.toResource(job));
    }
}
