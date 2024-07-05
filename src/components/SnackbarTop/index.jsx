import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';

const PositionedSnackbar = ({ message, autoHideDuration, open, onClose }) => {
  const [position] = useState({
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = position;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      message={message}
      key={vertical + horizontal}
    />
  );
};

export default PositionedSnackbar;