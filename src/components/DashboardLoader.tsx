import React, { useEffect, useState } from "react";
import Dashboard, { ArtItem } from "./Dashboard/Dashboard";

export interface DashboardMeta {
  key: string;
  title: string;
  items: { key: string; title?: string; description?: string; url: string }[];
}

export interface DashboardLoaderProps {
  section: string;       // e.g. "illustrations"
  dashboardKey: string;  // e.g. "pokemon2"
}

const BUCKET_URL = "https://largura-art-portfolio.s3.amazonaws.com";

const DashboardLoader: React.FC<DashboardLoaderProps> = ({ section, dashboardKey }) => {
  const [meta, setMeta] = useState<DashboardMeta | null>(null);
  const metaUrl = `${BUCKET_URL}/metadata/${section}/${dashboardKey}.json`;

  useEffect(() => {
    console.log("[Loader] fetching metadata:", metaUrl);
    (async () => {
      try {
        const res = await fetch(metaUrl);
        if (!res.ok) throw new Error(`Failed to load metadata for ${dashboardKey}`);
        const data: DashboardMeta = await res.json();

        const items: ArtItem[] = data.items.map(item => {
          // if the JSON key already contains a slash, assume full path
          const path = item.key.includes("/")
            ? item.key
            : `${section}/${dashboardKey}/${item.key}`;

          const url = `${BUCKET_URL}/${path}`;
          console.log("[Loader] built image URL:", url);

          return {
            key: item.key,
            title: item.title,
            description: item.description,
            url,
          };
        });

        setMeta({ ...data, items });
      } catch (err) {
        console.error(err);
      }
    })();
  }, [metaUrl, section, dashboardKey]);

  if (!meta) return <p>Loading <strong>{dashboardKey}</strong>…</p>;
  return <Dashboard items={meta.items} sectionTitle={meta.title} />;
};

export default DashboardLoader;
