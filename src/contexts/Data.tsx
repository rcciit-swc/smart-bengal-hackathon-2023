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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
