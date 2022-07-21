import * as React from 'react';
import Grid from '@mui/material/Grid';
import Form from "./Form"
import ContactTable from "./ContactTable"
import { useState } from 'react';


const Main = () => {
  const [contactList, setContactList] = useState([]);

    return (
        <Grid container sx={{ marginTop: '4rem',alignItems:"center"}}>
          <Grid item xs={10} md={4} sx={{ margin:"auto",padding:"2rem",display:"flex",justifyContent:"center"}}>
            <Form contactList={contactList} setContactList={setContactList}/>
          </Grid>
          <Grid item xs={12} md={8} sx={{padding:"3rem"}}>
            <ContactTable contactList={contactList} />
          </Grid>
            
        </Grid>
    )
}

export default Main