import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core';
import Container from '@mui/material/Container';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  Container: {
    backgroundColor: (props) =>
      props.data.success === 'TRUE' ? '#7ab563' : '#bd6c6b',
    color: 'White',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },

  Icon: {
    marginRight: '4px',
  },
  Message: {
    padding: '10px',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily || 'Open Sans',
  },

  buttonDiv: {
    margin: 'auto',
    textAlign: 'center',
    padding: '10px',
  },
}));

const ModalPanelWithTheme = (props) => {
  const classes = useStyles(props);
  const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    padding: 0,
    outline: 'none',
    backgroundColor: 'white',
    border:
      props.data.success === 'TRUE'
        ? '1.2px solid #7ab563'
        : '1.2px solid #bd6c6b',
  };

  const [open, setOpen] = React.useState(props.data.open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (props.data.open === 'FALSE') {
    return <div></div>;
  }
  let backgroundColor = props.data.success === 'TRUE' ? '#7ab563' : '#bd6c6b';
  let closeBtn = (
    <Button size='small' variant='contained' onClick={handleClose}>
      Close
    </Button>
  );

  let TopTextField = (
    <Typography id='modal-modal-title' variant='h6' component='h2'>
      {props.data.success === 'TRUE' ? 'Success' : 'Failure'}
    </Typography>
  );

  let TextMessageField = (
    <Typography className={classes.Message} id='modal-modal-description'>
      {props.data.message}
    </Typography>
  );

  const renderSuccess = (props) => {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box style={style}>
            <Container
              className={classes.Container}
              disableGutters='True'
              sx={{
                display: 'flex',
              }}
            >
              <CheckCircleIcon className={classes.Icon} />
              {TopTextField}
            </Container>
            {TextMessageField}
            <div className={classes.buttonDiv}>{closeBtn}</div>
          </Box>
        </Modal>
      </div>
    );
  };

  const renderFailure = (props) => {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          sx={{
            border: 1,
          }}
        >
          <Box style={style}>
            <Container
              className={classes.Container}
              disableGutters='True'
              sx={{
                display: 'flex',
              }}
            >
              <CancelIcon
                className={`${classes.Icon} ${classes.IconClassFromProps}`}
              />
              {TopTextField}
            </Container>
            {TextMessageField}
            <div className={classes.buttonDiv}>{closeBtn}</div>
          </Box>
        </Modal>
      </div>
    );
  };

  return (
    <div>
      {props.data.success === 'TRUE' ? renderSuccess() : renderFailure()}
    </div>
  );
};

export default ModalPanelWithTheme;
