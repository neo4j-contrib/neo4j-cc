import './announce-kit-section.module.scss';

import AnnounceKit from 'announcekit-react';

export interface AnnounceKitSectionProps {
  productName: string
}

export function AnnounceKitSection({productName}: AnnounceKitSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
        <AnnounceKit widget="https://announcekit.co/widgets/v2/1grkYw" data={{product_name:productName}}>
          <button className="p-2 bg-blue-400 text-white rounded-lg">Open Sidebar</button>
        </AnnounceKit>
        <AnnounceKit widget="https://announcekit.co/widgets/v2/1jQwxi" data={{product_name:productName}}>
          <button className="p-2 bg-blue-400 text-white rounded-lg">Open Modal</button>
        </AnnounceKit>
      </div>

  </div>
  );
}
