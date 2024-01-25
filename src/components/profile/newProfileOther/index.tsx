import "./index.scss";

import { useParams } from "react-router-dom";

export default function ProfileOther() {
  const { uuid } = useParams();

  console.log(uuid);

  return <div>Not Me</div>;
}
