import React from "react";
import { Link } from "react-router-dom";


class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-2x1 w-2/6">
            <h2 className="text-5xl w-full font-bold mb-10 text-center text-indigo-600">HysBook</h2>
            <p className="text-xs w-full -mt-6 mb-8 text-center">Please login correctly first</p>
            <form className="space-y-4">
              <div>
                <label className="mr-2 block font-bold text-gray-700" htmlFor="email">Email</label>
                <input type="email" className="w-full border-2 border-blue-500 p-2 rounded outline-none focus:border-blue-800"
                  placeholder="example@domain.com"
                  id="emailInput"
                ></input>
              </div>
              <div>
                <label className="mr-2 block font-bold text-gray-700" htmlFor="password">Password</label>
                <input type="password" className="w-full border-2 border-blue-500 p-2 rounded outline-none focus:border-blue-800"
                  placeholder="password"
                  id="passwordInput"></input>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="agree"></input>
                <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">  I agree to the terms and privacy.</label>
              </div>
              <div>
                <button className="block w-full bg-purple-500 p-3 rounded text-white">Login</button>
                <Link to="/daftar" className="block w-full rounded text-xs text-center text-indigo-600 p-5">For a list of accounts please click here ?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;