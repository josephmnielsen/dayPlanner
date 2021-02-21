// Create a function to display current date and time in jumbotron
// Create a function to save user input to local storage by clicking "save"
// Create a function to change background color of text-area depending on hour


document.getElementById('currentDay').textContent = moment().format('MMMM Do YYYY, h:mm:ss a')

let arr = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm']
let currentTime = moment().format('LT')
console.log(currentTime)
let agendaTime = document.getElementById('timeOfDay').textContent
console.log(agendaTime)


  if (agendaTime < currentTime ) {
    document.getElementById('agenda').className.add('past')

  } else if (agendaTime = currentTime ) {
    document.getElementById('agenda').className.add('present')

  } else if (agendaTime > currentTime) {
    document.getElementById('agenda').className.add('future')
  
  }


