import React, { useContext, useState, useEffect } from "react";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getDocs, addDoc, setDoc, getDoc, doc, query, updateDoc, arrayUnion, orderBy } from "firebase/firestore";
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

  async function getSponsorCategory() {
    const sponsorCollectionRef = collection(db, 'sponsors');
    const q = query(sponsorCollectionRef);
    const querySnapshot = await getDocs(q);
    var sponsorCategoryList = [];
    querySnapshot.forEach(doc => sponsorCategoryList.push(doc.data().category));
    // console.log(sponsorCategoryList);
    return sponsorCategoryList;
  }


  async function getSponsors() {
    try {
      // refernce to sponsor collection
      const sponsorCollectionRef = collection(db, 'sponsors');
      // fetch referrences to all documents under sponsors
      const q = query(sponsorCollectionRef);
      const querySnapshot = await getDocs(q);
      var sponsorList = [];
      querySnapshot.forEach(doc => {
        // console.log(doc.data());
        sponsorList.push(doc.data());
      })
      console.log(sponsorList);
      return sponsorList;
    } catch (err) {
      console.log('failed to fetch sponsor data');
    }
  }

  // Set new Sponsors by Admin
  async function setImageAndCategory(imageFile, sponsorData, orderNo) {
    const { category, name } = sponsorData;
    const modifiedCategory = category.toLowerCase().replace(/\s+/g, '-'); // example: Tech Partner => tech-partner
    try {
      const sponsorImagesRef = ref(storage, `sponsor-images/${name}`);
      // uploading image into Firebase Storage
      const snapshot = await uploadBytes(sponsorImagesRef, imageFile);
      // Fetch URL of uploaded image in firebase Storage
      const url = await getDownloadURL(snapshot.ref);

      // check if document exists
      const docRef = doc(db, "sponsors", modifiedCategory);
      const response = await getDoc(docRef);
      const newEntry = { name, url }

      // sponsor category already exists
      if (response.exists()) {
        const sponsorDetails = response.data();
        if (orderNo === 'Last')
          sponsorDetails.images.push(newEntry);
        else if (orderNo === 'First')
          sponsorDetails.images.unshift(newEntry);
        await setDoc(docRef, sponsorDetails);
      }

      // new sponsor-category creation
      else {
        // setDoc for $new_category as document under 'sponsors' collection
        await setDoc(docRef, {
          category: category,
          images: [newEntry]
        })
      }
    }
    catch (err) {
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
    getSponsors,
    setImageAndCategory,
    getSponsorCategory
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
