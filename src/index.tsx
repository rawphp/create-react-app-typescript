import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './containers/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { history, persistor, store } from './store';

const appElement = document.getElementById('root') as HTMLElement;

const appRender = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

render(appRender(), appElement);

registerServiceWorker();
