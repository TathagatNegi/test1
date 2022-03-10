import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import useStylesForCreateSecurityModal from './styles';

// const useStyles = makeStyles((theme) => ({
//   Container: {
//     backgroundColor: '#fcfcfc',
//     color: 'black',
//     padding: '5px',
//     display: 'flex',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     alignContent: 'center',
//     borderTop: (props) =>
//       props.Data.success === 'TRUE'
//         ? '7px solid  #acd373'
//         : '7px solid  #bd6c6b',
//   },
//   TopHeadingCssFromProps: (props) => {
//     return props.Data.TopHeadingCss;
//   },

//   Typography: {
//     display: 'inline-block',
//     height: '35px',
//     color: (props) => (props.Data.success === 'TRUE' ? '#acd373' : '#bd6c6b'),
//   },
//   Icon: {
//     marginRight: '4px',
//     height: '30px',
//     color: (props) => (props.Data.success === 'TRUE' ? '#acd373' : '#bd6c6b'),
//   },
//   IconClassFromProps: (props) => {
//     return props.Data.IconClass;
//   },

//   MessageDiv: {
//     width: '96%',
//     fontFamily: theme.typography.fontFamily || 'Open Sans',
//     paddingTop: '10px',
//     display: 'inline-block',
//     verticalAlign: 'top',
//     paddingLeft: '5px',
//     textAlign: 'center',
//   },
//   MessageDivFromProps: (props) => {
//     return props.Data.MessageDivCss;
//   },
//   successBody: {
//     width: '96%',
//     display: 'inline-block',
//     verticalAlign: 'top',
//     marginTop: '10px',
//     fontFamily: 'Lato',
//   },
//   successBodyFromProps: (props) => {
//     return props.Data.successBodyCss;
//   },
//   successBodyMiddleDiv: {
//     marginLeft: '22px',
//     width: '94%',
//   },
//   successBodyInsideDiv: {
//     fontSize: '14px',
//     fontWeight: 'normal',
//     marginLeft: '30px',
//     display: 'block',
//   },
//   successBodyInsideDivFromProps: (props) => {
//     return props.Data.successBodyInsideDivCss;
//   },
//   radioButtonDiv: {
//     border: '1px solid #e0cccc',
//     borderRadius: '2px',
//     width: '99%',
//     background: 'white',
//     color: '#666',
//     height: '24px',
//     margin: '6px 0px',
//     padding: '1px',
//   },
//   pushToDownStreamDiv: {
//     marginTop: '15px',
//     color: 'black',
//     width: '135px',
//     display: 'inline-block',
//     fontSize: '14px',
//     marginLeft: '21px',
//   },
//   toggleButtonCss: {
//     color: 'red',
//     '&$selected, &$selected:hover, &$selected:focus': {
//       backgroundColor: 'red',
//     },
//     '&:selected': {
//       backgroundColor: 'red',
//     },
//     '&$selected': {
//       backgroundColor: 'red',
//     },
//     '.MuiSvgIcon-root': {
//       '&:Selected': {
//         backgroundColor: 'red',
//       },
//     },
//   },
//   ToggleButtonCssFromProps: (props) => {
//     return props.Data.ToggleButtonCss;
//   },
//   DownstreamSystemDiv: {
//     marginLeft: '21px',
//     width: '92%',
//     borderTop: '1px solid rgb(224,204,204)',
//     marginTop: '10px',
//   },
//   buttonDiv: {
//     margin: 'auto',
//     textAlign: 'center',
//     padding: '10px',
//   },
//   CloseIcon: {
//     cursor: 'pointer',
//     fontSize: '14px',
//     float: 'right',
//   },
//   CloseIconFromProps: (props) => {
//     return props.Data.CloseIconButton;
//   },
//   CloseIconDiv: {
//     position: 'absolute',
//     right: '10px',
//     top: '14px',
//   },
// }));

const CreateSecurityModal = (props) => {
  const classes = useStylesForCreateSecurityModal(props);

  const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '500px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    padding: 0,

    outline: 'none',
    border:
      props.Data.success.toUpperCase() === 'TRUE'
        ? '1.2px solid #7ab563'
        : '1.2px solid #bd6c6b',
  };

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const [SelectedRadioButton, setSelectedRadioButton] = React.useState(
    'Continue with same Security'
  );

  const handleRadioButtonChange = (event) => {
    setSelectedRadioButton(event.target.value);
  };

  const [toggleValue, settoggleValue] = React.useState(false);
  let typostyle = {
    fontSize: '20px',
    lineHeight: '34px',
    fontFamily: 'Open Sans',
  };
  let style1 = { ...typostyle, ...props.Data.TopHeadingCss };

  let OkButtonStyle1 = {
    backgroundColor: '#43d9c6',
    outlineColor: '43d9c6',
    borderRadius: '2px',
    color: 'white',
    height: '22px',
    fontFamily: 'lato',
    fontSize: '12px',
    padding: '2px 10px',
    display: 'block',
    float: 'right',
    margin: '5px',
    '&:hover': {
      backgroundColor: '#43d9c6',
    },
  };

  let OkButtonStyle = { ...OkButtonStyle1, ...props.Data.OkButtonCss };

  let TopTextField = (
    <Typography
      classes={{ root: classes.Typography }}
      id='modal-modal-title'
      variant='h6'
      component='h2'
      sx={style1}
    >
      {props.Data.TopHeading ||
        (props.Data.success.toUpperCase() === 'TRUE'
          ? 'Security Created Successfully'
          : 'Error')}
    </Typography>
  );

  let TextMessageField = (
    <Typography
      className={classes.Message}
      id='modal-modal-description'
      sx={{ mt: 2, fontFamily: 'Open Sans' }}
      style={props.Data.MessageDivCss}
    >
      {props.Data.message}
    </Typography>
  );
  const labelsObj = props.Data.Options;

  const LabelsFromProps = Object.keys(labelsObj).map(function (key, index) {
    return (
      <FormControlLabel
        key={index}
        value={labelsObj[key]}
        control={<Radio />}
        className={`${classes.radioButtonDiv}`}
        label={labelsObj[key]}
      />
    );
  });

  let systemName = null;
  if (props.Data.DownstreamSystemNames !== undefined) {
    systemName = props.Data.DownstreamSystemNames.map((name, index) => {
      return { id: index, Names: name };
    });
  }

  const columns = [{ field: 'Names', headerName: 'System Names', width: 300 }];

  const rows = systemName;
  const SystemTable =
    props.Data.DownstreamSystemNames !== undefined ? (
      [
        <div className={`${classes.DownstreamSystemDiv}`}>
          <div style={{ width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              autoHeight
              density='compact'
              disableColumnSelector
              disableColumnFilter
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = rows.filter((row) =>
                  selectedIDs.has(row.id)
                );

                setSelectedRows(selectedRows);
              }}
            />
          </div>
        </div>,
      ]
    ) : (
      <div
        className={`${classes.DownstreamSystemDiv}`}
        style={{ color: '#43d9c6' }}
      >
        No External System Configured
      </div>
    );

  const [selectedRows, setSelectedRows] = React.useState([]);
  function okbuttonClickHandler() {
    const selectedData = selectedRows;
    props.OkButtonFunction({ SelectedRadioButton, selectedData });
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{}}
      >
        <Box sx={style} className={classes.Box}>
          <Container
            className={`${classes.Container} ${classes.ContainerCssFromProps}`}
            sx={{
              display: 'flex',
            }}
          >
            {props.Data.success.toUpperCase() === 'TRUE' ? (
              <CheckCircleOutlineIcon
                className={`${classes.Icon} ${classes.IconClassFromProps}`}
                style={props.Data.IconClass}
              />
            ) : (
              <CancelIcon
                className={`${classes.Icon} ${classes.IconClassFromProps}`}
              />
            )}
            {TopTextField}
            {props.Data.success.toUpperCase() === 'TRUE' ? (
              <div></div>
            ) : (
              <div className={classes.CloseIconDiv}>
                <CloseIcon
                  onClick={handleClose}
                  className={`${classes.CloseIcon} ${classes.CloseIconFromProps}`}
                />
              </div>
            )}
          </Container>
          {props.Data.success.toUpperCase() === 'TRUE' ? (
            <div
              className={`${classes.successBody} ${classes.successBodyFromProps}`}
            >
              <div className={`${classes.successBodyMiddleDiv}`}>
                <div
                  className={`${classes.successBodyInsideDiv} ${classes.successBodyInsideDivFromProps}`}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby='demo-controlled-radio-buttons-group'
                      name='controlled-radio-buttons-group'
                      value={SelectedRadioButton}
                      onChange={handleRadioButtonChange}
                      sx={{
                        display: 'Block',
                      }}
                    >
                      {LabelsFromProps}
                    </RadioGroup>
                  </FormControl>
                </div>
                {props.Data.success.toUpperCase() === 'TRUE' ? (
                  <div className={` ${classes.pushToDownStreamDiv}`}>
                    {props.Data.CheckBoxMessage !== undefined &&
                    props.Data.CheckBoxMessage.length > 1
                      ? props.Data.CheckBoxMessage
                      : 'Post To Downstream'}
                  </div>
                ) : (
                  <div></div>
                )}
                {props.Data.success.toUpperCase() === 'TRUE' ? (
                  <ToggleButton
                    value='check'
                    selected={toggleValue}
                    onChange={() => {
                      settoggleValue(!toggleValue);
                    }}
                    classes={{ root: classes.toggleButtonCss }}
                    style={{
                      border: '1px solid #cdcdcd',
                      height: '14px',
                      width: '4px',
                      '&:selected': {
                        backgroundColor: 'red',
                      },
                      '&$selected': {
                        backgroundColor: 'red',
                      },
                    }}
                  >
                    <CheckIcon fontSize='small' sx={{}} />
                  </ToggleButton>
                ) : (
                  <div></div>
                )}
                {toggleValue &&
                  (props.Data.DownstreamSystemNames !== undefined ? (
                    <div className={`${classes.DownstreamSystemDiv}`}>
                      <div style={{ width: '100%' }}>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          checkboxSelection
                          autoHeight
                          pagination='false'
                          hideFooter
                          density='compact'
                          disableColumnSelector
                          disableColumnFilter
                          onSelectionModelChange={(ids) => {
                            const selectedIDs = new Set(ids);
                            const selectedRows = rows.filter((row) =>
                              selectedIDs.has(row.id)
                            );

                            setSelectedRows(selectedRows);
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`${classes.DownstreamSystemDiv}`}
                      style={{ color: '#43d9c6' }}
                    >
                      No External System Configured
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div
              className={`${classes.MessageDiv} ${classes.MessageDivFromProps}`}
            >
              {TextMessageField}
            </div>
          )}
          {props.Data.success === 'TRUE' ? (
            <Button
              variant='contained'
              sx={OkButtonStyle}
              onClick={okbuttonClickHandler}
            >
              {props.Data.BottomButtonText.trim().length > 0 &&
              props.Data.BottomButtonText !== null
                ? props.Data.BottomButtonText
                : 'Ok'}
            </Button>
          ) : (
            ''
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default CreateSecurityModal;
