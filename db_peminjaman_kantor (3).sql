-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2024 at 05:51 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_peminjaman_kantor`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` char(36) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `email`, `password`, `created_at`, `updated_at`) VALUES
('2b09979b-d3d2-4f76-9ae1-4d4de19e1555', 'admin@gmail.com', '$2b$10$lOXFVjFundMT7d8fNI8cXOGth2dFUpzud3vosBtyQSReYJdorVnQ6', '2024-03-26 16:44:45', '2024-03-26 16:44:45');

-- --------------------------------------------------------

--
-- Table structure for table `detail_fasilitas_ruangan`
--

CREATE TABLE `detail_fasilitas_ruangan` (
  `id_detail_fasilitas` char(36) NOT NULL,
  `id_ruangan` char(36) NOT NULL,
  `nama_fasilitas` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detail_fasilitas_ruangan`
--

INSERT INTO `detail_fasilitas_ruangan` (`id_detail_fasilitas`, `id_ruangan`, `nama_fasilitas`, `created_at`, `updated_at`) VALUES
('56eb88b2-353a-481c-86e9-2e9f52f99dcc', 'e2413d1d-d138-435e-b1b4-9f7dd5ff9fcc', 'kursi', '2024-03-29 07:38:45', '2024-03-29 07:38:45'),
('69c73225-20c7-498b-81a7-5d688f76079e', 'e2413d1d-d138-435e-b1b4-9f7dd5ff9fcc', 'sendok', '2024-03-29 07:38:45', '2024-03-29 07:38:45'),
('7041a362-d1c9-4ddb-9383-5003f7a7e983', 'e2413d1d-d138-435e-b1b4-9f7dd5ff9fcc', 'ac', '2024-03-29 07:38:45', '2024-03-29 07:38:45'),
('9a78bf42-2373-4554-8a9c-86cee9134457', 'e2413d1d-d138-435e-b1b4-9f7dd5ff9fcc', 'meja', '2024-03-29 07:38:45', '2024-03-29 07:38:45'),
('ebbd1059-90e0-4967-9240-5005ceaf9bd4', 'e2413d1d-d138-435e-b1b4-9f7dd5ff9fcc', 'kipas angin', '2024-03-29 07:38:45', '2024-03-29 07:38:45');

-- --------------------------------------------------------

--
-- Table structure for table `detail_gambar_ruangan`
--

CREATE TABLE `detail_gambar_ruangan` (
  `id_detail_gambar` char(36) NOT NULL,
  `id_ruangan` char(36) NOT NULL,
  `file_gambar` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file_format_pengajuan`
--

CREATE TABLE `file_format_pengajuan` (
  `id_file` char(36) NOT NULL,
  `file_pengajuan` varchar(256) NOT NULL,
  `link_tutorial` longtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `peminjaman`
--

CREATE TABLE `peminjaman` (
  `id_peminjaman` char(36) NOT NULL,
  `id_ruangan` char(36) NOT NULL,
  `nama_peminjam` varchar(256) NOT NULL,
  `jabatan` varchar(150) NOT NULL,
  `nama_kegiatan` longtext NOT NULL,
  `kontak` varchar(30) NOT NULL,
  `tanggal_peminjaman` date NOT NULL,
  `jam_mulai_peminjaman` time NOT NULL,
  `jam_selesai_peminjaman` time NOT NULL,
  `file_peminjaman` varchar(256) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ruangan`
--

CREATE TABLE `ruangan` (
  `id_ruangan` char(36) NOT NULL,
  `nama_ruangan` varchar(100) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `gedung` varchar(100) NOT NULL,
  `kapasitas` int(3) NOT NULL,
  `penanggung_jawab` varchar(50) NOT NULL,
  `lantai` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ruangan`
--

INSERT INTO `ruangan` (`id_ruangan`, `nama_ruangan`, `deskripsi`, `gedung`, `kapasitas`, `penanggung_jawab`, `lantai`, `created_at`, `updated_at`) VALUES
('e2413d1d-d138-435e-b1b4-9f7dd5ff9fcc', 'dini', 'nadiniannisabyant26@gmail.com', 'Lainnya', 0, '51 s.d 60', 'S2 Keatas', '2024-03-29 07:38:45', '2024-03-29 07:38:45');

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `id_token` char(36) NOT NULL,
  `id_admin` char(36) NOT NULL,
  `token` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `expires_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`id_token`, `id_admin`, `token`, `created_at`, `expires_at`) VALUES
('d3ea1922-2be5-48f5-8c8b-5f4c1383b23a', '2b09979b-d3d2-4f76-9ae1-4d4de19e1555', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkX2FkbWluIjoiMmIwOTk3OWItZDNkMi00Zjc2LTlhZTEtNGQ0ZGUxOWUxNTU1IiwiaWF0IjoxNzExNTg3OTMxLCJleHAiOjE3MTIxOTI3MzF9.rnpdsScND2xf1QjqOSz110yttDX22Yr5wIcZo2ChJFQ', '2024-03-28 01:05:01', '2024-04-04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `detail_fasilitas_ruangan`
--
ALTER TABLE `detail_fasilitas_ruangan`
  ADD PRIMARY KEY (`id_detail_fasilitas`),
  ADD KEY `id_ruangan` (`id_ruangan`);

--
-- Indexes for table `detail_gambar_ruangan`
--
ALTER TABLE `detail_gambar_ruangan`
  ADD PRIMARY KEY (`id_detail_gambar`),
  ADD KEY `id_ruangan` (`id_ruangan`);

--
-- Indexes for table `file_format_pengajuan`
--
ALTER TABLE `file_format_pengajuan`
  ADD PRIMARY KEY (`id_file`);

--
-- Indexes for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`id_peminjaman`),
  ADD KEY `id_ruangan` (`id_ruangan`);

--
-- Indexes for table `ruangan`
--
ALTER TABLE `ruangan`
  ADD PRIMARY KEY (`id_ruangan`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id_token`),
  ADD KEY `id_admin` (`id_admin`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_fasilitas_ruangan`
--
ALTER TABLE `detail_fasilitas_ruangan`
  ADD CONSTRAINT `detail_fasilitas_ruangan_ibfk_1` FOREIGN KEY (`id_ruangan`) REFERENCES `ruangan` (`id_ruangan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detail_gambar_ruangan`
--
ALTER TABLE `detail_gambar_ruangan`
  ADD CONSTRAINT `detail_gambar_ruangan_ibfk_1` FOREIGN KEY (`id_ruangan`) REFERENCES `ruangan` (`id_ruangan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD CONSTRAINT `peminjaman_ibfk_1` FOREIGN KEY (`id_ruangan`) REFERENCES `ruangan` (`id_ruangan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `token_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `admin` (`id_admin`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
