const obterDiaDaSemana = require("./dia-da-semana");
const enviarEmail = require("./envia-email");
const corpoEmail = require("./corpo-email");
const colors = require("colors");
const geraVendas = require("./gera-vendas");
const geraNovidades = require("./gera-lancamentos");
const {execSync} = require('child_process');



//const diaDaSemana = "Segunda-feira";
//const diaDaSemana = "Domingo";
const diaDaSemana = obterDiaDaSemana();

const clientes = [
    {nome: "Sílvio Santos", email: "silvio@sbt.com", desejaReceberEmail: true},
    {nome: "Luciano Huck", email: "huck@globo.com", desejaReceberEmail: false},
    {nome: "Edson Arantes do Nascimento", email: "pele@cbf.com", desejaReceberEmail: false},
    {nome: "", email: "anamaria@globo.com", desejaReceberEmail: true},
    {nome: "Celso Portiolli", email: "", desejaReceberEmail: true},
    {nome: "Sheldon Cooper", email: "sheldon@bazinga.com", desejaReceberEmail: true},
    {nome: "Terry Silver", email: "silver@cobrakai.com", desejaReceberEmail: true},
]

function enviarEmailParaClientes (clientes) {
    console.log("Verificando dia da semana...".yellow);
    execSync("sleep 1");
    console.log(`Dia da semana: ${diaDaSemana}`.magenta);
    execSync("sleep 1");
    if (diaDaSemana === "Segunda-feira") {
        let enviadoSucesso = 0;
        let noMarketing = 0;
        let cadastroInvalido = 0;
        console.log("Gerando vendas...".green);
        execSync("sleep 1");
        const vendas = geraVendas();
        console.log("Verificando novidades...".blue);
        execSync("sleep 1");
        const novidades = geraNovidades();
        for (const cliente of clientes) {
            console.log(`Enviando email para o cliente ${cliente.nome}...`.cyan);
            execSync('sleep 1');
            if (cliente.desejaReceberEmail){
                const corpo = corpoEmail(cliente.nome, vendas, novidades);
                const email = enviarEmail(cliente.email, "Novas oportunidades para você. Confira os mais vendidos dessa semana", corpo);
                if (email.status === "Error"){
                    console.log(("Erro ao enviar email para o cliente " + cliente.nome).red);
                    console.log(email.message.red + "\n\n");
                    cadastroInvalido ++;
                } else {
                    console.log(("Email enviado com sucesso para o cliente " + cliente.nome).green + "\n\n");
                    enviadoSucesso ++;
                }
            } else {
                console.log(`O cliente ${cliente.nome} não quer receber emails de marketing`.yellow + "\n\n");
                noMarketing ++;
            }
            console.log("#####################################################################################".bgCyan + "\n\n");
        }
        console.log("Resumo do envio de email marketing:".blue);
        execSync("sleep 1");
        console.log(`${enviadoSucesso} emails enviados com sucesso`.green);
        execSync("sleep 1");
        console.log(`${noMarketing} emails não foram gerados pois os clientes não querem receber emails de marketing`.yellow);
        execSync("sleep 1");
        console.log(`${cadastroInvalido} emails não foram enviados por motivos de inconsistência nos dados cadastrais dos clientes`.red);
        execSync("sleep 1");
    } else {
        console.log("Hoje não é segunda-feira! O envio de emails de marketing para clientes acontece apenas na segunda-feira".yellow);
        execSync("sleep 1");
    }
}

enviarEmailParaClientes(clientes);
console.log("Encerrando programa...".cyan);
execSync("sleep 1");