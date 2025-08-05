// src/components/Dashboard/Dashboard.tsx
import React, { useState } from "react";
import './Dashboard.css';
import ArtDetails from "./ArtDetails";

export interface ArtItem {
  key: string;
  url: string;
  title?: string;
  description?: string;
}

export interface DashboardProps {
  items: ArtItem[];
  sectionTitle?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ items, sectionTitle }) => {
  // always call hooks first
  const [current, setCurrent] = useState<ArtItem | null>(items[0] || null);
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  if (!items.length || current === null) {
    return <p className="dashboard-loading">No items to display.</p>;
  }

  const handleSelect = (item: ArtItem) => {
    setCurrent(item)
    setOpenDetails(false);
  };
  const handleViewDetails = () =>
    setOpenDetails(true);

  const thumbnails = items.filter(item => item.key !== current.key);

  return (
    <section className="dashboard-section">
      {sectionTitle && <h2 className="dashboard-title">{sectionTitle}</h2>}

      <div
        className="dashboard-hero-container"
        title="Click to view details"
        onClick={handleViewDetails}
      >
        <img
          className="dashboard-hero-image"
          src={current.url}
          alt={current.title || current.key}
        />
        <div className="dashboard-hero-overlay">Click to view details</div>
      </div>

      {openDetails &&(
        <ArtDetails item={current} />
      )}

      <div className="dashboard-thumbnails">
        {thumbnails.map(item => (
          <div
            key={item.key}
            className="dashboard-thumb-item"
            onClick={() => handleSelect(item)}
          >
            <img
              className="dashboard-thumb-image"
              src={item.url}
              alt={item.title || item.key}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
