-- Create a table 

CREATE TABLE `local`.`test` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `age` INT NULL,
  `dob` INT VARCHAR(45) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- Create customers table
CREATE TABLE `local`.`customers` (
  `CustomerID` INT NOT NULL AUTO_INCREMENT,
  `CustomerName` VARCHAR(45) NULL,
  `ContactName` VARCHAR(45) NULL,
  `Address` VARCHAR(45) NULL,
  `City` VARCHAR(45) NULL,
  `PostalCode` VARCHAR(45) NULL,
  `Country` VARCHAR(45) NULL,
  PRIMARY KEY (`CustomerID`));


-- Create Orders table

CREATE TABLE `local`.`Orders` (
  `OrderID` INT NOT NULL AUTO_INCREMENT,
  `CustomerID` INT NULL,
  `EmployeeID` INT NULL,
  `OrderDate` DATETIME NULL,
  `ShipperID` INT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE INDEX `OrderID_UNIQUE` (`OrderID` ASC) VISIBLE,
  PRIMARY KEY (`OrderID`));


-- Insert multiple values
INSERT INTO `local`.`Orders` (CustomerID, EmployeeID, OrderDate, ShipperID, created_at, updated_at)
VALUES
(1, 101, '2024-02-22', 501, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 102, '2024-02-23', 502, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(3, 103, '2024-02-24', 503, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
