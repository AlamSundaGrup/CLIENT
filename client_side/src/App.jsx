import { RouterProvider } from 'react-router-dom'
import { router } from './routers'
import { ProfileProvider } from './contexts/profilecontext';

export function App() {
  return (
  <ProfileProvider>
    <RouterProvider router={router} />
  </ProfileProvider>
);
}

export default App;
