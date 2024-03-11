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
-- Table structure for table `handwriting_like`
--

DROP TABLE IF EXISTS `handwriting_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handwriting_like` (
  `handwriting_id` bigint NOT NULL,
  `member_id` bigint NOT NULL,
  PRIMARY KEY (`handwriting_id`,`member_id`),
  KEY `FKj1xec5j0ly0kyie9fgd7y9isf` (`member_id`),
  CONSTRAINT `FKgkgdetsup6to8m8xgerx3bpxn` FOREIGN KEY (`handwriting_id`) REFERENCES `handwriting` (`handwriting_id`),
  CONSTRAINT `FKj1xec5j0ly0kyie9fgd7y9isf` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handwriting_like`
--

LOCK TABLES `handwriting_like` WRITE;
/*!40000 ALTER TABLE `handwriting_like` DISABLE KEYS */;
INSERT INTO `handwriting_like` VALUES (1,9),(2,9),(2,16),(3,16),(4,16),(5,16),(2,18),(4,18),(5,18),(7,18),(11,19),(8,20),(11,20),(12,20);
/*!40000 ALTER TABLE `handwriting_like` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 16:44:02
