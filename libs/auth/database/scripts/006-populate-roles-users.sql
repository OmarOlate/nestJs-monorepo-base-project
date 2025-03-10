INSERT INTO roles (`code`,`name`)
VALUES
    ('SUPERADMIN','Super admin');

INSERT INTO users (`code`,`rut`,`name`,`father_last_name`,`mather_last_name`, `email`,`password`,`status_id`)
VALUES
    ('c3849685-0649-44ea-97c4-ff05b9f7e7f0','19.272.596-8', 'Devom', 'Chile', 'System', 'devomchile@gmail.com', 'DevomChile_2025', (SELECT id from status_user where code LIKE 'ACTIVE'));