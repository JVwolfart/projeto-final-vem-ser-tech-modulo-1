// Não alterar este código, a menos que haja uma boa justificativa.
const enviarEmail = (addressee, subject, body) => {
    if (!addressee) {
      return {
        status: "Error",
        message: "Um destinatário precisa ser fornecido ao enviar um e-mail. Por favor verifique o cadastro do cliente",
      };
    }
  
    if (!subject) {
      return {
        status: "Error",
        message:
          "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
      };
    }
  
    if (!body) {
      return {
        status: "Error",
        message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail. Por favor verifique o cadastro do cliente",
      };
    }
  
    console.log(
      `
De: news@carstore.com
Para: ${addressee}
Assunto: ${subject}

${body}

CarStore - Aqui você encontra o seu carro novo com as melhores condições do mercado
      `
    );
  
    return { status: "Sucess", message: "E-mail enviado com sucesso!" };
  };
  
  module.exports = enviarEmail;