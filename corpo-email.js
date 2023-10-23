const geraVendas = require("./gera-vendas.js");
const geraNovidades = require("./gera-lancamentos.js")
const colors = require("colors");

function corpoEmail(cliente, vendas, novidades){
    if (cliente) {
    let maisVendidos = [];
    let novidadesDaSemana = [];
    for (const i in vendas) {
        maisVendidos.push(`${parseInt(i)+1}º ${vendas[i].modelo} | Vendas: ${vendas[i].vendas} | Preço promocional a partir de ${vendas[i].preco}`);
    }

    for (const j in novidades) {
        novidadesDaSemana.push(`${novidades[j].modelo} | Preço promocional a partir de ${novidades[j].preco}`)
    }
    maisVendidos = maisVendidos.join("\n")
    novidadesDaSemana = novidadesDaSemana.join("\n")
    return `

Olá ${cliente}!

Agradecemos por escolher a CarStore. Segue abaixo os carros mais vendidos essa semana:

${maisVendidos.red}

Aproveite também para conhecer as últimas novidades que estamos recebendo na semana, com preços e condições imperdíveis

${novidadesDaSemana.green}

Estamos com condições especiais para leasing na pessoa jurídica, e também descontos para o produtor rural

Para mais informações, acesse nosso site: https://www.carstore.pinheirasc.com ou vá a uma de nossas lojas.
    `
    }
}
module.exports = corpoEmail;