var vetor= []
function adicionar(){
    var num = document.getElementById("num").value;
    var resposta= document.getElementById("resposta")
    var lista= document.getElementById("lista")
    var numAd= "" 
    if(1 +1 == 2){
        vetor.push(num)
        resposta.innerHTML = ""
    }
    for(let i in vetor){
        numAd= numAd + " " + vetor[i] +"\n"
    }

   lista.innerHTML= numAd

    
    
}
function finalizar(){
    var resposta= document.getElementById("resposta")
    var total= `Ao todo temos ${vetor.length} de números`
    var crescente= vetor.sort()
    var maior= `O maior número da lista é ${crescente[0]}`
    var fim= vetor.length
    var menor= `O menor número da lista é ${crescente[fim - 1]}`
    var calSoma=Number(0)
    for(let i = fim - 1; i >= 0; i--){
        calSoma=calSoma + Number(vetor[i])
     
    }
    var soma= `A soma dos valores é ${calSoma}`
    var calMedia= calSoma / fim - 1
    var media= `A media dos valores é ${calMedia}`
    resposta.innerHTML = total + "\n" + maior + "\n" + menor + "\n" + soma + "\n" + media
   
}