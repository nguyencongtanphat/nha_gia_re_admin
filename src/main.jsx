import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//main route here
import DashBoard from "./modules/dashboard/dashboard";
import PendingPost from "./modules/post/screens/PendingPost";
import Root from "./Root";
const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {  
        children:[
          {
            index: true, 
            element: <DashBoard /> 
          },
          {
            path: "pending_post",
            element: <PendingPost />,
          },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);