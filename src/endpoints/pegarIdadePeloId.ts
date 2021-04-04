import connection from "../connection";

export const pegarIdadePeloId = async (id: string) => {

    try {
        const resultado = await connection.raw(`
            SELECT nome, (data_nascimento/365) AS idade
            FROM ESTUDANTE
            WHERE id = "${id}";
        `)

        return resultado [0][0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}