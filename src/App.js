import React from 'react';
import './App.css';
import BookComponents from './components/bookComponents'
import HookBookContainer  from './components/HookBookContainer'
import {Provider} from 'react-redux';
import Store from './redux/store'



function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BookComponents/>
      <hr/>
      <HookBookContainer/>
    </div>
    </Provider>
  );
}

export default App;
