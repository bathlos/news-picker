import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApiContextProvider } from 'context/ApiContext/ApiContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <ApiContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiContextProvider>
  </>,
);
