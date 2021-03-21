import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/App/component';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();