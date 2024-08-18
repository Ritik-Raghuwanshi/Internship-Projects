import JobCard from "./JobCard";
import Navbar from "./shared/Navbar"

const randomJobs = [1, 2, 3];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-20 my-10">
        <h1 className="font-semibold text-lg my-10">Search Results ({randomJobs.length})</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
        {
            randomJobs.map((item, index) => {
                return (
                    <JobCard key={index} />
                )
            })
        }
        </div>
      </div>

    </div>
  )
}

export default Browse;
