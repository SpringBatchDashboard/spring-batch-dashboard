package com.est.batch.dashboard.rest.model;

import com.est.batch.dashboard.persistence.entity.JobInstance;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * @author Tiberiu
 * @since 20/11/2016.
 */
public class Job {

    private String name;

    private List<JobInstance> jobInstances;

    public Job() {
        jobInstances = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<JobInstance> getJobInstances() {
        return jobInstances;
    }

    public Long getExecutionCount() {
        return (long) jobInstances.size();
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
