import { useEffect, useState } from 'react';
import JobList from '../components/JobList';
import { getJobs } from '../lib/graphql/queries';

// getJobs().then((job) => console.log("job", job));

function HomePage() {

const [jobs, setJobs] = useState([]);

useEffect(() => {
  getJobs().then((job) => {
    setJobs(job);
  }
  )
},[])

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
