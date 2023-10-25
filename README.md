# projeto-final-vem-ser-tech-modulo-1

## Lógica de Programação - Projeto final
Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).


- Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes.

- A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.

- Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.


Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:


1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

2. Criar uma função para montar o corpo do e-mail a ser enviado.

3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

4. Tratar o retorno de erro ou sucesso da função "enviarEmail", de maneira a exibir uma mensagem amigável ao usuário no console.

## Como eu desenvolvi o projeto

Como não há banco de dados, fiz uma função para que cada vez que rodar o programa, ele vai gerar randomicamente a lista dos veículos mais vendidos na semana, e também as novidades da semana. 
Com esses dados gerados, o sistema deve percorrer a lista de clientes, e enviar o email de marketing respeitando a regra de negócio, que diz que os emails de marketing só podem ser enviados na segunda-feira, os clientes que não desejam receber 
devem ficar de fora do envio, e clientes que estiverem com inconsistência nos seus dados (como falta de email cadastrado, ou algum outro erro de cadastro que impeça o envio do email), também ficarão sem receber emails. 

Durante a execução, o sistema já vai identificando os emails enviados com sucesso, os clientes que não querem receber, e clientes que eventualmente estejam com alguma inconsistência no cadastro que impede o envio do email.

Ao final, o sistema também emite um resumo de quantos emails foram enviados com sucesso, quantos não foram enviados por opção dos clientes que não querem receber, e quantos não foram enviados por inconsistência no cadastro.
