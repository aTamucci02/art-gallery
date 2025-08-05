// src/components/Dashboard/ArtDetails.tsx
import React from 'react';
import { ArtItem } from './Dashboard';

interface ArtDetailsProps {
  item: ArtItem;
}

const ArtDetails: React.FC<ArtDetailsProps> = ({ item }) => (
  <div className="art-details">
    {item.title && <h3 className="art-details-title">{item.title}</h3>}
    {item.description && (
      <p className="art-details-description">{item.description}</p>
    )}
  </div>
);

export default ArtDetails;
