

function play(idPlayer) {

    var player = document.querySelector('#' + idPlayer);
    player.play();
    
    var iconPlay = document.getElementById("icon-play");
    var iconPause = document.getElementById("icon-pause");
    var iconStop = document.getElementById("icon-stop");
    if (player.played) {
        iconPlay.setAttribute("fill", "green");
        iconPause.setAttribute("fill", "black");
        iconStop.setAttribute("fill", "black");
    }
    else {
        iconPlay.setAttribute("fill","black");
    }
    
}

function pause(idPlayer) {

    var player = document.querySelector('#' + idPlayer);
    player.pause();

    var iconPlay = document.getElementById("icon-play");
    var iconPause = document.getElementById("icon-pause");
    var iconStop = document.getElementById("icon-stop");
    if (player.paused) {
        iconPlay.setAttribute("fill", "black");
        iconPause.setAttribute("fill", "orange");
        iconStop.setAttribute("fill", "black");
    }
    else {
        iconPause.setAttribute("fill", "black" );
    }
}


function resume(idPlayer) {

    var player = document.querySelector('#' + idPlayer);
    player.currentTime = 0;
    player.pause();

    var iconPlay = document.getElementById("icon-play");
    var iconPause = document.getElementById("icon-pause");
    var iconStop = document.getElementById("icon-stop");
    if (player.currentTime == 0) {
        iconPlay.setAttribute("fill", "black");
        iconPause.setAttribute("fill", "black");
        iconStop.setAttribute("fill", "red");
    } 
    else {
        iconStop.setAttribute("fill", "black");
    }

}