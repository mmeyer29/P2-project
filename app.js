//let input = document.querySelector(".user-entry");
var ship = "";
var form = document.querySelector(".user-entry")

var vehicleData = new FormData

form.addEventListener('submit', function(event){
  event.preventDefault()
  var vehicleData = new FormData(form)
    ship = vehicleData.get("vehicle")
    console.log(ship)

})
var pilots
console.log("may the force be with you");
fetch("https://swapi.co/api/starships/")
  .then(function(response, request){
    return response.json()})
  .then(function(response){
    for (var i = 0; i < response.results.length; i++) {
      if(response.results[i].name == ship){
        console.log(response.results[i].pilots)

          for(var j = 0; j < response.results[i].pilots.length; j++) {
            fetch(response.results[i].pilots[j])
            .then(response => response.json())
            .then(function(response){
              console.log(response);
              var $li = document.createElement("li")
              $li.innerHTML = JSON.stringify(`${response.name} ${response.height}`)
              var $ul = document.querySelector(".pilots")
              $ul.appendChild($li)
              //var pilots = response.results[i].pilots
            })
         }
      }
  }
})
function display(pilots){
  console.log("pilots", pilots)
}
display(pilots)
