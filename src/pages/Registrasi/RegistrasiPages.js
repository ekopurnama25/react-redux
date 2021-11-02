import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToasts } from 'react-toast-notifications';
import { RegistrasiActionUsers } from "../../actions/RegistrasiActionUsers";
import registrasiSchame from '../../validations/validationRegister';

const RegistrasiPages = () => {

  const registrasiInitial = {
    username: "",
    email: "",
    password: ""
  };

  const dispatch = useDispatch();

  const { addToast } = useToasts();

  const SaveRegistrasiUser = (data) => {
    const { username, email, password } = data;
    dispatch(RegistrasiActionUsers(username, email, password))
      .then(data => {
        addToast('Success Registrations', { appearance: 'success', autoDismiss: true, });
        reset(registrasiInitial);
        console.log(data);
      })
      .catch(error => {
        addToast('Failed Registrations', { appearance: 'error', autoDismiss: true, });
        reset(registrasiInitial);
        console.log(error);
      });
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(registrasiSchame),
  });

  return (
    <div>
      <div className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-2x1 w-2/6">
          <h2 className="text-5xl w-full font-bold mb-10 text-center text-indigo-600">HysBook</h2>
          <p className="text-xs w-full -mt-6 mb-8 text-center">Please login correctly first</p>
          <div className="space-y-4">
            <div className="form-group">
              <label className="mr-2 block font-bold text-gray-700" htmlFor="username">Username</label>
              <input type="text" className="form-control w-full border-2 border-blue-500 p-2 rounded outline-none focus:border-blue-800"
                placeholder="example123"
                id="username"
                {...register('username', { required: true })}
                required
                name="username"></input>
              <div className="text-xs text-red-500">{errors.username?.message}</div>
            </div>
            <div className="form-group">
              <label className="mr-2 block font-bold text-gray-700" htmlFor="email">Email</label>
              <input type="email" className="form-control w-full border-2 border-blue-500 p-2 rounded outline-none focus:border-blue-800"
                placeholder="example@domain.com"
                id="email"
                required
                {...register('email', { required: true })}
                name="email"
              ></input>
              <div className="text-xs text-red-500">{errors.email?.message}</div>
            </div>
            <div className="form-group">
              <label className="mr-2 block font-bold text-gray-700" htmlFor="password">Password</label>
              <input type="password" className="form-control w-full border-2 border-blue-500 p-2 rounded outline-none focus:border-blue-800"
                placeholder="password"
                id="password"
                {...register('password', { required: true })}
                required
                name="password"
              ></input>
              <div className="text-xs text-red-500">{errors.password?.message}</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="agree"></input>
              <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">  I agree to the terms and privacy.</label>
            </div>
            <div>
              <button onClick={handleSubmit(SaveRegistrasiUser)} className="transition delay-150 duration-300 ease-in-out block w-full bg-purple-500 hover:bg-purple-700 transform hover:-translate-y-1 hover:scale-110 p-3 rounded text-white">Sign Up</button>
              <Link to="/signin" className="block w-full rounded text-xs text-indigo-600 p-5 text-center">Login Click here ?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrasiPages;