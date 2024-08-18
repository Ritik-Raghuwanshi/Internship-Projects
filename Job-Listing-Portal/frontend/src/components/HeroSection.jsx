import { Search } from "lucide-react"
import { Button } from "./ui/button"

const HeroSection = () => {
  return (
    <div className="text-center">
        <div className="flex flex-col my-10 gap-5">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-400 font-medium">No 1 Job Hunt Website</span>
        <h1 className="text-5xl font-bold py-2">Search, Apply & <br/> Get Your <span className="text-indigo-300">Dream Jobs</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempore! Obcaecati quasi molestiae voluptatum?</p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
            type="text"
            placeholder="find your dream jobs"
            className="outline-none border-none w-full" 
            />
            <Button className="rounded-r-full">
                <Search className="h-5 w-5" />
            </Button>
        </div>
        </div>
     
    </div>
  )
}

export default HeroSection