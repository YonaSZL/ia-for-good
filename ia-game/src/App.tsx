import GameContainer from './components/GameContainer';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import './styles/theme.css';

function App() {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 transition-colors duration-500">
          <div className="container mx-auto py-8 px-4">
            <GameContainer />
          </div>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;