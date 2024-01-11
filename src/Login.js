import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container flex">
            <div className="flex division">
                <div className="user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="grey" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
                </div>
                <form action="" className="flex">
                    <div className="pass">
                        <label >Email</label>
                        <br />
                        <input type="gmail" name="email" id="email" placeholder="test@gmail.com" required />
                    </div>
                    <div>
                        <label >Password</label>
                        <br />
                        <input type="password" name="passw" id="passw" placeholder="password" required />
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <a href="#" className="para">Forgot Password ?</a>
                </form>
            </div>
            <div className="otherways">
                <div className="text">
                    <h3>Complete action using</h3>
                </div>
                <div className="icons">
                    <div className="google icon" title="google">
                        <a href="https://www.google.com/" target={"_blank"} className="a_icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" /><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" /><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" /><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" /></svg></a>
                    </div>
                    <div className="apple icon" title="apple">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.737 34.893a21.22 21.22 0 0 1-2.097 3.77c-1.102 1.572-2.005 2.66-2.7 3.264c-1.08.992-2.235 1.5-3.472 1.529c-.888 0-1.96-.253-3.207-.766c-1.25-.51-2.4-.763-3.452-.763c-1.102 0-2.285.253-3.55.763c-1.267.513-2.287.78-3.067.807c-1.187.05-2.37-.472-3.55-1.57c-.754-.657-1.696-1.784-2.825-3.38c-1.212-1.704-2.208-3.68-2.988-5.934c-.835-2.434-1.254-4.79-1.254-7.072c0-2.614.565-4.868 1.696-6.757c.889-1.517 2.071-2.714 3.552-3.593s3.08-1.326 4.802-1.355c.942 0 2.178.292 3.714.865c1.531.575 2.515.866 2.946.866c.322 0 1.415-.34 3.267-1.02c1.751-.63 3.23-.892 4.44-.789c3.281.265 5.747 1.559 7.386 3.889c-2.935 1.778-4.386 4.268-4.357 7.463c.026 2.488.929 4.56 2.703 6.203a8.887 8.887 0 0 0 2.7 1.772a29.08 29.08 0 0 1-.688 1.808h0ZM32.212 5.28c0 1.951-.713 3.772-2.133 5.458c-1.714 2.003-3.787 3.161-6.036 2.979a6.04 6.04 0 0 1-.045-.74c0-1.872.815-3.876 2.263-5.514c.723-.83 1.642-1.52 2.756-2.07c1.112-.542 2.164-.842 3.154-.893c.029.26.04.521.04.78h0v0Z" /></svg>
                    </div>
                    <div className="fb icon" title="facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" /></svg>
                    </div>
                </div>
                <Link to="/signup"><a href="#" className="para">Don't have an account? sign up for spotify</a></Link>

            </div>
        </div>
    )
}

export default Login;