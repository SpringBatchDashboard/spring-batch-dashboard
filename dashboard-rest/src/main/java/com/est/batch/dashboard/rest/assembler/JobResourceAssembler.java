package com.est.batch.dashboard.rest.assembler;

import com.est.batch.dashboard.rest.controller.JobsController;
import com.est.batch.dashboard.rest.model.Job;
import com.est.batch.dashboard.rest.resource.JobResource;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resources;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * @author Tiberiu
 * @since 21/11/2016.
 */
@Service
public class JobResourceAssembler extends ResourceAssemblerSupport<Job, JobResource> {

    public JobResourceAssembler() {
        super(JobsController.class, JobResource.class);
    }

    @Override
    public JobResource toResource(Job job) {
        final JobResource resource = instantiateResource(job);
        resource.setExecutionCount(job.getExecutionCount());
        resource.setName(job.getName());

        Link jobLink = linkTo(JobsController.class)
                .slash(job.getName())
                .withSelfRel();

        resource.add(jobLink);
        return resource;
    }

    public Resources<JobResource> toEmbeddedList(Iterable<Job> entities) {
        final List<JobResource> resources = toResources(entities);
        return new Resources<>(resources, linkTo(JobsController.class).withSelfRel());
    }
}
