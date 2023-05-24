import Navbar from "../components/navbar/navbar";
import StatementOfWork from "../components/statementOfWork/statementOfWork";
import SOW from "../components/sow/sow";

import { useEffect } from "react";

export default function StatementOfWorkPage() {
  useEffect(() => {
    document.title = "Statement of Work | FreeMe";
  }, []);

  return (
    <>
      <Navbar />
      <StatementOfWork />
    </>
  );
}
