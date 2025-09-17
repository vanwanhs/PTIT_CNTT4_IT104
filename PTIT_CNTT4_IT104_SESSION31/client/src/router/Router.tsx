import { createBrowserRouter } from 'react-router-dom';
import ListPost from '../page/ListPost';

const router = createBrowserRouter([
  {
    path: '/listpost',
    element: <ListPost />,
  },
]);

export default router; 
