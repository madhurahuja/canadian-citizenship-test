import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Terms: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms of Use
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            2. Use License
          </Typography>
          <Typography paragraph>
            Permission is granted to temporarily access the materials (information or software) on our website for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title.
          </Typography>
          <Typography paragraph>
            Under this license, you may not:
          </Typography>
          <ul>
            <Typography component="li">Modify or copy the materials</Typography>
            <Typography component="li">Use the materials for any commercial purpose</Typography>
            <Typography component="li">Attempt to decompile or reverse engineer any software contained on the website</Typography>
            <Typography component="li">Remove any copyright or other proprietary notations from the materials</Typography>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            3. Disclaimer
          </Typography>
          <Typography paragraph>
            The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            4. Limitations
          </Typography>
          <Typography paragraph>
            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            5. Accuracy of Materials
          </Typography>
          <Typography paragraph>
            The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            6. Links
          </Typography>
          <Typography paragraph>
            We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Terms; 