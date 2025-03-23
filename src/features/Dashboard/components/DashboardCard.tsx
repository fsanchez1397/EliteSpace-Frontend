import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface CardProps {
  title: string;
  height: { xs: number; md: number };
  path: string;
  icon?: React.ReactNode;
}

const getIconForTitle = (title: string) => {
  switch (title) {
    case 'Smart Package Locker':
      return <LocalShippingIcon sx={iconStyles} />;
    case 'Guest Access':
      return <PeopleIcon sx={iconStyles} />;
    case 'Guest Parking':
      return <DirectionsCarIcon sx={iconStyles} />;
    case 'Digital Lease':
      return <DescriptionIcon sx={iconStyles} />;
    case 'Tenant Support':
      return <SupportAgentIcon sx={iconStyles} />;
    default:
      return null;
  }
};

const iconStyles = {
  fontSize: 40,
  color: '#28a2a2',
  display: { xs: 'block', sm: 'none' },
  mb: 1,
};

export default function OutlinedCard({ title, height, path }: CardProps) {
  return (
    <Box sx={{ minWidth: 275, flex: 1 }}>
      <Link to={path} style={{ textDecoration: 'none' }}>
        <Card
          variant='outlined'
          title={title}
          sx={{
            height: height,
            border: '1px solid #1a3b5d',
            transition: 'border 0.3s ease-in',
            '&:hover': {
              border: '2px solid #28a2a2',
              transform: 'scale(1.03)',
              boxShadow: '0 0 10px 2px #28a2a2',
            },
          }}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            {/* Mobile-only icon */}
            {getIconForTitle(title)}

            <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 14 }}>
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}
