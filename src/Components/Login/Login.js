import React, { useState } from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import users from './dataUser';
import './Login.css'

function Login()
{
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = () =>
    {
        const user = users.find(user => user.email === email && user.password === password);
        if (user)
        {
            console.log('Đăng nhập thành công!');
            navigate("/");
        } else
        {
            setError('Email hay Mật Khẩu không đúng');
        }
    };

    const handleSignUp = (event) =>
    {
        event.preventDefault();
        if (!name || !email || !password)
        {
            setError('Please fill out all fields.');
            return;
        }
        const newUser = {
            id: users.length + 1,
            name,
            email,
            password
        };
        const updatedUsers = [...users, newUser];
        console.log(updatedUsers);
        console.log('Creating new user:', { name, email, password });
        setName('');
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <section className="login-wrap">
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
                        {error && <Components.Error>{error}</Components.Error>}
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        <Components.Input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button onClick={handleSignIn}>Sign In</Components.Button>
                        {error && <Components.Error>{error}</Components.Error>}
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </section>
    )
}

export default Login;