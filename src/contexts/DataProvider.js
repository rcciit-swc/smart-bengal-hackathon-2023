import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs} from "firebase/firestore";
const DataContext = React.createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function UserProvider({ children }) {
  const [org, setOrg] = useState([]);

  const q = collection(db, "organisations");
  useEffect(() => {
    (async () => {
      var res = [];
      try {
        const docsSnap = await getDocs(q);
        docsSnap.forEach((doc) => {
          res.push(doc.data());
        });
        setOrg(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const value = {
    org,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
