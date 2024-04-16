import React, { useContext, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../hooks/userContext";
import "../style.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [res, setRes] = useState("");

  const { addUser } = useContext(userContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    let data = {
      username,
      password,
    };

    axios
      .post("http://localhost:8000/user/read", data)
      .then((d) => {
        console.log(`user found 😁`);
        setRes(d.data.val);
        addUser(username);
        setUsername("");
        setPassword("");
        navigate("home");
      })
      .catch((err) => {
        console.log(err);
        let errorData = JSON.stringify(err.response.data);
        setRes(errorData);
      });
  };

  return (
    <>
      <div className=" flex bg-grey-100">
        <div
          id="login"
          className=" w-1/2 flex flex-col justify-center items-center"
        >
          <div className=" border  shadow-lg bg-white shadow-slate-600 px-8 py-8 rounded-md">
            <h1 className=" text-center">
              <span className=" text-3xl">L</span>ogin to get Started !
            </h1>

            <h1 className=" text-red-800 text-center font-extrabold text-4xl">
              {res}
            </h1>

            <div className=" w-fit p-5 m-5 flex flex-col gap-8">
              <table className="">
                <tbody>
                  <tr className=" flex flex-col gap-2 mb-3">
                    <td>
                      <label htmlFor="username">User Name</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        className=" border border-zinc-300 rounded-md"
                      />
                    </td>
                  </tr>
                  <tr className=" flex flex-col gap-2">
                    <td>
                      <label htmlFor="password">Password</label>
                    </td>
                    <td>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        className=" border border-zinc-300 rounded-md"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <button
                onClick={handleLogin}
                className=" text-dark font-bold bg-lime-400 py-2 hover:text-white hover:bg-lime-600 rounded-md"
              >
                Login
              </button>
            </div>

            <h1 className=" text-center">
              Doesn't have an account yet ?
              <NavLink className={` text-red-500 underline`} to="signup">
                signup
              </NavLink>
            </h1>
          </div>
        </div>

        <div id="login-right" className=" w-1/2"></div>
      </div>
    </>
  );
};

export default LoginPage;
