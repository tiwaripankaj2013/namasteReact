import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err,setError] = useState(false);
  const [login,setLogin] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)&& password.length>4){
      setLogin(true);
      setError(false);
      setUsername('');
      setPassword('');
      console.log(err);
    }
   else {setError(true);}
    // Perform login logic here
  }
  console.log(useState);

  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center md:w-6/12 mx-auto">
      <form className=" bg-gray-700 p-6 rounded-lg w-full" onSubmit={handleSubmit}>
        <h2 className="text-xl font-medium mb-4 text-primary">Login</h2>
        {err ?<p className=" text-red-800 font-medium">Please Enter valid email and password</p>:''}
        <div className="mb-4">
          <label className="block text-gray-300 font-medium mb-2">
            Username
          </label>
          <input
            className="border border-gray-500 p-2 rounded-lg w-full bg-gray-800 placeholder:text-gray-300"
            type="text"
            value={username}
            placeholder='Enter your registerd email'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-medium mb-2">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full bg-gray-800 placeholder:text-gray-300"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
        <button className=" bg-primary text-white py-1 px-3 rounded-lg hover:bg-orange-500">
          Log in
        </button>
        <button className="border border-primary text-primary py-1 px-3 rounded-lg hover:text-orange-500">
          Signup
        </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
