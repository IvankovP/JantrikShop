CREATE TABLE ratings
(
    product_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    value INTEGER DEFAULT 0,
    UNIQUE (product_id, user_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);