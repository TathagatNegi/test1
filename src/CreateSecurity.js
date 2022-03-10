import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Tooltip from '@mui/material/Tooltip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TimePicker from '@mui/lab/TimePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '& .MuiTypography-root': {
            fontSize: '13px',
          },

          borderBottom: `1px solid #f0f0f0`,
          boxShadow: 'none',

          '&:not(:last-child)': {
            //borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },

          '& .MuiAccordionSummary-content': {},
          '& .MuiAccordionSummary-root': {
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '0px',
          },

          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
            marginRight: '3px',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridColumnGap: '100px',
          gridRowGap: '20px',
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {},
    },
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 'inherit',
          padding: '0px',
          '& .MuiTabs-indicator': {
            bottom: '10px',
            color: '#48a3dd',
            backgroundColor: '#48a3dd',
          },
          '& .MuiTab-root.Mui-selected ': {
            color: '#48a3dd',
          },
          '& .MuiButtonBase-root-MuiTab-root': {
            fontSize: '12px',
            padding: '0px',
            margin: '0px',
            fontFamily: 'lato',
          },
        },
      },
    },

    // MuiSlider: {
    //   styleOverrides: {
    //     valueLabel: ({ ownerState, theme }) => ({
    //       ...(ownerState.orientation === 'vertical' && {
    //         backgroundColor: 'transparent',
    //         color: theme.palette.grey[500],
    //       }),
    //     }),
    //   },
    // },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input.css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input':
      {
        paddingRight: '6px',
        color: '#43d9c6',
      },
  },
  CUSecurityTopBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  CUHeaderDiv: {
    width: '100%',
    // height: '35px',
    display: 'flex',
  },
  CUHeaderLeftSide: { display: 'flex' },
  CUHeader: {},
  CUSecurityOptionsSecType: {},
  CUSecurityOptionsDefaultOuterdiv: { display: 'flex' },
  CUSecurityOptionsDefaultDdlDiv: {
    display: 'inline-block',
  },
  SecurityTimeHeader: { display: 'inline-block' },
  CUHeaderRightSide: { display: 'flex', alignItems: 'center' },
  CUHeaderQuickFindDiv: {
    display: 'flex',
  },
  SearchTextField: {
    // width: '230px',
    border: 'none',
    color: '#7c7c7c',
    paddingLeft: '5px',
    outline: 'none',
    fontSize: '12px',
    fontFamily: 'lato',
  },
  //-------------------------------- Tabs and Attributes  ------------------------------------

  // slimScrollDiv: {
  //   position: 'relative',
  //   overflow: 'hidden',
  //   width: '1440px',
  //   height: '595px',
  // },
  CUTabHeader: {
    marginTop: '10px',
  },
  CUTabRootDiv: {},
  CUTabLabels: {
    fontSize: '13px',
    fontFamily: 'lato',
  },
  CUTabBody: {
    // height: '100%',
  },

  //----------------------------------  Attributes/tab Body ------------------------------------

  CUAccordionHeader: {
    paddingTop: '20px',
  },
  CUAccordionHeaderDiv: {
    // height: '23px',
    borderBottom: '1px solid #f0f0f0',
    padding: '0px',
    margin: '0px 30px 0px 30px',
  },

  //-------------------------------- Bottom Bar ------------------------------------

  BottomBarClass: {
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 5px',
    // position: 'absolute',
    // width: '100%',
    // bottom: '0px',
    // left: '0px',
    display: 'block',
    fontSize: 'small',
    backgroundColor: 'white',
    // overflow: 'hidden',
    zIndex: '101',
    // height: '100%',
    border: '1px solid rgba(0,0,0,0.2)',
  },
  animatedItem: {
    animation: `$myEffect 2000ms ease-in`,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 2000ms ease-in`,
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 0,
      transform: 'translateY(200%)',
    },
    '50%': {
      opacity: 0.5,
      transform: 'translateY(100%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    '50%': {
      opacity: 0.5,
      transform: 'translateY(100%)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(200%)',
    },
  },

  CUDivBottomFixed: {
    display: 'flex',
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    backgroundColor: 'rgb(252, 252, 252)',
    color: 'gray',
    zIndex: '100',
    fontSize: '12px',
    padding: '5px 0px',
    alignItems: 'center',
  },
  CUSecurityDetailsDiv: { padding: '0px 7.5px 0px 30px' },
  CUBottomBarDivs: {},
  CUBottomBarSeparator: {
    backgroundColor: '#cecece',
    width: '1px',
    height: '35px',
    margin: '7px 3px 3px 3px',
  },
  CUdivUnderlierHierarchy: { padding: '0px 7.5px 0px 7.5px' },
}));

const CreateSecurity = (createSecurityProps) => {
  const cssClasses = useStyles(createSecurityProps);
  //Search Field display hidden
  let searchFieldDisplay = false;
  const handleSearchIconClick = () => {
    searchFieldDisplay = !searchFieldDisplay;
  };

  const searchField = (
    <input
      className={`${cssClasses.SearchTextField}`}
      type='text'
      id='textFind'
      placeholder="[Press 'Enter' to Search]"
    />
  );

  //Top Header Right Side More Options State
  const [moreOptionDdl, setMoreOptionDdl] = React.useState('');
  const handleMoreOptionDdlChange = (event) => {
    setMoreOptionDdl(event.target.value);
  };

  // ---------------------------------------------------Tabs -----------------------------------
  const [tabvalue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const tabNames = [
    'Security Master',
    'Identifier',
    'Reference Data',
    'Security Attributes',
    'A check qa Sanity',
  ];
  const TabNames = tabNames.map((tabName, index) => {
    return (
      <Tab
        className={`${cssClasses.CUTabLabels} ${cssClasses.root}`}
        key={index}
        label={<span className={cssClasses.CUTabLabels}>{tabName}</span>}
      />
    );
  });

  //-------------------Attributes Component States ----------------------

  const [dateValue, setdateValue] = React.useState('12/12/2022');
  const [timevalue, setTimeValue] = React.useState(null);

  var textFieldAttributesNames = Array(10).fill('attr');
  var textFieldAttributes = textFieldAttributesNames.map((e, index) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label>{`${e}${index}`}</label>
        <TextField key={index} size='small' />
      </div>
    );
  });
  var radioAttributesNames = Array(10).fill('radioAttr');
  var radioAttributes = radioAttributesNames.map((e, index) => {
    return (
      <FormControl key={index} size='small'>
        <FormLabel id='demo-row-radio-buttons-group-label'>{`${e}${index}`}</FormLabel>
        <RadioGroup
          size='small'
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
        >
          <FormControlLabel
            size='small'
            value='True'
            control={<Radio />}
            label='True'
          />
          <FormControlLabel
            size='small'
            value='False'
            control={<Radio />}
            label='False'
          />
        </RadioGroup>
      </FormControl>
    );
  });

  const [value, setValue] = React.useState(Date.now());
  var dateTimeAttributes = radioAttributesNames.map((e, index) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    );
  });

  const datePickerAttributes = radioAttributesNames.map((e, index) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={`${e}${index}`}
          value={dateValue}
          onChange={(newValue) => {
            setdateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  });

  const timePickerAttributes = radioAttributesNames.map((e, index) => {
    return (
      <TimePicker
        label={`${e}${index}`}
        value={timevalue}
        onChange={(newValue) => {
          setTimeValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    );
  });

  const attributesNames2 = Array(40).fill('2TabAttr');
  const secondTabattr = attributesNames2.map((e, index) => {
    return (
      <TextField
        key={index}
        label={`${e}${index}`}
        size='small'
        defaultValue='attribute1'
      />
    );
  });
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const secondTabattr2 = attributesNames2.map((e, index) => {
    return (
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-standard-label'>{`${e}${index}`}</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={age}
          onChange={handleChange}
          label={`${e}${index}`}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  });

  const attributesNames3 = Array(40).fill('3TabAttr');
  const thirdTabattr = attributesNames3.map((e, index) => {
    return (
      <TextField
        key={index}
        label={`${e}${index}`}
        size='small'
        defaultValue={`${e}${index}`}
      />
    );
  });
  const thirdTabattr2 = attributesNames3.map((e, index) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    );
  });

  const attributesNames4 = Array(20).fill('4TabAttr');
  const attributesNames44 = Array(20).fill('4subTabAttr');
  const timePickerAttributesTab4 = attributesNames4.map((e, index) => {
    return (
      <TimePicker
        label={`${e}${index}`}
        value={timevalue}
        onChange={(newValue) => {
          setTimeValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    );
  });

  const datePickerAttributesTab4 = attributesNames44.map((e, index) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={`${e}${index}`}
          value={dateValue}
          onChange={(newValue) => {
            setdateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  });

  const attributesNamessubtab24 = Array(40).fill('4SubTab2Attr');

  var radioAttributesfortab4 = attributesNamessubtab24.map((e, index) => {
    return (
      <FormControl key={index} size='small'>
        <FormLabel id='demo-row-radio-buttons-group-label'>{`${e}${index}`}</FormLabel>
        <RadioGroup
          size='small'
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
        >
          <FormControlLabel
            size='small'
            value='True'
            control={<Radio />}
            label='True'
          />
          <FormControlLabel
            size='small'
            value='False'
            control={<Radio />}
            label='False'
          />
        </RadioGroup>
      </FormControl>
    );
  });

  const attributesNames5 = Array(40).fill('5TabsubAttr');

  const attributesNames55 = Array(40).fill('5TabsubTab2Attr');

  const secondTab5attr = attributesNames5.map((e, index) => {
    return (
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-standard-label'>{`${e}${index}`}</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={age}
          onChange={handleChange}
          label={`${e}${index}`}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  });

  var textFieldAttributestab5 = attributesNames55.map((e, index) => {
    return (
      <TextField
        key={index}
        label={`${e}${index}`}
        size='small'
        defaultValue={`${e}${index}`}
      />
    );
  });

  //----------------------------------------------- Tab Body Dummy -----------------------------------------------------

  const TabBody1 = (
    <div className={`${cssClasses.CUAccordionHeader}`}>
      <div className={`${cssClasses.CUAccordionHeaderDiv}`}>
        <div>
          <Accordion square className={`${cssClasses.CUAccordionBody}`}>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Security Master Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {radioAttributes}
              {textFieldAttributes}
              {dateTimeAttributes}
              {datePickerAttributes}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography>Security Master Details2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {textFieldAttributes}
              {timePickerAttributes}
              {dateTimeAttributes}
              {datePickerAttributes}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
  const TabBody2 = (
    <div className={`${cssClasses.CUAccordionHeader}`}>
      <div className={`${cssClasses.CUAccordionHeaderDiv}`}>
        <div>
          <Accordion square className={`${cssClasses.CUAccordionBody}`}>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Reference Details</Typography>
            </AccordionSummary>
            <AccordionDetails>{secondTabattr}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography>Reference Details2</Typography>
            </AccordionSummary>
            <AccordionDetails>{secondTabattr2}</AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
  const TabBody3 = (
    <div className={`${cssClasses.CUAccordionHeader}`}>
      <div className={`${cssClasses.CUAccordionHeaderDiv}`}>
        <div>
          <Accordion square className={`${cssClasses.CUAccordionBody}`}>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>first subTab</Typography>
            </AccordionSummary>
            <AccordionDetails>{thirdTabattr}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography>Second SubTab</Typography>
            </AccordionSummary>
            <AccordionDetails>{thirdTabattr2}</AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
  const TabBody4 = (
    <div className={`${cssClasses.CUAccordionHeader}`}>
      <div className={`${cssClasses.CUAccordionHeaderDiv}`}>
        <div>
          <Accordion square className={`${cssClasses.CUAccordionBody}`}>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>SubTab1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {timePickerAttributesTab4}
              {datePickerAttributesTab4}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography>SubTab2</Typography>
            </AccordionSummary>
            <AccordionDetails>{radioAttributesfortab4}</AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
  const TabBody5 = (
    <div className={`${cssClasses.CUAccordionHeader}`}>
      <div className={`${cssClasses.CUAccordionHeaderDiv}`}>
        <div>
          <Accordion square className={`${cssClasses.CUAccordionBody}`}>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>SubTab1</Typography>
            </AccordionSummary>
            <AccordionDetails>{secondTab5attr}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
              }
              aria-controls='panel2a-content'
              id='panel2a-header'
            >
              <Typography>SubTab2</Typography>
            </AccordionSummary>
            <AccordionDetails>{textFieldAttributestab5}</AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );

  //----------------------------------------------- Bottm Bar Divs -----------------------------------------------------

  const [viewSecurityInfo, setViewSecurityInfo] = React.useState('none');
  const handleInfoIconClickChange = () => {
    setViewSecurityInfo(viewSecurityInfo === 'none' ? 'block' : 'none');
  };
  const handleViewSecurityInfoBodyCloseButtonClick = (e) => {
    setViewSecurityInfo(viewSecurityInfo === 'none' ? 'block' : 'none');
  };
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    // height: '100%',
  }));
  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
  };
  const viewSecurityInfoBody = (
    <div
      id='divExpandFromBottom'
      // className={`${cssClasses.BottomBarClass} ${clsx(cssClasses.animatedItem, {
      //   [cssClasses.animatedItemExiting]: viewSecurityInfo === 'none',
      // })}`}
      className={`${cssClasses.BottomBarClass}  ${
        viewSecurityInfo === 'none'
          ? cssClasses.animatedItem
          : cssClasses.animatedItemExiting
      }`}
      style={{ display: `${viewSecurityInfo}` }}
    >
      <Grid
        // height='100%'
        container
        spacing={0}
        style={{ border: '1px solid rgba(0,0,0,0.2)' }}
      >
        <Grid item xs={2}>
          <Item style={{ backgroundColor: 'rgb(242,242,242)' }}>xs=2</Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <CloseIcon
              className={`${cssClasses.viewSecurityInfoBodyCloseButton}`}
              onClick={handleViewSecurityInfoBodyCloseButtonClick}
            />
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
          </Item>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        {viewSecurityInfo === 'block' && viewSecurityInfoBody}
        <div>
          <div className={`${cssClasses.CUSecurityTopBar}`}>
            <div className={cssClasses.CUHeaderLeftSide}>
              <div
                id='panelSecurityheader'
                className={`${cssClasses.CUHeaderDiv}`}
              >
                <div
                  id='createSecurityNew_divPageheader'
                  className={`${cssClasses.root} ${cssClasses.CUHeader}`}
                >
                  Create
                </div>
                <div
                  id='createSecurityNew_SelectSecType'
                  className={`${cssClasses.root} ${cssClasses.CUSecurityOptionsSecType}`}
                >
                  SMSelectComponent
                </div>
                <div
                  id='createSecurityNew_DefaultTemplates'
                  className={`${cssClasses.root} ${cssClasses.CUSecurityOptionsDefaultOuterdiv}`}
                >
                  <div>
                    <span>with</span>
                  </div>
                  <div
                    className={`${cssClasses.root} ${cssClasses.CUSecurityOptionsDefaultDdlDiv}`}
                  >
                    SMSelectComponent
                  </div>
                </div>
                <div
                  id='createSecurityNew_DivEffectiveCreationDiv'
                  style={{ display: 'flex' }}
                >
                  <label
                    id='lblErrorEffectiveDate'
                    style={{ display: 'none', color: 'red' }}
                  >
                    Please enter Effective Date less than or equal to Today's
                    Date
                  </label>
                  <div
                    className={`${cssClasses.root}  ${cssClasses.SecurityTimeHeader}`}
                  >
                    and Start Date&nbsp;
                  </div>
                  <div
                    style={{ display: 'inline-block' }}
                    className={`${cssClasses.root}`}
                  >
                    SMSelectComponent
                  </div>
                </div>
              </div>
            </div>
            <div className={`${cssClasses.CUHeaderRightSide}`}>
              <div
                id='createSecurityNew_divFindControls'
                className={`${cssClasses.CUHeaderQuickFindDiv}`}
              >
                <SearchIcon fontSize='small' onClick={handleSearchIconClick} />

                {searchFieldDisplay && searchField}
              </div>
              <Button
                variant='text'
                sx={{
                  textTransform: 'none',
                  // height: '35px',
                  // width: '60px',
                  fontSize: '14px',
                  margin: '0px 5px 0px 0px',
                  padding: '0px',
                  border: 'none',
                  color: '#43d9c6',
                  backgroundColor: 'white',
                }}
              >
                Preview
              </Button>
              <InputLabel
                id='demo-simple-select-label'
                style={{
                  color: '#43d9c6',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '13px',
                  lineHeight: '15px',
                }}
              >
                More
              </InputLabel>
              <Select
                className={`${cssClasses.root} ${cssClasses.selectBorder}`}
                labelId='Create Security Options'
                value={moreOptionDdl}
                label='More'
                onChange={handleMoreOptionDdlChange}
                autoWidth
                variant='standard'
              >
                <MenuItem value={10}>Draft</MenuItem>
              </Select>
              <Button
                variant='contained'
                sx={{
                  textTransform: 'none',
                  // height: '19px',
                  // width: '41px',
                  fontSize: '12px',
                  fontFamily: 'lato',
                  margin: '0px 5px 0px 0px',
                  padding: '0px',
                  border: 'none',
                  color: 'white',
                  background: '#ea9747',
                  ':hover': {
                    background: '#ea9747',
                  },
                }}
              >
                Save
              </Button>
            </div>
          </div>
          <div
            id='CreateSecurityNew_panelSecurityOptions'
            // style={{ width: '100%', height: '100%' }}
          >
            <div id='CreateSecurityNew_panelMain'>
              <div id='divTabMaster'>
                <div className={`${cssClasses.CUTabHeader}`}>
                  <Box
                    sx={{
                      // height: '25px',
                      margin: '0px 30px 0px 30px',
                      borderBottom: '1px solid #f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Tabs
                      value={tabvalue}
                      className={`${cssClasses.CUTabRootDiv} ${cssClasses.root}`}
                      v
                      onChange={handleTabChange}
                      variant='scrollable'
                      scrollButtons='auto'
                      aria-label='scrollable auto tabs example'
                    >
                      {TabNames}
                    </Tabs>
                  </Box>
                </div>
                <div className={`${cssClasses.CUTabBody}`}>
                  {tabvalue === 0 && TabBody1}
                  {tabvalue === 1 && TabBody2}
                  {tabvalue === 2 && TabBody3}
                  {tabvalue === 3 && TabBody4}
                  {tabvalue === 4 && TabBody5}
                </div>
              </div>
            </div>
          </div>
          <div
            id='divBottomFixed'
            className={`${cssClasses.CUDivBottomFixed}`}
            style={{ boxShadow: 'rgb(202 202 202 ) 4px 0px 10px' }}
          >
            <div
              id='divSecurityDetails'
              className={`${cssClasses.CUSecurityDetailsDiv}`}
            >
              <div id='btnShowInfo' className={`${cssClasses.CUBottomBarDivs}`}>
                <div
                  className={`${cssClasses.CUSecurityDetailsUp}`}
                  style={{
                    position: 'relative',
                    top: '-4px',
                    left: '6px',
                    borderRight: '1px solid #cecece',
                    display: 'none',
                  }}
                ></div>
                <Tooltip title='Expand to View Security Info'>
                  <InfoIcon
                    style={{ cursor: 'pointer' }}
                    onClick={handleInfoIconClickChange}
                  />
                </Tooltip>
              </div>
            </div>
            <div className={`${cssClasses.CUBottomBarSeparator}`}></div>
            <div
              id='divUnderlierHierarchy'
              className={`${cssClasses.CUdivUnderlierHierarchy}`}
            >
              <Tooltip title='Expand to View Security Hierarchy'>
                <AccountTreeIcon style={{ cursor: 'pointer' }} />
              </Tooltip>
            </div>
            <div className={`${cssClasses.CUBottomBarSeparator}`}></div>
          </div>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default CreateSecurity;
