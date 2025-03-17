import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router';

import 'src/styles/main.scss';

import App from 'src/components/App';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
