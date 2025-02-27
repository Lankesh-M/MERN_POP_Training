import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // age: "",
  });

  const [message, setMessage] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://rampex-backend.onrender.com/", formData);
      setMessage(response.data.message || "Signup successful!");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <section>
      <h1>SIGNUP FORM</h1>
      <form onSubmit={handleSubmit}>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <br />
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <br />
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <br />
        {/* Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required /> */}
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <p>Already have an account? <Link to={'/login'}>Login</Link></p>
    </section>
  );
};

export default Signup;