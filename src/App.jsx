import { h } from 'preact';
import logo from './logo.png';
import csz from 'csz';

function App() {
  return (
    <div className={csz`text-align:center;`}>
      <header className={csz`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
      `}>
        <img src={logo} className={csz`

  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;


@keyframes App-logo-spin {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}
        `} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className={csz` color: #61dafb; `}
          href="https://preactjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </header>
    </div>
  );
}

export default App;
