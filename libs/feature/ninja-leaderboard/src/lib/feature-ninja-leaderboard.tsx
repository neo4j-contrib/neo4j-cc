import { useState } from 'react';
import { NinjaTable } from '..';
import { MonthSelector } from './components/month-selector/month-selector';
import './feature-ninja-leaderboard.module.css';
import { formatHumanMonth } from './utils/dates';

/* eslint-disable-next-line */
export interface FeatureNinjaLeaderboardProps {}

export function FeatureNinjaLeaderboard(props: FeatureNinjaLeaderboardProps) {
  const [selectedMonth, setSelectedMonth] = useState(new Date())
  
  return (
    <div>
      <span>
        Leaderboard for {' '} <MonthSelector upToMonthsBack={24} onSelected={setSelectedMonth}/>
      </span>
      <NinjaTable ninjas={[]} />
    </div>
  );
}

export default FeatureNinjaLeaderboard;
