import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MultiStepLoader } from '@/components/multi-step-loader';

const loadingStates = [
  { text: 'Step 1: Initializing...' },
  { text: 'Step 2: Processing...' },
  { text: 'Step 3: Finalizing...' }
];

export default function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('/result-status');
      const data = await response.json();

      if (data.status === 'ready') {
        clearInterval(interval);
        router.push('/result');
      }
    }, 2000); // Check every 2 seconds

    return () => clearInterval(interval);
  }, [router]);

  return <MultiStepLoader loadingStates={loadingStates} loading={loading} />;
}
