import { createContext, useContext } from "react";
import data from "../data.json";

type DataContextType = {
  title: string;
  description: string;
  themes: string[];
  about: string;
  descriptionCards: {
    [key: string]: any;
  }[];
};

const DataContext = createContext<DataContextType>({
  title: "",
  description: "",
  themes: [],
  about: "",
  descriptionCards: [],
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
        about: data.about,
        descriptionCards: data["description-cards"],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
