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
-- Table structure for table `handwriting_story`
--

DROP TABLE IF EXISTS `handwriting_story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handwriting_story` (
  `hit_count` int NOT NULL,
  `like_count` int NOT NULL,
  `weight` int NOT NULL,
  `create_date` datetime(6) DEFAULT NULL,
  `handwriting_id` bigint NOT NULL,
  `member_id` bigint DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`handwriting_id`),
  KEY `FK4mjqpj787t5y9fyjxjqsxxakf` (`member_id`),
  CONSTRAINT `FK4mjqpj787t5y9fyjxjqsxxakf` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKr7v01yqk8h8jotfgc34m9y9it` FOREIGN KEY (`handwriting_id`) REFERENCES `handwriting` (`handwriting_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handwriting_story`
--

LOCK TABLES `handwriting_story` WRITE;
/*!40000 ALTER TABLE `handwriting_story` DISABLE KEYS */;
INSERT INTO `handwriting_story` VALUES (2,3,11,'2024-02-15 15:51:00.000000',1,7,'어린 시절, 나는 종이 위에 내 마음을 담아 글씨를 써냈습니다. 그때의 나는 무척이나 특별했죠. 깔끔한 글씨로 나만의 이야기를 담아냈던 그 때가 말이죠.\n\n어릴 적의 향수가 가득한 그 글씨체를 보면, 나는 항상 회상에 잠기게 됩니다. 그 글씨체를 보며, 어릴 적의 나와 함께한 소중한 순간들을 되새겨보곤 합니다. 어릴 적의 글씨체는 마치 나의 소중한 기억들을 담고 있는 보물 상자 같습니다. 그 속에는 나만의 비밀스러운 이야기들이 가득합니다.','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/0b0c9416-cb97-4830-bf27-25c3a8fa4d81.jpg','어릴적 기억을 회상하며'),(1,1,4,NULL,2,9,'어릴적 할아버지가 계속 생각이나 이렇게 제작해보았습니다.','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/5d0c1b09-d88c-4b61-bbe9-2f785699dec1.jpg','할아버지의 추석이 담긴 글씨체'),(1,1,4,NULL,3,13,'어른스럽게 과감하고 편하게 한 번 써봤는데 어떤가요','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/a2063e8c-1d30-48bf-9855-8a8ed16d1c31.jpg','편하게 연습용으로 써본 글씨'),(1,2,7,'2024-02-15 16:07:00.000000',4,15,'지난날의 일기를 읽으면서 과거의 순간들이 새록새록 떠오릅니다. \n어린 시절의 순수한 감정과 무거운 책임의 부담, 그리고 지금은 그리움으로 남은 소중한 사람들이 떠올라요. \n지난 날의 나는 어떤 고난과 즐거움을 겪었는지를 생각하며 성장한 내 자신에게 감사함을 느낍니다.\n앞으로도 계속해서 이 감정을 느끼고 싶습니다.','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/eaf0a906-27a9-4d6e-a294-281946e35ee4.jpg','일기를 보며 든 생각'),(1,3,10,'2024-02-15 16:05:00.000000',5,16,'저희 조상님은 독립운동가였다고 합니다. 멋지지 않나요?','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/bbd24c46-1b34-43f9-bba3-8634c7b808aa.jpg','광복절 기념해서 한 번 만들어 봤습니다.'),(2,2,8,'2024-02-15 16:12:00.000000',6,10,'\n10년 후, 과거의 나와는 거의 알아볼 수 없을 정도로 변화했습니다. \n그 시절의 나는 자신감과 성취감으로 가득찬 새로운 인간이 되었습니다.\n 과거의 두려움과 불안은 멀리 사라지고, 대신 자신의 열정과 용기를 따라 꿈을 향해 나아가고 있습니다. \n이제는 자신을 믿고, 새로운 도전에 적극적으로 도전하는 나를 발견했습니다.','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/6e7bf679-c999-4152-aa22-e496006f8d4b.jpg','성장하지 않으면 죽음 뿐'),(2,1,5,'2024-02-15 16:10:00.000000',7,17,'고양이만 보면 기분이 너무 좋아져서 그 상황을 떠올리면 한 번 만들어봤습니다!!!','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/d09b071a-0be4-47f7-ab6a-c08580ebc5a5.jpeg','고양이는 정말 귀엽지 않나요?'),(2,4,14,'2024-02-15 16:14:00.000000',8,18,'명상하는 건 참 좋습니다. 주커버그도 아마 명상을 좋아한다고 했었는데 여러분은 왜 안하나요?','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/f58a7e35-48c4-48d9-b0cb-99ded6ba1fe4.jpeg','명상은 참 좋습니다~'),(0,1,3,'2024-02-15 16:20:00.000000',9,10,'그동안의 단조로운 일상에서 벗어나 도전적이고 리스키한 삶을 살고싶어서 이번에 가장 패기넘치던 시절의 글씨를 폰트로 만들어 봤습니다\n이 글씨체는 에너지와 열정을 담고 있으며,앞으로의 여정에서 용기를 주는 메시지를 전달합니다.\n함께 더 멀리, 더 높이 나아가는 여정을 시작하려구요. \n여러분들도 같이 하시죠','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/f9a6cc2b-af59-478f-9c4d-dc42378c9538.jpg','가즈아아'),(1,0,1,'2024-02-15 16:38:00.000000',10,7,'어머니의 글씨체는 마치 따뜻한 품안에서 듣는 이야기처럼 편안하고 안정감을 주는데, 그런 글씨체를 보며 어머니가 전해주는 이야기는 언제나 마음을 따뜻하게 만듭니다. \n어머니의 글씨로 쓴 이야기는 사랑과 관용, 그리고 인내의 이야기로 가득 차 있습니다. \n그 속에서 어머니의 사랑과 지혜를 다시 한번 느껴보세요.','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/9eb3142a-03b2-44a4-91b8-d76dfdf1e2f5.jpg','어머니의 펜으로'),(0,0,0,'2024-02-15 16:37:00.000000',11,25,'차도 주고 밥도 주고 돈도 주고 싸피 왜안해요?','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/20bd1961-49a6-4007-bd3c-31e3e605e352.jpg','싸피는 참 좋은 곳이에요'),(0,1,3,NULL,12,20,'첫 눈이 오면 참 좋으면서도 슬픈 거 같아요.\n여러분들은 어떤 감정을 느끼시나요?','https://sonmando.s3.ap-northeast-2.amazonaws.com/2024/02/15/11bfa9c0-4058-454d-b5bc-eb2b6c04bdbc.jpg','첫 눈 오는 날 감성에 젖었습니다.');
/*!40000 ALTER TABLE `handwriting_story` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 16:43:54
