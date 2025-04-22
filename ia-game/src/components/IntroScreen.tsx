import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface IntroScreenProps {
  onStart: (playerName: string) => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (playerName.trim().length < 1) {
      setError('Veuillez entrer votre nom');
      return;
    }
    onStart(playerName);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-4 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="mb-6 text-emerald-600"
        variants={itemVariants}
      >
        <Globe size={80} />
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4 font-serif text-gray-800"
        variants={itemVariants}
      >
        Leader de Terranova
      </motion.h1>
      
      <motion.p 
        className="text-xl mb-8 max-w-2xl text-gray-600"
        variants={itemVariants}
      >
        Le destin d'une nation — peut-être du monde entier — repose entre vos mains. Chaque décision que vous prendrez façonnera l'avenir de Terranova. Mènerez-vous l'humanité vers une utopie solarpunk durable, ou vos décisions à court terme créeront-elles un monde de désastre environnemental ?
      </motion.p>
      
      <motion.div 
        className="mb-8 w-full max-w-md"
        variants={itemVariants}
      >
        <input
          type="text"
          placeholder="Entrez votre nom"
          value={playerName}
          onChange={(e) => {
            setPlayerName(e.target.value);
            setError('');
          }}
          className="w-full p-3 text-lg rounded-lg border-2 border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </motion.div>
      
      <motion.button
        onClick={handleStart}
        className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Commencer Votre Leadership
      </motion.button>
      
      <motion.p 
        className="mt-8 text-sm text-gray-500 max-w-xl"
        variants={itemVariants}
      >
        Vos choix auront des conséquences. Les ressources sont limitées, le temps presse, et les défis sont complexes. Bonne chance, leader.
      </motion.p>
    </motion.div>
  );
};

export default IntroScreen;