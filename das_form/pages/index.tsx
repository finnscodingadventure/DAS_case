// pages/form_step1.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FormStep1() {
  const router = useRouter();
  const [amountConflict, setAmountConflict] = useState('');
  const [caseType, setCaseType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/step1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amountConflict, caseType })
    });

    if (response.ok) {
      router.push('/form_step2');
    }
  };

  return (
    <div className="container">
      <header className="mt-4">
        <img src="/assets/das.png" alt="DAS Logo" />
        <h1 className="display-4">Case Registration</h1>
        <nav className="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">1. Start Registration</li>
            <li className="breadcrumb-item">2. Your Case & Documents</li>
            <li className="breadcrumb-item">3. Your Information</li>
            <li className="breadcrumb-item">4. Summary</li>
            <li className="breadcrumb-item">5. Submit</li>
          </ol>
        </nav>
      </header>

      <section className="my-4">
        <h2>Start Registration</h2>
        <div className="alert alert-info">
          <h4 className="alert-heading">Important Information</h4>
          <ul>
            <li>Collision damage? <a href="#">Report your case with collision damage here</a></li>
            <li>Mass damage? Is your case part of mass damage? <a href="#">Report your mass damage case here</a></li>
            <li>Entrepreneur? <a href="#">Report your business case here</a></li>
            <li>Faster registration? Have your policy number, policy sheet, and contact details of your intermediary at hand.</li>
            <li>Attachments are not mandatory in this form: you can always submit them later.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Does your conflict involve an amount higher than €175?</label>
            <div className="custom-radio-group">
              <div className="custom-radio">
                <input type="radio" id="yes" name="amountConflict" value="Yes" onChange={(e) => setAmountConflict(e.target.value)} required />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="custom-radio">
                <input type="radio" id="no" name="amountConflict" value="No" onChange={(e) => setAmountConflict(e.target.value)} required />
                <label htmlFor="no">No</label>
              </div>
              <div className="custom-radio">
                <input type="radio" id="unknown" name="amountConflict" value="Don't know / Not applicable" onChange={(e) => setAmountConflict(e.target.value)} required />
                <label htmlFor="unknown">Don't know / Not applicable</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="caseType">What is your case about?</label>
            <select className="form-control" id="caseType" name="caseType" onChange={(e) => setCaseType(e.target.value)} required>
              <option value="">-- Make your choice --</option>
              <option value="collisionDamage">Collision Damage</option>
              <option value="massDamage">Mass Damage</option>
              <option value="business">Business Legal Issue</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">Next &rarr;</button>
            <button type="button" className="btn btn-secondary">Finish later</button>
          </div>
        </form>
      </section>

      <footer>
        <p>Made by <a href="https://digilize.de">Digilize Agency</a></p>
      </footer>
    </div>
  );
}
