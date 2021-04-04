import app from "./app";
import { criarTurma } from "./endpoints/criarTurma";
import { criarEstudante } from "./endpoints/criarEstudante";
import { criarProfessor } from "./endpoints/criarProfessor";
import { pegarIdadePeloId } from "./endpoints/pegarIdadePeloId";



app.post("/estudante", criarEstudante);

app.post("/professor", criarProfessor);

app.post("/turma", criarTurma);

app.get("/estudante/:id", pegarIdadePeloId);
