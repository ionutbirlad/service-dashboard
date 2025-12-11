import { type ReactNode } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import './layout.css';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="layout">
        <div className="layout__container">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
