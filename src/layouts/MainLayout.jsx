import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MainLayout() {
  return (
    <div className="surface-base min-h-screen flex flex-col bg-mergen-dark text-white selection:bg-mergen-accent selection:text-white">
      <Header />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;