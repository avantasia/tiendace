-- MySQL dump 10.17  Distrib 10.3.23-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: tienda
-- ------------------------------------------------------
-- Server version	10.3.23-MariaDB-0+deb10u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_product` (
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_id` bigint(20) unsigned NOT NULL,
  `cart_id` bigint(20) unsigned NOT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `cart_product_product_id_foreign` (`product_id`),
  KEY `cart_product_cart_id_foreign` (`cart_id`),
  CONSTRAINT `cart_product_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cart_product_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=272 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
INSERT INTO `cart_product` VALUES ('2020-10-09 07:24:32','2020-10-09 07:24:32',4,1,1),('2020-10-09 07:24:32','2020-10-09 07:24:32',4,1,2),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,3),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,4),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,5),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,6),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,7),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,8),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,9),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,10),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,11),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,12),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,13),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,14),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,15),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,16),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,17),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,18),('2020-10-09 19:24:09','2020-10-09 19:24:09',14,2,19),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,20),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,21),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,22),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,23),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,24),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,25),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,26),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,27),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,28),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,29),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,30),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,31),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,32),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,33),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,34),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,35),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,36),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,37),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,38),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,39),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,40),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,41),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,42),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,43),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,44),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,45),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,46),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,47),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,48),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,49),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,50),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,51),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,52),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,53),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,54),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,55),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,56),('2020-10-09 19:24:10','2020-10-09 19:24:10',14,2,57),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,58),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,59),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,60),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,61),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,62),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,63),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,64),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,65),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,66),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,67),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,68),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,69),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,70),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,71),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,72),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,73),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,74),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,75),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,76),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,77),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,78),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,79),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,80),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,81),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,82),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,83),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,84),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,85),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,86),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,87),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,88),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,89),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,90),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,91),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,92),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,93),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,94),('2020-10-09 19:24:11','2020-10-09 19:24:11',14,2,95),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,96),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,97),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,98),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,99),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,100),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,101),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,102),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,103),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,104),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,105),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,106),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,107),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,108),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,109),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,110),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,111),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,112),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,113),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,114),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,115),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,116),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,117),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,118),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,119),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,120),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,121),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,122),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,123),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,124),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,125),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,126),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,127),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,128),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,129),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,130),('2020-10-09 19:24:12','2020-10-09 19:24:12',14,2,131),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,132),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,133),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,134),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,135),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,136),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,137),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,138),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,139),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,140),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,141),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,142),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,143),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,144),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,145),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,146),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,147),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,148),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,149),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,150),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,151),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,152),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,153),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,154),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,155),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,156),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,157),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,158),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,159),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,160),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,161),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,162),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,163),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,164),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,165),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,166),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,167),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,168),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,169),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,170),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,171),('2020-10-09 19:24:13','2020-10-09 19:24:13',14,2,172),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,173),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,174),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,175),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,176),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,177),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,178),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,179),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,180),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,181),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,182),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,183),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,184),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,185),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,186),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,187),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,188),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,189),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,190),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,191),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,192),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,193),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,194),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,195),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,196),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,197),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,198),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,199),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,200),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,201),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,202),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,203),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,204),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,205),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,206),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,207),('2020-10-09 19:24:14','2020-10-09 19:24:14',14,2,208),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,209),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,210),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,211),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,212),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,213),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,214),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,215),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,216),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,217),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,218),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,219),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,220),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,221),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,222),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,223),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,224),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,225),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,226),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,227),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,228),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,229),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,230),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,231),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,232),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,233),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,234),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,235),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,236),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,237),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,238),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,239),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,240),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,241),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,242),('2020-10-09 19:24:15','2020-10-09 19:24:15',14,2,243),('2020-10-09 20:41:34','2020-10-09 20:41:34',13,3,244),('2020-10-09 20:41:34','2020-10-09 20:41:34',13,3,245),('2020-10-09 20:41:34','2020-10-09 20:41:34',13,3,246),('2020-10-09 20:41:34','2020-10-09 20:41:34',6,3,247),('2020-10-10 14:10:48','2020-10-10 14:10:48',1,4,248),('2020-10-10 14:10:48','2020-10-10 14:10:48',3,4,249),('2020-10-10 14:10:48','2020-10-10 14:10:48',7,4,250),('2020-10-10 14:10:48','2020-10-10 14:10:48',14,4,251),('2020-10-10 14:10:48','2020-10-10 14:10:48',1,4,252),('2020-10-10 14:10:48','2020-10-10 14:10:48',1,4,253),('2020-10-10 14:10:48','2020-10-10 14:10:48',1,4,254),('2020-10-10 14:10:48','2020-10-10 14:10:48',3,4,255),('2020-10-10 14:10:48','2020-10-10 14:10:48',3,4,256),('2020-10-10 14:10:48','2020-10-10 14:10:48',3,4,257),('2020-10-10 14:10:48','2020-10-10 14:10:48',3,4,258),('2020-10-10 14:10:48','2020-10-10 14:10:48',7,4,259),('2020-10-10 14:10:48','2020-10-10 14:10:48',9,4,260),('2020-10-10 14:10:48','2020-10-10 14:10:48',9,4,261),('2020-10-10 14:10:48','2020-10-10 14:10:48',14,4,262),('2020-10-17 06:03:59','2020-10-17 06:03:59',4,6,264),('2020-10-17 06:03:59','2020-10-17 06:03:59',4,6,265),('2020-10-17 06:03:59','2020-10-17 06:03:59',4,6,266),('2020-10-17 06:03:59','2020-10-17 06:03:59',4,6,267),('2020-10-19 06:48:29','2020-10-19 06:48:29',3,9,271);
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `carts_user_id_foreign` (`user_id`),
  CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (4,'2020-10-09 07:24:32','2020-10-09 07:24:32',1),(5,'2020-10-09 19:24:09','2020-10-09 19:24:09',2),(6,'2020-10-09 20:41:34','2020-10-09 20:41:34',3),(7,'2020-10-10 14:10:48','2020-10-10 14:10:48',4),(8,'2020-10-17 06:03:59','2020-10-17 06:03:59',6),(2,'2020-10-19 06:41:44','2020-10-19 06:41:44',8),(1,'2020-10-19 06:48:29','2020-10-19 06:48:29',9);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coverimage` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('especias','TODO',1,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('frescos','TODO',2,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('salsas','TODO',3,'2020-10-06 16:55:30','2020-10-06 16:55:30');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log` (
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `type` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eventdesc` varchar(545) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2020_09_22_1600762933_create_users_table',1),(2,'2020_09_22_1600762946_create_roles_table',1),(3,'2020_09_22_1600762955_create_products_table',1),(4,'2020_09_22_1600762965_create_log_table',1),(5,'2020_09_22_1600762975_create_categories_table',1),(6,'2020_09_22_1600762985_create_role_user_table',1),(7,'2020_09_22_1600763000_create_stock_table',1),(8,'2020_09_22_1600763014_create_products_categories_table',1),(9,'2020_09_22_1600763023_create_carts_table',1),(10,'2020_09_22_1600763023_create_orders_table',1),(11,'2020_09_22_1600763032_create_cart_product_table',1),(12,'2020_09_22_1600763032_create_order_product_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_product` (
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `product_id` bigint(20) unsigned NOT NULL,
  `order_id` bigint(20) unsigned NOT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `order_product_product_id_foreign` (`product_id`),
  KEY `order_product_order_id_foreign` (`order_id`),
  CONSTRAINT `order_product_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `order_product_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES ('2020-10-17 06:03:26','2020-10-17 06:03:26',3,9,1),('2020-10-19 06:18:07','2020-10-19 06:18:07',2,10,2);
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `paid_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `sent_date` datetime DEFAULT NULL,
  `received_date` datetime DEFAULT NULL,
  `payment_method` int(11) NOT NULL DEFAULT 1,
  `shipping_method` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign` (`user_id`),
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,'2020-10-15 06:16:36','2020-10-15 06:18:27',1,'2020-10-15 06:16:36',NULL,'2020-10-15 06:18:27',1,1),(2,'2020-10-15 06:16:41','2020-10-19 06:22:27',2,'2020-10-15 06:16:41','2020-10-19 06:22:07','2020-10-19 06:22:27',1,1),(2,'2020-10-15 06:17:02','2020-10-19 06:22:34',3,'2020-10-15 06:17:02','2020-10-19 06:22:34',NULL,1,1),(2,'2020-10-15 06:18:46','2020-10-19 06:22:29',4,'2020-10-15 06:18:46','2020-10-19 06:22:13','2020-10-19 06:22:29',1,1),(1,'2020-10-16 06:19:27','2020-10-19 06:22:10',5,'2020-10-16 06:19:27','2020-10-19 06:22:10',NULL,1,1),(1,'2020-10-16 06:21:16','2020-10-16 06:21:16',6,'2020-10-16 06:21:16',NULL,NULL,1,1),(1,'2020-10-16 19:56:31','2020-10-16 19:56:31',7,'2020-10-16 19:56:31',NULL,NULL,1,1),(1,'2020-10-17 05:53:13','2020-10-17 05:53:13',8,'2020-10-17 05:53:13',NULL,NULL,1,1),(1,'2020-10-17 06:03:26','2020-10-17 06:03:26',9,'2020-10-17 06:03:26',NULL,NULL,1,2),(1,'2020-10-19 06:18:07','2020-10-19 06:18:07',10,'2020-10-19 06:18:07',NULL,NULL,1,2);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `name` varchar(95) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `image` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('Pimienta Negra','Piper nigrum es una especie de la familia de las piperáceas, cultivada por su fruto, que se emplea seco como especia. El fruto es una drupa (aproximadamente 5 mm) que se puede usar entera o en polvo obteniendo variedades como la negra, blanca o verde, con la única diferencia del grado de maduración del grano.',4.00,'img/products/pimientanegra.jpg',1,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Pimienta Blanca','A diferencia de la pimienta negra, las bayas se recogen maduras, se secan y se pelan. Se la somete a un proceso de maceración con agua, a partir del cual pierde la piel y queda el grano blanco que conocemos. El resultado es una pimienta más picante que la negra pero con aromas menos intensos..',4.50,'img/products/pimientablanca.jpg',2,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Pimienta Rosa','Las bayas se recogen muy maduras, es bastante más suave que la negra y con un sabor que recuerda al del pimiento con algunos toques cítricos; se consigue en diferentes tonalidades pero la más llamativa es la de color rojo.',5.50,'img/products/pimientarosa.jpg',3,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Albahaca','Ocimum basilicum llamada popularmente albahaca o alhábega, es una hierba aromática anual de la familia de las lamiáceas nativa de las regiones tropicales de África central y el sudeste asiático, se cultiva desde hace milenios.',2.20,'img/products/albahaca.jpg',4,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Oregano','Origanum vulgare, comúnmente conocida como orégano, es una especie de la familia Lamiaceae (antes llamada Labiaceae), nativa del oeste o suroeste de Eurasia y la región mediterránea.',3.20,'img/products/oregano.jpg',5,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Cayena','La pimienta de cayena es un tipo de Capsicum annuum. Normalmente es un chile moderadamente picante, utilizado para sazonar platos.',2.00,'img/products/cayena.png',6,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Chiles','El chile (del náhuatl: chīlli, Acerca de este sonido ˈt͡ʃiːlli (?·i)), ají (del taíno haxí) o guindilla en España, es una variedad de pimiento picante. Es el fruto (baya) de diversas especies de plantas del género Capsicum, de la familia de las solanáceas.',2.30,'img/products/chiles.jpg',7,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Jalapeño','El chile jalapeño —así llamado por su centro tradicional de producción, la ciudad mexicana de Xalapa, en Estado de Veracruz— o chile cuaresmeño es una de las verduras más picantes de Capsicum annuum más extensamente cultivadas y consumidas en América. ',3.40,'img/products/jalapeño.jpg',8,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Habanero','Capsicum chinense es una de las cinco especies domesticadas de chiles o ajíes.1​ Variedades importantes de Capsicum chinense incluyen el chile habanero, la más común, el ají panca y el ají limo. Las variedades de ají panca y ají limo se cultivan en Perú y México. ',2.20,'img/products/habanero.jpg',9,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Pimiento fantasma','El Naga Jolokia (también conocido como Bhut Jolokia, Bih Jolokia, Ghost Chili, Ghost Pepper, Naga Morich) es uno de los cinco cultivares de Capsicum frutescens que crecen en el estado de Assam (India) y otras regiones del noroeste del país. También se cultiva en Bangladés y Sri Lanka. ',3.20,'img/products/fantasma.jpg',10,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Salsa Amarillin','Salsa picante basada en chile amarillo molido de primera calidad.',3.00,'img/products/amarillin.jpg',11,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Chile con Ajo','Se trata de una salsa de chile verde muy versátil con un toque especial a ajo. Se puede utilizar como salsa picante o también para cocinar, especialmente platos asiáticos.',2.30,'img/products/chileajo.jpg',12,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Miel con Mostaza','La mejor salsa de miel y mostaza, para ensaladas, pescados o carnes. Si te gusta la mostaza esta salsa al ensalza al fusionarla con la miel ',3.40,'img/products/mielmostaza.jpg',13,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Mostaza inglesa',' La salsa de mostaza inglesa es una salsa deliciosa que se prepara con especias aromáticas y con mostaza blanca',2.20,'img/products/mostazainglesa.jpg',14,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('Salsa de trufa picante','Bienvenido a la familia de los amantes de la trufa. La mezcla de trufa negra y chiles , con un toque de agave crea un gusto único',3.20,'img/products/salsatrufa.jpg',15,'2020-10-06 16:55:30','2020-10-06 16:55:30');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_categories`
--

DROP TABLE IF EXISTS `products_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_categories` (
  `product_id` bigint(20) unsigned NOT NULL,
  `category_id` bigint(20) unsigned NOT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `products_categories_product_id_foreign` (`product_id`),
  KEY `products_categories_category_id_foreign` (`category_id`),
  CONSTRAINT `products_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_categories_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
INSERT INTO `products_categories` VALUES (1,1,1,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(2,1,2,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(3,1,3,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(4,1,4,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(5,1,5,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(6,2,6,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(7,2,7,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(8,2,8,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(9,2,9,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(10,2,10,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(11,3,11,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(12,3,12,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(13,3,13,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(14,3,14,'2020-10-06 16:55:31','2020-10-06 16:55:31'),(15,3,15,'2020-10-06 16:55:31','2020-10-06 16:55:31');
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_user` (
  `user_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `role_user_user_id_foreign` (`user_id`),
  KEY `role_user_role_id_foreign` (`role_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_user`
--

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` VALUES (1,1,'2020-10-06 16:55:30','2020-10-06 16:55:30',1),(2,2,'2020-10-06 16:55:30','2020-10-06 16:55:30',2),(2,3,'2020-10-06 16:55:30','2020-10-06 16:55:30',3);
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(145) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES ('admin','Administrator accounts with full access',1,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('user','Normal user account',2,'2020-10-06 16:55:30','2020-10-06 16:55:30'),('seller','Seller account',3,'2020-10-06 16:55:30','2020-10-06 16:55:30');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock` (
  `productid` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `location` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `stock_productid_foreign` (`productid`),
  CONSTRAINT `stock_productid_foreign` FOREIGN KEY (`productid`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `name` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `city` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `postal_code` int(11) NOT NULL DEFAULT 0,
  `picture` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('admin','$2y$10$PdETO2MCNYhreZ9pGELX/.JhUkXd3ghnI2Vs.8VvCnNOhd3L6/29G','admin@gmail.com','2020-10-06 16:55:30','2020-10-19 06:47:54',1,'Calle Falsa','Ferrol',15050,'7932b2e116b076a54f452848eaabd5857f61bd957fe8a218faf216f24c9885bb.png'),('visitante','$2y$10$s9lisbnDpZmPaZV6sB/75egjvlqM50Ip5hgv8Eesz0.tpnuCWHW.y','visitante@gmail.com','2020-10-06 16:55:30','2020-10-09 07:50:41',2,'calle falsa','ferrol',15554,'0554c400bbe27c477f895572100b4452ea751ac191fabc882cef2b20587fb9ee.webp'),('Manches','$2y$10$3JgCJGR.iL.hjDp4ECFn2.ZxStmEgoyGjW0HhObvromqPax.uIYaW','jlhernangomez@gmail.com','2020-10-06 21:20:03','2020-10-06 21:20:03',3,'','',0,''),('aaa','$2y$10$WGEzdQUnhtZxxY5HJtwnjuO3yb90To69DjeQAcRHPNt4VBDpMELIS','aaa@mail.com','2020-10-09 07:24:31','2020-10-09 07:34:54',4,'asd','asd',0,'c255e3d30bd07812ad694779b0507e2c7ddc4c910b9ed5e0ac3470e52f5c2ff2.png'),('\'','$2y$10$/JbxMWbzB6/XI9Jk/YMSF.fbmD/nDLnmRjd5Rmlpxf2VwIDzyONC2','\'@\'.com','2020-10-09 19:24:09','2020-10-09 19:24:09',5,'','',0,''),('U','$2y$10$DcRXUMpp3H26EUD2sudXn.A7dYewnqd2pfQthA00pRXYm//7cs3B6','rrr@dd.com','2020-10-09 20:41:34','2020-10-09 20:41:34',6,'','',0,''),('Un Cliente','$2y$10$DY0VahCfNkoEDFp9lJvGxeOkkSV0DKdiVSQ8mjCcHbRHKR/nGaxPi','abc@def.gh','2020-10-10 14:10:48','2020-10-10 14:11:54',7,'','',0,'5bf529a8e8154383cea85089fd491f02f8ad7b1bd1f630a9d8255e258fa00106.png'),('asdasd','$2y$10$FRvhRof/yJEjjE4IJq.4uOgi9QP08U2GU7PvBkXPeg1GuIZZnqj9a','asdasd@gmail.com','2020-10-17 06:03:59','2020-10-17 06:03:59',8,'','',0,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-19  9:42:33
