import "./hardwareAndSoftwareDeals.css";

import { IHardwareAndSoftware } from "../hardwareAndSoftwareInterface";

export default function HardwareAndSoftwareDeals({
  data,
}: {
  [key: string]: IHardwareAndSoftware;
}) {
  return (
    <main className="FRE__Hardware__Deals">
      <div className="FRE__Hardware__Deals__Top">
        <img src={data.img} alt="" />
        <h2>Who are we?</h2>
        <p>{data.whoAreWe}</p>
      </div>

      <hr />

      <div className="FRE__Hardware__Deals__Bottom">
        <h2>Current Deal</h2>
        <p>{data.currentDeal}</p>
        <a href={data.dealURL}>
          {"<<<<"} Click Me {">>>>"}
        </a>
      </div>
    </main>
  );
}
