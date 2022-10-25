import logo from './logo.svg';
import './App.css';

const App = () => {

  useEffect(() => {
    const fecthposts = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/v1/posts')
      } catch (error) {
        
      }
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HelloWorld
        </a>
      </header>
    </div>
  );
}

export default App;
