/*Funções sem retorno */
function somar(n1,n2){
    var resultado
    resultado=n1+n2
    alert("Função soma sem retorno "+resultado)
}

/*Funções com retorno */
function sub(n1,n2)
{
    var resultado
    resultado=n1-n2
    return(resultado)
}

somar (35,10)

var r
r=sub(8,7)
alert("Função subtrair foi chamada e retornou o seguinte resultado "+r )