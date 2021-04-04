import { Request, Response } from "express";
import connection from "../connection";
import { professores } from "../types";

export const criarProfessor = async (req: Request, res: Response)=> {
    let errorCode: number = 400;

    try {
        const input: professores ={
            id: req.body.id,
            nome: req.body.nome,
            email: req.body.email,
            data_nascimento: req.body.data_nascimento,
            turma_id: req.body.turma_id
        }

        if (!input.id || !input.nome || !input.email || !input.data_nascimento || !input.turma_id) {
            errorCode = 422;
            throw new Error("Verifique todos os campos.");
          }

        await connection.raw(`
        INSERT INTO PROFESSOR (id, nome, email, data_nascimento, turma_id)
        VALUES (
            "${req.body.id}",
            "${req.body.nome}",
            "${req.body.email}",
            "${req.body.data_nascimento}",
            "${req.body.turma_id}"
        )
        `)

        res.status(201).send({message: "Professor criado com sucesso!"});
        
    } catch (error) {
        console.log(error.message);
        res.send(error.message || error.sqlMessage);
    }
}