import AppProvider from './Provider';
import AppRouter from './Router';
import './App.css';

function App() {
  return (
    <div className='app-background'>
      <AppProvider>
        <AppRouter></AppRouter>
      </AppProvider>
    </div>
  );
}

export default App;
