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
      {description}
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
