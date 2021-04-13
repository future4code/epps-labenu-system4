import app from "./app";
import { criarTurma } from "./endpoints/criarTurma";
import { criarEstudante } from "./endpoints/criarEstudante";
import { criarProfessor } from "./endpoints/criarProfessor";
import { pegarIdadePeloId } from "./endpoints/pegarIdadePeloId";
import { atualizarEstudante } from "./endpoints/atualizarEstudante";
import { atualizarProfessor } from "./endpoints/atualizarProfessor";



app.post("/estudante", criarEstudante);

app.post("/professor", criarProfessor);

app.post("/turma", criarTurma);

app.get("/estudante/:id", pegarIdadePeloId);

app.put("/estudante", atualizarEstudante)

app.put("/professor", atualizarProfessor)