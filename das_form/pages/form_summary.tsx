// pages/form_summary.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type FormData = {
  amountConflict: string;
  caseType: string;
  caseDescription: string;
  conflictStart: string;
  insuredBefore: string;
  deadline: string;
  title: string;
  initials: string;
  middleName: string;
  lastName: string;
  postcode: string;
  houseNumber: string;
  addition: string;
  streetCity: string;
  birthDate: string;
};

export default function FormSummary() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/summary');
      const data = await response.json();
      setFormData(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      router.push('/loading');
    }
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <header className="mt-4">
        <img src="/assets/das.png" alt="DAS Logo" />
        <h1 className="display-4">Case Registration - Summary</h1>
        <nav className="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/form_step1">1. Start Registration</a></li>
            <li className="breadcrumb-item"><a href="/form_step2">2. Your Case & Documents</a></li>
            <li className="breadcrumb-item"><a href="/form_step3">3. Your Information</a></li>
            <li className="breadcrumb-item active">4. Summary</li>
            <li className="breadcrumb-item">5. Submit</li>
          </ol>
        </nav>
      </header>

      <section className="my-4">
        <h2>Summary</h2>
        <p>Below is the summary of the information you have provided:</p>

        <div className="category-title">Step 1: Start Registration</div>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Does your conflict involve an amount higher than €175?</td>
              <td>{formData.amountConflict}</td>
            </tr>
            <tr>
              <td>What is your case about?</td>
              <td>{formData.caseType}</td>
            </tr>
          </tbody>
        </table>

        <div className="category-title">Step 2: Your Case & Documents</div>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Case Description</td>
              <td>{formData.caseDescription}</td>
            </tr>
            <tr>
              <td>Conflict Start Date</td>
              <td>{formData.conflictStart}</td>
            </tr>
            <tr>
              <td>Insured with DAS for at least two months before the conflict?</td>
              <td>{formData.insuredBefore}</td>
            </tr>
            <tr>
              <td>Is there a deadline you must respond to?</td>
              <td>{formData.deadline}</td>
            </tr>
          </tbody>
        </table>

        <div className="category-title">Step 3: Your Information</div>
        <table className="summary-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{formData.title}</td>
            </tr>
            <tr>
              <td>Initial(s)</td>
              <td>{formData.initials}</td>
            </tr>
            <tr>
              <td>Middle Name</td>
              <td>{formData.middleName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{formData.lastName}</td>
            </tr>
            <tr>
              <td>Postcode</td>
              <td>{formData.postcode}</td>
            </tr>
            <tr>
              <td>House Number</td>
              <td>{formData.houseNumber}</td>
            </tr>
            <tr>
              <td>Addition</td>
              <td>{formData.addition}</td>
            </tr>
            <tr>
              <td>Street and City</td>
              <td>{formData.streetCity}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{formData.birthDate}</td>
            </tr>
          </tbody>
        </table>

        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      </section>

      <footer>
        <p>Made by <a href="https://digilize.de">Digilize Agency</a></p>
      </footer>
    </div>
  );
}
