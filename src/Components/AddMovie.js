import { Component } from "react"

class AddMovie extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      director: "",
    }
  }

  //universal input field change handler. can be used for any input field as
  //long as the input field has a name with a string value of the key on state
  //that the input field is tied to, a value that is the value on state it's tied
  //to, and an onChange that references this function
  changeHandler = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        {/* input fields for name and director, they are tied to this.state.name
          and this.state.director respectively because of the name and value
          we gave them */}
        <input
          name="name"
          value={this.state.name}
          //   onChange={(event) => this.changeHandler(event)}
          onChange={this.changeHandler}
        />
        <input
          name="director"
          value={this.state.director}
          onChange={this.changeHandler}
        />
        {/* button that will invoke the addMovie function we created in Movies.js
        and passed down as a prop. It takes in an object with keys of name and director
        and values of the name piece of state and the director piece of state */}
        <button
          onClick={() =>
            this.props.addMovie({
              name: this.state.name,
              director: this.state.director,
            })
          }
        >
          Add Movie
        </button>
      </div>
    )
  }
}

export default AddMovie
