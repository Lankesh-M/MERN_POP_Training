/*
function Signup(){
    return(
        <div>
            <h1>Signup Page</h1>
        </div>
    )
}

export default Signup
*/

import { useEffect, useState } from "react";
import Login from "./login";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    gender: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <h1>SIGNUP FORM</h1>
      First Name:
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      Last Name:
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      Password:
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      Date of Birth:
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <br />
      Phone Number:
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <br />
      Gender:
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
      />{" "}Male
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      />{" "}Female
      <input
        type="radio"
        name="gender"
        value="Others"
        checked={formData.gender === "Others"}
        onChange={handleChange}
      />{" "}Others
      <br/><br/>
      <button type="submit">Submit</button>
      <br/>
      <p>Already have an account? <Link to={'/login'}>Login</Link></p>
    </section>
  );
};

export default Signup;
