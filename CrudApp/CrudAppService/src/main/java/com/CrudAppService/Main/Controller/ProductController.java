package com.CrudAppService.Main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CrudAppService.Main.Entity.Product;
import com.CrudAppService.Main.Service.ProductService;

@RestController
@RequestMapping("/store")
@CrossOrigin
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@PostMapping
	public ResponseEntity<Product> addProduct(@RequestBody Product product) {
		try {
			Product prod = productService.insert(product);
			return ResponseEntity.status(HttpStatus.CREATED).body(prod);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Product> updateProduct(@RequestBody Product product, @PathVariable int id) {
		try {
			Product prod = this.productService.update(product);
			return ResponseEntity.status(HttpStatus.OK).body(prod);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteProduct(@PathVariable int id) {
		try {
			this.productService.deleteProduct(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Product> getProduct(@PathVariable int id) {
		try {
			Product prod = this.productService.getSingleProduct(id);
			return ResponseEntity.status(HttpStatus.FOUND).body(prod);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@GetMapping
	public ResponseEntity<List<Product>> getAllProducts() {
		try {
			List<Product> list = this.productService.getAll();
			return ResponseEntity.status(HttpStatus.OK).body(list);
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
