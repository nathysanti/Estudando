var x = document.getElementById('number1');
var y = document.getElementById('number2');

function calcular(x,y){
    function soma(x,y){
        total = x + y;
        console.log("O valor da soma de " + x + " + " + y + " é de: " + total);
        return total; 
    }
    function mult(x,y){
        total = x * y;
        console.log("O valor da multiplicação de " + x + " X " + y + " é de: " + total);
        return total; 
    }
    function divi(x,y){
        total = x / y;
        console.log("O valor da divisão de " + x + " / " + y + " é de: " + total);
        return total; 
    }
}


// x = 5;
// y = 6;

soma(x,y);
mult(x,y);
divi(x,y);
