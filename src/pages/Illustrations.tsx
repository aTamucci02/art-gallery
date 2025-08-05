import React from "react";
import DashboardLoader from "../components/DashboardLoader";


const illustrationsDashboards = ["pokemon"];

const Illustrations: React.FC = () => (
  <main>
    <h1>Illustrations</h1>
    {illustrationsDashboards.map((key) => (
      <DashboardLoader
        key={key}
        section="illustrations"
        dashboardKey={key}
      />
    ))}
  </main>
);

export default Illustrations;
