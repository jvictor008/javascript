function vetor(){
var sim= document.getElementById("sim")
let x= ["a1", "a2", "a3"]
x.push("a4")
var resposta= ""
for(let pos in x){
    resposta= resposta + " " +x[pos]
}
sim.innerHTML= resposta
}
