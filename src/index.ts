import express, { Request, Response } from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection = knex({
   client: "mysql",
   connection: {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: 3306
   }
})


const app = express()

app.use(express.json())
app.use(cors())

type criarTurma = {
   id: number,
   nome: string,
   data_inicio: string,
   data_fim: string,
   modulo: 0,
   tipo: TIPO_TURMA
}

enum TIPO_TURMA {
   INTEGRAL = "integral",
   NOTURNO = "noturno"
}

const criarTurma = async (req: Request, res: Response) => {
   let errorCode: number = 400;

   try {

       const input: criarTurma = {
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
