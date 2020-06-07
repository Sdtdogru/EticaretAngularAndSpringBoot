package com.fikrimir.fikrimir.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class productController {
    @Autowired
    private ProductService productService;

    @GetMapping("public/product")
    public List<ProductEntity> findAllProduct() {
        return productService.findAllProduct();
    }

    @GetMapping("public/product/{id}")
    public ProductEntity findByProductId(@PathVariable Long id) {
        return productService.findByProductId(id);
    }

    @GetMapping("public/category/{id}")
    public List<ProductEntity> findAllControler(@PathVariable Long id) {
        return productService.findAllCategory(id);
    }

    @PostMapping("private/product")
    public ProductEntity saveProduct(@RequestBody ProductEntity p) {
        return productService.saveProduct(p);
    }

    @PutMapping("private/product")
    public ProductEntity updateProduct(@RequestBody ProductEntity p) {
        return productService.updateProduct(p);
    }

    @DeleteMapping("private/product/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

}
