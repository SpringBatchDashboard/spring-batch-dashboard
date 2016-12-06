package com.est.batch.dashboard.app.config;

import com.est.batch.dashboard.rest.config.DashboardRestConfig;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author Tiberiu
 * @since 19/11/2016.
 */
@Configuration
@EnableAutoConfiguration
@Import(DashboardRestConfig.class)
public class BackboneDashboardApplicationConfig {
}
