import "./oauth.css";

import { useRef } from "react";

import Loader from "../loader/loader";

export default function OAuth() {
  const code = useRef(null);

  return (
    <main id="FRE__Main__OAuth">
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          console.log("e");
        }}
      >
        <h2>OAuth</h2>
        <div>
          <label>
            2 Factor Code<span>*</span>
          </label>
          <input type="number" placeholder="Enter Code" required ref={code} />
        </div>
        <button type="submit" className="btn btn-success">
          Login <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </form>
    </main>
  );
}
