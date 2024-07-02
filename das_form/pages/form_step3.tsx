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
    birthDate: '',
    email: ''
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
      <header className="mt-4 text-center">
        <img src="/assets/das.png" alt="DAS Logo" className="inline-block w-36" />
        <h1 className="display-4">Case Registration</h1>
        <nav className="breadcrumb">
          <ol className="breadcrumb flex justify-center">
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
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="title">Title*</label>
            <input type="text" className="form-control" id="title" name="title" required value={formData.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="initials">First Name*</label>
            <input type="text" className="form-control" id="initials" name="initials" required value={formData.initials} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" className="form-control" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" className="form-control" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="postcode">Postcode*</label>
            <input type="text" className="form-control" id="postcode" name="postcode" required value={formData.postcode} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="houseNumber">House Number*</label>
            <input type="text" className="form-control" id="houseNumber" name="houseNumber" required value={formData.houseNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="addition">Addition</label>
            <input type="text" className="form-control" id="addition" name="addition" value={formData.addition} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="streetCity">Street and City*</label>
            <input type="text" className="form-control" id="streetCity" name="streetCity" required value={formData.streetCity} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Date of Birth*</label>
            <input type="date" className="form-control" id="birthDate" name="birthDate" required value={formData.birthDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input type="email" className="form-control" id="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group md:col-span-2 flex justify-between">
            <button type="button" className="btn btn-secondary" onClick={() => router.back()}>Back</button>
            <button type="submit" className="btn btn-primary">Next &rarr;</button>
          </div>
        </form>
      </section>

      <footer className="text-center mt-4">
        <p>Made by <a href="https://digilize.de">Digilize Agency</a></p>
      </footer>
    </div>
  );
}
