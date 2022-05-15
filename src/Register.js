import { useState } from "react";
import axios from "axios";

// https://notflixtv.herokuapp.com/documentation/#/User%20Endpoints/post_users

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://notflixtv.herokuapp.com/api/v1/users",
        {
          first_name: firstname,
          last_name: lastname,
          email,
          password,
          password_confirmation: passwordConfirmation,
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
      <h2>Register page</h2>
      <form onSubmit={formHandler}>
        <label>
          Firstname:
          <input
            type="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          Lastname:
          <input
            type="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
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
        <label>
          Password Confirmation:
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
