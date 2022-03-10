import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export const IFrame = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <div style={{    height: '770px',
      width: '1300px'}}>
      <iframe
        height='100%'
        width='100%'
        title='test'
        {...props}
        ref={setContentRef}
      >
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    </div>
  );
};
