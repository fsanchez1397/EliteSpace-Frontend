import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

interface CardProps {
  title: string;
  height: { xs: number; md: number };
  path: string;
}

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
          <CardContent>
            <Typography
              gutterBottom
              sx={{ textAlign: 'center', color: 'text.primary', fontSize: 14 }}
            >
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}
