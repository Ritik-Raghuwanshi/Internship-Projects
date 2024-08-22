import { Check, MoreHorizontal, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useSelector } from "react-redux";

const shortListingStatus = [
  { icon: <Check className="size-4" />, label: "Accepted" },
  { icon: <X className="size-4" />, label: "Rejected" },
];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants &&
            applicants?.applications?.map((item) => (
              <tr key={item._id}>
                <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell>
                    {
                        item?.applicant?.profile?.resume ? (
                        <a
                            href={item?.applicant?.profile?.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 cursor-pointer"
                          >
                            {item?.applicant?.profile?.resumeOriginalName}
                          </a>
                          ) : <span>NA</span>
                    }
                  
                </TableCell>
                <TableCell>{item?.applicant?.createdAt.split('T')[0]}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortListingStatus.map((status, index) => {
                        return (
                          <div key={index} className="flex items-center my-1">
                            <span className="pr-2">{status.icon}</span>
                            <span>{status.label}</span>
                          </div>
                        );
                      })}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
