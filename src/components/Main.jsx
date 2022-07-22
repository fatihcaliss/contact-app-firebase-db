import * as React from 'react';
import Grid from '@mui/material/Grid';
import Form from "./Form"
import ContactTable from "./ContactTable"
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Main = () => {
  const [contactList, setContactList] = useState([]);

      // material ui alert section
      const [openToast, setOpenToast] = useState(false);
      const [toastContent, setToastContent] = useState("");
  
      const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
              return;
          }
          setOpenToast(false);
      };
      const Alert = React.forwardRef(function Alert(props, ref) {
          return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      function TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
      }
  return (
    <Grid container sx={{ marginTop: '4rem', alignItems: "center" }}>
      <Grid item xs={10} md={4} sx={{ margin: "auto", padding: "2rem", display: "flex", justifyContent: "center" }}>
        <Form contactList={contactList} setContactList={setContactList} setOpenToast={setOpenToast} setToastContent={setToastContent}/>
      </Grid>
      <Grid item xs={12} md={8} sx={{ padding: "3rem" }}>
        <ContactTable contactList={contactList} setOpenToast={setOpenToast} setToastContent={setToastContent}/>
      </Grid>
      <Snackbar open={openToast} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{   vertical: 'top',
          horizontal: 'center'}} TransitionComponent={TransitionLeft}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {toastContent}
        </Alert>
      </Snackbar>
    </Grid>
  )
}

export default Main