import { type ReactNode } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import './layout.css';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <div className="layout__main--container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
