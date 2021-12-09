var listaDePeca = ["amortecedor", "filtro de ar", "motor"]

if(listaDePeca.length <10) {
    //é possível cadastrar 
    console.log("É possível cadastrar mais peças")
}else {
    console.log("Não há mais espaço na lista")
}

let peso = 50;
if (peso <100){
    console.log("A peça deve pesar no mínimo 100 gramas")
} else {
    console.log("A peça possui peso adequado")
}
 
let nomePeca = "Disco de freio"
if (nomePeca.length>3){
    console.log("O nome da peça está adequado para o cadastro")
}else{
    console.log("O nome deve ter mais de três caracteres, digite um nome adequado")
}


