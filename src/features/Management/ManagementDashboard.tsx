import { Container, Stack, Typography, Box } from '@mui/material';
import ComplaintCard from './ComplaintCard';

//Example Complaint obj
interface complaintCardProps {
  title: string;
  description: string;
  tenantName: string;
  status: string;
  priority: string;
  complaintId: number;
}

const complaintsExample = [
  {
    title: 'Leaking Faucet',
    description: 'The living room was flooded and caused damage to proprety',
    tenantName: 'Felipe',
    status: 'Unresolved',
    priority: 'High',
    complaintId: 1,
  },
  {
    title: 'Elevator Not Working',
    description: 'Their are tenants stuck inside',
    tenantName: 'Taryn',
    status: 'Unresolved',
    priority: 'High',
    complaintId: 2,
  },
  {
    title: 'Loud Music from a neighboring unit',
    description:
      'There is music playing from neighbors apartment sometimes usually for a short amount of time',
    tenantName: 'Melisa',
    status: 'Resolved',
    priority: 'Medium',
    complaintId: 3,
  },
  {
    title: 'Pets not on a leash',
    description: 'Small cat wonders around complex sometimes',
    tenantName: 'Eddie',
    status: 'Unresolved',
    priority: 'Low',
    complaintId: 4,
  },
];
function ManagementDashboard() {
  return (
    <Container>
      <Stack sx={{ marginBottom: 4, marginTop: 4 }}>
        <Typography variant='h3'>Complaints</Typography>
      </Stack>
      <Stack>
        <Typography>Legend</Typography>
        <Box sx={{ width: 14, height: 14, bgcolor: 'red' }}></Box>Urgent
        <Box sx={{ width: 14, height: 14, bgcolor: 'yellow' }}></Box>Medium
        <Box sx={{ width: 14, height: 14, bgcolor: 'gray' }}></Box>Low
      </Stack>
      <Stack>
        {complaintsExample.map(
          ({
            title,
            description,
            tenantName,
            status,
            priority,
            complaintId,
          }: complaintCardProps) => (
            <ComplaintCard
              key={complaintId}
              title={title}
              description={description}
              tenantName={tenantName}
              status={status}
              priority={priority}
              complaintId={complaintId}
            />
          ),
        )}
      </Stack>
    </Container>
  );
}

export default ManagementDashboard;
