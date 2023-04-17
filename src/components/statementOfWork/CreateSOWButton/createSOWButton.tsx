import "../statementOfWork.css";

import { IActiveSOW } from "../statementOfWork";

export default function CreateSOWButton(props: any) {
  return (
    <button
      className="StatementOfWorkSwitcher"
      onClick={() => {
        props.setActiveSow({
          jobTitle: null,
          client: null,
          cosultant: null,
          tasks: null,
          createSOW: true,
        });
      }}
    >
      <i className="fa-solid fa-plus"></i> Create Statement of Work
    </button>
  );
}
