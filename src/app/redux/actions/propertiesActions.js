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
        dispatch(fetchProperties())
      })
      .catch((error) => {

      });
  }
}

export const sortingPropertis = (params) => {
  const {
    value,
    type
  } = params;
  return(dispatch, getState) => {
    const propertis = getState().properties.list;
    let _properties = [...propertis];

    if(type === 'desc') {
      _properties = _properties.sort((a,b) => {
        return a[value] === b[value] ? 0 : a[value] < b[value] ? -1 : 1
      })
    }

    if(type === 'asc') {
      _properties = _properties.sort((a,b) => {
        return a[value] === b[value] ? 0 : a[value] > b[value] ? -1 : 1
      })
    }

    dispatch({ type: SET_PROPERTIES, list: _properties })
  }
}