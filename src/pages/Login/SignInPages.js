import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthActionUsers } from "../../actions/AuthActionUsers";
import loginSchame from '../../validations/validationLogin';

const SignInPages = () => {
  const Login = {
    email: "",
    password: ""
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(loginSchame),
  });

  const dispatch  = useDispatch();

  const history = useHistory();

  const { addToast } = useToasts();

  const AuthHorizationUsers = (data) => {
    const { email, password } = data;
    dispatch(AuthActionUsers(email, password))
      .then(data => {
        addToast('Login Succsessfully', { appearance: 'success', autoDismiss: true, });
        if (data) {
          if (data.users.roles.roles === "Admin") {
            console.log({
              roles: "admin",
              token: data
            });
            history.push("/admin", data);
            window.location.reload();
          }
        
          else if (data.users.roles.roles === "Users") {
            console.log({
              roles: "users",
              token: data
            });
            history.push("/users", data);
            window.location.reload();
          }
        }
        //console.log();
      })
      .catch(error => {
        addToast('Failed Registrations', { appearance: 'error', autoDismiss: true, });
        reset(Login);
        console.log(error);
      });
  };

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
                {...register('email', { required: true })}
                required
              ></input>
              <div className="text-xs text-red-500">{errors.email?.message}</div>
            </div>
            <div>
              <label className="mr-2 block font-bold text-gray-700" htmlFor="password">Password</label>
              <input type="password" className="w-full border-2 border-blue-500 p-2 rounded outline-none focus:border-blue-800"
                placeholder="password"
                {...register('password', { required: true })}
                required
                id="passwordInput"></input>
              <div className="text-xs text-red-500">{errors.password?.message}</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="agree"></input>
              <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">  I agree to the terms and privacy.</label>
            </div>
            <div>
              <button onClick={handleSubmit(AuthHorizationUsers)} className="transition delay-150 duration-300 ease-in-out block w-full bg-purple-500 hover:bg-purple-700 transform hover:-translate-y-1 hover:scale-110 p-3 rounded text-white">Login</button>
              <Link to="/registrationuser" className="block w-full rounded text-xs text-center text-indigo-600 p-5">For a list of accounts please click here ?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPages;