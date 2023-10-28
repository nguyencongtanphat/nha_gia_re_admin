import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Index from "./routes/index";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//main route here
import DashBoard from "./modules/dashboard/dashboard";
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
          }
        ]
      }
    ]
  }
])

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           { 
//             index: true, 
//             element: <Index /> 
//           },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction,
//           },
//           {
//             path: "contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: contactLoader,
//             action: editAction,
//           },
//           {
//             path: "contacts/:contactId/destroy",
//             action: destroyAction,
//             errorElement: <div>Oops! There was an error.</div>,
//           },
//         ]
//       }
//     ],
//   },
  
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);