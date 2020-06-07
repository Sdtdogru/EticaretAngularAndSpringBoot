package com.fikrimir.fikrimir.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity,Long> {
    @Async
    @Query("select a from ProductEntity as a order by a.id desc")
    List<ProductEntity> findAll();
    @Query("select a from ProductEntity as a where a.categoryId=:id")
    List<ProductEntity> findAllCategory(@Param("id") Long id);


}
