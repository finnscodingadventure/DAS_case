// pages/loading.tsx
import { useEffect, useState } from 'react';
import { MultiStepLoader } from '../components/multi-step-loader';
import { useRouter } from 'next/router';

const loadingStates = [
  { text: 'Sending data to AI...' },
  { text: 'Processing AI response...' },
  { text: 'Generating decision...' },
];

export default function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      let resultReady = false;

      while (!resultReady) {
        const response = await fetch('/api/check-result-status');
        const data = await response.json();

        if (data.status === 'ready') {
          resultReady = true;
          router.push({
            pathname: '/result',
            query: { decision: data.decision, explanation: data.explanation }
          });
        } else {
          await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds before the next check
        }
      }
    };

    fetchResult();
  }, [router]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={2000} />
    </div>
  );
}
