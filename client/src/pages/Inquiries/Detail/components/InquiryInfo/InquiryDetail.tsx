import {Table, TableBody, TableCell, TableRow} from '@/components/ui/table';

function InquiryDetail({data}) {
  return (
    <>
      <div className='text-uiColorSecondary'>Contact Information </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Title</TableCell>
            <TableCell>{data.title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Language</TableCell>
            <TableCell>{data.language}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Text</TableCell>
            <TableCell>{data.text}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Person Name</TableCell>
            <TableCell>{data.person.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>
              Email Address
            </TableCell>
            <TableCell>{data.person.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>
              Phone Number
            </TableCell>
            <TableCell>{data.person.phoneNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Status</TableCell>
            <TableCell>{data.status}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='text-uiColorSecondary'>Created At</TableCell>
            <TableCell>{new Date(data.createdAt).toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default InquiryDetail;
