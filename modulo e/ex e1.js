function contar(){
    var inicio= Number(document.getElementById("numIni").value)
    var fim= Number(document.getElementById("numFim").value)
    var passo= Number(document.getElementById("numPas").value)
    var resposta= document.getElementById("resposta")
    var numero= " "
   for(var i= inicio; i <= fim; i = i + passo){
        numero=  numero +" " +  i + "\uD83D\uDC49"
    }
    resposta.innerHTML= `contando: <br>  ${numero} &#127937;` 
}