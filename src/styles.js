import { makeStyles } from '@mui/styles';

const useStylesForCreateSecurityModal = makeStyles((theme) => ({
  Container: {
    backgroundColor: '#fcfcfc',
    color: 'black',
    padding: '5px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    borderTop: (props) =>
      props.Data.success === 'TRUE'
        ? '7px solid  #acd373'
        : '7px solid  #bd6c6b',
  },
  TopHeadingCssFromProps: (props) => {
    return props.Data.TopHeadingCss;
  },

  Typography: {
    display: 'inline-block',
    height: '35px',
    color: (props) => (props.Data.success === 'TRUE' ? '#acd373' : '#bd6c6b'),
  },
  Icon: {
    marginRight: '4px',
    height: '30px',
    color: (props) => (props.Data.success === 'TRUE' ? '#acd373' : '#bd6c6b'),
  },
  IconClassFromProps: (props) => {
    return props.Data.IconClass;
  },

  MessageDiv: {
    width: '96%',
    fontFamily: 'Open Sans',
    paddingTop: '10px',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    textAlign: 'center',
  },
  MessageDivFromProps: (props) => {
    return props.Data.MessageDivCss;
  },
  successBody: {
    width: '96%',
    display: 'inline-block',
    verticalAlign: 'top',
    marginTop: '10px',
    fontFamily: 'Lato',
  },
  successBodyFromProps: (props) => {
    return props.Data.successBodyCss;
  },
  successBodyMiddleDiv: {
    marginLeft: '22px',
    width: '94%',
  },
  successBodyInsideDiv: {
    fontSize: '14px',
    fontWeight: 'normal',
    marginLeft: '30px',
    display: 'block',
  },
  successBodyInsideDivFromProps: (props) => {
    return props.Data.successBodyInsideDivCss;
  },
  radioButtonDiv: {
    border: '1px solid #e0cccc',
    borderRadius: '2px',
    width: '99%',
    background: 'white',
    color: '#666',
    height: '24px',
    margin: '6px 0px',
    padding: '1px',
  },
  pushToDownStreamDiv: {
    marginTop: '15px',
    color: 'black',
    width: '135px',
    display: 'inline-block',
    fontSize: '14px',
    marginLeft: '21px',
  },
  toggleButtonCss: {
    color: 'red',
    '&$selected, &$selected:hover, &$selected:focus': {
      backgroundColor: 'red',
    },
    '&:selected': {
      backgroundColor: 'red',
    },
    '&$selected': {
      backgroundColor: 'red',
    },
    '.MuiSvgIcon-root': {
      '&:Selected': {
        backgroundColor: 'red',
      },
    },
  },
  ToggleButtonCssFromProps: (props) => {
    return props.Data.ToggleButtonCss;
  },
  DownstreamSystemDiv: {
    marginLeft: '21px',
    width: '92%',
    borderTop: '1px solid rgb(224,204,204)',
    marginTop: '10px',
  },
  buttonDiv: {
    margin: 'auto',
    textAlign: 'center',
    padding: '10px',
  },
  CloseIcon: {
    cursor: 'pointer',
    fontSize: '14px',
    float: 'right',
  },
  CloseIconFromProps: (props) => {
    return props.Data.CloseIconButton;
  },
  CloseIconDiv: {
    position: 'absolute',
    right: '10px',
    top: '14px',
  },
}));

export default useStylesForCreateSecurityModal;
