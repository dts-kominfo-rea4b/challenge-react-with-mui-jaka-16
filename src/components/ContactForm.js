// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, FormControl, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ handleNewAddContact }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada


    const [data, setData] = useState([{
        "name": "",
        "phone": "",
        "email": "",
        "photo": ""
    }]);

    const changeValue = (e) => { 
        const value = e.target.value;
        setData({...data, [e.target.name]: value});
    }

    return (<div className="todo-form">
        <Card sx={{ width: "500px"}}>
            <FormControl sx={{ paddingTop: "30px"}} >
                <FormControl sx={{ marginBottom: "10px"}}>
                    <TextField sx={{ width: "450px"}}  label="Name" name="name" variant="outlined" value={data.name} onChange={changeValue} />
                </FormControl>
                <FormControl sx={{ marginBottom: "10px"}}>
                    <TextField label="Phone" name="phone" variant="outlined" value={data.phone} onChange={changeValue} />
                </FormControl>
                <FormControl sx={{ marginBottom: "10px"}}>
                    <TextField label="Email" name="email" variant="outlined" value={data.email} onChange={changeValue} />
                </FormControl>
                <FormControl sx={{ marginBottom: "10px"}} >
                    <TextField label="Photo URL" name="photo" variant="outlined" value={data.photo} onChange={changeValue} />
                </FormControl>
                <CardActions>
                    <Button onClick={() => { handleNewAddContact(data); setData({
            "name": "",
            "phone": "",
            "email": "",
            "photo": ""
        })}} >Add Contact</Button>
                </CardActions>
            </FormControl>
        </Card>
        </div>
    );
}

export default ContactForm;