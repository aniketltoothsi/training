






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
  `OrderDate` timestamp NOT NULL ,
  PRIMARY KEY (`OrderID`)
) ;


--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `ProductID` int(12) NOT NULL AUTO_INCREMENT,
  `ProductSKU` varchar(50)  NOT NULL,
  `ProductName` varchar(100) NOT NULL,
  `ProductPrice` float NOT NULL,
  `ProductCartDesc` varchar(250) NOT NULL,
  `ProductShortDesc` varchar(1000) NOT NULL,
  `ProductUpdateDate` timestamp NOT NULL,
  `ProductStock` float ,
  PRIMARY KEY (`ProductID`)
) ;


-- Table structure for table `users`


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