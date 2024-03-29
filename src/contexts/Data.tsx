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
  picture: string;
  icon: string;
  institution: string[];
  color: string;
};

type prizeObjectType={
  orderNo: number;
  position: string;
  prizeMoney: string;
}

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
    SbhJunior: {
      name: string[];
      phone: string[];
      email: string[];
    },
    SbhSenior: {
      name: string[];
      phone: string[];
      email: string[];
    },
    convenor: {
      name: string;
      phone: string;
      email: string;
    },
    developedByFaculty: {
      name: string[];
      phone: string[];
      email: string[];
    },
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
  prize:{
    SBHSenior: prizeObjectType[];
    SBHJunior: prizeObjectType[];
  };
  result:{
    SbhSenior: any[];
    SbhJunior: any[];
  }

};

const DataContext = createContext<DataContextType>({
  title: "",
  description: "",
  themesTagline: "",
  about: "",
  descriptionCards: [],
  contact: {
    SbhJunior: {
      name: [],
      email: [],
      phone: [],
    },
    SbhSenior: {
      name: [],
      email: [],
      phone: [],
    },
    convenor: {
      name: "",
      email: "",
      phone: "",
    },
    developedByFaculty: {
      name: [],
      email: [],
      phone: [],
    },
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
  prize:{
    SBHSenior: [],
    SBHJunior: [],
  },
  result:{
    SbhSenior:[],
    SbhJunior:[],
  }
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
        prize: data.prizes,
        result: data.results,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
