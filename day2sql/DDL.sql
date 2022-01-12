CREATE TABLE IF NOT EXISTS USERS (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  FIRST_NAME VARCHAR(30) NOT NULL,
  LAST_NAME VARCHAR(30) NOT NULL,
  EMAIL VARCHAR(50) NOT NULL UNIQUE,
  PASSWORD VARCHAR(30) NOT NULL,
  PHONE VARCHAR(20) NOT NULL,
  CREATED_AT timestamp DEFAULT now(),
  UPDATED_AT timestamp DEFAULT now() ON UPDATE now()
);

CREATE TABLE IF NOT EXISTS PRODUCTS (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  NAME VARCHAR(250) NOT NULL,
  REGULAR_PRICE FLOAT NOT NULL,
  DISCOUNT_PRICE FLOAT NOT NULL,
  QUANTITY INT NOT NULL,
  DESCRIPTION TEXT NOT NULL,
  CREATED_AT timestamp DEFAULT now(),
  UPDATED_AT timestamp DEFAULT now() ON UPDATE now()
);

CREATE TABLE CART
    (
        CART_ID INT PRIMARY KEY NOT NULL,
        USER_ID INT NOT NULL, 
        ORDER_STATUS VARCHAR(70) NOT NULL,
        AMOUNT FLOAT NOT NULL,
        DISCOUNT FLOAT NOT NULL,
        CREATED_AT timestamp DEFAULT now(),
        UPDATED_AT timestamp DEFAULT now() ON UPDATE now(),
        CONSTRAINT cart1 FOREIGN KEY (USER_ID) REFERENCES USERS(ID)
    );

CREATE TABLE CART_ITEM
    (   CART_ITEM_ID INT PRIMARY KEY NOT NULL,
        QUANTITY_WISHED INT NOT NULL,
        CART_ID INT NOT NULL,
        PRODUCT_ID INT NOT NULL,
        PRICE FLOAT NOT NULL,
        DISCOUNT FLOAT NOT NULL,
        CREATED_AT timestamp DEFAULT now(),
        UPDATED_AT timestamp DEFAULT now() ON UPDATE now(),
        CONSTRAINT cartitem1 FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCTS(ID),
        CONSTRAINT cartitem2 FOREIGN KEY (CART_ID) REFERENCES CART(CART_ID)
    );



CREATE TABLE IF NOT EXISTS ADDRESSES (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  STREET VARCHAR(80) NOT NULL,
  CITY VARCHAR(40) NOT NULL,
  COUNTRY VARCHAR(30) NOT NULL,
  POST_CODE VARCHAR(6) NOT NULL,
  USER_ID INT NOT NULL,
  CREATED_AT timestamp DEFAULT now(),
  UPDATED_AT timestamp DEFAULT now() ON UPDATE now(),
  CONSTRAINT addresses1 FOREIGN KEY(USER_ID) REFERENCES USERS(ID)
);




CREATE TABLE PAYMENT(
        PAYMENT_ID INT PRIMARY KEY NOT NULL,
        PAYMENT_DATE DATE NOT NULL,
        PAYMENT_TYPE VARCHAR(10) NOT NULL,
        USER_ID INT NOT NULL,
        CART_ID INT NOT NULL, 
        TOTAL_AMOUNT numeric(6),
		CREATED_AT timestamp DEFAULT now(),
        UPDATED_AT timestamp DEFAULT now() ON UPDATE now(),
        CONSTRAINT payment1 FOREIGN KEY (USER_ID) REFERENCES USERS(ID),
        CONSTRAINT payment2 FOREIGN KEY (CART_ID) REFERENCES CART(CART_ID)
);

ALTER TABLE CART MODIFY COLUMN ORDER_STATUS ENUM('COMPLETED','SHIPPED','CANCELLED','RETURNED');





