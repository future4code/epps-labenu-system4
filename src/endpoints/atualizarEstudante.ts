import { Request, Response } from "express";
import connection from "../connection";
import { atualizaEstudantes } from "../types";

export const atualizarEstudante = async (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const input: atualizaEstudantes ={
            estudante_id: req.body.estudante_id,
            turma_id: req.body.turma_id
        }

    await connection.raw(`
    UPDATE ESTUDANTE
    SET turma_id = ${input.turma_id}
    WHERE id = ${input.estudante_id}
    `);
     
    res.status(200).send({message: "Atualizado com sucesso!"})

    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
}