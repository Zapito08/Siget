-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-01-2026 a las 17:14:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Siget`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infopersonal`
--

CREATE TABLE `infopersonal` (
  `id` int(11) NOT NULL,
  `tipo_dto` varchar(11) DEFAULT NULL,
  `documento` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `genero` tinyint(1) DEFAULT NULL,
  `correo_personal` varchar(100) DEFAULT NULL,
  `correo_oficina` varchar(100) DEFAULT NULL,
  `documentacion` tinyint(1) DEFAULT NULL,
  `telefono_residencial` int(11) DEFAULT NULL,
  `telefono_celular` int(11) DEFAULT NULL,
  `telefono_oficina` int(11) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `zona` varchar(100) DEFAULT NULL,
  `municipio` varchar(100) DEFAULT NULL,
  `departamento` varchar(100) DEFAULT NULL,
  `pais` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `infopersonal`
--
ALTER TABLE `infopersonal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `infopersonal`
--
ALTER TABLE `infopersonal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
