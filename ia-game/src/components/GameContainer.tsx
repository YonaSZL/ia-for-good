import React, { useState, useEffect } from 'react';
import { GameState } from '../types';
import ScenarioCard from './ScenarioCard';
import GameMetrics from './GameMetrics';
import IntroScreen from './IntroScreen';
import { getScenario, getEndingType } from '../data/scenarios';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/ThemeContext';

const GameContainer: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [gameState, setGameState] = useState<GameState>({
    currentScenarioId: 'intro',
    playerName: '',
    metrics: {
      environment: 0,
      society: 0,
      economy: 0,
    },
    history: [],
  });
  
  const { setThemeMode } = useThemeContext();
  
  useEffect(() => {
    // Determine theme based on metrics
    const average = (gameState.metrics.environment + gameState.metrics.society + gameState.metrics.economy) / 3;
    
    if (average > 30) {
      setThemeMode('utopia');
    } else if (average < -30) {
      setThemeMode('dystopia');
    } else {
      setThemeMode('neutral');
    }
  }, [gameState.metrics, setThemeMode]);

  const startGame = (name: string) => {
    setPlayerName(name);
    setGameState(prev => ({
      ...prev,
      playerName: name
    }));
    setGameStarted(true);
  };

  const handleChoice = (choiceId: string) => {
    const currentScenario = getScenario(gameState.currentScenarioId);
    if (!currentScenario) return;

    const choice = currentScenario.choices.find(c => c.id === choiceId);
    if (!choice) return;

    // Update game state
    setGameState(prev => ({
      ...prev,
      currentScenarioId: choice.nextScenarioId,
      metrics: {
        environment: Math.max(-100, Math.min(100, prev.metrics.environment + choice.effect.environment)),
        society: Math.max(-100, Math.min(100, prev.metrics.society + choice.effect.society)),
        economy: Math.max(-100, Math.min(100, prev.metrics.economy + choice.effect.economy)),
      },
      history: [...prev.history, { scenarioId: currentScenario.id, choiceId }]
    }));
  };

  const currentScenario = getScenario(gameState.currentScenarioId);
  const isEnding = currentScenario?.isEnding;
  const endingType = isEnding ? getEndingType(gameState.metrics) : null;

  if (!gameStarted) {
    return <IntroScreen onStart={startGame} />;
  }

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GameMetrics 
        environment={gameState.metrics.environment} 
        society={gameState.metrics.society} 
        economy={gameState.metrics.economy}
      />
      
      {currentScenario && (
        <ScenarioCard 
          scenario={currentScenario} 
          onChoice={handleChoice}
          playerName={playerName}
          isEnding={isEnding}
          endingType={endingType}
        />
      )}
    </motion.div>
  );
};

export default GameContainer;