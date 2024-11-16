import { useState, useEffect } from "react";
import axios from "../api";
export const useFetch = (path, params = {}, deeps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(path, { params })
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [...deeps]);
  return { data, error, loading };
};
// {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`/products`, {
//         params: {
//           limit: 1 * offset,
//         },
//       })
//       .then((res) => {
//         setProduct(res.data.products);
//       })
//       .catch((err) => console.log(err))
//       .finally(() => setLoading(false));
//   }, [offset]);
// }
