import React, { useState } from 'react';
import { Choice } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ChoiceButtonProps {
  choice: Choice;
  onClick: () => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, onClick }) => {
  const [showConsequence, setShowConsequence] = useState(false);
  
  const handleClick = () => {
    if (!showConsequence) {
      setShowConsequence(true);
      setTimeout(() => {
        onClick();
      }, 2000);
    }
  };

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <button
        onClick={handleClick}
        disabled={showConsequence}
        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex justify-between items-center ${
          showConsequence 
            ? 'border-indigo-500 bg-indigo-50' 
            : 'border-gray-300 hover:border-indigo-300 hover:bg-indigo-50'
        }`}
      >
        <span className="flex-1 text-lg font-medium">{choice.text}</span>
        <ArrowRight className="ml-2 text-indigo-600" size={20} />
      </button>
      
      {showConsequence && (
        <motion.div 
          className="mt-2 mb-4 p-4 bg-indigo-100 rounded-lg text-gray-700"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p>{choice.consequence}</p>
          <div className="mt-2 flex space-x-6 text-sm">
            <span className={`${choice.effect.environment > 0 ? 'text-green-600' : choice.effect.environment < 0 ? 'text-red-600' : 'text-gray-600'}`}>
              Environment: {choice.effect.environment > 0 ? '+' : ''}{choice.effect.environment}
            </span>
            <span className={`${choice.effect.society > 0 ? 'text-green-600' : choice.effect.society < 0 ? 'text-red-600' : 'text-gray-600'}`}>
              Society: {choice.effect.society > 0 ? '+' : ''}{choice.effect.society}
            </span>
            <span className={`${choice.effect.economy > 0 ? 'text-green-600' : choice.effect.economy < 0 ? 'text-red-600' : 'text-gray-600'}`}>
              Economy: {choice.effect.economy > 0 ? '+' : ''}{choice.effect.economy}
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ChoiceButton;