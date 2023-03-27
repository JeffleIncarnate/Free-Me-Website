import Navbar from "../components/navbar/navbar";
import Opportunities from "../components/opportunities/opportunities";

import Apple from "../assets/apple.png";

import { useEffect } from "react";

export default function OpportunitiesPage() {
  useEffect(() => {
    document.title = "Opportunities | Free Me";
  }, []);

  return (
    <>
      <Navbar />
      <Opportunities
        UUID="19879174"
        img={Apple}
        companyName="Dhruv Banking"
        place="Auckland, New Zealand"
        jobName="Software Contractor"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex numquam minima incidunt laborum id corporis facere officiis praesentium amet natus soluta, vero, consectetur excepturi animi ea expedita ut a earum tempore maxime. Libero delectus error et, facere harum vel. Ab quasi repudiandae deserunt libero eveniet laudantium nostrum! Dolorem facilis modi in ex quod animi dolorum repudiandae sunt aperiam deserunt, accusantium corporis velit laborum voluptatibus recusandae eius iste minima pariatur quos. Optio pariatur accusantium rerum consequatur repellat distinctio fugit nobis perspiciatis ut corrupti voluptatem incidunt provident officia sint, sapiente unde illum nemo nostrum iste magnam aperiam quod. Obcaecati ad delectus fugiat."
        timeline="Study to be conducted in April-May"
      />
    </>
  );
}
