CREATE TABLE `modules` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime NOT NULL DEFAULT (now()),
  `deleted_at` datetime
);

CREATE TABLE `permissions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `module_id` int NOT NULL,
  `code` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime NOT NULL DEFAULT (now()),
  `deleted_at` datetime
);

CREATE TABLE `roles` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (now()),
  `updated_at` datetime NOT NULL DEFAULT (now()),
  `deleted_at` datetime
);

CREATE TABLE `roles_permissions` (
  `role_id` int,
  `permission_id` int
);

CREATE TABLE `regions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ordinal` varchar(10) NOT NULL,
  `region_number` int NOT NULL,
  `region_iso` varchar(10) NOT NULL,
  `order` int UNIQUE NOT NULL
);

CREATE TABLE `provinces` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `region_id` int
);

CREATE TABLE `communes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `code` int NOT NULL,
  `province_id` int
);

CREATE TABLE `contacts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `phone` varchar(15),
  `cellphone` varchar(15),
  `address` varchar(50),
  `city` varchar(100),
  `commune_id` int
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(50),
  `rut` varchar(12),
  `name` varchar(100) NOT NULL,
  `father_last_name` varchar(100) NOT NULL,
  `mather_last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact_id` int
);

CREATE TABLE `users_roles` (
  `user_id` int,
  `role_id` int
);

ALTER TABLE `permissions` ADD FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`);

ALTER TABLE `roles_permissions` ADD FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

ALTER TABLE `roles_permissions` ADD FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`);

ALTER TABLE `provinces` ADD FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`);

ALTER TABLE `communes` ADD FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`);

ALTER TABLE `contacts` ADD FOREIGN KEY (`commune_id`) REFERENCES `communes` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`);

ALTER TABLE `users_roles` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `users_roles` ADD FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
