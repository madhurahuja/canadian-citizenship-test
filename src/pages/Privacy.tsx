import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Privacy: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography paragraph>
            We do not collect any personal information from our users. Our practice tests and study materials are freely accessible without requiring registration or personal details.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            2. Usage Data
          </Typography>
          <Typography paragraph>
            We may collect anonymous usage data to improve our service, including:
          </Typography>
          <ul>
            <Typography component="li">Pages visited</Typography>
            <Typography component="li">Time spent on the website</Typography>
            <Typography component="li">Browser type and device information</Typography>
            <Typography component="li">Anonymous test performance statistics</Typography>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            3. Cookies
          </Typography>
          <Typography paragraph>
            We use essential cookies to enhance your experience on our website. These cookies are necessary for the website to function properly and cannot be switched off.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            4. Third-Party Services
          </Typography>
          <Typography paragraph>
            Our website may use third-party services such as Google Analytics to help us understand how our site is being used. These services may collect anonymous information about your visits.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            5. Data Security
          </Typography>
          <Typography paragraph>
            We implement appropriate security measures to protect any information collected through our website. However, as we do not collect personal information, the risk to user privacy is minimal.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            6. Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us through our GitHub repository.
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Privacy; 