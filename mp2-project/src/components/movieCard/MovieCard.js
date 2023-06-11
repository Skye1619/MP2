import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper, styled } from '@mui/material';
import './MovieCardCss.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function MovieCard({ movieTitle, movieOverview, backgroundImg, posterImg, releaseDate }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAway = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <Grid item xs={5}>
      <Typography variant="h9" sx={{ marginTop: '5px', paddingTop: '5px' }}>
        {/* {movieTitle} */}
      </Typography>

      <Card className="card-container" style={{ cursor: 'pointer' }} onClick={handleOpen}>
        <CardMedia sx={{ height: 250, padding: '10px', margin: '10px' }} image={backgroundImg} title="" />
        <CardContent className="CardInput">
          <Button size="small">
            
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <ClickAwayListener onClickAway={handleClickAway}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  outline: 'none',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1000,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <CardMedia sx={{ height: 550, padding: '10px' }} image={backgroundImg} title="" />
                  <Typography variant="h5" id="modal-title">
                    {movieTitle}
                  </Typography>
                  <Typography variant="p" color="text.secondary">
                    <span>Release Date:</span> {''}
                    {releaseDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movieOverview}
                  </Typography>
                </Box>
              </Box>
            </ClickAwayListener>
          </Modal>
          <Typography gutterBottom variant="h6" component="div">
            {movieTitle}
          </Typography>
          <Typography variant="p" color="text.secondary">
            <span>Release Date:</span> {''}
            {releaseDate}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="truncate-text">
            <div className="truncate-text--wrapper">
              <div className="truncate-text--content">{movieOverview}</div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

