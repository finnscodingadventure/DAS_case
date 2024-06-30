// pages/form_submit.tsx
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

export default function FormSubmit() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [aiDecision, setAiDecision] = useState<{ decision: string, explanation: string } | null>(null);

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
      const result = await response.json();
      setAiDecision(result.aiDecision);
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
        <h1 className="display-4">Case Registration - Submit</h1>
        <nav className="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/form_step1">1. Start Registration</a></li>
            <li className="breadcrumb-item"><a href="/form_step2">2. Your Case & Documents</a></li>
            <li className="breadcrumb-item"><a href="/form_step3">3. Your Information</a></li>
            <li className="breadcrumb-item"><a href="/form_summary">4. Summary</a></li>
            <li className="breadcrumb-item active">5. Submit</li>
          </ol>
        </nav>
      </header>

      <section className="my-4">
        <h2>Submit Your Case</h2>
        <p>Please review all the provided information before submitting your case.</p>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </section>

      <footer>
        <p>Made by <a href="https://digilize.de">Digilize Agency</a></p>
      </footer>
    </div>
  );
}
