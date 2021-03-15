import * as React from "react"
import Globe from 'react-globe.gl';

import {range} from "fp-ts/Array";


interface ChartDatum 
{ 
}

const arcsData = range(1,20).map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
}));

export interface DataGlobeProps {}

export const DataGlobe:React.FC<DataGlobeProps> = ({}) => {
  
  return (
    <div className="h-64">
      <Globe
        width={560}
        height={400}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        arcsData={arcsData}
        arcColor={'color'}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
        />,
    </div>
  )
};