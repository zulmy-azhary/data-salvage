import { query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const useQuery = (ref, ...condition) => {
  const getData = query(ref, ...condition);
  const [ data, loading, error, snapshot ] = useCollectionData(getData);
  return [ data, loading, error, snapshot ];
};
