import {getJobs,getJob,getJobsByCompany} from './db/jobs.js';
import {getCompany} from './db/companies.js';


// whatever the value we set in reslovers for particular field , that will be set to output even we get data from 
// database table

export const resolvers = {
    Query: {
        // job: (_root, args) => {
        //     console.log(args);
        //     return null;
        // },
        company: (_root, { id }) => getCompany(id),
        job: (_root, {id}) => getJob(id),
        jobs:  () =>  getJobs(),
       

            // || simply this code 1
            // const jobs = await getJobs();
            // return jobs;

            // || simply this code 2
            // jobs: async () => {
            //     return await getJobs();
            // }

             // || simply this code 3
            // jobs: async () => {
            //     return await getJobs();
            // }

            // console.log(jobs)
            // return [
            //     {
            //         id: 'test-id',
            //         title: 'The title',
            //         description: 'The description',
            //     },
            //     {
            //         id: 'test-id-2',
            //         title: 'The Title 2',
            //         description: 'The description.',
            //       },
            // ];
    },

    Company : {
        jobs: (company) => getJobsByCompany(company.id),
    },

    Job: {
        // company: (job) => {
        //     console.log('The parent jobs are passing through job ', job);
        //     return getCompany(job.companyId)
        // },
        company: (job) =>  getCompany(job.companyId),
     
        // date: (job) => {
        //     console.log('The parent jobs are passing through job ', job);
        //     return toIsoDate(job.createdAt);
        // }
        date: (job) =>  toIsoDate(job.createdAt)

    }
};

function toIsoDate(value) {
    return value.slice(0,'yyyy-mm-dd'.length);
}

