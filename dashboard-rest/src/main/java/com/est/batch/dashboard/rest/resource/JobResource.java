package com.est.batch.dashboard.rest.resource;

import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.hateoas.core.Relation;

import java.util.List;

/**
 * @author Tiberiu
 * @since 21/11/2016.
 */
@Getter
@Setter
@Relation(value = "job", collectionRelation = "jobs")
public class JobResource extends ResourceSupport {

    private String name;

    private Long executionCount;

    private List<JobInstanceResource> jobInstances;
}
