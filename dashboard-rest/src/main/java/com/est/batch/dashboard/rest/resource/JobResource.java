package com.est.batch.dashboard.rest.resource;

import lombok.Getter;
import lombok.Setter;
import org.springframework.hateoas.ResourceSupport;

/**
 * @author Tiberiu
 * @since 21/11/2016.
 */
@Getter
@Setter
public class JobResource extends ResourceSupport {

    private String name;

    private Long executionCount;

}
