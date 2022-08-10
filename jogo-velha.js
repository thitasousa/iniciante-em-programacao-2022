const X = "X";
const O = "O";

var player = X;
var rodada = 0;

let areaJogo=[[],[],[]];

let encerrouPartida = false;


function reiniciarJogo() {

    location.reload();

}



function valoresIguais(valores, jogador){
    return valores.every(function(valor){
        return valor === jogador;
    });
}

function jogadorVenceu(player){

    const venceuLinha1 = valoresIguais(
        [areaJogo[0][0], areaJogo[0][1], areaJogo[0][2]], player
    );
    const venceuLinha2 = valoresIguais(
        [areaJogo[1][0], areaJogo[1][1], areaJogo[1][2]], player
    );
    const venceuLinha3 = valoresIguais(
        [areaJogo[2][0], areaJogo[2][1], areaJogo[2][2]], player
    );
    const venceuColuna1 = valoresIguais(
        [areaJogo[0][0], areaJogo[1][0], areaJogo[2][0]], player
    );
    const venceuColuna2 = valoresIguais(
        [areaJogo[0][1], areaJogo[1][1], areaJogo[2][1]], player
    );
    const venceuColuna3 = valoresIguais(
        [areaJogo[0][2], areaJogo[1][2], areaJogo[2][2]], player
    );

    const venceuDiagonal1 = valoresIguais(
        [areaJogo[0][0], areaJogo[1][1], areaJogo[2][2]], player
    );
    const venceuDiagonal2 = valoresIguais(
        [areaJogo[0][2], areaJogo[1][1], areaJogo[2][0]], player
    );

    return (venceuLinha1 || venceuLinha2 || venceuLinha3 || venceuColuna1 || venceuColuna2 || venceuColuna3 || venceuDiagonal1 || venceuDiagonal2);
}




function selecionarArea(posicaoLinha, posicaoColuna) {

    rodada++;
    //console.log(rodada);
    if(rodada == 9){
        exibirResultado("Jogo empatado !");

        rodada=0;
    }

    if(encerrouPartida){
        return;
    }


    if(player == X){

        const linha = posicaoLinha -1;
        const coluna = posicaoColuna -1;

        if(areaJogo[linha][coluna] != undefined){
            return;
        }


        areaJogo[linha][coluna] = player;

        desenharSimbolo(player, posicaoLinha, posicaoColuna);

        if(jogadorVenceu(player)){
            
            exibirResultado("O vencedor foi o jogador X !");

            encerrouPartida = true;
            rodada=0;
        }

        marcarJogadorAtivo(O);

        player = O;

    }else{

        const linha = posicaoLinha -1;
        const coluna = posicaoColuna -1;

        if(areaJogo[linha][coluna] != undefined){
            return;
        }

        areaJogo[linha][coluna] = player;

        desenharSimbolo(player, posicaoLinha, posicaoColuna);

        if(jogadorVenceu(player)){
            
            exibirResultado("O vencedor foi o jogador O !");

            encerrouPartida = true;
            rodada=0;
        }

        marcarJogadorAtivo(X);

        player = X;
        
    }

}


