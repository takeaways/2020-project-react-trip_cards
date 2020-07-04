import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Loading from './Components/Loading';

//pages
import TripListPage from './Pages/TipListPage';

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'*'} component={TripListPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}
