const titulo = document.getElementById('titulo');
fetch('http://localhost:4000/')//requisição da rota
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp);//Pegar a resposta em json e converter para html no titulo

    function exemplo(){
        let resultado = document.getElementById('resultado');
        let dados = {
            preco: Number(document.getElementById('preco').value)
        }
        fetch('http://localhost:4000/desconto', 
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(dados)
            })
            .then(resp => resp.json())
            .then(resp => {
                resultado.innerHTML = `preço com desconto: ${resp.precoComDesconto.toFixed(2)}`;
            //console.log(resp);Retornar o objeto que esta dentro da resposta
           //console.log(resp.preco);Retornar o objeto especifico que esta dentro da resposta
            });
    }

    //SALARIO FAMILIA

    fetch('http://localhost:4000/')
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp);

    function calcular(){
        let resultadoSalario = document.getElementById('resultadoSalario');
        let salario ={
            salario: Number(document.getElementById('salario').value),
            filhos: Number(document.getElementById('filhos').value)
        } 
        fetch('http://localhost:4000/salarioFamilia',
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(salario)
            })
            .then(resp => resp.json())
            .then(resp => {
                resultadoSalario.innerHTML = `Salario Final: ${resp.salarioFinal.toFixed(2)}`;
        });
    }

//INSS
    fetch('http://localhost:4000/')
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp);

    function verSalario(){
        let resultadoinss = document.getElementById('resultadoinss');
        let inss = {
            salarioinss: Number(document.getElementById('salarioinss').value)
        }
        fetch('http://localhost:4000/inss', 
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(inss)
            })
            .then(resp => resp.json())
            .then(resp => {
                resultadoinss.innerHTML = `preço com desconto: ${resp. salarioinssFinal.toFixed(2)}`;
            });
    }
    

//TRIANGULOS

fetch('http://localhost:4000/')
.then(resp => resp.json())
.then(resp => titulo.innerHTML = resp);

function ver(){
    let lados = document.getElementById('lados');
    let triangulos ={
        lado1: Number(document.getElementById('lado1').value),
        lado2: Number(document.getElementById('lado2').value),
        lado3: Number(document.getElementById('lado3').value),
    } 
    fetch('http://localhost:4000/triangulos',
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(triangulos)
        })
        .then(resp => resp.json())
        .then(resp => {
            lados.innerHTML = `Salario Final: ${resp.result}`;
    });
}
fetch('http://localhost:4000/')
.then(resp => resp.json())
.then(resp => titulo.innerHTML = resp);



function atualizarPreco() {
    let resultado1 = document.getElementById('resultado1');
    let nome = document.getElementById('nome').value;
    let mer = {
        nome: nome,
        preco1: Number(document.getElementById('preco1').value)
    }; 
    fetch('http://localhost:4000/mercadoria',
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(mer)
        })
        .then(resp => resp.json())
        .then(resp => {
            resultado1.innerHTML = `Nome: ${resp.nome}  Preço Final: ${resp.precoFinal1}`;
    });
}

function numero() {
    let resultado2 = document.getElementById('resultado2');
    let numero = {
        n1: Number(document.getElementById('n1').value),
        n2: Number(document.getElementById('n2').value),
        n3: Number(document.getElementById('n3').value),
        n4: Number(document.getElementById('n4').value),
        n5: Number(document.getElementById('n5').value),
        n6: Number(document.getElementById('n6').value)
    };
    fetch('http://localhost:4000/num', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(numero)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            resultado2.innerHTML = `Maior Número: ${resp.maiorNumero}`; 
        });
}

function ordenar() {
    let resultado3 = document.getElementById('resultado3');
    let numeros = {
        nu1: Number(document.getElementById('nu1').value),
        nu2: Number(document.getElementById('nu2').value),
        nu3: Number(document.getElementById('nu3').value),
        nu4: Number(document.getElementById('nu4').value),
        nu5: Number(document.getElementById('nu5').value)
    };
    fetch('http://localhost:4000/ordem', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(numeros)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            resultado3.innerHTML = `Números em Ordem Crescente: ${resp.numeros.join(', ')}`; 
        });
}

function comparar() {
    let resultado4 = document.getElementById('resultado4');
    let comp = {
        num1: Number(document.getElementById('num1').value),
        num2: Number(document.getElementById('num2').value)
    };
    fetch('http://localhost:4000/comparacao', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comp)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            resultado4.innerHTML = `Maior: ${resp.maior} e Menor: ${resp.menor}`; 
        });
}

function Reajuste() {
    let resultado5 = document.getElementById('resultado5');
    let salario = {
        salario: Number(document.getElementById('salario').value)
    };
    console.log(salario); 
    fetch('http://localhost:4000/reajuste', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(salario)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            resultado5.innerHTML = `Salário Atualizado: R$ ${resp.salarioAtualizado.toFixed(2)}`;
        });
}

function nota() {
    let resultado6 = document.getElementById('resultado6');
    let notaData = {
        nota1: Number(document.getElementById('nota1').value),
        nota2: Number(document.getElementById('nota2').value),
        nota3: Number(document.getElementById('nota3').value)
    };
    console.log(notaData); 
    fetch('http://localhost:4000/nota', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(notaData)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            resultado6.innerHTML = `Nota Final: ${resp.notaFinal.toFixed(2)} - Status: ${resp.status}`;
        });
}

function calcularDesconto() {
    let resultado7 = document.getElementById('resultado7');
    let precoData = {
        preco: Number(document.getElementById('preco').value),
        peca: document.getElementById('peca').value
    };

    console.log(precoData); 
    fetch('http://localhost:4000/preco', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(precoData)
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            resultado7.innerHTML = `Preço Final: R$ ${resp.precoFinal.toFixed(2)} - Desconto: ${(resp.desconto * 100)}% - Peça: ${resp.peca}`;
        });
}









