import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//main route here
import DashBoard from './modules/dashboard/dashboard';
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
import Root from './Root';
import Package from './modules/package/screens/Package';
import Voucher from './modules/voucher/screens/Voucher';
import PendingReporting from './modules/reporting/screens/PendingReporting';
import ApprovedReporting from './modules/reporting/screens/ApprovedReporting';
import User from './modules/user/screens/User';
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
            path: 'package',
            element: <Package />,
          },
          {
            path: 'voucher',
            element: <Voucher />,
          },
          {
            path: 'pending_reporting',
            element: <PendingReporting />,
          },
          {
            path: 'approved_reporting',
            element: <ApprovedReporting />,
          },
          {
            path: 'user',
            element: <User />,
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
          // {
          //   path: "approved_post",
          //   element: <ApprovedPost />,
          // },
          {
            path: 'package',
            element: <Package />,
          },
          {
            path: 'voucher',
            element: <Voucher />,
          },
          {
            path: 'pending_reporting',
            element: <PendingReporting />,
          },
          {
            path: 'approved_reporting',
            element: <ApprovedReporting />,
          },
          {
            path: 'user',
            element: <User />,
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
            path: 'developer',
            element: <Developer />,
            loader: developerLoader,
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
