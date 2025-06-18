import { redirect } from "@sveltejs/kit";

function contem(texto, caracteres) {
    for (const caractere of caracteres) {
        if (texto.includes(caractere))
            return true;
    }
    return false;
}


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const dados = {
            nome: data.get('nome'),
            email: data.get('email'),
            senha: data.get('senha'),
            confirmacaoSenha: data.get('confirmacaoSenha'),
            nascimento: data.get('nascimento'),
            erros: []
        }
        if (!dados.nome || !dados.email || !dados.senha || !dados.confirmacaoSenha || !dados.nascimento)
            dados.erros.push('Todos os campos são obrigatórios.');

        if (!dados.email.includes('@'))
            dados.erros.push('O e-mail deve conter um @.');

        if (dados.senha !== dados.confirmacaoSenha)
            dados.erros.push('A senha e a confirmação de senha devem ser iguais.');

        if (!contem(dados.senha, "abcdefghijklmnopqrstuvdxwz")
            || !contem(dados.senha, "1234567890")
            || !contem(dados.senha, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
            || !contem(dados.senha, "@#$¨&*()_-+=?")
        )
            dados.erros.push('A senha deve conter letras, números e caracteres especiais.');


        let agora = new Date(),
            nasc = new Date(dados.nascimento);
        if (agora - nasc < 378432000)
            redirect(303, '/06/cadastro-usuario');
        return(dados)
    }
};
