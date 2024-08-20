import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  const {allJobs} = useSelector(store=>store.job);

  return (
    <div className="max-w-7xl mx-20 my-20">
      <h1 className="text-4xl font-bold"><span className="text-indigo-400">Latest & Top</span>Job Openings</h1>

      {/* cards */}
      <div className="grid grid-cols-3 gap-4 my-5">
      {
        allJobs.length <= 0 ? <span>No Job Available</span> : allJobs.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
        ))
      }
      </div>
      
    </div>
  )
}

export default LatestJobs;
