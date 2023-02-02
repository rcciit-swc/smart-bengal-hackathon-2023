import { createContext, useContext } from "react";
import data from "../data.json";

type DataContextType = {
  title: string;
  description: string;
  themes: string[];
  themesTagline: string;
  about: string;
  descriptionCards: {
    [key: string]: any;
  }[];
  contact: {
    phone: string[];
    email: string[];
  };
  ps: {
    organization: string[];
    problemStatementTitle: string[];
    category: string[];
    psNumber: string[];
    submittedIdeasCount: string[];
    domainBucket: string[];
  };
  pf: {
    [key: string]: any;
  }[]
};

const DataContext = createContext<DataContextType>({
  title: "",
  description: "",
  themes: [],
  themesTagline: "",
  about: "",
  descriptionCards: [],
  contact: {
    email: [],
    phone: [],
  },
  ps: {
    organization: [],
    problemStatementTitle: [],
    category: [],
    psNumber: [],
    submittedIdeasCount: [],
    domainBucket: [],
  },
  pf:[]
});

export function useData() {
  return useContext(DataContext);
}

export function DataProvider(props: any) {
  return (
    <DataContext.Provider
      value={{
        title: data.title,
        description: data.description,
        themes: data.themes,
        themesTagline: data["themes-tagline"],
        about: data.about,
        descriptionCards: data["description-cards"],
        contact: data.contact,
        ps: data.ps,
        pf: data.pf,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
