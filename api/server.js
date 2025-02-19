const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    let mensagem = 'Bem vindo a lista de exercicios';
    res.json({mensagem});
});

app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;

    if (preco > 1000){
        desconto = preco * 0.08;
    } 

    let precoComDesconto = preco - desconto;
    res.json({preco, desconto, precoComDesconto});
});

// Salário família equivalente a 45 reais por filho
app.post('/salarioFamilia', (req, res) => {
    const { salario, filhos } = req.body;
    let salarioFamilia = 0;
    if (salario < 2000) 
        salarioFamilia = filhos * 45;
    let salarioFinal = salario + salarioFamilia;
    res.json({ salario, salarioFamilia, salarioFinal });
});


// INSS de um funcionário
app.post('/inss', (req, res) => {
    const { salarioinss } = req.body;
    let  salarioinssFinal = 0;

    if (salarioinss <= 1212.00) {
        salarioinssFinal = salarioinss - (salarioinss * 0.075);
    } else if (salarioinss <= 2427.35) {
        salarioinssFinal = salarioinss - (salarioinss * 0.09);
    } else if (salarioinss <= 3641.03) {
        salarioinssFinal = salarioinss - (salarioinss * 0.12);
    } else if (salarioinss <= 7087.22) {
        salarioinssFinal = salarioinss - (salarioinss * 0.14);
    } else {
        salarioinssFinal = salarioinss - (salarioinss * 0.14);
    }

    res.json({ salarioinss, salarioinssFinal });
});




//Lados de um triângulo
app.post('/triangulos', (req, res) => {
    const { lado1, lado2, lado3 } = req.body; 
    let result;

    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        result = 'Não é um triângulo';
    } else {
        if (lado1 == lado2 && lado2 == lado3) {
            result = 'Equilátero';
        } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
            result = 'Escaleno';
        } else {
            result = 'Isósceles';
        }
    }

    res.json({ lado1, lado2, lado3, result });
});


//Preço de uma mercadoria
app.post('/mercadoria', (req, res) => {
    const { nome, preco1 } = req.body; // Extraindo `nome` e `preco1` do corpo da solicitação
    let precoFinal1;

    if (preco1 < 1000) {
        precoFinal1 = preco1 + preco1 * 0.05;
    } else {
        precoFinal1 = preco1 + preco1 * 0.07;
    }
    res.json({nome, preco1, precoFinal1});
});


// 6 números inteiros e exiba na tela o maior número  digitado.
app.post('/num', (req, res) => {
    const { resultado, n1, n2, n3, n4, n5, n6 } = req.body;
    const num = [n1, n2, n3, n4, n5, n6];
    const maiorNumero = Math.max(...num);

    res.json({ resultado, n1, n2, n3, n4, n5, n6, num, maiorNumero });
});


app.post('/ordem', (req, res) => {
    const { nu1, nu2, nu3, nu4, nu5 } = req.body;
    const numeros = [nu1, nu2, nu3, nu4, nu5];
    numeros.sort((a, b) => a - b); 

    res.json({ numeros });
});


// Dois números inteiros e determine qual é o maior e o menor.
app.post('/comparacao', (req, res) => {
    const { num1, num2 } = req.body;
    let maior, menor;

    if (num1 > num2) {
        maior = num1;
        menor = num2;
    } else if (num2 > num1) {
        maior = num2;
        menor = num1;
    } else {
        maior = num1;
        menor = num1; 
    }

    res.json({ num1, num2, maior, menor });
});

// Reajuste salarial do funcionário
// Reajuste salarial do funcionário
app.post('/reajuste', (req, res) => {
    const { salario } = req.body;
    let reajuste, salarioAtualizado;

    if (salario >= 1500.00 && salario < 1750.00) {
        reajuste = 0.15;
    } else if (salario >= 1750.00 && salario < 2000.00) {
        reajuste = 0.12;
    } else if (salario >= 2000.00 && salario < 3000.00) {
        reajuste = 0.09;
    } else if (salario >= 3000.00) {
        reajuste = 0.06;
    } else {
        reajuste = 0;
    }

    salarioAtualizado = salario + (salario * reajuste);

    res.json({ salario, reajuste, salarioAtualizado });
});



//Calcule a média de 3 notas do aluno
app.post('/nota', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;
    let notaFinal;
    let statusFinal;
    
    let soma = (nota1 + nota2 + nota3) / 3;

    if (soma >= 6) {
        statusFinal = 'Aprovado';
    } else if (soma >= 4 && soma < 6) {
        statusFinal = 'Recuperação';
    } else {
        statusFinal = 'Reprovado'; 
    }

    res.json({ notaFinal: soma, nota1, nota2, nota3, status: statusFinal });
});

//Calcule o desconto e exiba o valor final da venda.
app.post('/preco', (req, res) => {
    const { preco, peca } = req.body;
    let desconto, precoFinal;

    switch (peca) {
        case 'camisa':
            desconto = 0.20;
            break;
        case 'bermuda':
            desconto = 0.10;
            break;
        case 'calca':
            desconto = 0.15;
            break;
        default:
            desconto = 0;
    }

    precoFinal = preco - (preco * desconto);

    console.log('Calculado:', { preco, peca, desconto, precoFinal });
    res.json({ preco, peca, desconto, precoFinal });
});

app.listen(4000, () => {
    console.log('Rodando');
});