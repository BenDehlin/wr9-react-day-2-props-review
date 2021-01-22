Props review for WR9.

App.js is a functional component that only renders the Movies.js component
###
Movies.js is a class component that stores the movies array on state.
###
Movies Component maps over the movies piece of state and renders a Movie
Component for each movie in the array. It also renders the AddMovie form.
###
Movie.js is a functional component that displays movie data that it receives
as a prop from the Movies Component. It also has a button to delete movies
out of the array.
###
AddMovie is a class component that just displays a form to add new movies to
the array.

###
More detailed notes on the functionality of each component can be found in the component.
Currently there is no styling for the app.