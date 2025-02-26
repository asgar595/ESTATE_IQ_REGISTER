import React, { useState } from "react";
import "./form.css"; // Import the CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    college: "",
    cgpa: "",
    passingYear: "",
    applyingFor: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.includes("@")) errors.email = "Valid email required";
    if (!formData.phone.match(/^\d{10}$/)) errors.phone = "Enter a valid 10-digit phone number";
    if (!formData.linkedin.trim()) errors.linkedin = "LinkedIn ID is required";
    if (!formData.college.trim()) errors.college = "College name is required";
    if (!formData.cgpa.match(/^\d+(\.\d{1,2})?$/)) errors.cgpa = "Enter a valid CGPA (e.g., 8.5)";
    if (!formData.passingYear.match(/^\d{4}$/)) errors.passingYear = "Enter a valid year (e.g., 2025)";
    if (!formData.applyingFor) errors.applyingFor = "Select a position";
    if (!formData.resume) errors.resume = "Upload your resume";
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <h2>Intern Registration Form</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-container">
          {/* Left Column */}
          <div className="left-column">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}

            <label>Email ID:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}

            <label>Phone Number:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p>{errors.phone}</p>}

            <label>LinkedIn ID:</label>
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} />
            {errors.linkedin && <p>{errors.linkedin}</p>}
          </div>

          {/* Right Column */}
          <div className="right-column">
            <label>College Name:</label>
            <input type="text" name="college" value={formData.college} onChange={handleChange} />
            {errors.college && <p>{errors.college}</p>}

            <label>CGPA:</label>
            <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} />
            {errors.cgpa && <p>{errors.cgpa}</p>}

            <label>Year of Passing:</label>
            <input type="text" name="passingYear" value={formData.passingYear} onChange={handleChange} />
            {errors.passingYear && <p>{errors.passingYear}</p>}

            <label>Applying for:</label>
            <select name="applyingFor" value={formData.applyingFor} onChange={handleChange}>
              <option value="">Select Position</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="HR">HR</option>
            </select>
            {errors.applyingFor && <p>{errors.applyingFor}</p>}
          </div>
        </div>

        {/* Full-width input for Resume Upload */}
        <label>Upload Resume (PDF only):</label>
        <input type="file" name="resume" accept=".pdf" onChange={handleFileChange} className="full-width" />
        {errors.resume && <p>{errors.resume}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
