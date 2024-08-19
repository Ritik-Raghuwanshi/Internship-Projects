import { Contact, Mail, Pen } from "lucide-react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import ProfileLogo from "/profile.jpg";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTabel from "./AppliedJobTabel";

const skills = ["HTML", "CSS", "Javascript", "ReactJS"];

const isResume = true;

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div
        className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8"
        alt="profile"
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={ProfileLogo} />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>

          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>chaitanya@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9579783643</span>
          </div>
        </div>
        <div className="  gap-2">
          <h1 className="font-semibold text-lg">Skills</h1>
          <div className="flex items-center my-2 gap-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href="https://www.youtube.com/@chaitanyaumbarkar"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              ChaitanyaYT
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
        
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg  my-5">Applied Jobs</h1>
          {/* Applied Job Tabel */}
          <AppliedJobTabel />
        </div>
    </div>
  );
};

export default Profile;
