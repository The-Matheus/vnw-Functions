//1 - crie uma função que exiba uma mensagem no console

function msg (){
    console.log("Hello World!")
}
msg()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nomePessoa (nome){
    console.log(`Meu nome é ${nome}`)
}
nomePessoa("Matheus")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function sobre (nome, idade, musica, musicas){
    console.log(`Meu nome é ${nome} tenho ${idade} anos e gosto de escutar musica ${musica} e ${musicas}`)
}
sobre("Matheus", 24, "indie", "alternativa")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function lazer (filme, musica){
    console.log(`Um filme: ${filme} e uma musica: ${musica}`)
}
lazer("Paris, Texas", "The Blackest Day by Lana del Rey")

//*Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(num){
    return num*3
}

console.log(triplo(10))
