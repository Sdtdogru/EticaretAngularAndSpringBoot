package com.fikrimir.fikrimir.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "product")
@AllArgsConstructor
@NoArgsConstructor
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long categoryId;
    private String productName;
    private String quantityPerUnit;
    private String unitPrice;
    private int unitsInStock;
    private int statu;
    private String img;

}
