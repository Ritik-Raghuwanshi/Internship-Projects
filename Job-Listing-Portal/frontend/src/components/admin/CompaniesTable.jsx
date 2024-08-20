import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Applogo from '/logo.png';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverTrigger } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
          <Avatar>
            <AvatarImage className="h-8 w-8 rounded-full" src={Applogo} />
          </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>20-08-2024</TableCell>
          <TableCell className='text-right'>
            <Popover>
                <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                <PopoverContent className="w-32">
                    <div className="flex items-center gap-2 w-fit cursor-pointer">
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                    </div>
                </PopoverContent>
            </Popover>
            </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
