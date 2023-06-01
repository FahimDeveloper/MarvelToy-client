import { } from 'react';
import Header from './Pages/SharedComponents/Header/Header';
import Footer from './Pages/SharedComponents/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;