import { } from 'react';
import Header from './Pages/SharedComponents/Header/Header';
import Footer from './Pages/SharedComponents/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;