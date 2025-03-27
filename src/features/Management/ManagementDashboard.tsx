import { Container, Stack, Typography } from '@mui/material';
import ComplaintCard from './ComplaintCard';
import { useGetAllComplaintsQuery } from '../Services/userSlice';
//Example Complaint obj
interface complaintCardProps {
  complaintTitle: string;
  description: string;
  tenantName?: string;
  status?: string;
  priority: string;
  id: number;
  createdAt: string;
}

function ManagementDashboard() {
  const { data, error, isLoading } = useGetAllComplaintsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  if (data) {
    const complaintsArr = data.complaints;
    return (
      <Container>
        <Stack sx={{ marginBottom: 4, marginTop: 4 }}>
          <Typography variant='h3'> Complaints</Typography>
        </Stack>
        <Stack>
          {complaintsArr.map(
            ({
              description: description,
              complaintTitle: title,
              // tenantId: tenantName,
              createdAt: createdAt,
              priority: priority,
              id: complaintId,
            }: complaintCardProps) => (
              console.log(complaintsArr),
              (
                <ComplaintCard
                  key={complaintId}
                  title={title}
                  description={description}
                  // tenantName={tenantName}
                  createdAt={createdAt}
                  priority={priority}
                  complaintId={complaintId}
                />
              )
            ),
          )}
        </Stack>
      </Container>
    );
  }
}

export default ManagementDashboard;
