package com.est.batch.dashboard.rest.config;

import com.est.batch.dashboard.persistence.config.DashboardPersistenceConfig;
import com.est.batch.dashboard.rest.assembler.JobResourceAssembler;
import com.est.batch.dashboard.rest.controller.JobsController;
import com.est.batch.dashboard.rest.repo.JobInstanceRestRepository;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author Tiberiu
 * @since 19/11/2016.
 */
@Configuration
@Import(DashboardPersistenceConfig.class)
@ComponentScan(basePackageClasses = {
        JobResourceAssembler.class,
        JobsController.class
})
@EnableJpaRepositories(basePackageClasses = JobInstanceRestRepository.class)
public class DashboardRestConfig {
}
