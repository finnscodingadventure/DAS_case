// pages/form_step2.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FormStep2({ amountConflict, caseType }) {
  const router = useRouter();
  const [caseDescription, setCaseDescription] = useState('');
  const [conflictStart, setConflictStart] = useState('');
  const [insuredBefore, setInsuredBefore] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/step2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amountConflict,
        caseType,
        caseDescription,
        conflictStart,
        insuredBefore,
        deadline
      })
    });

    if (response.ok) {
      router.push('/form_step3');
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
            <li className="breadcrumb-item active">2. Your Case & Documents</li>
            <li className="breadcrumb-item">3. Your Information</li>
            <li className="breadcrumb-item">4. Summary</li>
            <li className="breadcrumb-item">5. Submit</li>
          </ol>
        </nav>
      </header>

      <section className="my-4">
        <h2>What is your case about?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="caseDescription">Briefly describe why you need legal assistance...</label>
            <textarea className="form-control" id="caseDescription" name="caseDescription" rows="5" maxLength="5000" onChange={(e) => setCaseDescription(e.target.value)} required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="conflictStart">When did the conflict begin?*</label>
            <input type="date" className="form-control" id="conflictStart" name="conflictStart" onChange={(e) => setConflictStart(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Were you insured with DAS for at least two months before the above date?*</label>
            <div className="custom-radio-group">
              <div className="custom-radio">
                <input type="radio" id="insuredYes" name="insuredBefore" value="Yes" onChange={(e) => setInsuredBefore(e.target.value)} required />
                <label htmlFor="insuredYes">Yes</label>
              </div>
              <div className="custom-radio">
                <input type="radio" id="insuredNo" name="insuredBefore" value="No" onChange={(e) => setInsuredBefore(e.target.value)} required />
                <label htmlFor="insuredNo">No</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Is there a deadline you must respond to?*</label>
            <div className="custom-radio-group">
              <div className="custom-radio">
                <input type="radio" id="deadlineYes" name="deadline" value="Yes" onChange={(e) => setDeadline(e.target.value)} required />
                <label htmlFor="deadlineYes">Yes</label>
              </div>
              <div className="custom-radio">
                <input type="radio" id="deadlineNo" name="deadline" value="No" onChange={(e) => setDeadline(e.target.value)} required />
                <label htmlFor="deadlineNo">No</label>
              </div>
            </div>
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
