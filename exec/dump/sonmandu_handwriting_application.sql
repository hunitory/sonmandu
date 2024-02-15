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
-- Table structure for table `handwriting_application`
--

DROP TABLE IF EXISTS `handwriting_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handwriting_application` (
  `create_date` date DEFAULT NULL,
  `state` int NOT NULL DEFAULT '1',
  `handwriting_application_id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint DEFAULT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`handwriting_application_id`),
  KEY `FK53ib5lrtiy282dvcqbysr49g1` (`member_id`),
  CONSTRAINT `FK53ib5lrtiy282dvcqbysr49g1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handwriting_application`
--

LOCK TABLES `handwriting_application` WRITE;
/*!40000 ALTER TABLE `handwriting_application` DISABLE KEYS */;
INSERT INTO `handwriting_application` VALUES ('2024-02-15',2,1,8,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/2b8454b1-d2e1-4b9b-ab29-cff5866d14d4.png','alfo'),('2024-02-13',4,2,7,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/56da0677-a776-456c-8a30-4399d49157bd.png','내 어릴적 기억'),('2024-02-13',4,3,9,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/94ea7a32-3ef9-4ee3-a9e1-ffa86a493381.jpeg','상남자'),('2024-02-13',4,4,13,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/b83082c4-2814-4866-89c5-be92f2860882.jpeg','조선시대'),('2024-02-13',4,5,15,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/00e7d35c-c36b-4218-a229-f48f318d1600.png','화려했던 기억'),('2024-02-13',4,6,16,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/519711d6-099b-45f7-a75e-4529543085f3.jpeg','독립운동가'),('2024-02-13',4,7,10,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/1895f09a-059e-4d2d-9de7-1faa7de7d6a4.png','그날로부터 10년'),('2024-02-13',4,8,17,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/ac3129fe-dc31-40ed-b351-285053fb7f67.jpeg','고양이러버'),('2024-02-14',4,9,18,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/ba0414cd-febb-4a02-b282-f1b6a3c7f0dd.jpeg','명상인'),('2024-02-15',4,10,10,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/2d422919-989c-4e71-8d6b-3dec06c002ea.png','드가자'),('2024-02-15',4,11,7,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/c2358cb1-7ba5-4f43-8674-5da582eed852.png','어머니 글씨'),('2024-02-15',4,12,25,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/be115bf6-8054-4650-8345-632ad73908bf.png','삼성파이팅'),('2024-02-15',4,13,20,'https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/6fa4ba62-b83d-4fef-b8a3-3a848f00f164.png','첫눈');
/*!40000 ALTER TABLE `handwriting_application` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 16:43:55
