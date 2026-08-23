package com.CrudAppService.Main.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Product")
public class Product {

	@Id
	@Column(name="id")
	int id;
	@Column(name="name")
	String name;
	@Column(name="description")
	String description;
	@Column(name="price")
	int price;
}
