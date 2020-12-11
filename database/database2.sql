-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 11 déc. 2020 à 13:08
-- Version du serveur :  5.7.24
-- Version de PHP :  7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cookit`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`, `image`) VALUES
(1, 'Entrée', NULL),
(2, 'Plat', NULL),
(3, 'Dessert', NULL),
(4, 'Gateau', NULL),
(5, 'Petit dejeuner', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `ingredient`
--

DROP TABLE IF EXISTS `ingredient`;
CREATE TABLE IF NOT EXISTS `ingredient` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ingredient`
--

INSERT INTO `ingredient` (`id`, `title`) VALUES
(1, 'Pommes de Terres'),
(2, 'Fromage'),
(3, 'Oignon'),
(4, 'lardons'),
(5, 'huile'),
(6, 'ail'),
(7, 'sel'),
(8, 'poivre'),
(9, 'chocolat'),
(10, 'beurre'),
(11, 'oeuf'),
(12, 'farine'),
(13, 'sucre');

-- --------------------------------------------------------

--
-- Structure de la table `ingredient_recipe`
--

DROP TABLE IF EXISTS `ingredient_recipe`;
CREATE TABLE IF NOT EXISTS `ingredient_recipe` (
  `id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  `quantity` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ingredient_recipe`
--

INSERT INTO `ingredient_recipe` (`id`, `ingredient_id`, `recipe_id`, `quantity`) VALUES
(1, 1, 1, '1 kg'),
(2, 2, 1, '1 reblochon'),
(3, 3, 1, '200 g'),
(4, 4, 1, '200g'),
(5, 5, 1, '2 cuillères à soupe'),
(6, 6, 1, 'Une gousse'),
(7, 7, 1, ''),
(8, 8, 1, ''),
(9, 9, 2, '200g'),
(10, 10, 2, '100g'),
(11, 11, 2, '3'),
(12, 12, 2, '50g'),
(13, 13, 2, '100g');

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

DROP TABLE IF EXISTS `note`;
CREATE TABLE IF NOT EXISTS `note` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valeur` int(10) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `note`
--

INSERT INTO `note` (`id`, `valeur`, `user_id`) VALUES
(1, 5, 2),
(2, 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
CREATE TABLE IF NOT EXISTS `recipe` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int(11) NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `servings` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `recipe`
--

INSERT INTO `recipe` (`id`, `title`, `level`, `duration`, `category_id`, `servings`, `user_id`, `image`) VALUES
(1, 'Tartiflette', 4, '45 min', 2, 6, 3, NULL),
(2, 'Gateau au chocolat', 1, '40 min', 4, 6, 3, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `label`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Structure de la table `step`
--

DROP TABLE IF EXISTS `step`;
CREATE TABLE IF NOT EXISTS `step` (
  `id` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` int(11) NOT NULL,
  `recipe_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `step`
--

INSERT INTO `step` (`id`, `description`, `position`, `recipe_id`) VALUES
(1, 'Eplucher les pommes de terre, les couper en dés', 1, 1),
(4, 'Faire chauffer lhuile dans une poele et y fondre les oignons', 2, 1),
(5, 'Lorsque les oignons sont fondus, ajouter les pommes de terre et les faire dorer de tous les côtés.', 3, 1),
(6, 'Lorsquelles sont dorées, ajouter les lardons et finir de cuire.\r\n', 4, 1),
(7, 'Dautre part, gratter la croûte du reblochon et le couper en deux (ou en quatre).\r\n', 5, 1),
(8, 'Préchauffer le four à 200°C (thermostat 6-7) et préparer un plat à gratin en frottant le fond et les bords avec la gousse dail épluchée.\r\n', 6, 1),
(9, 'Dans le plat à gratin, étaler une couche de pommes de terre aux lardons, disposer dessus la moitié du reblochon, puis de nouveau des pommes de terre. Terminer avec le reste du reblochon (croûte vers les pommes de terre).\r\n', 7, 1),
(10, 'Enfourner pour environ 20 minutes de cuisson.\r\n', 8, 1),
(11, 'Préchauffez votre four à 180°C (thermostat 6).\r\nDans une casserole, faites fondre le chocolat et le beurre coupé en morceaux à feu très doux.', 1, 2),
(12, 'Dans un saladier, ajoutez le sucre, les oeufs, la farine. Mélangez.\r\n', 2, 2),
(13, 'Ajoutez le mélange chocolat/beurre. Mélangez bien.\r\n', 3, 2),
(14, 'Beurrez et farinez votre moule puis y versez la pâte à gâteau.\r\n', 4, 2),
(15, 'Faites cuire au four environ 20 minutes.\r\n', 5, 2),
(16, 'A la sortie du four le gâteau ne paraît pas assez cuit. Cest normal, laissez-le refroidir puis démoulez- le.\r\n', 6, 2);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `lastname`, `firstname`, `email`, `password`, `role_id`, `image`) VALUES
(2, NULL, 'admin', 'admin@cookit.com', '$2a$10$W9oWyp0NPIB22iL.kBIxcOmggycoy6sR7B2kPT2zfzVmyYdS4jNiq', 1, NULL),
(3, 'FOUQUET', 'Bastien', 'bastien@cookit.com', '$2a$10$Jb8KYlFwpcVVMKKgJ5FMWOkAb6OLUZMUQVE780ElKRmbI5EeB.vRy', 2, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
