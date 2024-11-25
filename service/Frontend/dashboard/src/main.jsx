import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
)