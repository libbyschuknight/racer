function get_active_cell(player) {
	return $('.racer_table #'+player+'_strip .active');
}

function move(player) {
	var active_cell = get_active_cell(player);
	active_cell.next().addClass("active");
	active_cell.removeClass("active");
	
	check_victory(active_cell, player)
}

function input(key) {
	if (game_running == 1) {
		if (key.keyCode == 65){
			move("player1");
		}
		if (key.keyCode == 76){
			move("player2");
		}
	}
	else {
		return
	}
}

$(document).ready(function() {
	$(document).on('keyup', input)
	// move("player1")	
})

var game_running = 1

function check_victory(cell, player) {
	if (cell.hasClass("finish"))
	{
		game_running = 0;
		alert(player.toString() + ' wins')
	}
}