SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";






CREATE TABLE IF NOT EXISTS `orderdetails` (
  `DetailID` int(11) NOT NULL AUTO_INCREMENT,
  `DetailOrderID` int(11) NOT NULL,
  `DetailProductID` int(11) NOT NULL,
  `DetailName` varchar(250) NOT NULL,
  `DetailPrice` float NOT NULL,
  `DetailSKU` varchar(50)  NOT NULL,
  `DetailQuantity` int(11) NOT NULL,
  PRIMARY KEY (`DetailID`)
) ;



CREATE TABLE IF NOT EXISTS `orders` (
  `OrderID` int(11) NOT NULL ,
  `OrderUserID` int(11) NOT NULL,
  `OrderAmount` float NOT NULL,
  `OrderShipName` varchar(100)  NOT NULL,
  `OrderShipAddress` varchar(100) NOT NULL,
  `OrderShipAddress2` varchar(100) NOT NULL,
  `OrderCity` varchar(50)   NOT NULL,
  `OrderState` varchar(50)  NOT NULL,
  `OrderZip` varchar(20)  NOT NULL,
  `OrderCountry` varchar(50) NOT NULL,
  `OrderPhone` varchar(20)  NOT NULL,
  `OrderFax` varchar(20)  NOT NULL,
  `OrderShipping` float NOT NULL,
  `OrderTax` float NOT NULL,
  `OrderEmail` varchar(100)  NOT NULL,
  `OrderDate` timestamp NOT NULL ,
  `OrderShipped` tinyint(1) NOT NULL,
  `OrderTrackingNumber` varchar(80),
  PRIMARY KEY (`OrderID`)
) ;

-- --------------------------------------------------------



-- --------------------------------------------------------

--
-- Table structure for table `productoptions`
--


--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `ProductID` int(12) NOT NULL AUTO_INCREMENT,
  `ProductSKU` varchar(50)  NOT NULL,
  `ProductName` varchar(100) NOT NULL,
  `ProductPrice` float NOT NULL,
  `ProductWeight` float NOT NULL,
  `ProductCartDesc` varchar(250) NOT NULL,
  `ProductShortDesc` varchar(1000) NOT NULL,
  `ProductLongDesc` text NOT NULL,
  `ProductThumb` varchar(100) NOT NULL,
  `ProductImage` varchar(100) NOT NULL,
  `ProductCategoryID` int(11) ,
  `ProductUpdateDate` timestamp NOT NULL,
  `ProductStock` float ,
  `ProductLive` tinyint(1) ,
  `ProductUnlimited` tinyint(1) ,
  `ProductLocation` varchar(250),
  PRIMARY KEY (`ProductID`)
) ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `ProductSKU`, `ProductName`, `ProductPrice`, `ProductWeight`, `ProductCartDesc`, `ProductShortDesc`, `ProductLongDesc`, `ProductThumb`, `ProductImage`, `ProductCategoryID`, `ProductUpdateDate`, `ProductStock`, `ProductLive`, `ProductUnlimited`, `ProductLocation`) VALUES
(1, '000-0001', 'Cotton T-Shirt', 9.99, 3, 'Light Cotton T-Shirt', 'A light cotton T-Shirt made with 100% real cotton.', 'A light cotton T-Shirt made with 100% real cotton.\r\n\r\nMade right here in the USA for over 15 years, this t-shirt is lightweight and durable.', '', '', 5, '2013-06-13 01:00:50', 100, 1, 0, NULL),
(2, '000-0004', 'Los Angeles', 179.99, 8, 'Track and Trail', 'A rugged track and trail athletic shoe', 'A rugged track and trail athletic shoe', '', '', 4, '2013-07-25 19:04:36', NULL, 0, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `UserFirstName` varchar(50) ,
  `UserLastName` varchar(50) ,
  `UserCity` varchar(90) ,
  `UserState` varchar(20) ,
  `UserZip` varchar(12) ,
  `UserPhone` varchar(20),
  `UserCountry` varchar(20) ,
  `UserAddress` varchar(100) ,
  `UserAddress2` varchar(50) ,
  PRIMARY KEY (`UserID`)
) ;