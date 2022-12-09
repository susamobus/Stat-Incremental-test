var player = {}

function Tick(ticks) {
    player.points = ExpantaNum.add(player.points,PointGen())
}

var interval = SetInterval(function() {
    Tick(1)
},50)