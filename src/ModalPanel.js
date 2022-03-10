import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles((theme) => ({
  Container: {
    backgroundColor: (props) =>
      props.success === true ? '#7ab563' : '#bd6c6b',
    color: 'White',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  ContainerCssFromProps: (props) => {
    return props.Container;
  },

  Typography: {
    display: 'inline-block',
  },
  Icon: {
    marginRight: '4px',
  },
  IconClassFromProps: (props) => {
    return props.IconClass;
  },
  Message: {
    padding: '10px',
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily || 'Open Sans',
  },

  CloseButton: {
    '&:hover': {},
  },
  buttonDiv: {
    margin: 'auto',
    textAlign: 'center',
    padding: '10px',
  },
}));

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           fontFamily: 'Lato',
//         },
//       },
//     },
//     MuiAccordion: {
//       styleOverrides: {
//         root: {
//           '& .MuiTypography-root': {
//             fontSize: '13px',
//           },

//           borderBottom: `1px solid #f0f0f0`,
//           boxShadow: 'none',

//           '&:not(:last-child)': {
//             //borderBottom: 0,
//           },
//           '&:before': {
//             display: 'none',
//           },

//           '& .MuiAccordionSummary-content': {},
//           '& .MuiAccordionSummary-root': {
//             display: 'flex',
//             flexDirection: 'row-reverse',
//             padding: '0px',
//           },

//           '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//             transform: 'rotate(90deg)',
//             marginRight: '3px',
//           },
//         },
//       },
//     },

//     MuiButtonBase: {
//       defaultProps: {},
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {},
//       },
//     },
//     MuiTabs: {
//       styleOverrides: {
//         root: {
//           minHeight: 'inherit',
//           padding: '0px',
//           '& .MuiTabs-indicator': {
//             bottom: '10px',
//             color: '#48a3dd',
//             backgroundColor: '#48a3dd',
//           },
//           '& .MuiTab-root.Mui-selected ': {
//             color: '#48a3dd',
//           },
//           '& .MuiButtonBase-root-MuiTab-root': {
//             fontSize: '12px',
//             padding: '0px',
//             margin: '0px',
//             fontFamily: 'lato',
//           },
//         },
//       },
//     },

//     // MuiSlider: {
//     //   styleOverrides: {
//     //     valueLabel: ({ ownerState, theme }) => ({
//     //       ...(ownerState.orientation === 'vertical' && {
//     //         backgroundColor: 'transparent',
//     //         color: theme.palette.grey[500],
//     //       }),
//     //     }),
//     //   },
//     // },
//   },
// });

const ModalPanel = (props) => {
  const classes = useStyles(props);
  if (props.open === false) {
    return null;
  }
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
    border:
      props.success === true ? '1.2px solid #7ab563' : '1.2px solid #bd6c6b',
  };
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      props.onChange();
    }
  };

  let backgroundColor = props.success === true ? '#7ab563' : '#bd6c6b';
  let closeBtn = (
    <Button
      size='small'
      className={classes.CloseButton}
      variant='contained'
      onClick={handleClose}
      sx={{
        backgroundColor: backgroundColor,
        ':hover': {
          backgroundColor: props.success === true ? '#7ab563' : '#bd6c6b',
        },
      }}
      style={props.CloseButtonClass}
    >
      Close
    </Button>
  );

  let TopTextField = (
    <Typography
      className={classes.Typography}
      id='modal-modal-title'
      variant='h6'
      component='h2'
      sx={{
        fontSize: '20px',
        lineHeight: '34px',
        fontFamily: 'Open Sans',
      }}
      style={props.TopBarCss}
    >
      {props.success === true ? 'Success' : 'Failure'}
    </Typography>
  );

  let TextMessageField = (
    <Typography
      className={classes.Message}
      id='modal-modal-description'
      sx={{ mt: 2, fontFamily: 'Open Sans' }}
      style={props.MessageDivCss}
    >
      {props.message}
    </Typography>
  );

  const renderSuccess = (props) => {
    return (
      <div>
        <Modal
          open
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          sx={{
            border: 1,
          }}
        >
          <Box sx={style} className={classes.Box}>
            <Container
              className={`${classes.Container} ${classes.ContainerCssFromProps}`}
              disableGutters
              sx={{
                display: 'flex',
              }}
            >
              <CheckCircleIcon
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

  const renderFailure = (props) => {
    return (
      <div>
        <Modal
          open
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          sx={{
            border: 1,
          }}
        >
          <Box sx={style} className={classes.Box}>
            <Container
              className={classes.Container}
              disableGutters
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
    <div>{props.success === true ? renderSuccess() : renderFailure()}</div>
  );
};

export default ModalPanel;
