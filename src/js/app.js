import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Layout from "./components/layout.component"
import Store from "./store"

const app = document.getElementById('app');

ReactDOM.render(<Provider store={Store}><Layout /></Provider>, app);
