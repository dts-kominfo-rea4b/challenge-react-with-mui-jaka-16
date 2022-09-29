import { Grid } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const contacts = contactsJSON;
  const [datas, setDatas] = useState([...contacts])

  const handleNewContact = (data) => {
    setDatas([...datas, data]);
  }

  return (
    <div className="App">
      <Header />
      <Grid container spacing={10} sx={{paddingTop: "20px"}} >
        <Grid item md="6">
          <ContactForm handleNewAddContact={handleNewContact} />
        </Grid>
        <Grid item md="6">
          {datas.map((data) => 
            (<Contact data={data} />
            ))
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
