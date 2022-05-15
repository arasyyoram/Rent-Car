import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://notflixtv.herokuapp.com/api/v1/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.data.token);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Login page</h2>
      <form onSubmit={formHandler}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
