// pages/index.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FormStep1() {
  const router = useRouter();
  const [amountConflict, setAmountConflict] = useState('');
  const [caseType, setCaseType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: '/form_step2',
      query: { amountConflict, caseType },
    });
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

        <p>Registering your case takes 10-15 minutes.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Does your conflict involve an amount higher than €175?</label>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="amountConflict" id="yes" value="Yes" onChange={() => setAmountConflict('Yes')} required />
                <label className="form-check-label" htmlFor="yes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="amountConflict" id="no" value="No" onChange={() => setAmountConflict('No')} />
                <label className="form-check-label" htmlFor="no">No</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="amountConflict" id="unknown" value="Don't know / Not applicable" onChange={() => setAmountConflict("Don't know / Not applicable")} />
                <label className="form-check-label" htmlFor="unknown">Don't know / Not applicable</label>
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
