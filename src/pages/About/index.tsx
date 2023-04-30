import {
  ArrowRightRounded,
  FmdGoodOutlined,
  ScheduleRounded
} from '@mui/icons-material';
import { Box, Card, Container, Divider, Grid, Typography } from '@mui/material';
import AnimatedBox from '../../components/AnimatedBox';
import Title from '../../components/Title';
import Topic from '../../components/Topic';

interface Item {
  title: string;
  location?: string;
  start: string;
  end?: string;
}

export default function About() {
  const details = [
    'Hi, nice to meet you all. 👋🏼',
    "My name is Tim and my friends call me TimPhoto. Today, I'm a solution architect engineer who will also become a full-stack developer.",
    'I started taking a picture as a hobby when I was in my first year at Chulalongkorn University and joined CU Photo Club in my second year.',
    '​My camera is CANON 650D, with 10-22 mm, 18-135 mm, and 85 f/1.8. Nowadays, I use my mobile to take a picture in many situations because it has good technology and can provide a good-quality image. I try to challenge myself by taking a photography in different types of styles.',
    'We take pictures of things we want to remember.'
  ];
  const works: Item[] = [
    {
      title: 'Freelance Photographer',
      location: 'TimPhoto',
      start: 'June 01, 2013',
      end: 'Present'
    },
    {
      title: 'Solution Architect Engineer',
      location: 'REPCO, SCG Chemicals',
      start: 'March 01, 2020',
      end: 'Present'
    },
    {
      title: 'Mechanical Design Engineer',
      location: 'REPCO, SCG Chemicals',
      start: 'July 01, 2017',
      end: 'February 29, 2020'
    }
  ];
  const educations: Item[] = [
    {
      title: 'Chulalongkorn University',
      location: 'Bachelor’s Degree',
      start: 'June 01, 2013',
      end: 'May 31, 2017'
    },
    {
      title: 'Triam Udom Suksa School',
      location: 'High School',
      start: 'June 01, 2010',
      end: 'May 31, 2013'
    }
  ];
  const awards: Item[] = [
    {
      title: 'Winner in "STRONG" Topic',
      location: 'Together Contest, SGCU Camera',
      start: '2017'
    },
    {
      title: 'Second Runner-up in "MACRO" Topic',
      location: 'YAI Camp, CU Photo Club',
      start: '2014'
    }
  ];

  function GridLayout(items: Item[]) {
    return (
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <AnimatedBox direction="right">
              <Typography variant="body1">{item.title}</Typography>
              {item.location && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  <Typography variant="body2">{item.location}</Typography>
                  <FmdGoodOutlined sx={{ width: 16, height: 16 }} />
                </Box>
              )}
              <Box
                sx={{
                  mt: 1,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 0.25
                }}
              >
                <ScheduleRounded
                  color="primary"
                  sx={{ width: 16, height: 16, mr: 0.25 }}
                />
                <Typography color="primary.main" sx={{ fontSize: 12 }}>
                  {item.start}
                </Typography>
                {item.end && (
                  <ArrowRightRounded
                    color="primary"
                    sx={{ width: 16, height: 16 }}
                  />
                )}
                {item.end && (
                  <Typography color="primary.main" sx={{ fontSize: 12 }}>
                    {item.end}
                  </Typography>
                )}
              </Box>
            </AnimatedBox>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Container maxWidth="md">
      <AnimatedBox>
        <Title text="About" />
      </AnimatedBox>
      <AnimatedBox direction="left">
        <Card
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: { xs: 240, sm: 320, md: 400 },
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? '#dddddd' : '#222222'
          }}
        >
          <img src={require('../../assets/Me.png')} alt="Me" />
        </Card>
      </AnimatedBox>
      <Box p={3}>
        {details.map((detail, index) => (
          <AnimatedBox direction="right" key={index}>
            <Typography paragraph>{detail}</Typography>
          </AnimatedBox>
        ))}
        <Divider />
        <AnimatedBox direction="left">
          <Topic text="Work Experience" />
        </AnimatedBox>
        {GridLayout(works)}
        <Divider />
        <AnimatedBox direction="left">
          <Topic text="Educations" />
        </AnimatedBox>
        {GridLayout(educations)}
        <Divider />
        <AnimatedBox direction="left">
          <Topic text="Awards" />
        </AnimatedBox>
        {GridLayout(awards)}
      </Box>
    </Container>
  );
}
