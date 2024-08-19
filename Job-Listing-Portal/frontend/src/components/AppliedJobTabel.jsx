import { Badge } from "./ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const AppliedJobTabel = () => {
  return (
    <div>
      <Table>
        <TableCaption>A List of Applied Jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1, 2, 3, 4].map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>19-08-2024</TableCell>
                        <TableCell>Frontend</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTabel;
