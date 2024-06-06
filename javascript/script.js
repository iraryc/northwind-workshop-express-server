"use strict"

let productsData = [];
let categoriesData = [];

function GrabProductsDataFromAPI() {
    fetch("http://localhost:8081/api/products")
        .then(response => response.json())
        .then(data => {
            productsData = data;
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching product data', error);
        });
}

function GrabCategoriesDataFromAPI() {
    fetch("http://localhost:8081/api/categories")
        .then(response => response.json())
        .then(data => {
            categoriesData = data;
            populateCategoryDropdown(data);
        })
        .catch(error => {
            console.error('Error fetching categories data', error);
        });
}