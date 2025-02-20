/*
function Login(){
    return(
        <div>
            <h1>Login Page</h1>
        </div>
    )
}

export default Login
*/

/*
const Login=()=>{
    return(
        <div>
            <h2>Login</h2>
                <form action="">
                    Email: <input type="text" />
                    Password: <input type="password" />
                    <button>Submit</button>
                </form>
        </div>
    );
}
export default Login;
*/

import { useEffect, useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Login Data:", loginData);
  }, [loginData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <h1>LOGIN FORM</h1>
        Email:
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
    </section>
  );
};

export default Login;