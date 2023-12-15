function verificarIdade(){
    var sexo= document.getElementsByName("sexo");
    var resultado= document.getElementById("resultado")
    var foto=document.getElementById("foto")
    var anoNas= document.getElementById("data").value
    var data= new Date()
    var ano= data.getFullYear()
    var idade= ano - anoNas
    if(idade >= 60 && idade <= 93){
        if(sexo[0].checked){
            resultado.innerHTML=`Você é um idoso de ${idade} anos ` 
            foto.src= "imagens/idoso-mas.jpg";
        }
        if(sexo[1].checked){
            resultado.innerHTML=`Você é uma idosa de ${idade} anos` 
            foto.src= "imagens/idoso-fem.jpg";
        }
    }
    if(idade >= 20 && idade < 60){
        if(sexo[0].checked){
            resultado.innerHTML=`Você é um homem de ${idade} anos`
            foto.src= "imagens/adulto-mas.jpg"; 
        }
        if(sexo[1].checked){
            resultado.innerHTML=`Você é uma mulher de ${idade} anos`
            foto.src= "imagens/adulto-fem.jpg"; 
        }
    }
    if(idade >= 13 && idade < 20){
        if(sexo[0].checked){
            resultado.innerHTML=`Você é um adolecente de ${idade} anos` 
            foto.src= "imagens/adolecente-mas.jpg";
        }
        if(sexo[1].checked){
            resultado.innerHTML=`Você é uma adolecente de ${idade} anos` 
            foto.src= "imagens/adolecente-fem.jpg";
        }
    }
    if(idade < 13){
        if(sexo[0].checked){
            resultado.innerHTML=`Você é um menino de ${idade} anos` 
            foto.src= "imagens/criança-mas.jpg";
        }
        if(sexo[1].checked){
            resultado.innerHTML=`Você é uma menina de ${idade} anos`
            foto.src= "imagens/criança-fem.jpg"; 
        }
    }
}
