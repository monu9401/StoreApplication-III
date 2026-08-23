package com.CrudAppService.Main.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CrudAppService.Main.Dao.ProductRepository;
import com.CrudAppService.Main.Entity.Product;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;
	
	public Product insert(Product p) {
		Product product = productRepository.save(p);
		return product;
	}
	
	public Product update(Product p) {
		Product product = productRepository.save(p);
		return product;
	}
	
	public List<Product> getAll(){
		List<Product> list = (List<Product>)productRepository.findAll();
		return list;
	}
	
	public Product getSingleProduct(int id) {
		Optional<Product> opt = productRepository.findById(id);
		return opt.get();
	}
	
	public void deleteProduct(int id) {
		productRepository.deleteById(id);
	}
	

}
