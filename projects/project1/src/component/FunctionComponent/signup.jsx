import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const  Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFN] = useState("");
  const [lastName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [age, setage] = useState(0);
  const handleSignup = async (event) => {
    event.preventDefault();
    // const req = await axios.post("https://sjit2025mern.onrender.com/signup", {
    const req = await axios.post("https://rampex-backend.onrender.com/signup", {
    // const req = await axios.post("http://localhost:3002/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
    });
    const message = req.data.message;
    const isSignup = req.data.isSignUp;
    if (isSignup) {
      alert(message);
      navigate("/login");
    }
    else{
      alert(message)
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFN(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLN(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="age"> Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setage(parseInt(e.target.value))}
          required
        />
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
}
export default Signup;

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     // age: "",
//   });

//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("https://rampex-backend.onrender.com/", formData);
//       setMessage(response.data.message || "Signup successful!");
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("Signup failed. Please try again.");
//     }
//   };

//   return (
//     <section>
//       <h1>SIGNUP FORM</h1>
//       <form onSubmit={handleSubmit}>
//         First Name:
//         <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//         <br />
//         Last Name:
//         <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
//         <br />
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         <br />
//         Password:
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         <br />
//         {/* Age:
//         <input type="number" name="age" value={formData.age} onChange={handleChange} required /> */}
//         <br /><br />
//         <button type="submit">Submit</button>
//       </form>
//       <p>{message}</p>
//       <p>Already have an account? <Link to={'/login'}>Login</Link></p>
//     </section>
//   );
// };

// export default Signup;