import { useState, useEffect } from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { openForm } from "../redux/actions/draverActions";
import { sortingPropertis } from "../redux/actions/propertiesActions";

const Header = styled(Box)(
  () => ({
    width: 'calc(100% - 48px)',
    height: '62px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '24px',
    borderBottom: 'solid 1px #BCBDBC'
  })
)

const items = [
  {name: 'Price descending', value: 'price', type: 'decs'},
  {name: 'Price ascending', value: 'price', type: 'asc'},
  {name: 'Name A-Z', value: 'name', type: 'decs'},
  {name: 'Name Z-A', value: 'name', type: 'asc'}
]

export default function PropertiesHeader() {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState({});

  useEffect(() => {
    dispatch(sortingPropertis(selectedFilter))
  }, [selectedFilter])

  const handleChangeFilter = event => {
    setSelectedFilter(event.target.value)
  }

  return (
    <Header>
      <Select
        value={selectedFilter}
        onChange={handleChangeFilter}
      >
        {items.map(item => (
          <MenuItem key={item.name} value={item}>{item.name}</MenuItem>
        ))}
      </Select>
      <Button
        onClick={() => dispatch(openForm(true))}
        variant="contained"
        color="secondary"
      >
        Add property
      </Button>
    </Header>
  )
}