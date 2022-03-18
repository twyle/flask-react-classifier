import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react'
import axios from "axios";

function App() {

  const [currentMessage, setCurrentMessage] = useState('')

  useEffect(() => {
    const fetchTime = async () => {

      const resp = await axios.post('https://flask-ml-flask-api-dev.herokuapp.com/api/ml',
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      },
        data: [
          [
              -1.51252897,  2.60303366,  0.73967547, -0.61977213, -2.24943245,
              -4.15435048,  2.57199532, -0.58641515, -2.17796773,  0.02319598,
              0.60873559, -0.55713057,  1.68452483, -0.90876967, -1.9136032 ,
              0.84229733, -1.33070513,  1.35101575,  2.59526262,  0.43163163
          ],
          [
              -1.51252897,  2.60303366,  0.73967547, -0.61977213, -2.24943245,
              -4.15435048,  2.57199532, -0.58641515, -2.17796773,  0.02319598,
              0.60873559, -0.55713057,  1.68452483, -0.90876967, -1.9136032 ,
              0.84229733, -1.33070513,  1.35101575,  2.59526262,  0.43163163
          ],
          [
              -0.367237  , -0.43900969, -1.05005479, -0.03204237,  0.75950004,
              0.61847062, -0.90968979, -0.60568   ,  0.62134674, -0.8605654 ,
              -0.61677536, -1.34799578, -1.15168111, -1.18097248,  0.41064316,
              2.11129633, -0.42135681, -0.32304237, -0.41079371, -1.05598981
          ],
          [
              -0.367237  , -0.43900969, -1.05005479, -0.03204237,  0.75950004,
              0.61847062, -0.90968979, -0.60568   ,  0.62134674, -0.8605654 ,
              -0.61677536, -1.34799578, -1.15168111, -1.18097248,  0.41064316,
              2.11129633, -0.42135681, -0.32304237, -0.41079371, -1.05598981
          ]
      ]
      });
      console.log(resp.data)
      setCurrentMessage(resp.data);
    };
    fetchTime();
  }, [])

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
          Learn React
        </a>
        <p>{currentMessage}</p>
      </header>
    </div>
  );
}

export default App;
