package com.est.batch.dashboard.rest.base;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;

import java.io.Serializable;

/**
 * @author Tiberiu
 * @since 19/11/2016.
 */
@NoRepositoryBean
public interface ReadOnlyRepository<T, ID extends Serializable> extends Repository<T, ID> {

    T findOne(ID id);

    Iterable<T> findAll();

    Iterable<T> findAll(Sort var1);

    Page<T> findAll(Pageable var1);

}