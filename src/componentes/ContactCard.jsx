// Card de cada contato.
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import PhBookContext from '../context/PhBookContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../helpers/manageData';
import EditDataButton from './EditDataButton';


export default function ContactCard() {
  const { data, setData, setEditData, setEditing } = useContext(PhBookContext);
  
  function handleEditBtn(id) {
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
    <Grid container direction="column" alignItems="center" justifyContent="center">
    {data.map(({ id, name, email, image, phoneNumbers }, i) => (

    <Card key={i} sx={{ display: 'flex', margin: '0.2em', marginLeft: '1.2em', borderRadius: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        
        <CardContent sx={{ flex: '1 0 auto', width: '13em', height: '9.3em' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div" noWrap>
            {email}
          </Typography>
          {phoneNumbers.map((n, i) => {
              return (
                <Typography variant="subtitle2" color="text.secondary" component="div" key={name + i}>
                {n}
                </Typography>
                )
            })}
        </CardContent>
        
        <Box sx={{ 
          display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 1
          }}>
          <IconButton aria-label="delete" id={id} onClick={({ target }) => deleteBtn(id)} >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" id={id} onClick={({ target }) => handleEditBtn(id)} >
            <EditDataButton />
          </IconButton>
        </Box>
      </Box>
    </Card>
    ))}
  </Grid>


  );
}


// return (
//   <div>
//     <Grid container direction="column" alignItems="center" justifyContent="center">
//     {data.map(({ id, name, email, image, phoneNumbers }) => (

//       <Card sx={{ display: 'flex', justifyContent: "center" }} id={id}>
//         <Box sx={{ display: 'flex' }}>
//           <Avatar
//             alt={`${name} profile pic`}
//             src={image}
//             sx={{ width: 90, height: 116, borderRadius: 22, padding: 1 }}
//             />
//           <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", gap: 1, padding: 3}}>
//           <Typography sx={{ textAlign: "left" }}>{name}</Typography>
//           <Typography sx={{ textAlign: "left" }}>{email}</Typography>
//           {phoneNumbers.map(n => {
//             return (
//           <Typography sx={{ textAlign: "left" }}>{n}</Typography>
//             )
//           })}

//           <Stack direction="row" spacing={6} justifyContent="center">
//             <IconButton aria-label="delete" id={id} onClick={({ target }) => deleteBtn(id)} >
//               <DeleteIcon />
//             </IconButton>
//             <IconButton aria-label="edit" id={id} onClick={({ target }) => editBtn(id)} >
//               <EditIcon />
//             </IconButton>
//           </Stack>
//           </Box>
//         </Box>
//       </Card>
//     ))}
      
//     </Grid>
//   </div>

// );
// }
