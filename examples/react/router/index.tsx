import type { RouteObject } from 'react-router-dom';
import Test from '../pages/test';

export { default as history } from './history';
export { default as HistoryRouter } from './HistoryRouter';

const routes: RouteObject[] = [
  { path: '/', element: <Test /> },
];

export default routes;
