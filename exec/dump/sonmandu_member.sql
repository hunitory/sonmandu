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
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `is_badge` bit(1) NOT NULL,
  `create_time` datetime(6) DEFAULT NULL,
  `member_id` bigint NOT NULL AUTO_INCREMENT,
  `refresh_token` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `introduction` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nickname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `UK_jp8ds32yg1soswx2rkiagm768` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (_binary '\0','2024-02-15 15:15:19.662629',1,NULL,'ssafy0004@gmail.com','ssafy0004',NULL,NULL,'김사랑','김사랑','$2a$10$E7HzaT/jl1S2Ez4BnzhHsegR97zEbfzqUHbKPS8K3pjj75DXkJu2y'),(_binary '\0','2024-02-15 15:19:14.326680',2,NULL,'ssafy0005@gmail.com','ssafy0005',NULL,NULL,'김사랑','김사랑','$2a$10$QimhycgF.wPPzXYO3Ywenes3Nj7Rhs./KNzSz7MlYkjcAL.rXzIs6'),(_binary '\0','2024-02-15 15:22:20.039930',5,'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiIiwibWVtYmVySWQiOjUsIm5pY2tOYW1lIjoi6rmA7IKs656RIiwiaW1hZ2VVcmwiOiJudWxsIiwiZXhwIjoxNzA4NTgzODk3fQ.-yEwyTee2lspskRuBruK_h2jQUUkus4n3voT59lOz12zgXNaZepgD0rXbNrRhIzftNw7efzq852dlw_FIzB9_Q','ssafy0005@gmail.com','ssafy0006',NULL,NULL,'김사랑','김사랑','$2a$10$6VtD8xprMe/Cgb6p4g9vaen8QZw.Afvtxo1/uRrCvIBOFRqy.F9W6'),(_binary '\0','2024-02-15 15:31:16.056378',7,'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9VU0VSIiwibWVtYmVySWQiOjcsIm5pY2tOYW1lIjoi7J207Iu47ZS8IiwiaW1hZ2VVcmwiOiJodHRwczovL3Nvbm1hbmRvLnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vMjAyNC8wMi8xNS9lZjU0NzU1Ni04YmMxLTRjMzMtYTRjZS1jMjYxNThkZjQzYzMuanBnIiwiZXhwIjoxNzA4NTg2NTk1fQ.Pm4xpxWBda8OxdEJhs2pSaFp0SGnq4u4iYeNC_6l6KDcswghqTy39yHqsD81iFMf8f6FDdTvHEoeDUN5rezRPQ','sdaf@gmail.com','ssafy1235','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/ef547556-8bc1-4c33-a4ce-c26158df43c3.jpg','안녕하세요 손글씨의 매력에 끌려서 왔습니다','이진성','이싸피','$2a$10$m/GN4mu7itKTOuD6HacoXuKG.tq.kRA9bNH3p.dgiaNOzHD1Gu3Sy'),(_binary '\0','2024-02-15 15:41:20.544366',8,'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9VU0VSIiwibWVtYmVySWQiOjgsIm5pY2tOYW1lIjoi6rmA7IKs656RIiwiaW1hZ2VVcmwiOiJudWxsIiwiZXhwIjoxNzA4NTg0MDg0fQ.z1TNR_N7QRTy00CByo5mAVdqWGhI0bFNJclXMtTbL9gbAfdZMQOc9zgKNWRQevtDGLssi3kYRV_dRyzJFQSrfQ','ssafy0005@gmail.com','ssafy0007',NULL,NULL,'김사랑','김사랑','$2a$10$NkAARdJ521NClPx.BeKcUekOOnKw5XhNMXVxuLDkUeMk3/xZL3moe'),(_binary '\0','2024-02-15 15:55:07.087146',9,'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9VU0VSIiwibWVtYmVySWQiOjksIm5pY2tOYW1lIjoi6rmA6rmA642V67Cw7IKs656RIiwiaW1hZ2VVcmwiOiJodHRwczovL3Nvbm1hbmRvLnMzLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vMjAyNC8wMi8xNS8xZDc3MjEyMC04ZDhlLTRmMGYtODJlOS0xMTc2YmM4ZjJlMmUuanBlZyIsImV4cCI6MTcwODU4Njk5Mn0.849PGFc-yCTwRmPMM1GUd8x1W9o5PYtFkgy8j6WBmZXKPwqmNpoV8hu0Ps584N561ELkSUN1eA_y2BN2vmqfOg','ssafy0010@gmail.com','ssafy0010','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/1d772120-8d8e-4f0f-82e9-1176bc8f2e2e.jpeg','반갑습니다 잘 부탁드려요\n','김덕배','김김덕배사랑','$2a$10$3z1pxmhVRY6jYQ0zip9V0.Kj3IkwVur/b3FZftVeWGoveDtAVahxe'),(_binary '\0','2024-02-15 15:55:08.727739',10,NULL,'user@nextmail.com','ssafy1234',NULL,NULL,'아오우','김싸피','$2a$10$0zE5zshVeMVa6tdVUF8XBu//RtV3ezkDG6Pk9Otu8ZdtuyxdXKN.a'),(_binary '\0','2024-02-15 15:55:34.350525',11,NULL,'user@nextmail.com','ssafy1233',NULL,NULL,'우와아','구싸피','$2a$10$NVzsTgatdcgHn0ckjXMBtO7jbd6U7PWZ.TyCgT0SVnMlEgegyPb1e'),(_binary '\0','2024-02-15 15:55:56.417138',12,NULL,'user@nextmail.com','ssafy1232',NULL,NULL,'진진진','신싸피','$2a$10$OocxsriSz5S0ensDeVpYq.SP7AMCNwT7wqS0WUiekFdsQMv1o3t02'),(_binary '\0','2024-02-15 15:58:09.319703',13,NULL,'ssafy0011@gmail.com','ssafy0011','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/93e1f451-81a6-4706-b8b4-f6bbfaccdc83.jpeg','제 글씨체 어떤가요 ','최고다이순신','최고다이순신','$2a$10$fafcD4QmYzqBm0HGlYokheaQI.JzkgUCoC/43ORnDpuG/JU4yqYPm'),(_binary '\0','2024-02-15 15:58:26.541283',14,NULL,'user@nextmail.com','ssafy1231',NULL,NULL,'요요요','오늘은 어떤 글씨를','$2a$10$7/sDzkBDtfLVOANQSwpBBuLdGom3CUNTZOzrViZ5pDOYnv2p49hla'),(_binary '\0','2024-02-15 16:01:18.244475',15,NULL,'sdlkfj@gmail.com','ssafy1236',NULL,NULL,'아우유','ColorfulDays','$2a$10$4MfhyztEBBE.8H4t5SYvwe1gBfDqT71FPRMx.oG48SkCPoyR43vUq'),(_binary '\0','2024-02-15 16:02:00.539653',16,NULL,'ssafy0012@gmail.com','ssafy0012','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/51b79c47-a13a-4203-99f0-58fa4b6e641a.jpg','애국심이 넘치는 사람입니다.','아브라카다브라','아브라카다브라','$2a$10$08FszFrg/gqasX4qMAS.S.O6UPuq1ERsfH/SIgJLyRvWyYKb6vs0m'),(_binary '\0','2024-02-15 16:07:38.999085',17,NULL,'ssafy0013@gmail.com','ssafy0013','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/f5844868-d5c4-470e-82fc-4f3ab27d3fa7.jpeg','동물들을 좋아해요','아브라카다브라','고양이러버','$2a$10$fxNt4BMUfXwo4iypqqwkVuSkVgte8cdIsD/A26fuwL/PHmJPXiH2.'),(_binary '\0','2024-02-15 16:11:00.798514',18,NULL,'ssafy0014@gmail.com','ssafy0014','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/a3301678-bfd0-46ca-9770-ce4929ae0a45.jpeg','힘이 들 떄는 명상을 해보세욥!','아브라카다브라','명상좋아','$2a$10$YtnGAWcB35k.wrgk1ZVueu/BQrgY9ETl1bcLC5M01qJFTXggjNbZ.'),(_binary '\0','2024-02-15 16:15:13.540006',19,'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9VU0VSIiwibWVtYmVySWQiOjE5LCJuaWNrTmFtZSI6Iuq5gOyEseygnOyoqSIsImltYWdlVXJsIjoibnVsbCIsImV4cCI6MTcwODU4NzI3N30.2iPzcUHriYm8oOsQmLbz0hrMdeAORYZrKoWVitpa-KUTel5IM6CUZt07Bb924atl7CbMBLiJGQDu3hsJlNDS8A','rlatjdwp0211@naver.com','rlatjdwp0211',NULL,NULL,'김성제','김성제쨩','$2a$10$/XmJxHLBOUCYSVe9lPYhXO6f7n1AAn1tW8fMyyROHdunAzUGYACgm'),(_binary '\0','2024-02-15 16:25:12.529742',20,'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiUk9MRV9VU0VSIiwibWVtYmVySWQiOjIwLCJuaWNrTmFtZSI6Iuyeieq4gOuenOuTnOuCqOyekCIsImltYWdlVXJsIjoibnVsbCIsImV4cCI6MTcwODU4NzUxMn0.vx62CosvQ9YnAUsG2s-YuFBJh3iwKwaKmHqJPg6dPrM5hLFaHxP5l0p75gJCssnjIxRxbTh701ix0OByCq7B7g','ssafy0020@gmail.com','ssafy0020',NULL,NULL,'잉글랜드남자','잉글랜드남자','$2a$10$bnJwK0KbFMIQ.mzCvqiLYejdv/D9KlVLBCBaGA.Vmdy3i5A5SDBWy'),(_binary '\0','2024-02-15 16:25:33.123970',21,NULL,'ssafy0021@gmail.com','ssafy0021',NULL,NULL,'애등이','애등이','$2a$10$gdfmqyqiasBBgYSzj3u4fO5szqgMSym9x4AbPnZkU8GMWvTGVW/i.'),(_binary '\0','2024-02-15 16:25:46.673213',22,NULL,'ssafy0022@gmail.com','ssafy0022',NULL,NULL,'초록오이','초록오이','$2a$10$oeNizQ5AeyUsqN65BNBcreEr4aoeJwSfPcDuhodyoXy2GN7kcm5PW'),(_binary '\0','2024-02-15 16:25:56.760956',23,NULL,'ssafy0023@gmail.com','ssafy0023',NULL,NULL,'누룽이','누룽이','$2a$10$hAKoWEyjUkUreURvG/AydeJsCkRciRHpzQ3yAXNcniyho2W2/QOwu'),(_binary '\0','2024-02-15 16:26:08.984273',24,NULL,'ssafy0024@gmail.com','ssafy0024',NULL,NULL,'덱스','덱스','$2a$10$ItzTbzlZw7hku.i.dA.FzuLl2orZjvLC2iqVNjH7rx9.JH32GXu2W'),(_binary '\0','2024-02-15 16:29:19.726330',25,NULL,'ssafy1230@gmail.com','ssafy1230','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/02405227-2b5d-49f2-a318-9a9da617033a.png','싸피 테스트 계정입니다','김싸피','김싸피','$2a$10$TAuUtHVyu5EpPSfQZ8F1KOb7yFOyNJdzO6CPXYTkpepwnp/5gakvK');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 16:43:52
