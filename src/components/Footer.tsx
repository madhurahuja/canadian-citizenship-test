import React from 'react';
import { Box, Container, Typography, Link, Stack, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const officialLinks = [
    {
      title: "Official Study Guide",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html"
    },
    {
      title: "Citizenship Test Info",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/citizenship-test.html"
    },
    {
      title: "Application Process",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/apply.html"
    }
  ];

  const legalLinks = [
    {
      title: "Privacy Policy",
      url: "/privacy"
    },
    {
      title: "Terms of Use",
      url: "/terms"
    },
    {
      title: "Disclaimer",
      url: "/disclaimer"
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {/* Official Resources */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Official Resources
            </Typography>
            <Stack spacing={1}>
              {officialLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="text.secondary"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}
                >
                  <LanguageIcon fontSize="small" />
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Legal Links */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1}>
              {legalLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  color="text.secondary"
                  sx={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* About */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              This website is a free resource to help you prepare for the Canadian citizenship test. 
              All questions are based on the official study guide "Discover Canada".
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                color="text.secondary"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                color="text.secondary"
              >
                <LinkedInIcon />
              </Link>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Canadian Citizenship Test Practice. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Not affiliated with the Government of Canada
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 