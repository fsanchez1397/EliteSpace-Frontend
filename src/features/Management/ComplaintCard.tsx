import { Card, Typography, Stack } from '@mui/material';
interface complaintCardProps {
  title: string;
  description: string;
  tenantName?: string;
  status?: string;
  priority: string;
  complaintId: number;
  createdAt: string;
}
function ComplaintCard({
  title,
  description,
  priority,
  complaintId,
  createdAt,
}: complaintCardProps) {
  let priorityColor: string = '';
  if (priority == 'High') {
    priorityColor = 'red';
  }
  if (priority == 'Medium') {
    priorityColor = 'yellow';
  }
  if (priority == 'Low') {
    priorityColor = 'gray';
  }
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <Card
      key={complaintId}
      sx={{ marginBottom: '10px', border: `solid 2px ${priorityColor}`, padding: 2, maxWidth: 800 }}
    >
      <Typography variant='h6'>
        <b>{title}</b>
      </Typography>
      <Typography>
        <b>Summary:</b> {description}
      </Typography>
      <Stack sx={{ flexDirection: { sm: 'column', md: 'row' }, justifyContent: 'space-between' }}>
        <Typography>
          <b>Date Reported: </b>
          {formattedDate}
        </Typography>
        <Typography>
          <b>Complaint ID: </b>
          {complaintId}
        </Typography>
      </Stack>
    </Card>
  );
}

export default ComplaintCard;
