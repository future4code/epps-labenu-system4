import { Request, Response } from "express"
import  connection  from "../connection"
import { turmas, TIPO_TURMA } from "../types"


export const criarTurma = async (req: Request, res: Response) => {
    let errorCode: number = 400;
 
    try {
 
        const input: turmas = {
            id: req.body.id,
            nome: req.body.name,
            data_inicio: req.body.data_inicio,
            data_fim: req.body.data_fim,
            modulo: 0,
            tipo: req.body.tipo
        }
 
        if (!input.id || !input.nome || !input.data_inicio || !input.data_fim || !input.tipo) {
            errorCode = 422;
            throw new Error(" Por favor verifique os campos");
        }
 
        if (input.tipo !== TIPO_TURMA.INTEGRAL && input.tipo !== TIPO_TURMA.NOTURNO) {
            errorCode = 422;
            throw new Error("Os valores possíveis são: 'Integral' ou 'Noturno'.");
        }
 
        if (input.tipo === TIPO_TURMA.NOTURNO) {
            input.nome = input.nome+= "-na-night"
        }
 
        await connection.raw(`
        INSERT INTO TURMA (id, nome, data_inicio, data_fim, modulo)
        VALUES (
            ${input.id},
            "${input.nome},
            "${input.data_inicio},
            "${input.data_fim},
            "${input.modulo}"   
        )
        `)
 
        res.status(201).send({message: "Turma criada com sucesso!"})
        
    } catch (error) {
        console.log(error.message);
        res.status(errorCode).send(error.message || error.sqlMessage);
    }
 }