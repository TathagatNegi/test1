import React from 'react';
import CreateSecurity from './CreateSecurity';
// import CreateSecurityModal from './CreateSecurityModal';
// import ModalPanel from './ModalPanel';
// import Button from '@mui/material/Button';
// import ModalPanel2 from './ModalPanel2';
// import DateFnsUtils from '@date-io/date-fns';
import { IFrame } from './iframe';

// import './a.css';

import * as PropClasses from './PropClasses';

const App = () => {
  // let DataForCreateSecurityModal =
  //   new PropClasses.CreateSecurityModalPropClass();

  // DataForCreateSecurityModal.message =
  //   ' Data from the message prop dvsf rgrgherh dhthdthtdhdthdthdhdthdhdt dhthdhdthdhdhdthdhdthdhdththdhttddthh dhttddthhthdhdthdhtdhhtd dhttthddhthhdthdthdhh';
  // DataForCreateSecurityModal.TopHeading = '';
  // DataForCreateSecurityModal.TopHeadingCss = {};
  // DataForCreateSecurityModal.success = 'TRUE';
  // DataForCreateSecurityModal.open = 'TRUE';
  // DataForCreateSecurityModal.TopBarCss = {};
  // DataForCreateSecurityModal.MessageDivCss = {};
  // DataForCreateSecurityModal.IconClass = {};
  // DataForCreateSecurityModal.CloseIconButton = {};
  // DataForCreateSecurityModal.successBodyCss = {};
  // DataForCreateSecurityModal.successBodyInsideDivCss = {};
  // DataForCreateSecurityModal.CloseButtonClass = {};
  // DataForCreateSecurityModal.CheckBoxMessage = '';
  // DataForCreateSecurityModal.ToggleButtonCss = {
  //   backgroundColor: 'red',
  // };
  // DataForCreateSecurityModal.OkButtonCss = {};
  // DataForCreateSecurityModal.BottomButtonText = '     ';
  // DataForCreateSecurityModal.Options = {
  //   option1: 'Continue with same Security',
  //   option2: 'Create Another Security',
  //   option3: 'Create 1 Derivative',
  // };

  // DataForCreateSecurityModal.DownstreamSystemNames = [
  //   'check1',
  //   'check2',
  //   'check3',
  // ];

  // function SelectedData(e) {
  //   console.log('hiiiii');
  //   console.log(e);
  // }
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(!open);
  // };
  // let DataForModal = new PropClasses.ModalPanelPropClass();
  // DataForModal.message = ' Data from the message prop';
  // DataForModal.success = true;
  // DataForModal.open = open;
  // DataForModal.onChange = handleClose;

  return (
    // <div>
    //   <Button size='small' variant='contained' onClick={handleClose}>
    //     Close
    //   </Button>
    //   <ModalPanel {...DataForModal} />
    // </div>

    // <div>
    //   {/* <CreateSecurityModal
    //     Data={DataForCreateSecurityModal}
    //     OkButtonFunction={SelectedData}
    //   /> */}
    //   <CreateSecurityModal Data={DataForCreateSecurityModal} />
    // <div>
    //   <CreateSecurity />
    // </div>
    <div>
      <IFrame>
        <CreateSecurity />
      </IFrame>
      <IFrame>
        <CreateSecurity />
      </IFrame>
      <IFrame>
        <CreateSecurity />
      </IFrame>
      <IFrame>
        <CreateSecurity />
      </IFrame>
      <IFrame>
        <CreateSecurity />
      </IFrame>
    </div>
  );
};
export default App;
