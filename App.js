import { useState } from 'react';

function WebinarRegistration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [learnAbout, setLearnAbout] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="webinar-registration">
      <h1>LIGHT</h1>
      <h2>March 17, 2021 1200</h2>
      <p>
        The help of Augmented Reality and Holograms. Use Augmented Reality to keep students engaged and provide detailed explanations of models and course material in a 30, AR Lab, students can pinch, zoom, and rotate equipment related to the course, for a fully immersive leaming experience
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First name</label>
        <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label htmlFor="last-name">Last name</label>
        <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="job-title">What is your job title?</label>
        <input type="text" id="job-title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />

        <label htmlFor="company-name">Where do you work?</label>
        <input type="text" id="company-name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />

        <label htmlFor="learn-about">What are you hoping to learn about?</label>
        <textarea id="learn-about" value={learnAbout} onChange={(e) => setLearnAbout(e.target.value)} rows="3"></textarea>

        <button type="submit">Register for this event</button>
      </form>
    </div>
  );
}

export default WebinarRegistration;
