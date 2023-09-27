import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App.jsx";


const domNode = document.getElementById('ctc-id');
const root = createRoot(domNode);
root.render(<App/>);
