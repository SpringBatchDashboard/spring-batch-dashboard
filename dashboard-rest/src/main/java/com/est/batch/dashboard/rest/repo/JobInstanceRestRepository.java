package com.est.batch.dashboard.rest.repo;

import com.est.batch.dashboard.persistence.entity.JobInstance;
import com.est.batch.dashboard.rest.base.ReadOnlyRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * @author Tiberiu
 * @since 19/11/2016.
 */
@RepositoryRestResource
public interface JobInstanceRestRepository extends ReadOnlyRepository<JobInstance, Long> {

    List<JobInstance> findAllByJobNameOrderByIdDesc(@Param("name")String jobName);
}
