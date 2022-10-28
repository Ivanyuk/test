import { useDispatch } from "react-redux";
import { removeProperty } from "../redux/actions/propertiesActions";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box
} from "@mui/material";
import { styled } from '@mui/material/styles';

import CloseIcon from '../assets/CloseIcon.svg';
import DefaultProperyImage from '../assets/DefaultPropertyImage.png';

const ContentRow = styled(Box)(
  () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })
)

const ContentBox = styled(Box)(
  () => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  })
)

export default function PropertyItem({ property }) {
  const dispatch = useDispatch();

  const {
    id,
    name,
    plotSize,
    rooms,
    price
  } = property;

  return (
    <Card>
      <CardHeader
        title={<Typography variant="body1">{name}</Typography>}
        action={
          <IconButton aria-label="settings" onClick={() => dispatch(removeProperty(id))}>
            <img src={CloseIcon} alt="closeIcon" />
          </IconButton>
        }
      />
      <ContentBox>
        <CardMedia
          component="img"
          height="88"
          image={DefaultProperyImage}
          alt="Propery image"
        />
        <CardContent>
          <ContentRow>
            <Typography variant="body2">
              Rooms
            </Typography>
            <Typography variant="body1">
              {rooms}
            </Typography>
          </ContentRow>
          <ContentRow>
            <Typography variant="body2">
              Feature
            </Typography>
            <Typography variant="body1">
              {plotSize} m<sup>2</sup>
            </Typography>
          </ContentRow>
          <ContentRow>
            <Typography variant="body2">
              Price
            </Typography>
            <Typography variant="body1">
              {price && `${price} EUR`}
            </Typography>
          </ContentRow>
        </CardContent>
      </ContentBox>
    </Card>
  )
}