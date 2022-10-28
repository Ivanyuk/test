import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProperties } from "../redux/actions/propertiesActions";

import PropertiesList from "../components/PropertiesList";
import PropertyForm from "../components/PropertyForm";
import PropertiesHeader from "../components/PropertiesHeader";

export default function Properties() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  return (
    <>
      <PropertiesHeader/>
      <PropertiesList/>
      <PropertyForm/>
    </>
  )
}