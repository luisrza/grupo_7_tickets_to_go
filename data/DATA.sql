-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: tickets_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE 'tickets_db'

--
-- Table structure for table `tablaeventos`
--

DROP TABLE IF EXISTS `tablaeventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tablaeventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` text NOT NULL,
  `country` text NOT NULL,
  `description` text NOT NULL,
  `prize` int(11) NOT NULL,
  `currency` text NOT NULL,
  `agotado` int(11) NOT NULL,
  `image` text NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablaeventos`
--

LOCK TABLES `tablaeventos` WRITE;
/*!40000 ALTER TABLE `tablaeventos` DISABLE KEYS */;
INSERT INTO `tablaeventos` VALUES (3,'Buenos Aires','Argentina','Después de graduarse de Oxford en 1943 con títulos en inglés y literatura inglesa, Larkin comenzó a trabajar como bibliotecario. Durante los treinta años en los que se desempeñó como bibliotecario universitario en la Biblioteca Brynmor Jones de la Universidad de Hull produjo la mayor parte de su obra publicada. Sus poemas están marcados por lo que el poeta inglés Andrew Motion describe como una «exactitud melancólica y muy inglesa para tratar las emociones, los lugares y las relaciones». Eric Homberger mencionó que Larkin era «el corazón más triste en el mercado de posguerra», y el mismo Larkin dijo que la pobreza era para él lo que los narcisos eran para Wordsworth.',222,'$',0,'image-1662433541534.jpg','0222-02-22'),(5,'Monterrey','Mexico','Después de graduarse de Oxford en 1943 con títulos en inglés y literatura inglesa, Larkin comenzó a trabajar como bibliotecario. Durante los treinta años en los que se desempeñó como bibliotecario universitario en la Biblioteca Brynmor Jones de la Universidad de Hull produjo la mayor parte de su obra publicada. Sus poemas están marcados por lo que el poeta inglés Andrew Motion describe como una «exactitud melancólica y muy inglesa para tratar las emociones, los lugares y las relaciones». Eric Homberger mencionó que Larkin era «el corazón más triste en el mercado de posguerra», y el mismo Larkin dijo que la pobreza era para él lo que los narcisos eran para Wordsworth.',4444,'USD',1,'image-1662433563655.jpg','0222-02-22'),(9,'Santiago','Chile','Después de graduarse de Oxford en 1943 con títulos en inglés y literatura inglesa, Larkin comenzó a trabajar como bibliotecario. Durante los treinta años en los que se desempeñó como bibliotecario universitario en la Biblioteca Brynmor Jones de la Universidad de Hull produjo la mayor parte de su obra publicada. Sus poemas están marcados por lo que el poeta inglés Andrew Motion describe como una «exactitud melancólica y muy inglesa para tratar las emociones, los lugares y las relaciones». Eric Homberger mencionó que Larkin era «el corazón más triste en el mercado de posguerra», y el mismo Larkin dijo que la pobreza era para él lo que los narcisos eran para Wordsworth. Influenciado por W. H. Auden, W. B. Yeats y Thomas Hardy, sus poemas están formados por versos muy estructurados pero flexibles. Jean Hartley.',2344,'$',0,'image-1662433894549.jpg','2022-02-21'),(10,'Bogota','Colombia','Después de graduarse de Oxford en 1943 con títulos en inglés y literatura inglesa, Larkin comenzó a trabajar como bibliotecario. Durante los treinta años en los que se desempeñó como bibliotecario universitario en la Biblioteca Brynmor Jones de la Universidad de Hull produjo la mayor parte de su obra publicada. Sus poemas están marcados por lo que el poeta inglés Andrew Motion describe como una «exactitud melancólica y muy inglesa para tratar las emociones, los lugares y las relaciones». Eric Homberger mencionó que Larkin era «el corazón más triste en el mercado de posguerra», y el mismo Larkin dijo que la pobreza era para él lo que los narcisos eran para Wordsworth. Influenciado por W. H. Auden, W. B. Yeats y Thomas Hardy, sus poemas están formados por versos muy estructurados pero flexibles. Jean Hartley.',234234,'$',0,'image-1662665106904.jpg','0333-03-31');
/*!40000 ALTER TABLE `tablaeventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablausuarios`
--

DROP TABLE IF EXISTS `tablausuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tablausuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `user` text NOT NULL,
  `nacimiento` date NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `avatar` text NOT NULL,
  `admin` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablausuarios`
--

LOCK TABLES `tablausuarios` WRITE;
/*!40000 ALTER TABLE `tablausuarios` DISABLE KEYS */;
INSERT INTO `tablausuarios` VALUES (1,'roro','roro','0033-03-31','$2a$10$c3bBx4bD19isY1YvQTm0r.7HbcpFl5vFSM7yznQdtR/R8scGhMH.2','rosariohuertaf@gmail.com','avatar-1662665243629.jpg',0),(2,'Diego Franco','diegollllllllllll','1982-07-25','$2a$10$OZOuJAzkVjPlyJZk3tOe9.kO3sPqVaM81HVic4.CYxRjsPp2TCdQ6','diego@gmail.com','avatar-1662665702076.jpg',0),(3,'wer','wer','0011-11-11','$2a$10$9cIvy2IjOAPcFfyBsNdNXehMO9cL/G6skhVbaG/lqqJeYOe4Q6Ib6','wer@gmail.com','default.png',0),(5,'Lionel Messi','messsigoll','1988-11-11','$2a$10$TWKEJxQMNq0qoBGIdP1rPuCfSn0OPUQxyM58jAler2cz.C9oO6Ra6','messi@gmail.com','avatar-1662753400294.jpg',0),(6,'Jennnnn','jujuj','0002-02-22','$2a$10$bOjzuNIhazILQ3UKUUufm.AR.pn9CftYTecAb6CwxSG3NU1crIHLi','jennifer@gmail.com','avatar-1662757633873.jpg',0);
/*!40000 ALTER TABLE `tablausuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tickets_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-09 19:50:05
