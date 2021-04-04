import app from "./app";
import { criarTurma } from "./endpoints/criarTurma";
import { criarEstudante } from "./endpoints/criarEstudante";
import { criarProfessor } from "./endpoints/criarProfessor";
// import { getAgeById } from "./endpoints/getAgeById";
// import { getAllStudents } from "./endpoints/getAllStudents";
// import { getAllTeachers } from "./endpoints/getAllTeachers";


app.post("/estudante", criarEstudante);

app.post("/professor", criarProfessor);

app.post("/turma", criarTurma);

// app.get("/student", getAllStudents);

// app.get("/student/:id", getAgeById);

// app.get("/teacher", getAllTeachers);