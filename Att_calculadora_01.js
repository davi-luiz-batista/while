const readline = require('node:readline/promises');
const {stdin: input, stdout: output} = require('node:process');

async function main() {

//1. crie a interface
const rl = readline.createInterface({ input, output });

let continuar = 's';

while (continuar.toLowerCase() === 's') {

    const num1 = Number(await rl.question(`Digite o primeiro numero: `));
    const num2 = Number(await rl.question(`Digite o segundo numero: `));

    console.log(`\nSoma: ${num1 + num2}`);
    console.log(`Subtração: ${num1 - num2}`);
    console.log(`Multiplicação: ${num1 * num2}`);

    if (num2 !== 0) {
        console.log(`Divisão: ${num1 / num2}`);
    } else {
        console.log(`Divisão: não é possível dividir por zero`);
    }

    continuar = await rl.question(`\nDeseja realizar outro cálculo? (s/n): `);
    console.log();

}

console.log(`Calculadora encerrada.`);

//2. feche a interface
rl.close();

}

main();