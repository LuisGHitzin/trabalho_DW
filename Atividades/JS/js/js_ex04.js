var num, idade, cpf

num=prompt("Entre com um valor")
if(num % 2==0){
    alert("O número é par")
}
else{
    alert("O número é impar")
}

if(num % 7==0 ){
    alert("O numero é divisivel por 7")
}
else{
    alert("O numero nâo é divisivel por 7")
}

idade=prompt("Digite sua idade")
if(idade > 17){
    alert("vc é maior de 18")
    cpf=prompt("digite seu CPF")
    alert("Seu CPF é"+cpf)
}
else{
    alert("vc é menor de 18")
}
