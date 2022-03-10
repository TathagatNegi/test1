export class ModalPanelPropClass {
  message;
  success;
  open;
  onChange;
  TopBarCss;
  MessageDivCss;
  IconClass;
  successBodyCss;
  CloseButtonClass;
  Container;
}

export class CreateSecurityModalPropClass {
  constructor() {
    this.Options = {
      option1: 'Continue with same Security',
      option2: 'Create Another Security',
      option3: 'Create 1 Derivative',
    };
    this.DownstreamSystemNames = ['check1', 'check2', 'check3'];
  }
  message;
  TopHeading;
  TopHeadingCss;
  success;
  openT;
  TopBarCss;
  MessageDivCss;
  IconClass;
  CloseIconButton;
  successBodyCss;
  successBodyInsideDivCss;
  CloseButtonClass;
  CheckBoxMessage;
  ToggleButtonCss;
  OkButtonCss;
  BottomButtonText;
  Options;
  DownstreamSystemNames;
}
