INSERT INTO communes (`name`, `code`, `province_id`)
VALUES 
    ('Arica',15101,(SELECT id FROM test.province WHERE province_name LIKE 'Arica')),
    ('CacCmarones',15102,(SELECT id FROM test.province WHERE province_name LIKE 'Arica')),
    ('Putre',15201,(SELECT id FROM test.province WHERE province_name LIKE 'Parinacota')),
    ('General Lagos',15202,(SELECT id FROM test.province WHERE province_name LIKE 'Parinacota')),
    ('Iquique',01101,(SELECT id FROM test.province WHERE province_name LIKE 'Iquique')),
    ('Alto Hospicio',01107,(SELECT id FROM test.province WHERE province_name LIKE 'Iquique')),
    ('Pozo Almonte',01401,(SELECT id FROM test.province WHERE province_name LIKE 'Tamarugal')),
    ('Camiña',01402,(SELECT id FROM test.province WHERE province_name LIKE 'Tamarugal')),
    ('Colchane',01403,(SELECT id FROM test.province WHERE province_name LIKE 'Tamarugal')),
    ('Huara',01404,(SELECT id FROM test.province WHERE province_name LIKE 'Tamarugal')),
    ('Pica',01405,(SELECT id FROM test.province WHERE province_name LIKE 'Tamarugal')),
    ('Antofagasta',02101,(SELECT id FROM test.province WHERE province_name LIKE 'Antofagasta')),
    ('Mejillones',02102,(SELECT id FROM test.province WHERE province_name LIKE 'Antofagasta')),
    ('Sierra Gorda',02103,(SELECT id FROM test.province WHERE province_name LIKE 'Antofagasta')),
    ('Taltal',02104,(SELECT id FROM test.province WHERE province_name LIKE 'Antofagasta')),
    ('Calama',02201,(SELECT id FROM test.province WHERE province_name LIKE 'El Loa')),
    ('Ollagüe',02202,(SELECT id FROM test.province WHERE province_name LIKE 'El Loa')),
    ('San Pedro de Atacama',02203,(SELECT id FROM test.province WHERE province_name LIKE 'El Loa')),
    ('Tocopilla',02301,(SELECT id FROM test.province WHERE province_name LIKE 'Tocopilla')),
    ('María Elena',02302,(SELECT id FROM test.province WHERE province_name LIKE 'Tocopilla')),
    ('Copiapó',03101,(SELECT id FROM test.province WHERE province_name LIKE 'Copiapó')),
    ('Caldera',03102,(SELECT id FROM test.province WHERE province_name LIKE 'Copiapó')),
    ('Tierra Amarilla',03103,(SELECT id FROM test.province WHERE province_name LIKE 'Copiapó')),
    ('Chañaral',03201,(SELECT id FROM test.province WHERE province_name LIKE 'Chañaral')),
    ('Diego de Almagro',03202,(SELECT id FROM test.province WHERE province_name LIKE 'Chañaral')),
    ('Vallenar',03301,(SELECT id FROM test.province WHERE province_name LIKE 'Huasco')),
    ('Alto del Carmen',03302,(SELECT id FROM test.province WHERE province_name LIKE 'Huasco')),
    ('Freirina',03303,(SELECT id FROM test.province WHERE province_name LIKE 'Huasco')),
    ('Huasco',03304,(SELECT id FROM test.province WHERE province_name LIKE 'Huasco')),
    ('La Serena',04101,(SELECT id FROM test.province WHERE province_name LIKE 'Elqui')),
    ('Coquimbo',04102,(SELECT id FROM test.province WHERE province_name LIKE 'Elqui')),
    ('Andacollo',04103,(SELECT id FROM test.province WHERE province_name LIKE 'Elqui')),
    ('La Higuera',04104,(SELECT id FROM test.province WHERE province_name LIKE 'Elqui')),
    ('Paiguano',04105,(SELECT id FROM test.province WHERE province_name LIKE 'Elqui')),
    ('Vicuña',04106,(SELECT id FROM test.province WHERE province_name LIKE 'Elqui')),
    ('Illapel',04201,(SELECT id FROM test.province WHERE province_name LIKE 'Choapa')),
    ('Canela',04202,(SELECT id FROM test.province WHERE province_name LIKE 'Choapa')),
    ('Los Vilos',04203,(SELECT id FROM test.province WHERE province_name LIKE 'Choapa')),
    ('Salamanca',04204,(SELECT id FROM test.province WHERE province_name LIKE 'Choapa')),
    ('Ovalle',04301,(SELECT id FROM test.province WHERE province_name LIKE 'Limarí')),
    ('Combarbalá',04302,(SELECT id FROM test.province WHERE province_name LIKE 'Limarí')),
    ('Monte Patria',04303,(SELECT id FROM test.province WHERE province_name LIKE 'Limarí')),
    ('Punitaqui',04304,(SELECT id FROM test.province WHERE province_name LIKE 'Limarí')),
    ('Río Hurtado',04305,(SELECT id FROM test.province WHERE province_name LIKE 'Limarí')),
    ('Valparaíso',05101,(SELECT id FROM test.province WHERE province_name LIKE 'Valparaíso')),
    ('Casablanca',05102,(SELECT id FROM test.province WHERE province_name LIKE 'Valparaíso')),
    ('Concón',05103,(SELECT id FROM test.province WHERE province_name LIKE 'Valparaíso')),
    ('Juan Fernández',05104,(SELECT id FROM test.province WHERE province_name LIKE 'Valparaíso')),
    ('Puchuncaví',05105,(SELECT id FROM test.province WHERE province_name LIKE 'Valparaíso')),
    ('Quintero',05107,(SELECT id FROM test.province WHERE province_name LIKE 'Valparaíso')),
    ('Viña del Mar',05109,(SELECT id FROM test.province WHERE province_name LIKE 'Valparaíso')),
    ('Isla de Pascua',05201,(SELECT id FROM test.province WHERE province_name LIKE 'Isla de Pascua')),
    ('Los Andes',05301,(SELECT id FROM test.province WHERE province_name LIKE 'Los Andes')),
    ('Calle Larga',05302,(SELECT id FROM test.province WHERE province_name LIKE 'Los Andes')),
    ('Riconada',05303,(SELECT id FROM test.province WHERE province_name LIKE 'Los Andes')),
    ('San Esteban',05304,(SELECT id FROM test.province WHERE province_name LIKE 'Los Andes')),
    ('La Ligua',05401,(SELECT id FROM test.province WHERE province_name LIKE 'Petorca')),
    ('Cabildo',05402,(SELECT id FROM test.province WHERE province_name LIKE 'Petorca')),
    ('Papudo',05403,(SELECT id FROM test.province WHERE province_name LIKE 'Petorca')),
    ('Petorca',05404,(SELECT id FROM test.province WHERE province_name LIKE 'Petorca')),
    ('Zapallar',05405,(SELECT id FROM test.province WHERE province_name LIKE 'Petorca')),
    ('Quillota',05501,(SELECT id FROM test.province WHERE province_name LIKE 'Quillota')),
    ('La Calera',05502,(SELECT id FROM test.province WHERE province_name LIKE 'Quillota')),
    ('Hijuelas',05503,(SELECT id FROM test.province WHERE province_name LIKE 'Quillota')),
    ('La Cruz',05504,(SELECT id FROM test.province WHERE province_name LIKE 'Quillota')),
    ('Nogales',05506,(SELECT id FROM test.province WHERE province_name LIKE 'Quillota')),
    ('San Antonio',05601,(SELECT id FROM test.province WHERE province_name LIKE 'San Antonio')),
    ('Algarrobo',05602,(SELECT id FROM test.province WHERE province_name LIKE 'San Antonio')),
    ('Cartagena',05603,(SELECT id FROM test.province WHERE province_name LIKE 'San Antonio')),
    ('El Quisco',05604,(SELECT id FROM test.province WHERE province_name LIKE 'San Antonio')),
    ('El Tabo',05605,(SELECT id FROM test.province WHERE province_name LIKE 'San Antonio')),
    ('Santo Domingo',05606,(SELECT id FROM test.province WHERE province_name LIKE 'San Antonio')),
    ('San Felipe',05701,(SELECT id FROM test.province WHERE province_name LIKE 'San Felipe de Aconcagua')),
    ('Catemu',05702,(SELECT id FROM test.province WHERE province_name LIKE 'San Felipe de Aconcagua')),
    ('Llaillay',05703,(SELECT id FROM test.province WHERE province_name LIKE 'San Felipe de Aconcagua')),
    ('Panquehue',05704,(SELECT id FROM test.province WHERE province_name LIKE 'San Felipe de Aconcagua')),
    ('Putaendo',05705,(SELECT id FROM test.province WHERE province_name LIKE 'San Felipe de Aconcagua')),
    ('Santa María',05706,(SELECT id FROM test.province WHERE province_name LIKE 'San Felipe de Aconcagua')),
    ('Quilpué',05801,(SELECT id FROM test.province WHERE province_name LIKE 'Marga Marga')),
    ('Limache',05802,(SELECT id FROM test.province WHERE province_name LIKE 'Marga Marga')),
    ('Olmué',05803,(SELECT id FROM test.province WHERE province_name LIKE 'Marga Marga')),
    ('Villa Alemana',05804,(SELECT id FROM test.province WHERE province_name LIKE 'Marga Marga')),
    ('Rancagua',06101,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Codegua',06102,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Coinco',06103,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Coltauco',06104,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Doñihue',06105,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Graneros',06106,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Las Cabras',06107,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Machalí',06108,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Malloa',06109,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Mostazal',06110,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Olivar',06111,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Peumo',06112,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Pichidegua',06113,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Quinta de Tilcoco',06114,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Rengo',06115,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Requínoa',06116,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('San Vicente',06117,(SELECT id FROM test.province WHERE province_name LIKE 'Cachapoal')),
    ('Pichilemu',06201,(SELECT id FROM test.province WHERE province_name LIKE 'Cardenal Caro')),
    ('La Estrella',06202,(SELECT id FROM test.province WHERE province_name LIKE 'Cardenal Caro')),
    ('Litueche',06203,(SELECT id FROM test.province WHERE province_name LIKE 'Cardenal Caro')),
    ('Marichihue',06204,(SELECT id FROM test.province WHERE province_name LIKE 'Cardenal Caro')),
    ('Navidad',06205,(SELECT id FROM test.province WHERE province_name LIKE 'Cardenal Caro')),
    ('Paredones',06206,(SELECT id FROM test.province WHERE province_name LIKE 'Cardenal Caro')),
    ('San Fernando',06301,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Chépica',06302,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Chimbarongo',06303,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Lolol',06304,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Nancagua',06305,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Palmilla',06306,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Peralillo',06307,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Placilla',06308,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Pumanque',06309,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Santa Cruz',06310,(SELECT id FROM test.province WHERE province_name LIKE 'Colchagua')),
    ('Talca',07101,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('Constitución',07102,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('Curepto',07103,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('Empedrado',07104,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('Maule',07105,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('Pelarco',07106,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('Pencahue',07107,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('Río Claro',07108,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('San Clemente',07109,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('San Rafael',07110,(SELECT id FROM test.province WHERE province_name LIKE 'Talca')),
    ('Cauquenes',07201,(SELECT id FROM test.province WHERE province_name LIKE 'Cauquenes')),
    ('Chanco',07202,(SELECT id FROM test.province WHERE province_name LIKE 'Cauquenes')),
    ('Pelluhue',07203,(SELECT id FROM test.province WHERE province_name LIKE 'Cauquenes')),
    ('Curicó',07301,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Hualañé',07302,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Licantén',07303,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Molina',07304,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Rauco',07305,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Romeral',07306,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Sagrada Familia',07307,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Teno',07308,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Vichuquén',07309,(SELECT id FROM test.province WHERE province_name LIKE 'Curicó')),
    ('Linares',07401,(SELECT id FROM test.province WHERE province_name LIKE 'Linares')),
    ('Colbún',07402,(SELECT id FROM test.province WHERE province_name LIKE 'Linares')),
    ('Longaví',07403,(SELECT id FROM test.province WHERE province_name LIKE 'Linares')),
    ('Parral',07404,(SELECT id FROM test.province WHERE province_name LIKE 'Linares')),
    ('Retiro',07405,(SELECT id FROM test.province WHERE province_name LIKE 'Linares')),
    ('San Javier',07406,(SELECT id FROM test.province WHERE province_name LIKE 'Linares')),
    ('Villa Alegre',07407,(SELECT id FROM test.province WHERE province_name LIKE 'Linares')),
    ('Yerbas Buenas',07408,(SELECT id FROM test.province WHERE province_name LIKE 'Linares')),
    ('Chillán',16101,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('Chillán Viejo',16102,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('Quillón',16103,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('Bulnes',16104,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('San Ignacio',16105,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('El Carmen',16106,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('Pinto',16107,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('Pemuco',16108,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('Yungay',16109,(SELECT id FROM test.province WHERE province_name LIKE 'Diguillín')),
    ('Quirihue',16201,(SELECT id FROM test.province WHERE province_name LIKE 'Itata')),
    ('Cobquecura',16202,(SELECT id FROM test.province WHERE province_name LIKE 'Itata')),
    ('Ninhue',16203,(SELECT id FROM test.province WHERE province_name LIKE 'Itata')),
    ('Treguaco',16204,(SELECT id FROM test.province WHERE province_name LIKE 'Itata')),
    ('Coelemu',16205,(SELECT id FROM test.province WHERE province_name LIKE 'Itata')),
    ('Portezuelo',16206,(SELECT id FROM test.province WHERE province_name LIKE 'Itata')),
    ('Ránqui',16207,(SELECT id FROM test.province WHERE province_name LIKE 'Itata')),
    ('San Carlos',16301,(SELECT id FROM test.province WHERE province_name LIKE 'Punilla')),
    ('Ñiquén',16302,(SELECT id FROM test.province WHERE province_name LIKE 'Punilla')),
    ('Coihueco',16303,(SELECT id FROM test.province WHERE province_name LIKE 'Punilla')),
    ('San Fabián',16304,(SELECT id FROM test.province WHERE province_name LIKE 'Punilla')),
    ('San Nicolás',16305,(SELECT id FROM test.province WHERE province_name LIKE 'Punilla')),
    ('Concepción',08101,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Coronel',08102,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Chiguayante',08103,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Florida',08104,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Hualqui',08105,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Lota',08106,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Penco',08107,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('San Pedro de la Paz',08108,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Santa Juana',08109,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Talcahuano',08110,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Tomé',08111,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Hualpén',08112,(SELECT id FROM test.province WHERE province_name LIKE 'Concepción')),
    ('Lebu',08201,(SELECT id FROM test.province WHERE province_name LIKE 'Arauco')),
    ('Arauco',08202,(SELECT id FROM test.province WHERE province_name LIKE 'Arauco')),
    ('Cañete',08203,(SELECT id FROM test.province WHERE province_name LIKE 'Arauco')),
    ('Contulmo',08204,(SELECT id FROM test.province WHERE province_name LIKE 'Arauco')),
    ('Curanilahue',08205,(SELECT id FROM test.province WHERE province_name LIKE 'Arauco')),
    ('Los Álamos',08206,(SELECT id FROM test.province WHERE province_name LIKE 'Arauco')),
    ('Tirúa',08207,(SELECT id FROM test.province WHERE province_name LIKE 'Arauco')),
    ('Los Ángeles',08301,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Antuco',08302,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Cabrero',08303,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Laja',08304,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Mulchén',08305,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Nacimiento',08306,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Negrete',08307,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Quilaco',08308,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Quilleco',08309,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('San Rosendo',08310,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Santa Bárbara',08311,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Tucapel',08312,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Yumbel',08313,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Alto Biobío',08314,(SELECT id FROM test.province WHERE province_name LIKE 'Biobío')),
    ('Temuco',09101,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Carahue',09102,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Cunco',09103,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Curarrehue',09104,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Freire',09105,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Galvarino',09106,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Gorbea',09107,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Lautaro',09108,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Loncoche',09109,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Melipeuco',09110,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Nueva Imperial',09111,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Padre Las Casas',09112,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Perquenco',09113,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Pitrufquén',09114,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Pucón',09115,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Saavedra',09116,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Teodoro Schmidt',09117,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Toltén',09118,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Vilcún',09119,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Villarrica',09120,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Cholchol',09121,(SELECT id FROM test.province WHERE province_name LIKE 'Cautín')),
    ('Angol',09201,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Collipulli',09202,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Curacautín',09203,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Ercilla',09204,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Lonquimay',09205,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Los Sauces',09206,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Lumaco',09207,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Purén',09208,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Renaico',09209,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Traiguén',09210,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Victoria',09211,(SELECT id FROM test.province WHERE province_name LIKE 'Malleco')),
    ('Valdivia',14101,(SELECT id FROM test.province WHERE province_name LIKE 'Valdivia')),
    ('Corral',14102,(SELECT id FROM test.province WHERE province_name LIKE 'Valdivia')),
    ('Lanco',14103,(SELECT id FROM test.province WHERE province_name LIKE 'Valdivia')),
    ('Los Lagos',14104,(SELECT id FROM test.province WHERE province_name LIKE 'Valdivia')),
    ('Máfil',14105,(SELECT id FROM test.province WHERE province_name LIKE 'Valdivia')),
    ('Mariquina',14106,(SELECT id FROM test.province WHERE province_name LIKE 'Valdivia')),
    ('Paillaco',14107,(SELECT id FROM test.province WHERE province_name LIKE 'Valdivia')),
    ('Panguipulli',14108,(SELECT id FROM test.province WHERE province_name LIKE 'Valdivia')),
    ('La Unión',14201,(SELECT id FROM test.province WHERE province_name LIKE 'Ranco')),
    ('Futrono',14202,(SELECT id FROM test.province WHERE province_name LIKE 'Ranco')),
    ('Lago Ranco',14203,(SELECT id FROM test.province WHERE province_name LIKE 'Ranco')),
    ('Río Bueno',14204,(SELECT id FROM test.province WHERE province_name LIKE 'Ranco')),
    ('Puerto Montt',10101,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Calbuco',10102,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Cochamó',10103,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Fresia',10104,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Frutillar',10105,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Los Muermos',10106,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Llanquihue',10107,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Maullín',10108,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Puerto Varas',10109,(SELECT id FROM test.province WHERE province_name LIKE 'Llanquihue')),
    ('Castro',10201,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Ancud Montt',10202,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Chonchi',10203,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Curaco de Vélez',10204,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Dalcahue',10205,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Puqueldón',10206,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Queilén',10207,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Quellón',10208,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Quemchi',10209,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Quinchao',10210,(SELECT id FROM test.province WHERE province_name LIKE 'Chiloé')),
    ('Osorno',10301,(SELECT id FROM test.province WHERE province_name LIKE 'Osorno')),
    ('Puerto Octay',10302,(SELECT id FROM test.province WHERE province_name LIKE 'Osorno')),
    ('Purranque',10303,(SELECT id FROM test.province WHERE province_name LIKE 'Osorno')),
    ('Puyehue',10304,(SELECT id FROM test.province WHERE province_name LIKE 'Osorno')),
    ('Río Negro',10305,(SELECT id FROM test.province WHERE province_name LIKE 'Osorno')),
    ('San Juan de la Costa',10306,(SELECT id FROM test.province WHERE province_name LIKE 'Osorno')),
    ('San Pablo',10307,(SELECT id FROM test.province WHERE province_name LIKE 'Osorno')),
    ('Chaitén',10401,(SELECT id FROM test.province WHERE province_name LIKE 'Palena')),
    ('Futaleufú',10402,(SELECT id FROM test.province WHERE province_name LIKE 'Palena')),
    ('Hualaihué',10403,(SELECT id FROM test.province WHERE province_name LIKE 'Palena')),
    ('Palena',10404,(SELECT id FROM test.province WHERE province_name LIKE 'Palena')),
    ('Coihaique',11101,(SELECT id FROM test.province WHERE province_name LIKE 'Coyhaique')),
    ('Lago Verde',11102,(SELECT id FROM test.province WHERE province_name LIKE 'Coyhaique')),
    ('Aisén',11201,(SELECT id FROM test.province WHERE province_name LIKE 'Aisén')),
    ('Cisnes',11202,(SELECT id FROM test.province WHERE province_name LIKE 'Aisén')),
    ('Guaitecas',11203,(SELECT id FROM test.province WHERE province_name LIKE 'Aisén')),
    ('Cochrane',11301,(SELECT id FROM test.province WHERE province_name LIKE 'Capitán Pratt')),
    ('O\`Higgins',11302,(SELECT id FROM test.province WHERE province_name LIKE 'Capitán Pratt')),
    ('Tortel',11303,(SELECT id FROM test.province WHERE province_name LIKE 'Capitán Pratt')),
    ('Chile Chico',11401,(SELECT id FROM test.province WHERE province_name LIKE 'General Carrera')),
    ('Río Ibáñez',11402,(SELECT id FROM test.province WHERE province_name LIKE 'General Carrera')),
    ('Punta Arenas',12101,(SELECT id FROM test.province WHERE province_name LIKE 'Magallanes')),
    ('Laguna Blanca',12102,(SELECT id FROM test.province WHERE province_name LIKE 'Magallanes')),
    ('Río Verde',12103,(SELECT id FROM test.province WHERE province_name LIKE 'Magallanes')),
    ('San Gregorio',12104,(SELECT id FROM test.province WHERE province_name LIKE 'Magallanes')),
    ('Cabo de Hornos',12103,(SELECT id FROM test.province WHERE province_name LIKE 'Antártica Chilena')),
    ('Antártica',12104,(SELECT id FROM test.province WHERE province_name LIKE 'Antártica Chilena')),
    ('Porvenir',12301,(SELECT id FROM test.province WHERE province_name LIKE 'Tierra del Fuego')),
    ('Primavera',12302,(SELECT id FROM test.province WHERE province_name LIKE 'Tierra del Fuego')),
    ('Timaukel',12303,(SELECT id FROM test.province WHERE province_name LIKE 'Tierra del Fuego')),
    ('Natales',12401,(SELECT id FROM test.province WHERE province_name LIKE 'Última Esperanza')),
    ('Torres del Paine',12402,(SELECT id FROM test.province WHERE province_name LIKE 'Última Esperanza')),
    ('Santiago',13101,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Cerrillos',13102,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Cerro Navia',13103,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Conchalí',13104,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('El Bosque',13105,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Estación Central',13106,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Huechuraba',13107,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Independencia',13108,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('La Cisterna',13109,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('La Florida',13110,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('La Granja',13111,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('La Pintana',13112,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('La Reina',13113,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Las Condes',13114,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Lo Barnechea',13115,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Lo Espejo',13116,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Lo Prado',13117,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Macul',13118,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Maipú',13119,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Ñuñoa',13120,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Pedro Aguirre Cerda',13121,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Peñalolén',13122,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Providencia',13123,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Pudahuel',13124,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Quilicura',13125,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Quinta Normal',13126,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Recoleta',13127,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Renca',13128,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('San Joaquín',13129,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('San Miguel',13130,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('San Ramón',13131,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Vitacura',13132,(SELECT id FROM test.province WHERE province_name LIKE 'Santiago')),
    ('Puente Alto',13201,(SELECT id FROM test.province WHERE province_name LIKE 'Cordillera')),
    ('Pirque',13202,(SELECT id FROM test.province WHERE province_name LIKE 'Cordillera')),
    ('San José de Maipo',13203,(SELECT id FROM test.province WHERE province_name LIKE 'Cordillera')),
    ('Colina',13301,(SELECT id FROM test.province WHERE province_name LIKE 'Chacabuco')),
    ('Lampa',13302,(SELECT id FROM test.province WHERE province_name LIKE 'Chacabuco')),
    ('Tiltil',13303,(SELECT id FROM test.province WHERE province_name LIKE 'Chacabuco')),
    ('San Bernardo',13401,(SELECT id FROM test.province WHERE province_name LIKE 'Maipo')),
    ('Buin',13402,(SELECT id FROM test.province WHERE province_name LIKE 'Maipo')),
    ('Calera de Tango',13403,(SELECT id FROM test.province WHERE province_name LIKE 'Maipo')),
    ('Paine',13404,(SELECT id FROM test.province WHERE province_name LIKE 'Maipo')),
    ('Melipilla',13501,(SELECT id FROM test.province WHERE province_name LIKE 'Melipilla')),
    ('Alhué',13502,(SELECT id FROM test.province WHERE province_name LIKE 'Melipilla')),
    ('Curacaví',13503,(SELECT id FROM test.province WHERE province_name LIKE 'Melipilla')),
    ('María Pinto',13504,(SELECT id FROM test.province WHERE province_name LIKE 'Melipilla')),
    ('San Pedro',13505,(SELECT id FROM test.province WHERE province_name LIKE 'Melipilla')),
    ('Talagante',13601,(SELECT id FROM test.province WHERE province_name LIKE 'Talagante')),
    ('El Monte',13602,(SELECT id FROM test.province WHERE province_name LIKE 'Talagante')),
    ('Isla de Maipo',13603,(SELECT id FROM test.province WHERE province_name LIKE 'Talagante')),
    ('Padre Hurtado',13604,(SELECT id FROM test.province WHERE province_name LIKE 'Talagante')),
    ('Peñaflor',13605,(SELECT id FROM test.province WHERE province_name LIKE 'Talagante'));
    