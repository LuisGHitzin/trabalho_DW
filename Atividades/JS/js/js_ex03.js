var n1, n2, subtracao

subtracao=n1-n2
n1=prompt("Entre com um valor")
n2=prompt("Entre com um valor")
subtracao=parseInt(n1)-parseInt(n2)
if(subtracao<0){
    document.write('<h2>O resultado da soma é menor que 0</h2>')
    alert("O resultado da soma é menor que 0")
}   
else{
    document.write("<h2>"+subtracao+"</h2>")
    alert("O resultado da soma é "+subtracao)
}
