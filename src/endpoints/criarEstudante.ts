import { Request, Response } from "express";
import connection from "../connection";
import { estudantes } from "../types";

export const criarEstudante = async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const input: estudantes ={
            id: req.body.id,
            nome: req.body.nome,
            email: req.body.email,
            data_nascimento: req.body.data_nascimento,
            hobbies: req.body.hobbies,
            turma_id: req.body.turma_id
        }

        if (!input.id || !input.nome || !input.email || !input.data_nascimento || input.hobbies.length>1) {
            errorCode = 422;
            throw new Error("Verifique se todos os campos estão preenchidos.");
          }

          await connection.raw(`
          INSERT INTO ESTUDANTE (id, nome, email, data_nascimento, hobbies, turma_id)
          VALUES (
              "${req.body.id}",
              "${req.body.nome}",
              "${req.body.email}",
              "${req.body.data_nascimento}",
              "${req.body.hobbies}",
              "${req.body.turma_id}",
          `)
        res.status(201).send({message: "Estudante criado com sucesso!"});
        
    } catch (error) {
        console.log(error.message);
        res.send(error.message || error.sqlMessage);
    }
}