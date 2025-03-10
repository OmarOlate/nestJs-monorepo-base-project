INSERT INTO status_user (`code`, `description`)
VALUES
    ('PENDING-PASSWORD','Usuario pendiente de seteo de contraseña'),
    ('ACTIVE','Usuario activo'),
    ('DEACTIVATED','Usuario desactivado'),
    ('SUSPENDED','Usuario suspendido');


INSERT INTO commerce_status (`code`, `description`)
VALUES
    ('ENABLED','Comercio activo'),
    ('DISABLED','Comercio inactivo'),
    ('DEACTIVATED','Comercio desactivado'),
    ('SUSPENDED','Comercio suspendido');