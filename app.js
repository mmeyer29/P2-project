var ship = "";
var form = document.querySelector(".user-entry")

var vehicleData = new FormData

function getPilots(event) {
	var vehicleData = new FormData(form)
	ship = vehicleData.get("vehicle")
	console.log(ship)
	fetch("https://swapi.co/api/starships/")
		.then(function(response, request) {
			return response.json()
		})
		.then(function(response) {
			for (var i = 0; i < response.results.length; i++) {
				console.log("poop", response.results[i].name, ship)
				if (response.results[i].name === ship) {
					if (response.results[i].pilots.length === 0) {
						var $li = document.createElement("li")
						$li.innerHTML = JSON.stringify("No records found.")
						var $ul = document.querySelector(".pilots")
						$ul.appendChild($li)
						console.log("no records found");
					}
					for (var j = 0; j < response.results[i].pilots.length; j++) {
						fetch(response.results[i].pilots[j])
							.then(response => response.json())
							.then(function(response) {
								console.log(response);
								var $li = document.createElement("li")
								$li.innerHTML = JSON.stringify(`Name: ${response.name} Height: ${response.height} Weight: ${response.mass} Hair: ${response.hair_color} Skin: ${response.skin_color} Eyes: ${response.eye_color}  Birth Year: ${response.birth_year}`)
								var $ul = document.querySelector(".pilots")
								$ul.appendChild($li)
							})
					}
				}
			}
		})
}

form.addEventListener('submit', function(event) {
	event.preventDefault()
	var $ul = document.querySelector(".pilots")
	$ul.innerHTML = "";
	var pilots
	getPilots()
	//console.log("may the force be with you");
})
