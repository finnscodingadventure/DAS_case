// pages/step1.js

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Step1() {
  const router = useRouter();
  const [amountConflict, setAmountConflict] = useState('');
  const [caseType, setCaseType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/step1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amountConflict, caseType })
    });

    if (response.ok) {
      router.push('/step2');
    } else {
      // handle error
    }
  };

  return (
    <div className="container">
      <h1>Start Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Does your conflict involve an amount higher than €175?</label>
          <div>
            <input
              type="radio"
              name="amountConflict"
              value="Yes"
              onChange={(e) => setAmountConflict(e.target.value)}
            /> Yes
            <input
              type="radio"
              name="amountConflict"
              value="No"
              onChange={(e) => setAmountConflict(e.target.value)}
            /> No
            <input
              type="radio"
              name="amountConflict"
              value="Don't know / Not applicable"
              onChange={(e) => setAmountConflict(e.target.value)}
            /> Don't know / Not applicable
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="caseType">What is your case about?</label>
          <select
            className="form-control"
            id="caseType"
            name="caseType"
            required
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="">-- Make your choice --</option>
            <option value="collisionDamage">Collision Damage</option>
            <option value="massDamage">Mass Damage</option>
            <option value="business">Business Legal Issue</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Next &rarr;</button>
      </form>
    </div>
  );
}
