CREATE DATABASE  IF NOT EXISTS `prototype` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `prototype`;
-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: prototype
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `docente`
--

DROP TABLE IF EXISTS `docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docente` (
  `d_nombre` varchar(100) DEFAULT NULL,
  `d_correo` varchar(50) DEFAULT NULL,
  `d_user` varchar(30) NOT NULL,
  `d_area` varchar(30) DEFAULT NULL,
  `d_universidad` varchar(50) DEFAULT NULL,
  `d_campus` varchar(50) DEFAULT NULL,
  `d_asignatura` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`d_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente`
--

LOCK TABLES `docente` WRITE;
/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
INSERT INTO `docente` VALUES ('Guillermo Cazar Luna','gcazarl1686@docente.ipn.mx','cazar72','Informática','IPN',NULL,'Ingeniería de Pruebas');
/*!40000 ALTER TABLE `docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiantes` (
  `e_nombre` varchar(100) DEFAULT NULL,
  `e_correo` varchar(50) DEFAULT NULL,
  `e_user` varchar(30) NOT NULL,
  `e_semestre` int DEFAULT NULL,
  `e_escuela` varchar(50) DEFAULT NULL,
  `e_carrera` varchar(30) DEFAULT NULL,
  `e_boleta` int DEFAULT NULL,
  PRIMARY KEY (`e_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiantes`
--

LOCK TABLES `estudiantes` WRITE;
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
INSERT INTO `estudiantes` VALUES ('Adriel Rodríguez Brenes','adriel_1020@hotmail.com','kr98b',6,'UPIICSA','Ing. Informática',2021602364);
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peticion_conexion`
--

DROP TABLE IF EXISTS `peticion_conexion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peticion_conexion` (
  `ID_Peticion` int NOT NULL,
  `ID_Empresa` int DEFAULT NULL,
  `Usuario_Reservado` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`ID_Peticion`),
  KEY `Usuario_Reservado` (`Usuario_Reservado`),
  CONSTRAINT `peticion_conexion_ibfk_1` FOREIGN KEY (`Usuario_Reservado`) REFERENCES `usuario` (`Usuario_Reservado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peticion_conexion`
--

LOCK TABLES `peticion_conexion` WRITE;
/*!40000 ALTER TABLE `peticion_conexion` DISABLE KEYS */;
/*!40000 ALTER TABLE `peticion_conexion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `Nombre` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Correo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Usuario_Reservado` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Universidad` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Contrasenia` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Usuario_Reservado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('1','1@1.1','1','1','$2y$10$St0TvB.yjJpg7nhjrlmnrevEvPHOG.CCMktm113tUgkvw5F6slp4y'),('Juancho','Juancho@example.com','Juancho123','Juancho123','123');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-15  7:00:42
