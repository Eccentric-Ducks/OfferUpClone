
import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import Link from "next/link";



const Userlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");


  const login = (event) => {

    event.preventDefault();
    axios
      .get(`/api/authenticate`, {
        params: {
          username: username,
          password: password,
        },
      })
      .then((data) => {

        if (data.data.bool === true) {
          // email/password is valid
          setCurrentUser(username);
          console.log(data.data.data, "data before localstorage");
          localStorage.setItem("data", JSON.stringify(data.data.data[0]));
          console.log(
            localStorage.getItem("data"),
            "LOCAL STORAGE ON LOGIN page"
          );
          Router.push({
            pathname: "/",
            query: { data: JSON.stringify(data) },
          });
        } else {
          //email password is not valid
          alert("Invalid Username or password")
          console.log("issue with user email or password ");
        }
      })

      
  };


      
        

  return (
    <div className="p-8  justify-center items-center h-screen flex ">
      <form className="flex border-2 rounded-3xl p-7 shadow-xl  h-[80%] w-[40%]  ">
        <div className="divide-y-4 divide-white  h-6 w-full text-center font-extrabold space-y-2 grid justify-items-stretch">
          <div className=" w-full flex justify-end text text-[#00a87e] ">
          <Link
            href={"login"}
            className=""
          >
            cancel
          </Link>{" "}
          </div>
          <button className=" underline text-xl">Log in</button>
          
          <br></br> <br></br>
          <span className="text-[#00a87e] text-3xl font-extrabold ">
            OfferUp
          </span>
          <div>
            <label className="block text-left text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="bg-white border-[#00a87e] border-2 shadow-inner rounded font-thin p-2 flex-1 w-full "
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)} // username is set to value of input
              aria-label="username"
              placeholder="Ex. johndoe"
            />
          </div>
          <div>

            <label className="block text-left text-gray-700 text-sm  mb-2">

              Password
            </label>
            <input
              className="bg-white border-[#00a87e] border-2 shadow-inner rounded  p-2 flex-1 w-full "
              id="password"
              minLength="6"
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)} //password is set to value of input
              aria-label="password"
              placeholder=""
            />
          </div>
          <div className="text-[#00a87e]">
          <Link 
            href="#"
            className="text-small justify-self-start font-light underline"
          >
            Forgot your password?
          </Link>
          </div>
          <div className="text-[#00a87e]">
            <Link
              href={"signup"}
              className="text-small justify-self-start  text-sm text-[#00a87e] font-bold "
            >
              Dont have an account? Sign up
            </Link>
            <button
              type="submit"
              onClick={login}
              className="bg-slate-100 text-slate-400 hover:bg-[#00a87e] hover:text-white duration-300  shadow p-2 mt-2 mr-6 rounded-full  ml-2 w-[95%]"
            >
              Log in
            </button>
          </div>
          <div className="text-xs">
            By tapping any of the buttons above, you agree to nothing and
            acknowledge nothing <br></br>
            <br></br>
            This site is protected by e-ducks and the e-ducks Privacy Policy and
            the e-ducks Terms of Service apply
          </div>
        </div>
      </form>
    </div>
  );
};

export default Userlogin
