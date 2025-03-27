import AppProvider from './Provider';
import AppRouter from './Router';
import '../features/Home/LandingPage.css';

function App() {
  return (
    <div className='dashboard-page'>
      <AppProvider>
        <AppRouter></AppRouter>
      </AppProvider>
    </div>
  );
}

export default App;
