import React from 'react';
import { Scenario } from '../types';
import { motion } from 'framer-motion';
import ChoiceButton from './ChoiceButton';

interface ScenarioCardProps {
  scenario: Scenario;
  onChoice: (choiceId: string) => void;
  playerName: string;
  isEnding?: boolean;
  endingType?: 'utopia' | 'mixed' | 'dystopia' | null;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ 
  scenario, 
  onChoice, 
  playerName,
  isEnding,
  endingType
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const getEndingClass = () => {
    if (!isEnding) return "";
    
    switch(endingType) {
      case 'utopia': return "bg-gradient-to-br from-emerald-100 to-teal-200 border-emerald-400";
      case 'mixed': return "bg-gradient-to-br from-amber-50 to-amber-200 border-amber-400";
      case 'dystopia': return "bg-gradient-to-br from-gray-100 to-gray-300 border-gray-500";
      default: return "";
    }
  };

  return (
    <motion.div 
      className={`rounded-xl shadow-lg overflow-hidden mb-8 border-2 ${isEnding ? getEndingClass() : 'bg-white border-gray-200'}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {scenario.image && (
        <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden">
          <img 
            src={scenario.image} 
            alt={scenario.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <h2 className="absolute bottom-4 left-4 text-white text-2xl md:text-3xl font-serif font-bold">
            {scenario.title}
          </h2>
        </div>
      )}
      
      <div className="p-6">
        <motion.p 
          className="text-lg mb-8 leading-relaxed"
          variants={itemVariants}
        >
          {scenario.description.replace('[PlayerName]', playerName)}
        </motion.p>
        
        <div className="space-y-4">
          {scenario.choices.map((choice) => (
            <ChoiceButton 
              key={choice.id}
              choice={choice}
              onClick={() => onChoice(choice.id)}
            />
          ))}
          
          {isEnding && (
            <motion.div 
              className="mt-8 pt-6 border-t border-gray-200"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-2">Votre Héritage</h3>
              <p className="text-lg">
                {endingType === 'utopia' && "Vous avez mené l'humanité vers un avenir brillant et durable. Les générations futures se souviendront de votre sagesse et de votre courage."}
                {endingType === 'mixed' && "Votre leadership a créé un monde de compromis - pas parfait, mais qui va dans la bonne direction. L'histoire vous verra comme un leader pragmatique qui a fait ce qui était possible."}
                {endingType === 'dystopia' && "Malgré les défis, l'humanité perdure dans le monde diminué que votre leadership a contribué à créer. Peut-être que les générations futures apprendront de ces erreurs."}
              </p>
              <div className="mt-6 flex justify-center">
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full font-medium text-lg transition-colors duration-200 inline-flex items-center"
                >
                  Recommencer
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ScenarioCard;