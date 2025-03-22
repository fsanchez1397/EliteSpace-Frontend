import AppProvider from './Provider';
import AppRouter from './Router';
import background from '../assets/Background.png';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <AppProvider>
        <AppRouter></AppRouter>
      </AppProvider>
    </div>
  );
}

export default App;
