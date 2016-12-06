package com.est.batch.dashboard.app;

import com.est.batch.dashboard.app.config.BackboneDashboardApplicationConfig;
import lombok.extern.java.Log;
import org.springframework.boot.SpringApplication;

@Log
public class BackboneDashboardApplication {

    public static void main(String[] args) {
        LOG.info("Starting application...");
        SpringApplication.run(BackboneDashboardApplicationConfig.class, args);
    }
}
