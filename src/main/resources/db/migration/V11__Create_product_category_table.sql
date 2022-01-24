CREATE TABLE product_category
(
    product_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    UNIQUE (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);