import React, { useEffect, useState } from "react";
import DashboardLoader from "../components/DashboardLoader";

const BUCKET_URL = "https://largura-art-portfolio.s3.amazonaws.com";
const SECTION = "illustrations";

const Illustrations: React.FC = () => {
  const [dashboards, setDashboards] = useState<string[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${BUCKET_URL}/metadata/${SECTION}/index.json`
        );
        if (!res.ok) throw new Error("Failed to load dashboard index");
        const list: string[] = await res.json();
        setDashboards(list);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  if (!dashboards) return <p>Loading dashboards…</p>;

  return (
    <main>
      <h1>Illustrations</h1>
      {dashboards.map((key) => (
        <DashboardLoader
          key={key}
          section={SECTION}
          dashboardKey={key}
        />
      ))}
    </main>
  );
};

export default Illustrations;
