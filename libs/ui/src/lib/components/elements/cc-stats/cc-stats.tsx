import './cc-stats.css';

import React from 'react';
import { Stats, StatsProps } from 'react-daisyui'

/* eslint-disable-next-line */
export interface CcStatsProps extends StatsProps {}

export class CcStats extends React.Component<CcStatsProps> {

  static Stat = Stats.Stat

  render() {
    return (<Stats {...this.props} />);
  }
}
