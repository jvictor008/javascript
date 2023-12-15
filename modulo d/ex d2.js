function carregar(){
    var img = document.getElementById("imagem");
    var texto= document.getElementById("texto");
    var body=document.getElementById("body")
    var data= new Date()
    var hora= data.getHours()
    texto.innerHTML=`Agora são ${hora} horas`;
    if(hora >= 0 && hora < 6){
        img.src= "imagens/madrugada.jpg";
        body.style.backgroundColor= " #644ea5  "
    }
    if(hora >= 6 && hora < 12){
        img.src= "imagens/manha.jpg";
    }
    if(hora >=12 && hora < 18){
        img.src= "imagens/tarde.jpg";
        body.style.backgroundColor= "  #f5b245  "
    }
    if(hora >= 18){
        img.src= "imagens/noite.jpg";
        body.style.backgroundColor= " #8b97d7 "
    }
   
}