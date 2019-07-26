import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { App } from './components/App'
import { TrendsService } from './services/TrendsService'

const httpClient = {
  get(url) {
    return fetch(url).then(response => response.json())
  }
}

ReactDOM.render(<App trendsService={new TrendsService(httpClient)}/>, document.getElementById('root'));

serviceWorker.unregister();
