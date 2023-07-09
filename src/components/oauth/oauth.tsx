import "./oauth.css";

import Loader from "../loader/loader";

import { useRef, useState } from "react";
import { json, useNavigate } from "react-router-dom";

export default function OAuth() {
  const code = useRef(null);

  let [error, setError] = useState(true);
  let [count, setCount] = useState(0);

  let navigate = useNavigate();

  const onCodeEnter = async () => {
    let codeVal: number = parseInt((code.current! as any).value);

    if (codeVal !== 1) {
      setError(false);
      setCount((count += 1));
      return;
    }

    var requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:3000/freeme/getUser?email=${sessionStorage.getItem(
        "email"
      )}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        sessionStorage.setItem("uuid", result.uuid);
        sessionStorage.setItem("address", result.address);
        sessionStorage.setItem("firstname", result.firstname);
        sessionStorage.setItem("lastname", result.lastname);
        sessionStorage.setItem("gst", result.gst);
        sessionStorage.setItem("nzbn", result.nzbn);
        sessionStorage.setItem("socials", JSON.stringify(result.socials));
        sessionStorage.setItem("email", result.email);
        sessionStorage.setItem("type", result.type);
        sessionStorage.setItem("dateOfBirth", result.dateofbirth);
        sessionStorage.setItem("profilePicture", result.profilepicture);
        sessionStorage.setItem("banner", result.banner);
        navigate("/dashboard");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <main id="FRE__Main__OAuth">
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          onCodeEnter();
        }}
      >
        <h2>2 Factor</h2>
        <div>
          <label>
            2 Factor Code<span>*</span>
          </label>
          <input type="number" placeholder="Enter Code" required ref={code} />
        </div>
        <button type="submit" className="btn btn-success">
          Submit <i className="fa-solid fa-right-to-bracket"></i>
        </button>

        {error == false ? (
          <p style={{ color: "red" }}>Incorrect code. (x{count})</p>
        ) : null}
      </form>
    </main>
  );
}
