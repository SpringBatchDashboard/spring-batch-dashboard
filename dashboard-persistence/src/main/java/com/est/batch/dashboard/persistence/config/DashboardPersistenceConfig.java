package com.est.batch.dashboard.persistence.config;

import com.est.batch.dashboard.persistence.entity.JobInstance;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;

/**
 * @author Tiberiu
 * @since 19/11/2016.
 */
@Configuration
@EntityScan(basePackageClasses = JobInstance.class)
public class DashboardPersistenceConfig {
}
