var vote_count = {
	cyan : 0,
	blueviolet : 0,
	brown : 0,
	darkgreen : 0,
	pink : 0,
	red : 0,
	violet : 0,
	blue : 0,
	lightgreen : 0,
	redpink: 0,
};

$(document).ready(
	function(){
	$("#div1").click(
			function(){
				vote_count.cyan++;
				$("#p1vote").html("("+vote_count.cyan+")");
			}
		);
	$("#div2").click(
			function(){
				vote_count.blueviolet++;
				$("#p2vote").html("("+vote_count.blueviolet+")");
			}
		);
	$("#div3").click(
			function(){
				vote_count.brown++;
				$("#p3vote").html("("+vote_count.brown+")");
			}
		);
	$("#div4").click(
			function(){
				vote_count.darkgreen++;
				$("#p4vote").html("("+vote_count.darkgreen+")");
			}
		);
	$("#div5").click(
			function(){
				vote_count.pink++;
				$("#p5vote").html("("+vote_count.pink+")");
			}
		);
	$("#div6").click(
			function(){
				vote_count.red++;
				$("#p6vote").html("("+vote_count.red+")");
			}
		);
	$("#div7").click(
			function(){
				vote_count.violet++;
				$("#p7vote").html("("+vote_count.violet+")");
			}
		);
	$("#div8").click(
			function(){
				vote_count.blue++;
				$("#p8vote").html("("+vote_count.blue+")");
			}
		);
	$("#div9").click(
			function(){
				vote_count.lightgreen++;
				$("#p9vote").html("("+vote_count.lightgreen+")");
			}
		);
	$("#div10").click(
			function(){
				vote_count.redpink++;
				$("#p10vote").html("("+vote_count.redpink+")");
			}
		);
	



	}
);