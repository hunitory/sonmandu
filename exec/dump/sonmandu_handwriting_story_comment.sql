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
-- Table structure for table `handwriting_story_comment`
--

DROP TABLE IF EXISTS `handwriting_story_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handwriting_story_comment` (
  `create_date` datetime(6) DEFAULT NULL,
  `handwriting_story_comment_id` bigint NOT NULL AUTO_INCREMENT,
  `handwriting_story_id` bigint DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`handwriting_story_comment_id`),
  KEY `FK34y6xq1m2s3618iy27pyq2twn` (`handwriting_story_id`),
  KEY `FKq6v2mvgl6fv62ntxf9rnrilri` (`member_id`),
  CONSTRAINT `FK34y6xq1m2s3618iy27pyq2twn` FOREIGN KEY (`handwriting_story_id`) REFERENCES `handwriting_story` (`handwriting_id`),
  CONSTRAINT `FKq6v2mvgl6fv62ntxf9rnrilri` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handwriting_story_comment`
--

LOCK TABLES `handwriting_story_comment` WRITE;
/*!40000 ALTER TABLE `handwriting_story_comment` DISABLE KEYS */;
INSERT INTO `handwriting_story_comment` VALUES ('2024-02-15 16:15:00.000000',1,1,18,'오 글씨체 특이하고 이쁘네요'),('2024-02-15 16:15:00.000000',2,8,18,'저도 명상 참 좋아합니다!!'),('2024-02-15 16:16:00.000000',3,5,16,'멋있네요!!!'),('2024-02-15 16:18:00.000000',4,6,1,'굿굿 잘보고 갑니다');
/*!40000 ALTER TABLE `handwriting_story_comment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 16:43:51
