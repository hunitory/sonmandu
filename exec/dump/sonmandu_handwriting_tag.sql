-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: i10b111.p.ssafy.io    Database: sonmandu
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `handwriting_tag`
--

DROP TABLE IF EXISTS `handwriting_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handwriting_tag` (
  `tag_id` int NOT NULL,
  `handwriting_application_id` bigint NOT NULL,
  PRIMARY KEY (`tag_id`,`handwriting_application_id`),
  KEY `FKi6gnk6df7ljdeoixujoap21l0` (`handwriting_application_id`),
  CONSTRAINT `FKi6gnk6df7ljdeoixujoap21l0` FOREIGN KEY (`handwriting_application_id`) REFERENCES `handwriting_application` (`handwriting_application_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handwriting_tag`
--

LOCK TABLES `handwriting_tag` WRITE;
/*!40000 ALTER TABLE `handwriting_tag` DISABLE KEYS */;
INSERT INTO `handwriting_tag` VALUES (5,1),(6,1),(2,2),(4,2),(5,3),(13,3),(14,3),(2,4),(7,4),(17,4),(4,5),(14,5),(16,5),(1,6),(10,6),(19,6),(9,7),(18,7),(6,8),(12,8),(16,8),(2,9),(5,9),(12,9),(7,10),(10,10),(5,11),(6,11),(16,11),(7,12),(12,12),(17,12),(3,13),(11,13),(19,13);
/*!40000 ALTER TABLE `handwriting_tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 16:44:00
