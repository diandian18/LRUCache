import ReactDOM from 'react-dom/client';
import { useRoutes } from 'react-router-dom';
import routes, { HistoryRouter, history } from '@@/react/router';
import './App.less';

const App = () => {
  return useRoutes(routes);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HistoryRouter history={history}>
    {/* @ts-ignore */}
    <App />
  </HistoryRouter>
);
