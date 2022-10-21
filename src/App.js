import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { routes } from './routes/routes';

import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
