const fs = require("fs");
const colors = require("colors");

const tabla = async (base = 5, listar = false, hasta ) => {
  try {
    let salida = "",consola="";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${ base * i}\n`;
      consola += `${base} ${"x".red} ${i} ${"=".red} ${ base * i}\n`;
    }

    fs.writeFileSync(`../salida/tabla-${base}.txt`, salida);

    if (listar) {
      console.log("========".red + "========".white + "========".red);
      console.log(`tabla del ${base}`);
      console.log("========".red + "========".white + "========".red);

      console.log(consola);
    }

    //console.log(`tabla-${base}.txt creada`);
    return `El archivo  tabla-${base}.txt`.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  tabla,
};
