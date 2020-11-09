import logo from './logo.svg';
import './App.css';
import post from './axios.learning/post.learn';

function App() {
  post();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modified text
        </p>
      </header>
    </div>
  );
}

export default App;
