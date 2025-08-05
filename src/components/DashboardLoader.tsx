// src/components/DashboardLoader/DashboardLoader.tsx
import React, { useEffect, useState } from "react";
import Dashboard, { ArtItem } from "./Dashboard/Dashboard";


export interface DashboardMeta {
  key: string;
  title: string;
  items: ArtItem[];
}

export interface DashboardLoaderProps {
  section: string;       // e.g. "illustrations"
  dashboardKey: string;  // e.g. "pokemon"
}

const BUCKET_URL = "https://largura-art-portfolio.s3.amazonaws.com";

const DashboardLoader: React.FC<DashboardLoaderProps> = ({ section, dashboardKey }) => {
  const [meta, setMeta] = useState<DashboardMeta | null>(null);
  const url = `${BUCKET_URL}/metadata/${section}/${dashboardKey}.json`;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load metadata for ${dashboardKey}`);
        const data = await res.json();
        // Construct full URL for each item
        const items: ArtItem[] = data.items.map((item: any) => ({
          ...item,
          url: `${BUCKET_URL}/${item.key}`,
        }));
        setMeta({ key: data.key, title: data.title, items });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [url, dashboardKey]);

  if (!meta) return <p>Loading {dashboardKey}...</p>;
  return <Dashboard items={meta.items} sectionTitle={meta.title} />;
};

export default DashboardLoader;
