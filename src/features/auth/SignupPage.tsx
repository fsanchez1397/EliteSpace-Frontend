import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router'; 
import { supabase } from '../../config/supabaseClient'; 

const SignupPage = () => {
  const navigate = useNavigate();

  // form states: 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // other states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationSent, setVerificationSent] = useState(false);

  // visualize form first and what u want it to do: 


  <form onSubmit={handleEmailCheck}>
  <TextField
    label="Email"
    variant="outlined"
    fullWidth
    margin="normal"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    type="email"
  />
  <Button
    type="submit"
    variant="contained"
    color="primary"
    fullWidth
    disabled={loading}
  >
    {loading ? 'Verifying...' : 'Verify Email'}
  </Button>
</form>
)}

/* If verification is gucci, create acct */
{verificationSent && !error && (
<form onSubmit={handleSignup}>
  <TextField
    label="First Name"
    variant="outlined"
    fullWidth
    margin="normal"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    required
  />
  <TextField
    label="Last Name"
    variant="outlined"
    fullWidth
    margin="normal"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    required
  />
  <TextField
    label="Phone Number"
    variant="outlined"
    fullWidth
    margin="normal"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    required
    type="tel"
  />
  <TextField
    label="Date of Birth"
    variant="outlined"
    fullWidth
    margin="normal"
    value={dateOfBirth}
    onChange={(e) => setDateOfBirth(e.target.value)}
    required
    type="date"
    InputLabelProps={{ shrink: true }}
  />
  <TextField
    label="Password"
    variant="outlined"
    fullWidth
    margin="normal"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <TextField
    label="Confirm Password"
    variant="outlined"
    fullWidth
    margin="normal"
    type="password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
  />
  <Box>
    <input
      type="checkbox"
      checked={agreeToTerms}
      onChange={(e) => setAgreeToTerms(e.target.checked)}
    />
    <span>I agree to the <Link to="/terms">Terms & Conditions</Link></span>
  </Box>
  <Button
    type="submit"
    variant="contained"
    color="primary"
    fullWidth
    disabled={loading}
  >
    {loading ? 'Creating Account...' : 'Create Account'}
  </Button>
</form>

  export default SignupPage;
