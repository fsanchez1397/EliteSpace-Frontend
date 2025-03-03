// dont need supabaseclient anymore or impot b/c single api call to backend. Backend's going to check if tenant exists, create acct, send email, handle supabase sutff. 

import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Alert,
  FormControlLabel,
  Checkbox,
  Link
} from '@mui/material';
import { Link as Router } from 'react-router';
import './SignupPage.css';



const SignupPage = () => {

  // form states: 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: ''
  });

  // agree to terms states? w check box. check with team
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // other states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationSent, setVerificationSent] = useState(false);

  // visualize form first and what u want it to do: 


   // Handle input changes
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Form validation
  const validateForm = () => {
    // Clear any previous errors
    setError(null);
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return false;
    }
    
    // Check password length
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    
    // Check terms agreement
    if (!agreeToTerms) {
      setError("You must agree to the terms and conditions");
      return false;
    }
    
    return true;
  };
  
  // Handle form submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the form
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Send signup data to the backend endpoint
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        })
      });
      
      const data = await response.json();
      
      // Handle error response
      if (!response.ok) {
        throw new Error(data.message || 'Error creating account');
      }
      
      // Show success message
      setVerificationSent(true);
      

      // Should I handle this error differently to typescript type like interface?? I would need help or do more research on this 
    } catch (error: unknown) {
      setError((error as { message?: string }).message || 'An error occurred during signup');
    }
  };





  return (
    <div className="signup-container">
      <Card className="signup-card">
        <CardContent className="signup-card-content">
          <Typography variant="h6" className="signup-title">
            Logo
          </Typography>
          
          <Typography variant="h4" className="signup-subtitle">
            Create Account
          </Typography>
          
          {/* Error Message */}
          {error && (
            <Alert severity="error" className="signup-alert">
              {error}
            </Alert>
          )}
          
          {/* Success after email sent */}
          {verificationSent ? (
            <div className="verification-sent">
              <Alert severity="success" className="margin-bottom">
                Verification email sent!
              </Alert>
              <Typography variant="body1" component="p" className="margin-bottom">
                We've sent a verification link to <strong>{formData.email}</strong>
              </Typography>
              <Typography variant="body2" component="p" className="margin-bottom">
                Please check your email and click the verification link to complete signup.
              </Typography>

              <Button
                component={Router}
                to="/login"
                variant="contained"
                color="primary"
                fullWidth
                className="margin-top"
              >
                Go to Login
              </Button>
            </div>
          ) : (

            
            // Signup form
            <form onSubmit={handleSignup}>
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="signup-form-input"
              />
              
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="signup-form-input"
              />
              
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="signup-form-input"
              />

              <TextField
                label="Phone"
                name="phone"
                variant="outlined"
                fullWidth
                margin="normal"
                type="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="signup-form-input"
              />
              
              <TextField
                name="dob"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className="signup-form-input"
              />

              <TextField
                label="Password"
                name="password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                helperText="At least 8 characters"
                className="signup-form-input"
              />
              
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="signup-form-input"
              />
              
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={agreeToTerms} 
                    onChange={(e) => setAgreeToTerms(e.target.checked)} 
                  />
                }
                label={
                  <span>
                    I agree to the{' '}
                    <Link component="button" className="terms-link">
                      Terms & Conditions
                    </Link>
                  </span>
                }
              />
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                disabled={loading}
                className="signup-button"
              >
                Register
              </Button>
            </form>
          )}

          {/* Already have account link */}
          <Box className="signin-link-container">
            <Typography variant="body2">
              Already have an account? 
            </Typography>
            <Link 
              component={Router} 
              to="/login" 
              className="signin-link"
            >
              Sign in
            </Link>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
