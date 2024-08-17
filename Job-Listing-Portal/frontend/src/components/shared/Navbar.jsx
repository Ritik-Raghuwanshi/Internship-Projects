import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-28 max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-indigo-500">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li className="hover:text-indigo-500">Home</li>
            <li className="hover:text-indigo-500">Jobs</li>
            <li className="hover:text-indigo-500">Browse</li>
          </ul>

          {
            !user ? (
                <div className="flex items-center gap-2">
                  <Link to='/login'><Button variant="outline">Login</Button></Link>
                  <Link to='/signup'><Button>Signup</Button></Link>
                </div>
            ) : (
                <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Chaitanya</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 my-2 text-gray-600">
                    <div className="flex w-fit items-center cursor-pointer">
                    <User2 />
                    <Button variant='link'>View Profile</Button>
                    </div>
                    <div className="flex w-fit items-center cursor-pointer">
                    <LogOut />
                    <Button variant='link'>Logout</Button>
                    </div>
                    
                  </div>
                </PopoverContent>
              </Popover>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
