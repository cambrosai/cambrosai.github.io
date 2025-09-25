import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <main className="flex-1">
            <Article />
          </main>

          {/* Sidebar */}
          <aside className="lg:w-80">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;