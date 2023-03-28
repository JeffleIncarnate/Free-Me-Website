import "./loginForm.css";

import Loader from "../loader/loader";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const username = useRef(null);
  const password = useRef(null);

  let navigate = useNavigate();

  let [error, setError] = useState(true);
  let [count, setCount] = useState(0);
  let [showLoader, setShowLoader] = useState(false);

  type userLoginDetails = {
    username: string;
    password: string;
  };

  let getData = () => {
    setShowLoader(true);
    let user: userLoginDetails = {
      username: (username.current! as any).value,
      password: (password.current! as any).value,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw: any = JSON.stringify({
      username: user.username,
      password: user.password,
    });

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/freeme/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setShowLoader(false);
        if (result.accessToken) {
          sessionStorage.setItem("token", result.accessToken);
          sessionStorage.setItem("username", user.username);
          navigate("/oauth");
        } else {
          setError(false);
          setCount((count += 1));
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <main id="FRE__Main__Login">
      {showLoader ? <Loader /> : null}

      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          getData();
        }}
      >
        <h2>Welcome Back</h2>
        <div>
          <label>
            Username<span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            required
            ref={username}
          />
        </div>

        <div>
          <label>
            Password<span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            required
            ref={password}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Login <i className="fa-solid fa-right-to-bracket"></i>
        </button>

        {error == false ? (
          <p style={{ color: "red" }}>
            Username or password incorrect (x{count})
          </p>
        ) : null}
      </form>
    </main>
  );
}
