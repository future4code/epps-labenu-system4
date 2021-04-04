export type turmas = {
    id: number,
    nome: string,
    data_inicio: string,
    data_fim: string,
    modulo: 0,
    tipo: TIPO_TURMA
 }
 
export enum TIPO_TURMA {
    INTEGRAL = "integral",
    NOTURNO = "noturno"
}

export type estudantes = {
    id: string,
    nome: string,
    email: string,
    data_nascimento: Date,
    hobbies: string
    turma_id: number
}

export type professores = {
    id: string,
    nome: string,
    email: string,
    data_nascimento: Date,
    turma_id: number
}

export type especialidades = {
    id: string,
    nome: string,
}

export type hobbies = {
    id: string,
    nome: string,
}