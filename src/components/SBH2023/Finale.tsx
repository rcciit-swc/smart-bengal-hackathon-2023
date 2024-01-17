import { ImpactCard } from "./Impact";
import { finaleData } from "./data/finale";

const FinaleCard = ({
  title,
  data,
  description,
}: {
  title: string;
  data: any;
  description: string;
}) => {
  return (
    <div
      className="impact-title"
      style={{ paddingBottom: "25px", width: "80%" }}
    >
      <h1 className="text">{title}</h1>
      <div className="impact-body" style={{ paddingBottom: "25px" }}>
        {data.map((data: any, index: number) => {
          return (
            <ImpactCard
              key={index}
              digit={data.digit}
              text={data.text}
              image={data.image}
            />
          );
        })}
      </div>
      <p>
        To interate the efforts towards PM's vision of Digital India and to
        promote digital literacy in order to make development a comprehensive
        mass movement. MHRD, AICTE, i4C and Persistent System were found to
        organize the 2nd edition of this initiative - Smart India Hackathon.
      </p>
    </div>
  );
};

const Finale = () => {
  return (
    <div className="impact-title">
      {finaleData.map((data, index) => {
        return (
          <FinaleCard
            key={index}
            title={data.title}
            data={data.data}
            description={data.description}
          />
        );
      })}
    </div>
  );
};

export default Finale;
