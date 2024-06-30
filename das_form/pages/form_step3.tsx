// pages/form_step3.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FormStep3({ amountConflict, caseType, caseDescription, conflictStart, insuredBefore, deadline }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    initials: '',
    middleName: '',
    lastName: '',
    postcode: '',
    houseNumber: '',
    addition: '',
    streetCity: '',
    birthDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/step3', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amountConflict,
        caseType,
        caseDescription,
        conflictStart,
        insuredBefore,
        deadline,
        ...formData
      })
    });

    if (response.ok) {
      router.push('/form_summary');
    }
  };

  return (
    <div className="container">
      <header className="mt-4">
        <img src="/assets/das.png" alt="DAS Logo" />
        <h1 className="display-4">Case Registration</h1>
        <nav className="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/form_step1">1. Start Registration</a></li>
            <li className="breadcrumb-item"><a href="/form_step2">2. Your Case & Documents</a></li>
            <li className="breadcrumb-item active">3. Your Information</li>
            <li className="breadcrumb-item">4. Summary</li>
            <li className="breadcrumb-item">5. Submit</li>
          </ol>
        </nav>
      </header>

      <section className="my-4">
        <h2>Your Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title*</label>
            <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="initials">First Name*</label>
            <input type="text" className="form-control" id="initials" name="initials" value={formData.initials} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" className="form-control" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="postcode">Postcode*</label>
            <input type="text" className="form-control" id="postcode" name="postcode" value={formData.postcode} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="houseNumber">House Number*</label>
            <input type="text" className="form-control" id="houseNumber" name="houseNumber" value={formData.houseNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="addition">Addition</label>
            <input type="text" className="form-control" id="addition" name="addition" value={formData.addition} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="streetCity">Street and City*</label>
            <input type="text" className="form-control" id="streetCity" name="streetCity" value={formData.streetCity} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Date of Birth*</label>
            <input type="date" className="form-control" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Next &rarr;</button>
        </form>
      </section>

      <footer>
        <p>Made by <a href="https://digilize.de">Digilize Agency</a></p>
      </footer>
    </div>
  );
}
