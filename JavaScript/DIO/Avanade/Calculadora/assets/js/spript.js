function calculadora(){
    const operacao = Number(prompt('Escolha sua operação: \n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4 - Divisão Real(/) \n 5 - Divisão Interia(%) \n 6 - Potenciação(**) \n '));
    




let n1 = Number(prompt('Informe o primeiro número: '));
let n2 = Number(prompt('Informe o segundo número: '));
let resultado;

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}
function subtracao(){
    resultado = n1 - n2;
    alert(`${n1}  ${n2} = ${resultado}`);
}
function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
}
function divisaoReal(){
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
}
function divisaoInteira(){
    resultado = n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`);
}
function potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1} ** ${n2} = ${resultado}`);
}


if (operacao == 1){
    soma();
} else if(operacao == 2){
    subtracao();
}else if(operacao == 3){
    multiplicacao()
}else if(operacao == 4){
    divisaoReal()
}else if(operacao == 5){
    divisaoInteira();
}else if(operacao ==6){
    potenciacao();
}
}

calculadora();