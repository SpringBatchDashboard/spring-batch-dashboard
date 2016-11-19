package com.tpo.batch.boot;

import lombok.Data;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.support.ListItemReader;
import org.springframework.batch.item.support.PassThroughItemProcessor;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static java.lang.String.valueOf;

/**
 * App that runs two Spring Batch jobs with a random input data.
 * The purpose is to generate Spring Batch metadata samples.
 *
 * @author Tiberiu
 * @since 18/11/2016.
 */
@SpringBootApplication
@EnableBatchProcessing
public class SpringBootBatch {

    @Autowired
    private JobBuilderFactory jobs;

    @Autowired
    private StepBuilderFactory steps;

    public static void main(String[] args) throws Exception {
        System.exit(SpringApplication.exit(SpringApplication.run(SpringBootBatch.class, args)));
    }

    @Bean
    Step step1() {
        return steps.get("step1")
                .<Item, Item>chunk(100)
                .reader(reader())
                .processor(processor())
                .writer(writer())
                .build();
    }

    @Bean
    PassThroughItemProcessor<Item> processor() {
        return new PassThroughItemProcessor<>();
    }

    @Bean
    ItemWriter<? super Item> writer() {
        return list -> list.forEach(System.out::println);
    }

    @Bean
    ItemReader<Item> reader() {
        int random = new Random().nextInt(5000);
        System.out.println("Random input: " + random);
        List<Item> result = IntStream
                .range(0, random)
                .mapToObj(index -> new Item(valueOf(index)))
                .collect(Collectors.toList());
        return new ListItemReader<>(result);
    }

    @Bean
    Step step2() throws Exception {
        return steps.get("step2").tasklet(tasklet()).build();
    }

    @Bean
    Tasklet tasklet() {
        return (contribution, context) -> RepeatStatus.FINISHED;
    }

    @Bean
    RunIdIncrementer runIdIncrementer() {
        return new RunIdIncrementer();
    }

    @Bean
    Job job1() throws Exception {
        return jobs
                .get("job1")
                .start(step1())
                .next(step2())
                .incrementer(runIdIncrementer())
                .build();
    }

    @Bean
    Job job2() throws Exception {
        return jobs
                .get("job2")
                .start(step2())
                .next(step1())
                .incrementer(runIdIncrementer())
                .build();
    }

    @Data
    class Item {
        private final String id;
    }

}
