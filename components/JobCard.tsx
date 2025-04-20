import Link from 'next/link';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  // Add other relevant job properties
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">{job.title}</h2>
        <p className="text-gray-600 mb-1">{job.company}</p>
        <p className="text-gray-500 mb-2 flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          {job.location}
        </p>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-2.5 py-0.5">{job.type}</span>
        <div className="mt-4">
          <Link href={`/jobs/${job.id}`} className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            View Details
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;