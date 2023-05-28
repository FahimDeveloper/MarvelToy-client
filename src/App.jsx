import { } from 'react';
import Header from './Pages/SharedComponents/Header/Header';
import Footer from './Pages/SharedComponents/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;