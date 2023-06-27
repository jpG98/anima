x1 = 0;
x2 = 0;

$("#cima").click(() =>{
        x2 -= 20 
        $("#personagem").animate({ top: x2 + "px" }, { duration: 200 })
    }
)

$("#baixo").click(() =>{
        x2 += 20  
        $("#personagem").animate({ top: x2 + "px" }, { duration: 200 })
    }
)

$("#esquerda").click(() =>{
        x1 -= 20
        $("#personagem").animate({ left: x1 +"px" }, { duration: 200 })
    }
)

$("#direita").click(() =>{
        x1 += 20
        $("#personagem").animate({ left: x1 + "px" }, { duration: 200 } )
    }
)



