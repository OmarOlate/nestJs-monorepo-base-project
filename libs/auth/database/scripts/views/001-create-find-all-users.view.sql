DROP VIEW IF EXISTS find_all_users;

CREATE VIEW find_all_users AS
SELECT
    u.id,
    u.code,
    u.rut,
    CONCAT(u.name, ' ', u.father_last_name, ' ', u.mather_last_name) AS full_name,
    u.email,
    com.id as id_commerce,
    com.name AS name_commerce,
    cb.id as id_commerce_branch,
    cb.name AS name_commerce_branch,
    su.code AS status_code
FROM users AS u
LEFT JOIN users_ecommerces AS uc ON uc.user_id = u.id
LEFT JOIN commerces AS com ON com.id = uc.commerce_id
LEFT JOIN commerce_branch AS cb ON cb.id = uc.commerce_branch_id
LEFT JOIN status_user AS su ON su.id = u.status_id;
