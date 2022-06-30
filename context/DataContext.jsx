import { collection, where } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { useRouter } from 'next/router';
import { createContext, useState } from 'react';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { db, storage } from '../firebase';
import { useQuery } from '../hooks/useQuery';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const dataSalvageRef = collection(db, "data-salvage");
  
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState({})
  const [status, setStatus] = useState({});
  const router = useRouter();
  const [data, loading] = router.pathname === "/data-salvage" ? useQuery(dataSalvageRef, where("vendor", "==", category)) : useQuery(dataSalvageRef);
  const [imageValue] = useDownloadURL(ref(storage, `images/${details.imageURL}`));

  const allData = {data, loading, category, setCategory, details, setDetails, status, setStatus, imageValue}

  return (
    <DataContext.Provider value={allData}>
      {children}
    </DataContext.Provider>
  );
};