import {createBrowserRouter} from "react-router-dom";
import App from "/@/App.jsx";
import ErrorPage from "/@/routes/ErrorPage/index.jsx";
import Home from "/@/routes/Home/index.jsx";
import Contact from "/@/routes/Contact/index.jsx";
import WorkProgress from "/@/routes/WorkProgress/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: '/home',
    //     element: <Home />,
    //     errorElement: <ErrorPage/>,
    //   },
    //   {
    //     path: '/contacts/:id',
    //     element: <Contact />,
    //     errorElement: <ErrorPage/>,
    //   },
    //   {
    //     path: '/WorkProgress',
    //     element: <WorkProgress />,
    //     errorElement: <ErrorPage/>,
    //   },
    // ],
  },
]);


