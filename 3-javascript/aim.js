			var randomInterval;
			var startTime = new Date().getTime();
			var topMargin = 0, leftMargin = 0;
			var topScore = 0;
			var firstClick = true; //To change the top score at the beginning
			var timeElapsed = 0; //How long it took to click the circle
			
			function getShape() { //Should display a random shape
				document.getElementById("shape").style.display = "block"; //displays shape
				document.getElementById("shape").style.top = topMargin + "px";
				document.getElementById("shape").style.left = leftMargin + "px";
				document.getElementById("shape").style.backgroundColor = getRandomColor();
				startTime = new Date().getTime(); //restart clock
				randomInterval = Math.floor(Math.random()*3 + 1) * 1000; //Randomly generates number 1 to 3; times 1000 to turn it to milliseconds
			}
			
			function getMargins() {
				topMargin = Math.random() * 500;
				leftMargin = Math.random() * 800;
			}
			
			function updateTopScore() {
				topScore = timeElapsed;
				document.getElementById("shortestTime").innerHTML = "Shortest time: " + topScore + " seconds!";
			}
			
			function getRandomColor() {
				var letters = "0123456789ABCDEF".split('');
				var color = "#";
				
				for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			}
			document.getElementById("shape").onclick = function() {
				document.getElementById("shape").style.display = "none";
				var endTime = new Date().getTime();
				timeElapsed = endTime - startTime;
				timeElapsed /= 1000;
				document.getElementById("result").innerHTML = "Your time: " + timeElapsed + " seconds.";
				
				if (firstClick) { //To update the top score the first time clicked
					updateTopScore();
					firstClick = false;
				}
				
				if (timeElapsed < topScore) { //If a new top score has been scored
					updateTopScore();
				}
				
				getMargins();
				
				setTimeout(getShape,randomInterval); //Runs the getShape function at random interval
				
			}
			
			