const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output});

rl.question('Siapa nama Anda?', (nama) => {
  rl.question('Apa yang anda pikirkan tentang NodeJS?', (jawaban)=>{
    const respon = { nama: nama, jawaban: jawaban }

    // fs.writeFileSync("text.txt", `${nama}, ${jawaban}`);

    try {
      const file = fs.readFileSync('respon.json','utf-8');
      const responder = JSON.parse(file);
      responder.push(respon);
      fs.writeFileSync('respon.json', JSON.stringify(responder));
    } catch (error) {
      // Jika file kosong atau tidak berisi data JSON yang valid
      const responder = [respon];
      fs.writeFileSync('respon.json', JSON.stringify(responder));
    }

    console.log(`Terimakasih ${nama} atas respon anda`);
    rl.close();
  });
});
