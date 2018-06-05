// Exercise 1:

$.getJSON('https://swapi.co/api/')
  .then(data => console.log(data));

// Exercise 2:

$.getJSON("https://swapi.co/api/films/").then(data => { data.results.forEach((val) => console.log(val.title + ' - ' + val.director)) })

// Exercise 3:

$.getJSON("https://swapi.co/api/planets/1/")
  .then((data) => {
    data.residents.forEach((val) => {
      $.getJSON(val).then((data) => console.log(data))
    })
  });

// Exercise 4:
let swRace = [$.getJSON('https://swapi.co/api/people/1/'), $.getJSON('https://swapi.co/api/people/4/')]

Promise.race(swRace).then(winner => {
  if (winner.name === 'Darth Vader') {
    console.log(winner.name, 'has conquered the galaxy!')
  } else {
    console.log(winner.name, 'has saved the galaxy!')
  }
})

