import './cc-stats.css';

import { Stats, StatsProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcStatsProps extends StatsProps {}

export const CcStats = (props:CcStatsProps) => (
  <Stats {...props} />
)

CcStats.Stat = Stats.Stat
