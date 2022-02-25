// Card de cada contato.
import { Avatar, Card, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import PhBookContext from '../context/PhBookContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../helpers/manageData';


export default function ContactCard() {
  const { data, setData, setEditData, setEditing } = useContext(PhBookContext);
  
  function editBtn(id) {
    const contact = data.find((cont) => cont.id === id);
    setEditData(contact);
    setEditing(true);
  }
  
  async function deleteBtn(id) {
    await deleteContact(id)
    const newData = data.filter((contact) => contact.id !== id);
    setData(newData);
  }
  
  return (
    <div>
      <Grid container direction="column" alignItems="center" justifyContent="center">
      {data.map(({ id, name, email, image, phoneNumbers }) => (

        <Card sx={{ display: 'flex', justifyContent: "center" }} id={id}>
          <Box sx={{ display: 'flex' }}>
            <Avatar
              alt={`${name} profile pic`}
              src={image}
              sx={{ width: 90, height: 116, borderRadius: 22, padding: 1 }}
              />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", gap: 1, padding: 3}}>
            <Typography sx={{ textAlign: "left" }}>{name}</Typography>
            <Typography sx={{ textAlign: "left" }}>{email}</Typography>
            {phoneNumbers.map(n => {
              return (
            <Typography sx={{ textAlign: "left" }}>{n}</Typography>
              )
            })}

            <Stack direction="row" spacing={6} justifyContent="center">
              <IconButton aria-label="delete" id={id} onClick={({ target }) => deleteBtn(id)} >
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="edit" id={id} onClick={({ target }) => editBtn(id)}>
                <EditIcon />
              </IconButton>
            </Stack>
            </Box>
          </Box>
        </Card>
      ))}
        
      </Grid>
    </div>

  );
}
