import { Box, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { openForm } from "../redux/actions/draverActions";

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

export default function PropertiesHeader() {
  const dispatch = useDispatch();
  return (
    <Header>
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