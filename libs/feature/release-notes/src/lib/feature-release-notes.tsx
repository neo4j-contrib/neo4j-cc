import { ItemDropdown, ItemTabNav, keyForItem } from '@neo4j-cc/ui';
import { useState } from 'react';
import { AnnounceKitSection } from './components/announce-kit-section/announce-kit-section';
import './feature-release-notes.module.css';

import AnnounceKit from 'announcekit-react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FeatureReleaseNotesProps {
  
}

export function FeatureReleaseNotes(_: FeatureReleaseNotesProps) {
  const [productName, setProductName] = useState('aura')
  
  const productNames = [
    {
      key:"aura"
    },
    {
      key:"bloom"
    }
  ]
  return (
    <div>
      <div className="mb-8">
        <ItemTabNav items={productNames} onSelected={(item) => setProductName(keyForItem(item))}>
          <AnnounceKit widget="https://announcekit.co/widgets/v2/1hzJuM" data={{product_name:productName}} />
        </ItemTabNav>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <AnnounceKitSection productName={productName} />
        <div className="h-96 overflow-y-scroll">
          <AnnounceKit widget="https://announcekit.co/widgets/v2/1C0QRq" data={{product_name:productName}} embedWidget={true}/>
        </div>
      </div>
    </div>
  );
}

export default FeatureReleaseNotes;
