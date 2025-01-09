import React from 'react';
import { useForm } from 'react-hook-form';
import './login.css'
import { loginUser } from '../../store/actions/actions.ts';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onSubmit = data => {
        dispatch(loginUser());
        navigate("/");
    };

    return (
        <div className='login'>
            <div className='loginRow1'>
                <div className='loginCol1'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div  >
                            <label>Email</label>
                            <input
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className='loginCol2'>
                    image
                </div>
            </div></div>
    );
};

export default LoginForm;