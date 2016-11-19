package com.est.batch.dashboard.persistence.entity;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Tiberiu
 * @since 19/11/2016.
 */
@Getter
@ToString
@EqualsAndHashCode
@Entity(name = "BATCH_JOB_INSTANCE")
public class JobInstance {

    @Id
    @Column(name = "JOB_INSTANCE_ID")
    private Long id;

    @Column
    private Long version;

    @Column
    private String jobName;

    @Column
    private String jobKey;

}
