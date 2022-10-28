import { getProperties, deleteProperty, postProperty } from "../../services/properties";

export const SET_PROPERTIES = 'PROPERTIES/SET_PROPERTIES';

export const fetchProperties = () => {
  return (dispatch) => {
    getProperties()
      .then((res) => {
        dispatch({ type: SET_PROPERTIES, list: res.data || [] })
      })
      .catch((error) => {

      });
  }
}

export const removeProperty = (id) => {
  return (dispatch) => {
    deleteProperty(id)
      .then((res) => {
        dispatch(fetchProperties())
      })
      .catch((error) => {

      });
  }
}

export const createProperty = (data) => {
  return (dispatch) => {
    postProperty(data)
      .then((res) => {
        console.log(res.data, 'created property')
        dispatch(fetchProperties())
      })
      .catch((error) => {

      });
  }
}