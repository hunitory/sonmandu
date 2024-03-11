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
-- Table structure for table `handwriting`
--

DROP TABLE IF EXISTS `handwriting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handwriting` (
  `download_count` int NOT NULL,
  `hit_count` int NOT NULL,
  `is_selected` bit(1) NOT NULL,
  `last_month` int NOT NULL,
  `last_week` int NOT NULL,
  `like_count` int NOT NULL,
  `this_month` int NOT NULL,
  `this_week` int NOT NULL,
  `create_date` datetime(6) DEFAULT NULL,
  `handwriting_application_id` bigint DEFAULT NULL,
  `handwriting_id` bigint NOT NULL AUTO_INCREMENT,
  `download_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`handwriting_id`),
  KEY `FKpkocwxbrsyy0dmopryyds3kv8` (`handwriting_application_id`),
  CONSTRAINT `FKpkocwxbrsyy0dmopryyds3kv8` FOREIGN KEY (`handwriting_application_id`) REFERENCES `handwriting_application` (`handwriting_application_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handwriting`
--

LOCK TABLES `handwriting` WRITE;
/*!40000 ALTER TABLE `handwriting` DISABLE KEYS */;
INSERT INTO `handwriting` VALUES (1,0,_binary '',0,0,1,0,9,'2024-02-15 15:46:00.000000',2,1,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EB%82%B4%20%EC%96%B4%EB%A6%B4%EC%A0%81%20%EA%B8%B0%EC%96%B5%EC%B2%B4.woff2','내 어릴적 기억'),(0,0,_binary '',0,0,3,0,9,'2024-02-15 15:56:00.000000',3,2,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EC%83%81%EB%82%A8%EC%9E%90%EC%B2%B4.woff2','상남자'),(0,1,_binary '',0,0,1,0,4,'2024-02-15 15:58:00.000000',4,3,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EC%A1%B0%EC%84%A0%EC%8B%9C%EB%8C%80%EC%B2%B4.woff2','조선시대'),(0,0,_binary '',0,0,2,0,6,'2024-02-15 16:02:00.000000',5,4,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%ED%99%94%EB%A0%A4%ED%96%88%EB%8D%98%20%EA%B8%B0%EC%96%B5%EC%B2%B4.woff2','화려했던 기억'),(0,1,_binary '',0,0,2,0,7,'2024-02-15 16:04:00.000000',6,5,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EB%8F%85%EB%A6%BD%EC%9A%B4%EB%8F%99%EA%B0%80%EC%B2%B4.woff2','독립운동가'),(0,0,_binary '',0,0,0,0,0,'2024-02-15 16:09:00.000000',7,6,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EA%B7%B8%EB%82%A0%EB%A1%9C%EB%B6%80%ED%84%B0%2010%EB%85%84%EC%B2%B4.woff2','그날로부터 10년'),(0,0,_binary '',0,0,1,0,3,'2024-02-15 16:09:00.000000',8,7,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EA%B3%A0%EC%96%91%EC%9D%B4%EB%9F%AC%EB%B2%84%EC%B2%B4.woff2','고양이러버'),(0,0,_binary '',0,0,1,0,3,'2024-02-15 16:13:00.000000',9,8,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EB%AA%85%EC%83%81%EC%9D%B8%EC%B2%B4.woff2','명상인'),(0,0,_binary '',0,0,0,0,0,'2024-02-15 16:14:00.000000',10,9,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EB%93%9C%EA%B0%80%EC%9E%90%EC%B2%B4.woff2','드가자'),(0,2,_binary '',0,0,0,0,2,'2024-02-15 16:35:00.000000',11,10,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EC%96%B4%EB%A8%B8%EB%8B%88%20%EA%B8%80%EC%94%A8%EC%B2%B4.woff2','어머니 글씨'),(0,0,_binary '',0,0,2,0,6,'2024-02-15 16:36:00.000000',12,11,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EC%82%BC%EC%84%B1%ED%8C%8C%EC%9D%B4%ED%8C%85%EC%B2%B4.woff2','삼성파이팅'),(0,0,_binary '',0,0,1,0,3,'2024-02-15 16:39:00.000000',13,12,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/%EC%86%90%EB%A7%8C%EB%91%90%20%EC%B2%AB%EB%88%88%EC%B2%B4.woff2','첫눈');
/*!40000 ALTER TABLE `handwriting` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 16:43:57
