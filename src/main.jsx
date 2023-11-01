import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//main route here
import DashBoard from "./modules/dashboard/dashboard";
import PendingPost from "./modules/post/screens/PendingPost";
import ApprovedPost from './modules/post/screens/ApprovedPost'
import Root from "./Root";
import Package from "./modules/package/screens/Package"
import Voucher from "./modules/voucher/screens/Voucher"
import PendingReporting from "./modules/reporting/screens/PendingReporting"
import ApprovedReporting from "./modules/reporting/screens/ApprovedReporting"

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
          {
            path: "approved_post",
            element: <ApprovedPost />,
          },
          {
            path: "package",
            element: <Package />,
          },
          {
            path: "voucher",
            element: <Voucher />,
          },
          {
            path: "pending_reporting",
            element: <PendingReporting/>,
          },
          {
            path: "approved_reporting",
            element: <ApprovedReporting/>,
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