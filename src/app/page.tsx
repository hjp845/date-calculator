// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difference, setDifference] = useState<number | null>(null);

  const calculateDiff = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDifference(daysDiff);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">📅 날짜 계산기</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={calculateDiff}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          차이 계산하기
        </button>
        {difference !== null && (
          <div className="mt-4 text-lg text-center">
            두 날짜 사이의 차이: <strong>{difference}일</strong>
          </div>
        )}
      </div>
    </main>
  );
}
