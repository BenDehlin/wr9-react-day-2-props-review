import { Component } from "react"
import Movie from "./Movie"
import AddMovie from "./AddMovie"

class Movies extends Component {
  constructor() {
    super()
    //Storing an array of movies on state. Each item in the array is an object
    //with a movie name and a director
    this.state = {
      movies: [
        { name: "Star Wars", director: "George Lucas" },
        { name: "Hunt for Red October", director: "John McTiernan" },
        {
          name: "Lord of the Rings, Return of the King",
          director: "Peter Jackson",
        },
      ],
    }
  }

  //function to delete movies out of the movies array. Function takes in an
  //index to identify which movie to delete
  deleteMovie = (index) => {
    const { movies } = this.state
    // const movies = this.state.movies
    movies.splice(index, 1)
    this.setState({ movies })
  }

  //function to add movie to the movies array. Takes in a movie object as a
  //parameter and then spreads in the existing movies array into a new array
  //that will be stored on state but with the new movie object added
  addMovie = (movie) => {
    const { movies } = this.state
    this.setState({
      movies: [movie, ...movies],
    })
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        {/* The AddMovie component that will be a "form" that we can use to add movies to 
        our array. This component takes in the addMovie function as a prop */}
        <AddMovie addMovie={this.addMovie} />
        {/* We map over our movies array to render a movie component for each movie
        in our array */}
        {this.state.movies.map((movie, index) => {
          return (
              //The movie component takes in 3 props
              //a movie object with the data from an individual movie in our array
              //an index so that we can identify this movie in the array for deleting
              //the deleteMovie function that we will invoke in a button onClick in the Movie Component
            <Movie movie={movie} index={index} deleteMovie={this.deleteMovie} />
          )
        })}
      </div>
    )
  }
}

export default Movies
