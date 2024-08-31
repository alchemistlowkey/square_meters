-- Table 1: inspection
CREATE TABLE inspection (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    inspection_date DATE NOT NULL
);

-- Table 2: invest
CREATE TABLE invest (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL
);

-- Table 3: request_information
CREATE TABLE request_information (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    preferred_size VARCHAR(10) CHECK (preferred_size IN ('300sqm', '500sqm', '1000sqm')) NOT NULL
);

-- newsletter
CREATE TABLE newsletter (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
