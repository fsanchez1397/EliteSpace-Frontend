import {
  Container,
  Stack,
  InputLabel,
  TextField,
  Button,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { Link } from "react-router";

const GuestAccess = () => {
  return (
    <Container
      sx={{
        height: "600px",
        marginTop: "60px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { xs: "auto", sm: 500 },
          height: "100%",
          margin: "0 auto",
          gap: "50px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: "1.2",
          }}
        >
          Guest Access
        </Typography>
        <Stack
          sx={{
            width: "90%",
            gap: "20px",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              gap: "10px",
            }}
          >
            <InputLabel>Guest Name</InputLabel>
            <TextField
              sx={{
                width: "90%",
                margin: "0 auto",
              }}
            />
          </Stack>
          <Stack
            sx={{
              width: "100%",
              gap: "10px",
            }}
          >
            <InputLabel>Time Limit</InputLabel>
            {/* <TextField
              sx={{
                width: "30%",
                margin: "0 auto",
              }}
            /> */}
              <FormControl sx={{ width: "80%", margin: "0 auto" }}>
              <Select defaultValue="1">
                <MenuItem value="1">60 minutes</MenuItem>
                <MenuItem value="2">2 hours</MenuItem>
                <MenuItem value="4">4 hours</MenuItem>
                <MenuItem value="8">8 hours</MenuItem>
                <MenuItem value="24">24 hours (1 day)</MenuItem>
                <MenuItem value="48">48 hours (2 days)</MenuItem>
                <MenuItem value="168">1 week</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Link
          to="/guestacess/key"
          style={{
            textDecoration: "none",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "50%",
              height: "50px",
              margin: "0 auto",
              marginTop: "10px",
            }}
          >
            Generate Key
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default GuestAccess;
