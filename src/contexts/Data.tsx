import { createContext, useContext } from "react";
import { teamMemberType } from "../components/Models/teamDataType";
import data from "../data.json";
import { sbhTeam } from "../pages/Teams/TeamData";

type WinningGuidelines = {
  id: string;
  title: string;
};

type themeCardData = {
  theme: string;
  desc: string;
  icon: string;
  institution: string[];
};

type FaqObjectType = {
  question: string;
  answer: string;
};

type DataContextType = {
  title: string;
  description: string;
  themesTagline: string;
  ThemeCardData: themeCardData[];
  about: string;
  descriptionCards: {
    [key: string]: any;
  }[];
  contact: {
    name: string[];
    phone: string[];
    email: string[];
  };
  teamData: teamMemberType[];
  ps: {
    organization: string[];
    problemStatementTitle: string[];
    problemStatementDesc: string[];
    category: string[];
    psNumber: string[];
    domainBucket: string[];
    applicableFor: string[];
  };
  pf: {
    [key: string]: any;
  }[];
  winningGuidelines: WinningGuidelines[];
  faq: {
    SBHSenior: FaqObjectType[];
    SBHJunior: FaqObjectType[];
  };
};

const DataContext = createContext<DataContextType>({
  title: "",
  description: "",
  themesTagline: "",
  about: "",
  descriptionCards: [],
  contact: {
    name: [],
    email: [],
    phone: [],
  },
  teamData: [],
  ps: {
    organization: [],
    problemStatementTitle: [],
    problemStatementDesc: [],
    category: [],
    psNumber: [],
    domainBucket: [],
    applicableFor: [],
  },
  pf: [],
  winningGuidelines: [],
  ThemeCardData: [],
  faq: {
    SBHSenior: [],
    SBHJunior: [],
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
        themesTagline: data["themes-tagline"],
        about: data.about,
        descriptionCards: data["description-cards"],
        contact: data.contact,
        teamData: sbhTeam,
        ps: data.ps,
        pf: data.pf,
        winningGuidelines: data["winning-guidelines"],
        ThemeCardData: data["theme-card-data"],
        faq: data.faqs,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
