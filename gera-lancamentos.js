function geraNovidades() {
    const carros = [
        {modelo: "Rolls-Royce Phantom", preco: "US$449.990"},
        {modelo: "Bentley Mulsanne", preco: "US$299.990"},
        {modelo: "Mercedes-Benz S-Class", preco: "US$99.990"},
        {modelo: "BMW 7 Series", preco: "US$84.990"},
        {modelo: "Audi A8", preco: "US$89.990"},
        {modelo: "Lexus LS", preco: "US$79.990"},
        {modelo: "Porsche Panamera", preco: "US$89.990"},
        {modelo: "Jaguar XJ", preco: "US$74.990"},
        {modelo: "Maserati Quattroporte", preco: "US$99.990"},
        {modelo: "Tesla Model S", preco: "US$79.990"},
    ]
    const novidades = []
    while (novidades.length !== 3) {
        const indice = Math.floor(Math.random()*10);
        const novidade = carros[indice]
        if (!novidades.includes(novidade)){
            novidades.push(novidade)
        }
    }
    return novidades
}

module.exports = geraNovidades;