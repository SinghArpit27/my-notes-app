import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Auth0Provider
        domain="dev-b45defo0qefans00.us.auth0.com"
        clientId="0CnN1xixrjirHZw2aU4YqqNVoUgJrqnz"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}
    >
    <App />

    </Auth0Provider>
)
