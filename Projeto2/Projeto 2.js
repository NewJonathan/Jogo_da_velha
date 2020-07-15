
var result = false;
var p1 = 0;
var p2 = 0;
var j1 = prompt("Nome do Jogador 1:");
var j2 = prompt("Nome do Jogador 2:");
const player1 = "X";
const player2 = "O";
var vez_jogador = player1
var revezar = 0;

function reiniciar(){
  
    p1 = 0;
    p2 = 0;
    j1 = prompt("Nome do Jogador 1:");
    j2 = prompt("Nome do Jogador 2:");
    document.getElementById("resultado1").innerHTML = ""
    vez_jogador = player1;
    revezar = 0;
    iniciar_jogo();
    
    }

function iniciar_jogo(){

   if (revezar % 2 == 0){
       vez_jogador = player1
   }else{
       vez_jogador = player2
   }

    document.getElementById("resultado1").innerHTML = ""  
    document.getElementById("a1").setAttribute("jogada", "");
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").setAttribute("jogada", "");
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").setAttribute("jogada", "");
    document.getElementById("a3").innerHTML = "";

    document.getElementById("b1").setAttribute("jogada", "");
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").setAttribute("jogada", "");
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").setAttribute("jogada", "");
    document.getElementById("b3").innerHTML = "";

    document.getElementById("c1").setAttribute("jogada", "");
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").setAttribute("jogada", "");
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").setAttribute("jogada", "");
    document.getElementById("c3").innerHTML = "";
   
   
    var result = false;
    if (p1 == 3){
        document.getElementById("resultado1").innerHTML = "<h1 style=\"font-size: 50px;\color: greenyellow;\">O vencedor foi o " + j1 +"!</h1>"
        result = true;
    }
    if (p2 == 3){
        document.getElementById("resultado1").innerHTML = "<h1 style=\"font-size: 50px;\color: greenyellow;\">O vencedor foi o " + j2 +"!</h1>"
        result = true;
    }
    
            
    jogador_da_vez();
    jogar();
    nomes();
    

    function nomes(){
        document.getElementById("j1").innerHTML = "<h1>" + j1 + ' = ' + p1 +  "</h1>"
        document.getElementById("j2").innerHTML = "<h1>" + j2 + ' = ' + p2 +  "</h1>"
    
    
    }
    
    function jogador_da_vez(){
        if (result) {return;}
        if (vez_jogador == player1) {
            document.getElementById("vez_de").innerHTML = "\
            <h1>Vez de " + j1 + "<img src=\"x.jpg\" width=\"50px\" height=\"50px\"><h1>\
            "
        } else {
            document.getElementById("vez_de").innerHTML = "\
            <h1>Vez de " + j2 + "<img src=\"bola.jpg\" width=\"50px\" height=\"50px\"><h1>\
            "
        }
    }
    
    function jogar(){
        var espacos = document.getElementsByClassName("espaco");
        for (var i = 0; i < espacos.length; i++){
        
            espacos[i].addEventListener("click", function(){
                if (result) {return;}
                if(this.getElementsByTagName("img").length == 0){
                    if (vez_jogador == player1){
                        this.innerHTML = "<img src=\"x.jpg\" width=\"50px\" height=\"50px\">";
                        this.setAttribute("jogada", player1);
                        vez_jogador = player2;
                    }else{
                        this.innerHTML = "<img src=\"bola.jpg\" width=\"50px\" height=\"50px\">";
                        this.setAttribute("jogada", player2);
                        vez_jogador = player1;
                    }
                    jogador_da_vez();
                    resultado();
                }
            }    
        )}   
            
    }
    
    function resultado(){
        var a1 = document.getElementById("a1").getAttribute("jogada");
        var a2 = document.getElementById("a2").getAttribute("jogada");
        var a3 = document.getElementById("a3").getAttribute("jogada");
    
        var b1 = document.getElementById("b1").getAttribute("jogada");
        var b2 = document.getElementById("b2").getAttribute("jogada");
        var b3 = document.getElementById("b3").getAttribute("jogada");
    
        var c1 = document.getElementById("c1").getAttribute("jogada");
        var c2 = document.getElementById("c2").getAttribute("jogada");
        var c3 = document.getElementById("c3").getAttribute("jogada");
        var Ganhador = "";
    
        if (((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) )
        {
            
            Ganhador = a1;
    
        }else if(((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) ) 
        {
            Ganhador = b2;
    
        }else if(((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")))
        {   
            Ganhador = c3;
    
        }else{
            if((a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) !=""){
                result = true;
                document.getElementById("resultado1").innerHTML = "<h1>Essa rodada terminou em velha</h1> "  
                revezar++
                
                
            

            }
        }

        if (Ganhador != ""){
            if (Ganhador == "X"){
                Ganhador = j1 + ' "X"';
                p1++;
            
                
            }else{

                Ganhador = j2 + ' "O"';
                p2++;
            

            }
        
            result = true;
            document.getElementById("resultado1").innerHTML = "<h1>O vencedor da rodada foi "  + Ganhador + "</h1>";
            document.getElementById("vez_de").innerHTML = " ";
            
            revezar++

        }
    }

}



   

















