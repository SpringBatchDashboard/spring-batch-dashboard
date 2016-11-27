package com.est.batch.dashboard.rest.config;

import com.est.batch.dashboard.persistence.config.DashboardPersistenceConfig;
import com.est.batch.dashboard.rest.assembler.JobResourceAssembler;
import com.est.batch.dashboard.rest.controller.JobsController;
import com.est.batch.dashboard.rest.repo.JobInstanceRestRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.webmvc.support.RepositoryEntityLinks;

/**
 * @author Tiberiu
 * @since 19/11/2016.
 */
@Configuration
@Import(DashboardPersistenceConfig.class)
@EnableJpaRepositories(basePackageClasses = JobInstanceRestRepository.class)
public class DashboardRestConfig {

    @Bean
    public JobResourceAssembler jobResourceAssembler(RepositoryEntityLinks entityLinks) {
        return new JobResourceAssembler(entityLinks);
    }

    @Bean
    public JobsController jobsController(JobInstanceRestRepository jobInstanceRestRepository, JobResourceAssembler jobResourceAssembler) {
        return new JobsController(jobInstanceRestRepository, jobResourceAssembler);
    }
}
