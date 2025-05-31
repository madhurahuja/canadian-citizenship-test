import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Link as MuiLink,
} from '@mui/material';
import {
  School,
  Assignment,
  CheckCircle,
  Timer,
  LibraryBooks,
  EmojiFlags,
  MenuBook,
  OpenInNew,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Hero background image URL - using a reliable CDN-hosted image
const HERO_IMAGE_URL = 'hero-image.jpg';

// Constants for external links
const OFFICIAL_TEST_INFO_URL = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/citizenship-test.html';
const STUDY_GUIDE_URL = 'https://www.canada.ca/content/dam/ircc/migration/ircc/english/pdf/pub/discover.pdf';

const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${HERO_IMAGE_URL})`,
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Hero content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Canadian Citizenship Test Preparation
          </Typography>
          <Typography 
            variant="h5" 
            color="inherit" 
            paragraph
            sx={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              maxWidth: '800px',
            }}
          >
            Your journey to becoming a Canadian citizen starts here. Practice with our comprehensive test preparation tool designed to help you succeed.
          </Typography>
          <Button
            component={Link}
            to="/quiz"
            variant="contained"
            size="large"
            sx={{ 
              mt: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Start Practice Quiz
          </Button>
        </Container>
      </Paper>

      {/* Main Content */}
      <Container maxWidth="lg">
        {/* Test Information Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 8 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              About the Citizenship Test
            </Typography>
            <Typography paragraph>
              The Canadian Citizenship Test is a crucial step in becoming a Canadian citizen. 
              It assesses your knowledge of Canada's values, history, symbols, and institutions.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Timer color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="30-minute test duration"
                  secondary="20 multiple choice questions"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Passing score: 75%"
                  secondary="Must answer at least 15 questions correctly"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LibraryBooks color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Study material provided"
                  secondary={
                    <MuiLink
                      href={STUDY_GUIDE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      Download Discover Canada Guide
                      <OpenInNew fontSize="small" />
                    </MuiLink>
                  }
                />
              </ListItem>
            </List>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              Prerequisites for Citizenship
            </Typography>
            <Card sx={(theme) => ({
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'divider',
            })}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmojiFlags color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Permanent Resident Status"
                      secondary="Must be a permanent resident with no unfulfilled conditions"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Timer color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Time in Canada"
                      secondary="3 years (1,095 days) of physical presence in the last 5 years"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <School color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Language Skills"
                      secondary="Proof of English or French language abilities"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Assignment color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Tax Compliance"
                      secondary="File taxes if required for 3 years within the 5-year period"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Study Tips Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            How to Prepare for the Test
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Study the Official Guide
                </Typography>
                <Typography paragraph>
                  Read "Discover Canada" thoroughly. Focus on understanding key historical events,
                  government structure, and Canadian values rather than memorizing facts.
                </Typography>
                <Button
                  href={STUDY_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<MenuBook />}
                  endIcon={<OpenInNew />}
                  fullWidth
                  sx={{ mt: 'auto' }}
                >
                  Download Study Guide
                </Button>
              </CardContent>
            </Card>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Practice Regularly
                </Typography>
                <Typography paragraph>
                  Use our practice quizzes regularly. They cover all test topics and help you
                  track your progress while familiarizing you with the test format.
                </Typography>
                <Button
                  component={Link}
                  to="/quiz"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 'auto' }}
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Official Test Details
                </Typography>
                <Typography paragraph>
                  The test has 20 questions, requires a 75% passing score, 
                  and covers rights, responsibilities, history, geography, economy, government, laws and symbols.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <MuiLink
                    href={OFFICIAL_TEST_INFO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'block' }}
                  >
                    <Button
                      variant="outlined"
                      fullWidth
                      endIcon={<OpenInNew />}
                    >
                      Test Information
                    </Button>
                  </MuiLink>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 