const obterDiaDaSemana = require("./dia-da-semana");
const enviarEmail = require("./envia-email");
const corpoEmail = require("./corpo-email");
const colors = require("colors");
const geraVendas = require("./gera-vendas");
const geraNovidades = require("./gera-lancamentos");
const {execSync} = require('child_process');



//console.log(obterDiaDaSemana());
const diaDaSemana = "Segunda-feira";
//const diaDaSemana = obterDiaDaSemana();

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
    if (diaDaSemana === "Segunda-feira") {
        const vendas = geraVendas();
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
                } else {
                    console.log(("Email enviado com sucesso para o cliente " + cliente.nome).green + "\n\n");
                }
            } else {
                console.log(`O cliente ${cliente.nome} não quer receber emails de marketing`.yellow + "\n\n");
            }
            console.log("#####################################################################################".bgCyan + "\n\n");
        }
    } else {
        console.log("Hoje não é segunda-feira! O envio de emails para clientes acontece apenas na segunda-feira".yellow);
    }
}

enviarEmailParaClientes(clientes);