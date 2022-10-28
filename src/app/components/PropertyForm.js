import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Box, Drawer, Typography, IconButton, TextField, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { openForm } from "../redux/actions/draverActions";
import { createProperty } from "../redux/actions/propertiesActions";
import CloseIcon from '../assets/CloseIcon.svg';

const Header = styled(Box)(
  () => ({
    width: 'calc(100% - 48px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
    background: '#444444'
  })
)

const Footer = styled(Box)(
  () => ({
    width: 'calc(100% - 48px)',
    padding: '24px',
    background: '#444444',
    position: 'fixed',
    rigth: 0,
    bottom: 0
  })
)

const FormWrapper = styled(Box)(
  () => ({
    padding: '16px 24px',
    width: 'calc(100% - 48px)',
  })
)


export default function PropertyForm() {
  const dispatch = useDispatch();
  const [property, setProperty] = useState({
    name: '',
    price: '',
    rooms: ''
  })
  const open = useSelector(state => state.draverReducer.open)

  const handleChange = event => {
    let _property = { ...property, [event.target.name]: event.target.value };
    setProperty(_property);
  }

  const handleSubmit = () => {
    dispatch(createProperty(property));
    setProperty({name: '', price: '', rooms: ''});
    dispatch(openForm(!open))
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => dispatch(openForm(!open))}
      PaperProps={{sx: {width: '480px', background: '#FFF'}}}
    >
      <Header>
        <Typography variant="h1">
          New property
        </Typography>
        <IconButton aria-label="settings" onClick={() => dispatch(openForm(!open))}>
          <img src={CloseIcon} alt="closeIcon" />
        </IconButton>
      </Header>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
        <FormWrapper>
          <Typography variant="h2">Property details</Typography>
          <TextField
            name="name"
            label="Property Title"
            variant="standard"
            fullWidth
            value={property.name}
            onChange={handleChange}
          />
          <TextField
            type="number"
            name="price"
            label="Price"
            variant="standard"
            fullWidth
            value={property.price}
            onChange={handleChange}
          />
          <TextField
            type="number"
            name="rooms"
            label="Rooms"
            variant="standard"
            fullWidth
            value={property.rooms}
            onChange={handleChange}
          />
        </FormWrapper>
        <Footer>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="secondary"
          >
            Create Property
          </Button>
        </Footer>
      </Box>
    </Drawer>
  )
}