import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/index.jsx";

import './index.less'
import '//at.alicdn.com/t/c/font_4052113_fihvvqxz2j.js'
// import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/*<App />*/}
  </React.StrictMode>,
)
