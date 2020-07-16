-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 
-- 伺服器版本： 5.7.26
-- PHP 版本： 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `island`
--

-- --------------------------------------------------------

--
-- 資料表結構 `flow`
--

DROP TABLE IF EXISTS `flow`;
CREATE TABLE IF NOT EXISTS `flow` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `index` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `art_id` int(11) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- 資料表結構 `movie`
--

DROP TABLE IF EXISTS `movie`;
CREATE TABLE IF NOT EXISTS `movie` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(64) DEFAULT NULL,
  `content` varchar(300) DEFAULT NULL,
  `pubdate` date DEFAULT NULL,
  `fav_nums` smallint(6) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- 資料表結構 `music`
--

DROP TABLE IF EXISTS `music`;
CREATE TABLE IF NOT EXISTS `music` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(64) DEFAULT NULL,
  `content` varchar(300) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `pubdate` date DEFAULT NULL,
  `fav_nums` smallint(6) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- 資料表結構 `sentence`
--

DROP TABLE IF EXISTS `sentence`;
CREATE TABLE IF NOT EXISTS `sentence` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(64) DEFAULT NULL,
  `content` varchar(300) DEFAULT NULL,
  `pubdate` date DEFAULT NULL,
  `fav_nums` smallint(6) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
