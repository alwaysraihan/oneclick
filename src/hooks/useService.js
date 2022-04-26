import { useEffect, useState } from "react";

const useServicesData = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services];
};
export default useServicesData;
