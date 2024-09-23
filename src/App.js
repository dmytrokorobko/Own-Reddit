import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Root } from './layouts/Root';
import { Suspense } from 'react';
import { Home } from './pages/Home';
import { Page } from './pages/Page';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/ownreddit'>
        <Routes>
          <Route element={<Root />}>
            <Route path='/' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>            
            } />
            <Route path='/pages/:page' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Page />
              </Suspense>            
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>    
  );
}

export default App;
