import axios from "axios";
import { useEffect, useState } from "react";

const SecondPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/barang").then((response) => {
      setData(response.data);
    });
  }, []);
  return <h1>{data[0]}</h1>;
};

export default SecondPage;
