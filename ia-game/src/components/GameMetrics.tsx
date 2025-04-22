import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, BanknoteIcon } from 'lucide-react';

interface GameMetricsProps {
  environment: number;
  society: number;
  economy: number;
}

const GameMetrics: React.FC<GameMetricsProps> = ({ environment, society, economy }) => {
  const getColor = (value: number) => {
    if (value > 30) return 'text-green-600';
    if (value > 0) return 'text-emerald-500';
    if (value > -30) return 'text-amber-500';
    return 'text-red-600';
  };

  const getProgressColor = (value: number) => {
    if (value > 30) return 'bg-green-600';
    if (value > 0) return 'bg-emerald-500';
    if (value > -30) return 'bg-amber-500';
    return 'bg-red-600';
  };

  const normalizedValue = (value: number) => {
    return ((value + 100) / 2).toFixed(0);
  };

  return (
    <motion.div 
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 mb-6 border border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">État du Monde</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="metric">
          <div className="flex items-center mb-2">
            <Leaf className={`mr-2 ${getColor(environment)}`} size={20} />
            <span className="font-medium">Environnement</span>
            <span className={`ml-auto ${getColor(environment)}`}>{environment}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              className={`h-2.5 rounded-full ${getProgressColor(environment)}`}
              initial={{ width: '50%' }}
              animate={{ width: `${normalizedValue(environment)}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
        </div>
        
        <div className="metric">
          <div className="flex items-center mb-2">
            <Users className={`mr-2 ${getColor(society)}`} size={20} />
            <span className="font-medium">Société</span>
            <span className={`ml-auto ${getColor(society)}`}>{society}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              className={`h-2.5 rounded-full ${getProgressColor(society)}`}
              initial={{ width: '50%' }}
              animate={{ width: `${normalizedValue(society)}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
        </div>
        
        <div className="metric">
          <div className="flex items-center mb-2">
            <BanknoteIcon className={`mr-2 ${getColor(economy)}`} size={20} />
            <span className="font-medium">Économie</span>
            <span className={`ml-auto ${getColor(economy)}`}>{economy}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              className={`h-2.5 rounded-full ${getProgressColor(economy)}`}
              initial={{ width: '50%' }}
              animate={{ width: `${normalizedValue(economy)}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameMetrics;