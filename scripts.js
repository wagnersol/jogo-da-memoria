(function(){
    startGame();

    function startGame(){
        for(var i = 0; i < 25; i++){
        var card = document.getElementById("card" + i);
        card.style.left = (i === 0|| 13)? 5 + "px": i * 165 + 5 + "px";
        }

    }
}())