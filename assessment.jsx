import React, { useState } from 'react';

// Custom hook for form validation
const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Validation patterns
  const patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^.{6,}$/, // Minimum 6 characters
    phone: /^\d{10,}$/, // Minimum 10 digits
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'email':
        if (!patterns.email.test(value)) {
          error = 'Please enter a valid email (e.g., jay.amin.tops@gmail.com)';
        }
        break;
      case 'password':
        if (!patterns.password.test(value)) {
          error = 'Password must be at least 6 characters';
        }
        break;
      case 'retypePassword':
        if (value !== values.password) {
          error = 'Passwords do not match';
        }
        break;
      case 'firstName':
        if (value.length > 4) {
          error = 'First name must be 4 characters or less';
        }
        break;
      case 'phone':
        if (!patterns.phone.test(value)) {
          error = 'Please enter a valid phone number (minimum 10 digits)';
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  return { values, errors, handleChange };
};

// Main Registration Form Component
const RegistrationForm = () => {
  // Initial form state
  const initialState = {
    email: '',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    country: 'United Kingdom'
  };

  // Use custom validation hook
  const { values, errors, handleChange } = useFormValidation(initialState);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if there are any errors
    if (Object.values(errors).every(error => error === '') &&
        Object.values(values).some(value => value !== '')) {
      console.log('Form submitted successfully:', values);
      // Reset form
      setValues(initialState);
    } else {
      console.log('Please fix form errors before submitting');
    }
  };

  return (
    <div className="registration-container">
      <h2>Register here</h2>
      <h3>USER REGISTRATION</h3>
      <p>Fields marked * are required.</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <label>Retype Password *</label>
          <input
            type="password"
            name="retypePassword"
            value={values.retypePassword}
            onChange={handleChange}
            required
          />
          {errors.retypePassword && <span>{errors.retypePassword}</span>}
        </div>

        <div>
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>

        <div>
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>

        <div>
          <label>Address *</label>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Town</label>
          <input
            type="text"
            name="town"
            value={values.town}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Region *</label>
          <input
            type="text"
            name="region"
            value={values.region}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Postcode / Zip *</label>
          <input
            type="text"
            name="postcode"
            value={values.postcode}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Country *</label>
          <select
            name="country"
            value={values.country}
            onChange={handleChange}
            required
          >
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

// Basic CSS (you can add this in a separate CSS file)
const styles = `
  .registration-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
  div {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  span {
    color: red;
    font-size: 12px;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
`;

export default RegistrationForm;
