import Home from '../views/Home'

export const routes = [
    {
      path: '/',
      element: <Home />,
      children: [
        // { path: '/', element: <UsersIndex /> },
      ]
    }
  ]