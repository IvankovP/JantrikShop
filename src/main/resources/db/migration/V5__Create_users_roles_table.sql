CREATE TABLE users_roles
(
    user_id INTEGER REFERENCES users(id) NOT NULL,
    role_id INTEGER REFERENCES roles(id) NOT NULL,
    CONSTRAINT usr_r UNIQUE (user_id, role_id)
);