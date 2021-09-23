document.getElementById('convert').onclick = tempConvert; // retirando as informações de 'convert' e armazenando em tempCovert
document.getElementById('clear').onclick = clearForm; // retirando as informações de 'clear' e armazenando em clearForm

function tempConvert() { // criando a função tempConvert
    var fahrenheit = document.getElementById("fahrenheit").value; // recebendo o valor em Fahrenheit e gaurdando em uma variável
    var celsius = document.getElementById("celsius").value;  // recebendo o valor em Celsius e gaurdando em uma variável

    if(isNaN(fahrenheit) || isNaN(celsius)){ // criando condicionais para Celsius e Fahrenheit 
        alert("digite um valor válido");
        return
    }else if(fahrenheit === ''){ // condição para transformar o valor recebido em um tipo Float para utilizar os calculos
        fahrenheit = (parseFloat(celsius) * 1.8) + 32
    }else if(celsius ===''){    // condição para transformar o valor recebido em um tipo Float para utilizar os calculos
        celsius = (parseFloat(fahrenheit - 32)) / 1.8;
    }

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1); // limitando o número de casas décimais que o resultado poderá ter
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1); // limitando o número de casas décimais que o resultado poderá ter

}

function clearForm() { // Função feita para limpar os campos e resetar o programa
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}
