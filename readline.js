const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.question('Siapa nama anda?', (nama) => {
        rl.question('Apa yang anda pikrikan tentang NodeJS?', (jawaban)=>{
            console.log(`Terimakasih ${nama} atas respon anda :\n ${jawaban}`);
            rl.close();         
        })
});