package com.est.batch.dashboard.rest.model;

import com.est.batch.dashboard.persistence.entity.JobInstance;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

/**
 * @author Tiberiu
 * @since 20/11/2016.
 */
@Getter
@Setter
public class Job {

    private String name;

    private Long executionCount;

    public Job(JobInstance jobInstance) {
        this.name = jobInstance.getJobName();
        this.executionCount = 1L;
    }

    public void incExecutionCount() {
        executionCount++;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Job job = (Job) o;
        return Objects.equals(name, job.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
