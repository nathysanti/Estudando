x = Number(prompt("Informe o primeiro número: "));
y = Number(prompt("Informe o segundo número"));

function compararNumero(x,y){
    if (x === y){
        return "são iguais";
    }else{
        return "não são iguais";
    }  
}
function soma(x,y){
    soma = Number(x + y);
        if (soma < 10 && soma < 20){
            return `Sua soma é de ${soma}, que é menor que 10 e menor que 20.`;
        }else{
            return `Sua soma é ${soma}, que não é menor que 10 e não é menor que 20. `; 
        }
    
}


console.log(`Os numeros ${x} e ${y} ${compararNumero(x,y)}. ${soma(x,y)}`);

