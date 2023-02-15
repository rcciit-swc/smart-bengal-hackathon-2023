import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
const DataContext = React.createContext();

export function useDataContext() {
  return useContext(DataContext);
}

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
        res.push({ ...doc.data(), id: doc.id });
      });
      setOrg(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function addOrganisation(org) {
    try {
      const userRef = collection(db, "organisations");
      addDoc(userRef, org);
    } catch (err) {
      console.log(err);
    }
  }
  async function addProblemStatement(id, data) {
    try {
      const docRef = doc(db, "organisations", id);
      await updateDoc(docRef, {
        problemStatements: arrayUnion(data),
      });
    } catch (error) {
      console.log(error);
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
