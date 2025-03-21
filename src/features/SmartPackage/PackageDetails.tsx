import { useParams } from 'react-router';
import { Stack, Typography, Button, Container, styled, Paper } from '@mui/material';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

interface PackageInfo {
  id: number;
  package: string;
  deliveredDateTime: string;
  status: 'delivered' | 'retrieved';
  code: string;
}

// const mockInformation = [
//   {
//     id: 1,
//     package: 'Package #1',
//     deliveredHour: 16,
//     deliveredMin: 16,
//     deliveredDate: '2/12/25',
//   },
//   {
//     id: 2,
//     package: 'Package #2',
//     deliveredDate: '2/12/25',
//     deliveredHour: 10,
//     deliveredMin: 30,
//   },
// ];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  // const packageDetails = mockInformation.find((pkg) => pkg.id === Number(id));

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [packageDetails, setPackageDetails] = useState<PackageInfo | null>(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/smartpackage');
  };

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(`http://localhost:3000/smartpackage/${id}`, {
          method: 'GET',
          credentials: 'include', // Important: This allows cookies to be sent
        });
        if (!response.ok) {
          throw new Error('Failed to fetch package details');
        }
        const data = await response.json();
        setPackageDetails(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, [id]);

  const convertToLocalDateTime = (isoFormat: string) => {
    if (!isoFormat) return { localDate: 'N/A', localTime: 'N/A' }; //added
    const date = new Date(isoFormat);

    const localDate = date.toLocaleDateString([], {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
    const localTime = date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    return { localDate, localTime };
  };

  return (
    <Container sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Stack sx={{ width: '100%', maxWidth: 400, mt: 2 }} spacing={2}>
        <Button variant='outlined' onClick={handleBackClick} sx={{ alignSelf: 'flex-start' }}>
          Back
        </Button>
        {loading ? (
          <Typography>Loading package details...</Typography>
        ) : error ? (
          <Typography color='error'>{error}</Typography>
        ) : packageDetails ? (
          <>
            <Item>
              <Typography>{packageDetails.package}</Typography>
              <Typography>
                Delivered {convertToLocalDateTime(packageDetails.deliveredDateTime).localDate}
              </Typography>
              <Typography>
                {convertToLocalDateTime(packageDetails.deliveredDateTime).localTime}
              </Typography>
            </Item>
            <Item sx={{ backgroundColor: '#28a2a2' }}>
              <Typography variant='h6'>Locker Access Code</Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                {/* Code from backend goes here */} 12345
              </Typography>
            </Item>
            <Typography>
              Instructions: Enter code into the keypad at the package locker. Step back and wait for
              the locker door to open.
            </Typography>
            <Typography>Locker Access Code expires after 24 hours</Typography>
          </>
        ) : (
          <Typography>No package details available</Typography>
        )}
      </Stack>
    </Container>
  );
};
