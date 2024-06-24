// src/app/pages/index.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, Typography, Button, Container, Grid, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#000',
    minHeight: '100vh',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#333',
    color: '#fff',
    margin: '1rem',
    padding: '1rem',
    borderRadius: '8px',
  },
  avatar: {
    marginRight: '1rem',
  },
  talkButton: {
    marginTop: '1rem',
    backgroundColor: '#0070f3',
    color: '#fff',
  },
});

const users = [
  { id: '1234', name: 'John Doe', description: 'Software Engineer\nLoves coding and coffee' },
  { id: '5678', name: 'Jane Smith', description: 'Product Manager\nPassionate about UX/UI' },
  { id: '9101', name: 'Sam Wilson', description: 'Data Scientist\nEnjoys working with data' },
];

const Home: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleTalkClick = (id: string) => {
    router.push(`/page?id=${id}`);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={2} justifyContent="center">
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card className={classes.card}>
              <CardContent>
                <Grid container alignItems="center">
                  <Avatar className={classes.avatar}>{user.name[0]}</Avatar>
                  <Typography variant="h5">{user.name}</Typography>
                </Grid>
                <Typography variant="body2" style={{ whiteSpace: 'pre-line', marginTop: '1rem' }}>
                  {user.description}
                </Typography>
                <Button
                  className={classes.talkButton}
                  variant="contained"
                  onClick={() => handleTalkClick(user.id)}
                >
                  Talk
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
