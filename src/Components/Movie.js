const Movie = (props) => {
    // our Movie component takes in props from its parent (Movies.js) that we
    // can then access and use here. The 3 props we have are the movie data,
    // the index, and a delete function to remove an item from the array
    return (
        <div>
            {/* displaying the movie name found on props.movie.name */}
            <h2>Title: {props.movie.name}</h2>
            {/* displaying the movie direction found on props.movie.director */}
            <h2>Director: {props.movie.director}</h2>
            {/* button to delete a movie. delete function found on props.deleteMovie
            and we pass in props.index so that function up in Movies.js can identify
            the movie we want to delete */}
            <button onClick={() => props.deleteMovie(props.index)}>Delete Movie</button>
        </div>
    )
}

export default Movie