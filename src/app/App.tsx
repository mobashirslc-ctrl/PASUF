// পরিবর্তন করুন:
import { RouterProvider } from 'react-router-dom'; // 'react-router' এর পরিবর্তে 'react-router-dom' লিখুন
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
