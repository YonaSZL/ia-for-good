export interface Choice {
  id: string;
  text: string;
  consequence: string;
  effect: {
    environment: number;
    society: number;
    economy: number;
  };
  nextScenarioId: string;
  tooltip?: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  image?: string;
  choices: Choice[];
  isEnding?: boolean;
}

export interface GameState {
  currentScenarioId: string;
  playerName: string;
  metrics: {
    environment: number; // -100 to 100 (negative is bad)
    society: number; // -100 to 100 (negative is bad)
    economy: number; // -100 to 100 (negative is bad)
  };
  history: {
    scenarioId: string;
    choiceId: string;
  }[];
}

export interface EndingType {
  type: 'utopia' | 'dystopia' | 'mixed';
  title: string;
  description: string;
  image?: string;
}

export type ThemeMode = 'dystopia' | 'neutral' | 'utopia';