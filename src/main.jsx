import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ThemeProvider from "./context/ThemeContext";
// import UserProvider from "./context/UserContext";
import  store  from './store/store.js';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
   <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   </StrictMode>
  //  <ThemeProvider>
  //   <UserProvider>
  //     <App />
  //   </UserProvider>
  // </ThemeProvider>
)
