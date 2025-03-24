import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/store';

interface CardProps {
  height: HeightProps;
  tenantName?: string;
}
interface HeightProps {
  xs: number;
  md: number;
}

const LockUnlockCard = ({ height, tenantName: propTenantName }: CardProps) => {
  const theme = useTheme();
  const tenantId = useSelector((state: RootState) => state.tenant.tenantId || 'guest'); // Default to 'guest' if tenantId is null
  const [isLocked, setIsLocked] = React.useState<boolean | null>(null);
  const [tenantName, setTenantName] = React.useState<string | null>(propTenantName || null);
  const [showAlert, setShowAlert] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchLockState = async () => {
      try {
        const response = await fetch(`http://localhost:3000/locks/lock-state/${tenantId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch lock state');
        }
        const data = await response.json();
        setIsLocked(data.isLocked);
        if (!propTenantName) {
          setTenantName(data.tenantName);
        }
      } catch (err) {
        setError('Failed to fetch lock state. Please try again later.');
      }
    };

    fetchLockState();
  }, [tenantId, propTenantName]);

  const handleLock = async () => {
    try {
      const response = await fetch('http://localhost:3000/locks/lock-state', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tenantId,
          tenantName: tenantName || 'Guest',
          isLocked: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to lock');
      }

      setIsLocked(true);
      setShowAlert(false);
    } catch (err) {
      setError('Failed to lock. Please try again later.');
    }
  };

  const handleUnlock = async () => {
    try {
      const response = await fetch('http://localhost:3000/locks/lock-state', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tenantId,
          tenantName: tenantName || 'Guest',
          isLocked: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to unlock');
      }

      setIsLocked(false);
      setShowAlert(true);
    } catch (err) {
      setError('Failed to unlock. Please try again later.');
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  if (isLocked === null) {
    return <Typography>Loading...</Typography>;
  }

  const card = (
    <React.Fragment>
      <Typography
        color={isLocked ? 'secondary.main' : 'warning.main'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: theme.typography.h3.fontWeight,
          mb: 1,
        }}
      >
        {isLocked ? <LockIcon sx={{ mr: 1 }} /> : <LockOpenIcon sx={{ mr: 1 }} />}
        Front Door is {isLocked ? 'Locked' : 'Unlocked'}
      </Typography>

      <Stack direction='row'>
        <CardActions>
          <Button
            size='small'
            variant={isLocked ? 'contained' : 'outlined'}
            startIcon={<LockIcon />}
            onClick={handleLock}
            disabled={isLocked}
          >
            Lock
          </Button>
        </CardActions>
        <CardActions>
          <Button
            size='small'
            variant={isLocked ? 'contained' : 'outlined'}
            startIcon={<LockOpenIcon />}
            onClick={handleUnlock}
            disabled={!isLocked}
          >
            Unlock
          </Button>
        </CardActions>
      </Stack>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275, flex: 1, height: { xs: height.xs, md: height.md } }}>
      <Card
        variant='outlined'
        sx={{
          height: '100%',
          p: 1,
          borderColor: isLocked ? theme.palette.secondary.main : theme.palette.warning.main,
          borderWidth: 1,
        }}
      >
        {card}
      </Card>

      <Snackbar open={showAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          severity='warning'
          variant='filled'
          onClose={handleCloseAlert}
          action={
            <Button color='inherit' size='small' onClick={handleLock}>
              Lock Now
            </Button>
          }
        >
          Your front door is currently unlocked. Click "Lock Now" to secure it.
        </Alert>
      </Snackbar>

      {error && (
        <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
          <Alert severity='error' variant='filled' onClose={() => setError(null)}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default LockUnlockCard;
