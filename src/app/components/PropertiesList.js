import { useSelector } from "react-redux"
import { Box } from "@mui/material";
import PropertyItem from "./PropertyItem";

export default function PropertiesList() {
  const properties = useSelector(state => state.properties.list);

  return (
    <Box
      sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '20px' }}
    >
      {properties.map(property => (
        <PropertyItem key={property.id} property={property}/>
      ))}
    </Box>
  )
}