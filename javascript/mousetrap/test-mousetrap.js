
 Mousetrap.bindGlobal('ctrl+shift+p', function() {
    alert("mousetrap");
 });


/*

	(function() {
			var letterHolder = document.getElementById("demoLetters");

			["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"].forEach(function(letter) {
				// Create elements to represent them
				var letterSpan = document.createElement("span");
				letterSpan.innerHTML = letter;
				letterHolder.appendChild(letterSpan);

				// Create listeners for them - regular
				(function(el) {
					Mousetrap.bind(letter, function() {
						el.className = "regular";
					});
				})(letterSpan);

				// Create listeners for them - shift
				(function(el) {
					Mousetrap.bind("shift+" + letter, function() {
						el.className = "shift";
					});
				})(letterSpan);
			});

			Mousetrap.bind("c e s c", function() {
				// document.getElementById("cescHolder").innerHTML = "<img src='cesc-wenger.jpeg' alt='Legend' />";
				setTimeout(function() { alert("Come home el capitan!"); }, 500);
			})
		})();

*/
