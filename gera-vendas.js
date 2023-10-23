function geraVendas () {
    const maxVendas = 30;
    const carros =  [
        {modelo: "Ford Mustang", preco: "US$26.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Toyota Camry", preco: "US$24.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Chevrolet Silverado", preco: "US$29.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Honda Civic", preco: "US$21.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "BMW 3 Series", preco: "US$39.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Mercedes-Benz S-Class", preco: "US$94.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Volkswagen Golf", preco: "US$23.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Tesla Model 3", preco: "US$39.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Audi Q5", preco: "US$43.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Nissan Altima", preco: "US$23.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Jeep Wrangler", preco: "US$27.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Subaru Outback", preco: "US$25.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Hyundai Elantra", preco: "US$19.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Porsche 911", preco: "US$99.990", vendas: Math.ceil(Math.random()*maxVendas)},
        {modelo: "Ferrari 488 GTB", preco: "US$299.000", vendas: Math.ceil(Math.random()*maxVendas)},
    ];
    carros.sort((a, b) => a.vendas - b.vendas);
    carros.reverse();
    return carros.slice(0, 6);
}

module.exports = geraVendas;