import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Disclaimer: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Disclaimer
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Non-Official Status
          </Typography>
          <Typography paragraph>
            This website is not affiliated with, endorsed by, or connected to the Government of Canada, Immigration, Refugees and Citizenship Canada (IRCC), or any other government agency. This is an independent educational resource created to help individuals prepare for the Canadian citizenship test.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Educational Purpose
          </Typography>
          <Typography paragraph>
            The content provided on this website is for educational and practice purposes only. While we strive to maintain accuracy and stay current with official materials, this website should not be considered a substitute for official study materials provided by the Government of Canada.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            No Guarantee
          </Typography>
          <Typography paragraph>
            We do not guarantee that using our practice tests will result in passing the official Canadian citizenship test. Success in our practice tests does not guarantee success in the official test.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Content Accuracy
          </Typography>
          <Typography paragraph>
            While we make every effort to ensure the accuracy of our content, we cannot guarantee that all information is completely up-to-date or error-free. Users should always verify critical information through official government channels.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Official Resources
          </Typography>
          <Typography paragraph>
            For the most accurate and up-to-date information about Canadian citizenship, please refer to the official Government of Canada website and the official study guide "Discover Canada: The Rights and Responsibilities of Citizenship."
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Changes to Content
          </Typography>
          <Typography paragraph>
            We reserve the right to modify, update, or remove any content on this website without notice. Users are encouraged to regularly check official government sources for the most current information regarding the citizenship test and process.
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Disclaimer; 