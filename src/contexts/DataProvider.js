import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, setDoc ,doc,updateDoc} from "firebase/firestore";
const DataContext = React.createContext();

export function useDataContext() {
  return useContext(DataContext);
}
const obj = {
  email: "roysulogna@gmail.com",
  spocName: "sulogna",
  name: "Heritage",
  logoUrl: "budeuieui",
  mobileNumber: "6786786786",
  problemStatement: [],
};
const objPs = {
  problemStatement: [
    {
      category: "software",
      domain: "automation",
      psNumber: "78678",
      psTitle: "yuegfuwgfywfbwfuvewhfbhuebfhuveguvuvfhuevfuh",
      domainBucket: "AI",
    },
  ],
};
export function UserProvider({ children }) {
  const [org, setOrg] = useState([]);
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    var res = [];
    try {
      const docsSnap = await getDocs(collection(db, "users"));
      docsSnap.forEach((doc) => {
        res.push(doc.data());
      });
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function getProblemStatements() {
    var res = [];
    try {
      const docsSnap = await getDocs(collection(db, "organisations"));
      docsSnap.forEach((doc) => {
        res.push(doc.data());
      });
      setOrg(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function addOrganisation() {
    try {
      const userRef = collection(db, "organisations");
      addDoc(userRef, obj);
    } catch (err) {
      console.log(err);
    }
  }
  async function addProblemStatement(props) {
    try {
      await updateDoc(doc(db, "organisations", props), objPs);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllUsers();
    getProblemStatements();
  }, []);

  const value = {
    org,
    users,
    addOrganisation,
    addProblemStatement,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
