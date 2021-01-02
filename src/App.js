import logo from './logo.svg';
import './App.css';

const app = () => {

  const APP_ID = 'c7e77fe5';
  const APP_KEY = '275dbeadaa5f29f80e32e61261c24bd5';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
