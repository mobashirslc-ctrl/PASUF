import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { DonatePage } from '../DonatePage';
import { About } from './pages/About';
import { Initiatives } from './pages/Initiatives';
import { Impact } from './pages/Impact';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'donate', Component: DonatePage },
      { path: 'about', Component: About },
      { path: 'initiatives', Component: Initiatives },
      { path: 'impact', Component: Impact },
      { path: 'contact', Component: Contact },
      {
        path: '*',
        Component: () => (
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold">404</h1>
              <p className="text-muted-foreground">Page not found</p>
            </div>
          </div>
        ),
      },
    ],
  },
]);