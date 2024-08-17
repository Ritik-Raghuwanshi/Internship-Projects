import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { useState } from "react";

const Login = () => {
    const [input, setInput] = useState({ 
        email:'',
        password:'',
        role:'',
    });

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]:e.target.value});
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
    }
    return (
      <div>
        <Navbar />
        <div className="flex items-center justify-center mx-auto max-w-7xl ">
          <form
            onSubmit={submitHandler}
            className="w-1/2 border border-gray-200 rounded-md p-4 my-10 "
          >
            <h1 className="font-bold text-center text-2xl mb-5">Login</h1>

            <div className="my-2">
              <Label>Email</Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="type your email"
              />
            </div>

            <div className="my-2">
              <Label>Password</Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="type your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center justify-between gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === 'student'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === 'recruiter'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
            <span className="text-sm">
              Don&apos;t have an account?{" "}
              <Link className="text-blue-600" to="/signup">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
    );
}

export default Login;
