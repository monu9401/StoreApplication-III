package com.CrudAppService.Main.Service;

import java.util.List;

import com.CrudAppService.Main.Entity.Product;

public interface ProductService {
	
	public Product insert(Product p);
	
	public Product update(Product p);
	
	public List<Product> getAll();
	
	public Product getSingleProduct(int id);
	
	public void deleteProduct(int id);
}
