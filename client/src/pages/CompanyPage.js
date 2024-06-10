import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from '../lib/graphql/queries';
import JobList from '../components/JobList';

function CompanyPage() {
  const { companyId } = useParams();

  const [company, setCompany] = useState();

  useEffect(() => {
    getCompany(companyId).then(setCompany)
  },[companyId])

  if(!company){
    return <div>Loading...</div>
  }

  // const company = companies.find((company) => company.id === companyId);
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
      <JobList jobs={company.jobs}/>
    </div>
  );
}

export default CompanyPage;
