import './App.css';
import Movies from './Components/Movies'
import Movie from './Components/Movie'

function App() {
  return (
    <div className="App">
      <div>
        <h1>MY FAVORITE MOVIE</h1>
        {/* <Movie movie={{name: 'Whatever', director: 'Whoever'}} /> */}
      </div>
      <Movies />
    </div>
  );
}

export default App;
