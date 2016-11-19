package com.est.batch.dashboard.app;

import com.est.batch.dashboard.app.config.DashboardApplicationConfig;
import lombok.extern.java.Log;
import org.springframework.boot.SpringApplication;

@Log
public class DashboardApplication {

    public static void main(String[] args) {
        LOG.info("Starting application...");
        SpringApplication.run(DashboardApplicationConfig.class, args);
    }
}
