import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import Applogo from "/logo.png";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const JobCard = () => {
  const navigate = useNavigate();
  const jobId = 'hgdyfgreiufhe';
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 max-w-[100%]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={Applogo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum commodi totam nobis velit?</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-indigo-400 font-bold" variant="ghost">12 Positions</Badge>
        <Badge className="text-red-600 font-bold" variant="ghost">Part Time</Badge>
        <Badge className="text-violet-800 font-bold" variant="ghost">24LPA</Badge>
    </div>
    <div className="flex items-center gap-4 mt-4">
        <Button onClick={() => navigate(`/description/${jobId}`)} variant="outline">Details</Button>
        <Button variant="outline">Save for later</Button>
    </div>
    </div>
  );
};

export default JobCard;
