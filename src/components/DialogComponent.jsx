import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { db } from '../firebase/firebase';
import { ref, update } from 'firebase/database';
import { useState } from 'react';


export default function DialogComponent({ id, name, phone, gender, open, setOpen }) {
    
    // const [newName, setNewName] = useState(name);
    // const [newPhone, setNewPhone] = useState(phone);
    // const [newGender, setNewGender] = useState(gender);
    // const [newId, setNewId] = useState(id);

    
    const [info, setInfo] = React.useState({
        id: id,
        name: name,
        phone: phone,
        gender: gender
    });
    console.log(name);
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setInfo({
            ...info,
            [event.target.name]:event.target.value
        })
    };
    const editContact = () => {
        update(ref(db, 'Contacts/' + id),{
            name:info.name,
            gender:info.gender,
            phone:info.phone
        })
        handleClose();
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        name="name"
                        fullWidth
                        variant="standard"
                        value={info.name}
                        // onChange={(e)=> setNewName(e.target.value)}
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        name="phone"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={info.phone}
                        // onChange={(e)=> setNewPhone(e.target.value)}
                        onChange={handleChange}
                    />
                    <Box sx={{ minWidth: 120, marginTop: "1rem" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="gender"
                                value={info.gender}
                                label="Gender"
                                name="gender"
                                // onChange={(e)=> setNewGender(e.target.value)}
                                onChange={handleChange}
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={editContact}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}