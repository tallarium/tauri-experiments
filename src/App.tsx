import React from 'react'
import logo from './logo.svg'
import tauriCircles from './tauri.svg'
import tauriWord from './wordmark.svg'
import './App.css'

import { listen } from '@tauri-apps/api/event'

async function setup() {
  for (const event of [
    'tauri://resize',
    'tauri://move',
    'tauri://close-requested',
    'tauri://focus',
    'tauri://blur',
  ]) {
    await listen(event, (...args) => {
      console.log(event, args);
    });
  }
}

setup();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-logo">
          <img src={tauriCircles} className="App-logo rotate" alt="logo" />
          <img src={tauriWord} className="App-logo smaller" alt="logo" />
        </div>
        <a
          className="App-link"
          href="https://tauri.studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tauri
        </a>
        <img src={logo} className="App-logo rotate" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
