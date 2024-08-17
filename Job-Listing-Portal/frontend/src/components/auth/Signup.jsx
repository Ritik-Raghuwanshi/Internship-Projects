import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mx-auto max-w-7xl ">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10 "
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="type your name" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="type your email" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="text" placeholder="type your phone number" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="type your password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center justify-between gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                type='radio'
                name='role'
                value='student'
                className='cursor-pointer'
                 />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
               <Input
                type='radio'
                name='role'
                value='recruiter'
                className='cursor-pointer'
                 />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <Input
                accept='image/*'
                type='file'
                className='cursor-pointer' 
                />
            </div>
          </div>
          <Button type='submit' className='w-full my-4'>Signup</Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
