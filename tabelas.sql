CREATE TABLE Turma(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    modulo VARCHAR(255) DEFAULT 0
);

CREATE TABLE Estudante(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES Turma (id)
);

CREATE TABLE Hobby(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Estudante_hobby(
	id VARCHAR(255) PRIMARY KEY,
    estudante_id VARCHAR(255) NOT NULL,
    hobby_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES Estudante (id),
    FOREIGN KEY (hobby_id) REFERENCES Hobby (id)
);

CREATE TABLE Docente(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES Turma (id)
);



CREATE TABLE Especialidade(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Docente_especialidade(
	id VARCHAR(255) PRIMARY KEY,
	docente_id VARCHAR(255) NOT NULL,
    epescialidade_id VARCHAR(255) NOT NULL,
	FOREIGN KEY (docente_id) REFERENCES Docente (id),
    FOREIGN KEY (epescialidade_id) REFERENCES Especialidade (id)
);