import React from 'react'
import ReactDOM from 'react-dom/client'
// import {RouterProvider} from "react-router-dom";
//
// import {router} from "./routes/index.jsx";

import './index.less'
import './assets/icon_font/iconfont.js'
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<RouterProvider router={router}/>*/}
    <App />
  </React.StrictMode>,
)
