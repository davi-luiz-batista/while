const readline = require('node:readline/promises');
const {stdin: input, stdout: output} = require('node:process');

async function main() {
   
   const rl = readline.createInterface({ input, output });
   
   let acumulador = 0;
   
   for (let i = 0; i < 5; i++) {
   
       const numero = Number(await rl.question(`Digite um numero: `));
   
       acumulador = acumulador + numero;
   
   }
   
   let media = acumulador / 5;
   console.log(`\nA soma dos numeros digitados é: ${acumulador}`);
    
}