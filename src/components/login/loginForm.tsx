import "./loginForm.css";

export default function LoginForm() {
  return (
    <main id="FRE__Main__Login">
      <form onClick={() => {}}>
        <h2>Welcome Back</h2>
        <div>
          <label>
            Username<span>*</span>
          </label>
          <input type="text" placeholder="Enter Username" required />
        </div>

        <div>
          <label>
            Password<span>*</span>
          </label>
          <input type="text" placeholder="Enter Password" />
        </div>

        <button type="submit" className="btn btn-success">
          Login <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      </form>
    </main>
  );
}
