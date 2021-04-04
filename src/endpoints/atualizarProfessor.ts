import { Request, Response } from "express";
import connection from "../connection";
import { atualizaProfessor } from "../types";

export const atualizarProfessor = async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const input: atualizaProfessor ={
            professor_id: req.body.professor_id,
            turma_id: req.body.turma_id
        }

    await connection.raw(`
    UPDATE PROFESSOR
    SET turma_id = ${input.turma_id}
    WHERE id = ${input.professor_id}
    `);
     
    res.status(200).send({message: "Atualizado com sucesso!"})

    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
}