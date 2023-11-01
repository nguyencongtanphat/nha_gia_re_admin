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
import User from "./modules/user/screens/User"
import PendingUser from "./modules/user/screens/PendingUser"
import VertificatedUser from "./modules/user/screens/VertificatedUser"
import Blog from "./modules/blog/screens/Blog"

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
          {
            path: "user",
            element: <User/>,
          },
          {
            path: "verificated_user",
            element: <VertificatedUser/>,
          },
          {
            path: "pending_user",
            element: <PendingUser/>,
          },
          {
            path: "blog",
            element: <Blog/>,
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