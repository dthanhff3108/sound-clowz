import LayoutMain from 'app/components/Layout/LayoutMain';
import DiscoverPage from 'app/pages/DiscoverPage';
import LoginPage from 'app/pages/LoginPage';
import Private from 'app/pages/Pravite';
import RegisterPage from 'app/pages/RegisterPage';
import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

type Props = {
  routes: any;
  authenticated: boolean;
};

type RouteType = {
  path: string;
  element?: React.ReactNode;
  layout?: React.FC<any>;
  routes?: Array<RouteType>;
  auth?: boolean;
};

export const routes: Array<RouteType> = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '*',
    layout: LayoutMain,
    routes: [
      {
        path: '/discover',
        auth: true,
        element: <DiscoverPage />,
      },
      {
        path: '/private',
        auth: true,
        element: <Private />,
      },
    ],
  },
];

export const RenderRoutes = ({ routes, authenticated }: Props) => {
  return (
    <Routes>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        if (route.auth && !authenticated) {
          return <Route key={i} path="*" element={<Navigate to="/login" replace />} />;
        }
        return (
          <Route
            key={i}
            path={route.path}
            index={route.index}
            element={
              <Layout>
                {route.routes ? (
                  <RenderRoutes routes={route.routes} authenticated={authenticated} />
                ) : (
                  route.element
                )}
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};
