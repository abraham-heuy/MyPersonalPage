// App.tsx
import Header from './components/header';

function App() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <style>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                       'Helvetica Neue', Arial, sans-serif;
        }
      `}</style>
      
      <Header />
      
      {/* More sections will go here - keep scrolling simple */}
    </main>
  );
}

export default App;