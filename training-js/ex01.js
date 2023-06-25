const inverteStr = (str) => {
    const separaStr = str.split('');

    const juntaStr = [];

   for (let index = separaStr.length - 1; index >= 0; index -= 1) {
    juntaStr.push(separaStr[index]);
   }
    return juntaStr.join('');
}


// refatorado

const inverteStr = (str) => str.split('').reverse().join('')