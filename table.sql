CREATE TABLE TURMA(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    modulo INT DEFAULT 0
);

CREATE TABLE ESTUDANTE( 
    id INT NOT NULL PRIMARY KEY, 
    nome VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NOT NULL UNIQUE, 
    data_nascimento DATE NOT NULL, 
    turma_id INT NOT NULL, 
    FOREIGN KEY (turma_id) REFERENCES TURMA(id)
);

CREATE TABLE hobby(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE hobby_estudante(
    estudante_id INT NOT NULL,
    hobby_id INT NOT NULL,
    PRIMARY KEY (estudante_id, hobby_id),
    FOREIGN KEY (estudante_id) REFERENCES ESTUDANTE(id),
    FOREIGN KEY (hobby_id) REFERENCES hobby(id)
);

CREATE TABLE PROFESSOR( 
    id INT NOT NULL PRIMARY KEY, 
    nome VARCHAR(50) NOT NULL, 
    email VARCHAR(50) UNIQUE NOT NULL, 
    data_nascimento DATE NOT NULL, 
    turma_id INT NOT NULL, 
    FOREIGN KEY (turma_id) REFERENCES TURMA(id)
);

CREATE TABLE ESPECIALIDADE(
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE PROFESSOR_ESPECIALIDADE( 
    professor_id INT NOT NULL,
    especialidade_id INT NOT NULL,
    PRIMARY KEY (professor_id, especialidade_id),
    FOREIGN KEY (professor_id) REFERENCES PROFESSOR(id),
    FOREIGN KEY (especialidade_id) REFERENCES ESPECIALIDADE(id)
);

