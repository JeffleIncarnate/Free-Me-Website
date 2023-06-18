import "./hardwareAndSoftwareGrid.css";

import { IHardwareAndSoftware } from "./hardwareAndSoftwareInterface";

import PBTech from "../../assets/hardwareAndSoftware/pbtech.jpg";
import Microsoft from "../../assets/hardwareAndSoftware/microsoft.webp";
import Exapansys from "../../assets/hardwareAndSoftware/exapansys.png";
import IngramMicro from "../../assets/hardwareAndSoftware/ingram.png";
import Apple from "../../assets/hardwareAndSoftware/apple.jpg";
import Alphabet from "../../assets/hardwareAndSoftware/alphabet.png";
import Dell from "../../assets/hardwareAndSoftware/dell.png";

export default function HardwareAndSoftwareGrid() {
  let data: IHardwareAndSoftware[] = [
    {
      img: PBTech,
      storeName: "Pb Tech",
      whoAreWe: `Saving you money since 1993

Founded in 1993 and 100% New Zealand owned, PB Tech
is NZ's largest computing and I.T. retailer with stores +
service centres throughout the country and a hardworking
team of over 800 staff.

In addition to our retail and service locations, PB Tech also
has
dedicated Business, Education, Wholesale, Government, H
ealth and Service divisions operating from our 7,000+
square metre head office and distribution centre in
Manukau, Auckland

Over the last 25+ years, we've worked hard to build a
trusted reputation as a leading supplier of technology
products and services for home, business and the public
sector, and count many of New Zealand's largest
companies, government departments and educational
institutes as our customers.`,
      currentDeal: `Earn 15% cashback when using your
FreeMe user number to purchase from
PBTech`,
      dealURL: "https://www.google.com",
    },
    {
      img: Microsoft,
      storeName: "Microsoft",
      whoAreWe: `Microsoft Corporation is an American multinational technology
corporation headquartered in Redmond, Washington.
Microsoft's best-known software products are the Windows line
of operating systems, the Microsoft Office suite, and the
Internet Explorer and Edge web browsers.`,
      currentDeal: `software and 10% on our hardware range
when using your FreeMe user number to
purchase from Microsoft`,
      dealURL: "https://www.google.com",
    },
    {
      img: Exapansys,
      storeName: "Expansys",
      whoAreWe: "",
      currentDeal: `Earn 15% cashback when using your
FreeMe user number to purchase from
PBTech`,
      dealURL: "https://www.google.com",
    },
  ];

  return (
    <main className="FRE__CommunityNetwork__Hardware">
      <div className="FRE__CommunityNetwork__Hardware-pbTech">
        <img src={data[0].img} alt="" />

        <p>
          <strong>About Us</strong>:{" "}
          {data[0].whoAreWe.substring(0, 200) + "..."}
        </p>

        <p>
          <strong>Current Offer</strong>: {data[0].currentDeal}
        </p>

        <a href={data[0].dealURL}>{"<<<CLICK HERE>>>"}</a>

        <div>
          <h2>PB Tech</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork__Hardware-Expansys">
        <img src={data[2].img} alt="" />

        <p>
          <strong>Current Offer</strong>: {data[2].currentDeal}
        </p>

        <a href={data[0].dealURL}>{"<<<CLICK HERE>>>"}</a>

        <div>
          <h2>Expansys</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork__Hardware-apple">
        <img src={Apple} alt="" />

        <div>
          <h2>Apple</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork-balances">
        <div>
          <h2>Balances and Activity</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork__Hardware-a">
        <img src={Alphabet} alt="" />

        <div>
          <h2>Alphabet Inc.</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork__Hardware-microsoft">
        <img src={data[1].img} alt="" />

        <article>
          <p>
            <strong>About Us</strong>:{" "}
            {data[1].whoAreWe.substring(0, 200) + "..."}
          </p>

          <p>
            <strong>Current Offer</strong>: {data[1].currentDeal}
          </p>
          <a href={data[1].dealURL}>{"<<<CLICK HERE>>>"}</a>
        </article>

        <div>
          <h2>Microsoft</h2>
        </div>
      </div>

      <div className="FRE__CommunityNetwork__Hardware-ingram">
        <img src={IngramMicro} alt="" />

        <div>
          <h2>Ingram Micro</h2>
        </div>
      </div>
      <div className="FRE__CommunityNetwork__Hardware-dell">
        <img src={Dell} alt="" />

        <div>
          <h2>Dell</h2>
        </div>
      </div>
    </main>
  );
}
