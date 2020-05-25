INSERT INTO Ciudades (nombre) VALUES ("Resistencia");
INSERT INTO Ciudades (nombre) VALUES ("Barranqueras");
INSERT INTO Ciudades (nombre) VALUES ("Fontana");
INSERT INTO Ciudades (nombre) VALUES ("Puerto Vilelas");
INSERT INTO Ciudades (nombre) VALUES ("Las Breñas");

INSERT INTO Calles (nombre,CiudadeId) VALUES ("Gral. Belgrano",1);
INSERT INTO Calles (nombre,CiudadeId) VALUES ("Gral. San Martin",1);
INSERT INTO Calles (nombre,CiudadeId) VALUES ("Gral. Belgrano",2);
INSERT INTO Calles (nombre,CiudadeId) VALUES ("Gral. San Martin",2);
INSERT INTO Calles (nombre,CiudadeId) VALUES ("Av. Sarmiento",1);
INSERT INTO Calles (nombre,CiudadeId) VALUES ("9 de Julio",1);
INSERT INTO Calles (nombre,CiudadeId) VALUES ("Guemes",1);

INSERT INTO Direcciones (Numero,CalleId) VALUES (123,1);
INSERT INTO Direcciones (Numero,CalleId) VALUES (3334,2);
INSERT INTO Direcciones (Numero,CalleId) VALUES (1042,3);
INSERT INTO Direcciones (Numero,CalleId) VALUES (556,2);
INSERT INTO Direcciones (Numero,CalleId) VALUES (123,4);
INSERT INTO Direcciones (Numero,CalleId) VALUES (975,6);
INSERT INTO Direcciones (Numero,CalleId) VALUES (503,7);
INSERT INTO Direcciones (Numero,CalleId) VALUES (9999,1);
INSERT INTO Direcciones (Numero,CalleId) VALUES (1110,4);

INSERT INTO Pacientes (dni,nombre,apellido,fechaNacimiento,email,telefono,sexo,DireccioneId) VALUES (6548321,"Jose","Perez","1941-11-11 13:23:44","jp@yahoo.com","1256132165","Masculino",1);
INSERT INTO Pacientes (dni,nombre,apellido,fechaNacimiento,email,telefono,sexo,DireccioneId) VALUES (20123665,"Ramona","Josefa","1978-11-11 13:23:44","ramonita@yahoo.com","75884656","Femenino",2);
INSERT INTO Pacientes (dni,nombre,apellido,fechaNacimiento,email,telefono,sexo,DireccioneId) VALUES (35489987,"Federico","Otora","1998-12-12 13:23:44","feto@gmail.com","3731444558","Masculino",3);
INSERT INTO Pacientes (dni,nombre,apellido,fechaNacimiento,email,telefono,sexo,DireccioneId) VALUES (48652135,"Nadia","Pantufa","2001-05-01 13:23:44","pantuflita@hotmail.com","44565486","Femenino",4);
INSERT INTO Pacientes (dni,nombre,apellido,fechaNacimiento,email,telefono,sexo,DireccioneId) VALUES (41485012,"Martin","Jaurosky","1998-11-11 13:23:44","martincito@gmail.com","794621345","Masculino",5);

INSERT INTO Hospitales (CUIT,nombre,DireccioneId) VALUES (30468546841,"Perrando",6);
INSERT INTO Hospitales (CUIT,nombre,DireccioneId) VALUES (30541654165,"Guemes",7);
INSERT INTO Hospitales (CUIT,nombre,DireccioneId) VALUES (30564840000,"La Casa de Juan",8);
INSERT INTO Hospitales (CUIT,nombre,DireccioneId) VALUES (30645646666,"Maria Auxiliadora de Saladas",9);

INSERT INTO Medicos (dni,matricula,nombre,apellido,fechaNacimiento,especialidad,DireccioneId) VALUES (41485012,32145,"Hernan","Thouzeau","1998-07-02 20:23:44","Cirujano",3);
INSERT INTO Medicos (dni,matricula,nombre,apellido,fechaNacimiento,especialidad,DireccioneId) VALUES (40584491,12345,"Exequiel","Scooter","1997-08-30 12:05:32","Pediatra",1);
INSERT INTO Medicos (dni,matricula,nombre,apellido,fechaNacimiento,especialidad,DireccioneId) VALUES (45645655,99851,"Jazmin","Teng","1998-12-31 23:23:55","Anestesista",2);

INSERT INTO Medicos_Hospitales (HospitaleCUIT,MedicoDni) VALUES (30564840000,41485012);
INSERT INTO Medicos_Hospitales (HospitaleCUIT,MedicoDni) VALUES (30541654165,40584491);
INSERT INTO Medicos_Hospitales (HospitaleCUIT,MedicoDni) VALUES (30645646666,45645655);

INSERT INTO Consultas (comentario,diagnostico,fecha,PacienteDni,MedicoDni) VALUES ("Tosia mucho y le faltaba una pata","Ibuprofeno cada 8 horas","2020-05-10 23:23:55",6548321,41485012);
INSERT INTO Consultas (comentario,diagnostico,fecha,PacienteDni,MedicoDni) VALUES ("No tenia la luz de la heladera prendida","Ferreteria","2020-05-11 23:23:55",20123665,41485012);
INSERT INTO Consultas (comentario,diagnostico,fecha,PacienteDni,MedicoDni) VALUES ("Ojos rojos","Resfriado comun","2020-05-12 23:23:55",35489987,40584491);
INSERT INTO Consultas (comentario,diagnostico,fecha,PacienteDni,MedicoDni) VALUES ("","Fractura Expuesta","2020-05-13 23:23:55",48652135,45645655);
INSERT INTO Consultas (comentario,diagnostico,fecha,PacienteDni,MedicoDni) VALUES (NULL,NULL,"2020-05-13 23:23:55",41485012,45645655);

INSERT INTO EnfermedadesPrevias (nombre) VALUES ("InmunoSupresionCongenitaOAdquirida");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Diabetes");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Obesidad");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Embarzo");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Puerperio");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Prematuridad");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("BajoPesoAlNacer");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("EnfermedadNeurologica");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("EnfermedadHepatica");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("EnfermedadRenalCronica");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("HipertensionArterial");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("EnfermedadOncologica");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("BronquitisPrevia");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("NAC_Previa");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("EPOC");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Asma");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Tubercolosis");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Fumador");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("NingunaDelasAnteriores");
INSERT INTO EnfermedadesPrevias (nombre) VALUES ("Otras");

INSERT INTO Casos (fechaInicio,estado,PacienteDni,MedicoDni,ConsultaId) VALUES ("2020-04-13 23:23:55","Estable",48652135,41485012,4);
INSERT INTO Casos (fechaInicio,estado,PacienteDni,MedicoDni,ConsultaId) VALUES ("2020-04-30 23:23:55","Estable",35489987,41485012,3);
INSERT INTO Casos (fechaInicio,estado,PacienteDni,MedicoDni,ConsultaId) VALUES ("2020-04-23 23:23:55","Grave",20123665,40584491,2);
INSERT INTO Casos (fechaInicio,estado,PacienteDni,MedicoDni,ConsultaId) VALUES ("2020-03-10 23:23:55","Grave",6548321,45645655,1);

INSERT INTO Pacientes_EnfermedadesPrevias (EnfermedadesPreviaId,PacienteDni) VALUES (7,6548321);
INSERT INTO Pacientes_EnfermedadesPrevias (EnfermedadesPreviaId,PacienteDni) VALUES (8,6548321);
INSERT INTO Pacientes_EnfermedadesPrevias (EnfermedadesPreviaId,PacienteDni) VALUES (6,6548321);
INSERT INTO Pacientes_EnfermedadesPrevias (EnfermedadesPreviaId,PacienteDni) VALUES (8,48652135);
INSERT INTO Pacientes_EnfermedadesPrevias (EnfermedadesPreviaId,PacienteDni) VALUES (4,41485012);
INSERT INTO Pacientes_EnfermedadesPrevias (EnfermedadesPreviaId,PacienteDni) VALUES (1,20123665);
INSERT INTO Pacientes_EnfermedadesPrevias (EnfermedadesPreviaId,PacienteDni) VALUES (2,20123665);

INSERT INTO PartesMedicos (estadoVital,tratamientos,comentario,fecha,CasoId) VALUES ("Grave","Ibuprofeno cada 4 horas","","2020-05-05 23:23:55",1);
INSERT INTO PartesMedicos (estadoVital,tratamientos,comentario,fecha,CasoId) VALUES ("Sano","Mucha agua","","2020-05-07 23:23:55",2);
INSERT INTO PartesMedicos (estadoVital,tratamientos,comentario,fecha,CasoId) VALUES ("Estable","Senoftaleina cada 12 hora","Rapido con agua","2020-05-12 23:23:55",3);
INSERT INTO PartesMedicos (estadoVital,tratamientos,comentario,fecha,CasoId) VALUES ("Muerto","Formol cada 2 dias","","2020-05-01 23:23:55",4);

INSERT INTO Pruebas (resultado,fecha,fechaResultado,CasoId) VALUES (0,"2020-05-12 23:23:55","2020-05-13 23:23:55",1);
INSERT INTO Pruebas (resultado,fecha,fechaResultado,CasoId) VALUES (0,"2020-05-12 23:23:55","2020-05-13 23:23:55",2);
INSERT INTO Pruebas (resultado,fecha,fechaResultado,CasoId) VALUES (1,"2020-05-12 23:23:55","2020-05-13 23:23:55",3);
INSERT INTO Pruebas (resultado,fecha,fechaResultado,CasoId) VALUES (0,"2020-05-12 23:23:55","2020-05-13 23:23:55",4);

INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Camas",52,30564840000);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Barbijos",200,30564840000);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Jeringas",500,30564840000);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Tests",30,30564840000);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Alcohol",84,30564840000);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Respiradores",3,30564840000);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Camas",130,30541654165);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Barbijos",310,30541654165);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Jeringas",420,30541654165);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Tests",47,30541654165);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Alcohol",145,30541654165);
INSERT INTO Recursos (nombre,cantidad,HospitaleCUIT) VALUES ("Respiradores",15,30541654165);

INSERT INTO Sintomas (nombre) VALUES ("FiebreMayorA38");
INSERT INTO Sintomas (nombre) VALUES ("Taquipnea_Disnea");
INSERT INTO Sintomas (nombre) VALUES ("Diarrea");
INSERT INTO Sintomas (nombre) VALUES ("Artralgias");
INSERT INTO Sintomas (nombre) VALUES ("MalestarEnGenerl");
INSERT INTO Sintomas (nombre) VALUES ("Tos");
INSERT INTO Sintomas (nombre) VALUES ("Vomitos");
INSERT INTO Sintomas (nombre) VALUES ("DolorDeGarganta");
INSERT INTO Sintomas (nombre) VALUES ("InsuficienciaRespiratoria");
INSERT INTO Sintomas (nombre) VALUES ("DolorAbdominal");
INSERT INTO Sintomas (nombre) VALUES ("DolorToracico");
INSERT INTO Sintomas (nombre) VALUES ("RechazoAlAlimento");
INSERT INTO Sintomas (nombre) VALUES ("IrritabilidadConfusion");
INSERT INTO Sintomas (nombre) VALUES ("Convulsiones");
INSERT INTO Sintomas (nombre) VALUES ("Otros");

INSERT INTO Sintomas_Consultas (ConsultaId,SintomaId) VALUES (1,3);
INSERT INTO Sintomas_Consultas (ConsultaId,SintomaId) VALUES (1,8);
INSERT INTO Sintomas_Consultas (ConsultaId,SintomaId) VALUES (1,9);
INSERT INTO Sintomas_Consultas (ConsultaId,SintomaId) VALUES (2,1);
INSERT INTO Sintomas_Consultas (ConsultaId,SintomaId) VALUES (3,10);
INSERT INTO Sintomas_Consultas (ConsultaId,SintomaId) VALUES (4,5);

INSERT INTO Sintomas_PartesMedicos (PartesMedicoId,SintomaId) VALUES (1,3);
INSERT INTO Sintomas_PartesMedicos (PartesMedicoId,SintomaId) VALUES (2,1);
INSERT INTO Sintomas_PartesMedicos (PartesMedicoId,SintomaId) VALUES (3,10);
INSERT INTO Sintomas_PartesMedicos (PartesMedicoId,SintomaId) VALUES (4,5);





