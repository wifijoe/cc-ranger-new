import { useState } from 'react';
import Header from "./Header";
import Progress from './Dashboard/Progress';
import JobList from './Dashboard/JobList';

function App() {
  const [selectedPage] = useState("Dashboard");

  const renderContent = () => {
    switch (selectedPage) {
      case "Dashboard":;
        return ( 
        <>
        <Progress />
        <JobList />
        </>
        );
      case "Add Job":
        return <p>Here you can add a job</p>;
      case "View All Jobs":
        return <p>Here are all the jobs</p>;
      default:
        return <p>Page not found</p>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header SelectedPage={selectedPage}/>
      <div className="flex flex-row flex-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;