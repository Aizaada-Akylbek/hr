import { useState } from "react";

const User = () => {
  const [submitted, setSubmitted] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправлено:", formData);
    setSubmitted(true);
  };

  return (
    <div className="user-page">
      <div className="background-lines"></div>
      <h2>Welcome to your Dashboard User!</h2>
      <p>Here you can manage your profile, upload documents, and track your submissions.</p>
      <div className="user-wrapper">
        {!submitted ? (
          <form className="user-form" onSubmit={handleSubmit}>
            <h3>Application</h3>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Your family name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="confirmation">
            <h3>Thank you! Your application has been successfully sent!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
