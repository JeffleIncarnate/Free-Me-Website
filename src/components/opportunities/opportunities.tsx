import "./opportunities.css";

import { useNavigate } from "react-router-dom";

export default function Opportunities(props: any) {
  let navigate = useNavigate();

  let jobUUID = props.UUID;

  return (
    <div
      className="FRE__Opportunities"
      onClick={() => {
        navigate(`/opportunities/${jobUUID}`);
      }}
    >
      <div className="FRE__Opportunities__Left">
        <img src={props.img} alt="" />
        <h2>{props.companyName}</h2>
        <p>{props.place}</p>
      </div>

      <div className="FRE__Opportunities__Right">
        <h2>{props.jobName}</h2>
        <p>
          <strong>Description:</strong> {props.description}
        </p>
        <p className="FRE__Opportunities__Right-Timeline">
          <strong>Timeline:</strong> {props.timeline}
        </p>
      </div>
    </div>
  );
}
