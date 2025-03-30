import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [town, setTown] = useState('');
  const [region, setRegion] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Email galat hai');
      return;
    }
    
    if (password.length < 6) {
      setError('Password 6 se kam nahi');
      return;
    }
    
    if (password !== retypePassword) {
      setError('Password match nahi kar raha');
      return;
    }
    
    if (firstName.length > 4) {
      setError('First name 4 se jyada nahi');
      return;
    }
    
    if (!email || !password || !firstName || !lastName || !phone || !address || !region || !postcode) {
      setError('Sab field bharo');
      return;
    }

    console.log('Form submit ho gaya:', {
      email, password, firstName, lastName, phone, address, town, region, postcode, country
    });
    setError('');
    setEmail('');
    setPassword('');
    setRetypePassword('');
    setFirstName('');
    setLastName('');
    setPhone('');
    setAddress('');
    setTown('');
    setRegion('');
    setPostcode('');
  };

  return (
    <div>
      <h2>Register here</h2>
      <h3>USER REGISTRATION</h3>
      <p>Fields marked * are required.</p>
      {error && <p style={{color: 'red'}}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Retype Password *</label>
          <input
            type="password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
        </div>

        <div>
          <label>First Name *</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label>Last Name *</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label>Phone Number *</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label>Address *</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label>Town</label>
          <input
            type="text"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          />
        </div>

        <div>
          <label>Region *</label>
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>

        <div>
          <label>Postcode / Zip *</label>
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </div>

        <div>
          <label>Country *</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
