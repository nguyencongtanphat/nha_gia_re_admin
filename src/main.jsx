import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//main route here
import DashBoard, {loader as dashboardLoader} from './modules/dashboard/DashBoard';
import PendingPost, {
  loader as pendingPostLoader,
} from './modules/post/screens/PendingPost';
import ApprovedPost, {
  loader as approvedPostLoader,
} from './modules/post/screens/ApprovedPost';
import RejectedPost, {
  loader as rejectedPostLoader,
} from './modules/post/screens/RejectedPost';
import { action as postAction } from './modules/post/action';
import { action as developerAction } from './modules/developer/action';
import {action as userAction} from "./modules/user/action"
import {action as reportingAction} from "./modules/reporting/action"
import {action as packageAction} from "./modules/package/action"
import Root from './Root';
import Package, {loader as packageLoader} from './modules/package/screens/Package';
import Voucher, {loader as voucherLoader} from './modules/voucher/screens/Voucher';

import PendingReporting, {loader as pendingReportingLoader} from "./modules/reporting/screens/PendingReporting"
import ApprovedReporting, {loader as approvedReportingLoader} from "./modules/reporting/screens/ApprovedReporting"
import RejectedReporting, {loader as rejectedReportingLoader} from "./modules/reporting/screens/RejectedReporting"

import User, {loader as userLoader} from "./modules/user/screens/User";
import PendingUser from './modules/user/screens/PendingUser';
import VertificatedUser from './modules/user/screens/VertificatedUser';
import Blog from './modules/blog/screens/Blog';
import Developer, {
  loader as developerLoader,
} from './modules/developer/screens/DeveloperList';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          {
            index: true,
            element: <DashBoard />,
            loader: dashboardLoader,
          },
          {
            path: 'pending_post',
            element: <PendingPost />,
            loader: pendingPostLoader,
            action: postAction,
          },
          {
            path: 'approved_post',
            element: <ApprovedPost />,
            loader: approvedPostLoader,
            action: postAction,
          },
          {
            path: 'rejected_post',
            element: <RejectedPost />,
            loader: rejectedPostLoader,
            action: postAction,
          },
          {
            path: 'voucher',
            element: <Voucher />,
            loader: voucherLoader,
          },

          {
            path: "approved_reporting",
            element: <ApprovedReporting/>,
            loader: approvedReportingLoader,
            action: reportingAction,
          },
          {
            path: "pending_reporting",
            element: <PendingReporting/>,
            loader: pendingReportingLoader,
            action: reportingAction,
          },
          {
            path: "rejected_reporting",
            element: <RejectedReporting/>,
            loader: rejectedReportingLoader,
            action: reportingAction,
          },
          {
            path: 'verificated_user',
            element: <VertificatedUser />,
          },
          // {
          //   path: "pending_user",
          //   element: <PendingUser/>,
          // },
          {
            path: 'blog',
            element: <Blog />,
          },
          // {
          //   path: "approved_post",
          //   element: <ApprovedPost />,
          // },
          {
            path: 'package',
            element: <Package />,
            loader: packageLoader,
            action: packageAction,
          },
          {
            path: "user",
            element: <User/>,
            loader: userLoader,
            action: userAction,
          },
          {
            path: 'verificated_user',
            element: <VertificatedUser />,
          },
          {
            path: 'pending_user',
            element: <PendingUser />,
          },
          {
            path: 'blog',
            element: <Blog />,
          },
          {
            path: 'blog/add',
            element: <h1>ADD PAGE</h1>,
          },
          {
            path: 'developer/:page',
            element: <Developer />,
            loader: developerLoader,
            action: developerAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
