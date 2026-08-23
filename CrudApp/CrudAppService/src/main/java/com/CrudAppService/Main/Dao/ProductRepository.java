package com.CrudAppService.Main.Dao;

import org.springframework.data.repository.CrudRepository;

import com.CrudAppService.Main.Entity.Product;

public interface ProductRepository extends CrudRepository<Product, Integer>{

}
