"use client"
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #5a1d00',
    boxShadow: 24,
    p: 2,
    pt: 1,
    maxHeight: '80vh',
    overflowY: 'auto'
  };
  
  export default function BioModal({ bio }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button variant='outlined' onClick={handleOpen} className='bio-modal-btn'>Bio</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              { bio }
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }