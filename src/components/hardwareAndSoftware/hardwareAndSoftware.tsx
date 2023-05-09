import "./hardwareAndSoftware.css";

import HardwareAndSoftwareDeals from "./deals/hardwareAndSoftwareDeals";

import { IHardwareAndSoftware } from "./hardwareAndSoftwareInterface";

import PBTech from "../../assets/hardwareAndSoftware/pbtech.jpg";
import Microsoft from "../../assets/hardwareAndSoftware/microsoft.webp";
import IngramMicro from "../../assets/hardwareAndSoftware/ingram.png";

export default function HardwareAndSoftware() {
  let data: IHardwareAndSoftware[] = [
    {
      img: PBTech,
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
      img: IngramMicro,
      whoAreWe: `Ingram Micro helps businesses fully realize the
promise of technology™— maximizing the value of
the technology they make, sell or use. We amplify
thousands of vendor, reseller and retailer partners
by customizing and delivering highly targeted
solutions and services for industry verticals,
business-to-business customers and commercial
needs.

Our vast global infrastructure enables business
partners to operate more efficiently and
successfully. No other company delivers such a
broad and deep spectrum of technology services to
businesses around the world.`,
      currentDeal: `Earn 12.5% cashback on Apple
products plus free shipping when
using your FreeMe user number to
purchase from Ingram Micro`,
      dealURL: "https://www.google.com",
    },
  ];

  return (
    <main className="FRE__Hardware">
      <HardwareAndSoftwareDeals data={data[0]} />
      <HardwareAndSoftwareDeals data={data[1]} />
      <HardwareAndSoftwareDeals data={data[2]} />
    </main>
  );
}
