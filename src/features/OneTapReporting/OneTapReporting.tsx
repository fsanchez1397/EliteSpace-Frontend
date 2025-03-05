import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./OneTapReporting.css";

export const OneTapReporting = () => {
  const [selectedIssue, setSelectedIssue] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedIssue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Issue Reported:", selectedIssue);
  };

  return (
    <>
      <div className="container">
        <h3>One Tap Reporting</h3>

        <h4>Which one of the following best describes the issue?</h4>
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="issue-label">Issue</InputLabel>
            <Select
              labelId="issue-label"
              value={selectedIssue}
              onChange={handleChange}
              input={<OutlinedInput label="Issue" />}
            >
              <ListSubheader> Noise Complaint</ListSubheader>
              <MenuItem value="Option 1">
                Loud Music from a neighboring unit
              </MenuItem>
              <MenuItem value="Option 2">Late-night parties</MenuItem>
              <ListSubheader>Maintenance Issue</ListSubheader>
              <MenuItem value="Option 3">Leaking Faucet</MenuItem>
              <MenuItem value="Option 4">Broken Heater/AC</MenuItem>
              <ListSubheader>Building/Common Area Issue</ListSubheader>
              <MenuItem value="Option 5">Trash not being collected</MenuItem>
              <MenuItem value="Option 6">Elevator not working</MenuItem>
              <ListSubheader>Neighbor Disputes</ListSubheader>
              <MenuItem value="Option 7">
                Unauthorized parking in my spot
              </MenuItem>
              <MenuItem value="Option 8">Pets not on a leash</MenuItem>
              <ListSubheader>Package/Delivery Issue</ListSubheader>
              <MenuItem value="Option 9">Package Stolen</MenuItem>
              <MenuItem value="Option 10">Smart Locker Not Opening</MenuItem>
            </Select>
          </FormControl>
        </div>

        <h4>
          Kindly describe the issue below as descriptively as possible <br /> so
          we can route you to the proper channel in our team.
        </h4>

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "45ch" } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="issue-description"
              // label="Describe the issue"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
        </Box>
        <div className="button-container">
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Submit</Button>
          </Stack>
        </div>
      </div>
    </>
  );
};
