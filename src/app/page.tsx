// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'diff' | 'future' | 'past'>('diff');

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">📆 날짜 계산기</h1>
      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('diff')} className={`px-4 py-2 rounded ${activeTab === 'diff' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>일수 계산</button>
        <button onClick={() => setActiveTab('future')} className={`px-4 py-2 rounded ${activeTab === 'future' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>며칠 후</button>
        <button onClick={() => setActiveTab('past')} className={`px-4 py-2 rounded ${activeTab === 'past' ? 'bg-blue-500 text-white' : 'bg-white border'}`}>며칠 전</button>
      </div>

      {activeTab === 'diff' && <DateDiff />}
      {activeTab === 'future' && <FutureDate />}
      {activeTab === 'past' && <PastDate />}
    </main>
  );
}

function DateDiff() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [includeStart, setIncludeStart] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleCalc = () => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setResult(includeStart ? diff + 1 : diff);
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">일수 계산기</h2>
      <div className="flex flex-col gap-4">
        <input type="date" value={start} onChange={e => setStart(e.target.value)} className="border p-2 rounded" />
        <input type="date" value={end} onChange={e => setEnd(e.target.value)} className="border p-2 rounded" />
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeStart} onChange={e => setIncludeStart(e.target.checked)} />
          시작일 포함
        </label>
        <button onClick={handleCalc} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">일수 계산하기</button>
        {result !== null && <p className="text-center mt-4">총 {result}일</p>}
      </div>
    </div>
  );
}

function FutureDate() {
  const [start, setStart] = useState('');
  const [days, setDays] = useState(0);
  const [includeStart, setIncludeStart] = useState(false);
  const [result, setResult] = useState('');

  const handleCalc = () => {
    const startDate = new Date(start);
    const future = new Date(startDate);
    future.setDate(future.getDate() + days - (includeStart ? 1 : 0));
    setResult(future.toISOString().slice(0, 10));
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">며칠 후 날짜 계산</h2>
      <div className="flex flex-col gap-4">
        <input type="date" value={start} onChange={e => setStart(e.target.value)} className="border p-2 rounded" />
        <input type="number" value={days} onChange={e => setDays(parseInt(e.target.value))} className="border p-2 rounded" placeholder="일수 입력" />
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeStart} onChange={e => setIncludeStart(e.target.checked)} />
          시작일 포함
        </label>
        <button onClick={handleCalc} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">날짜 계산하기</button>
        {result && <p className="text-center mt-4">👉 {result}</p>}
      </div>
    </div>
  );
}

function PastDate() {
  const [start, setStart] = useState('');
  const [days, setDays] = useState(0);
  const [includeStart, setIncludeStart] = useState(false);
  const [result, setResult] = useState('');

  const handleCalc = () => {
    const startDate = new Date(start);
    const past = new Date(startDate);
    past.setDate(past.getDate() - days + (includeStart ? 1 : 0));
    setResult(past.toISOString().slice(0, 10));
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">며칠 전 날짜 계산</h2>
      <div className="flex flex-col gap-4">
        <input type="date" value={start} onChange={e => setStart(e.target.value)} className="border p-2 rounded" />
        <input type="number" value={days} onChange={e => setDays(parseInt(e.target.value))} className="border p-2 rounded" placeholder="일수 입력" />
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeStart} onChange={e => setIncludeStart(e.target.checked)} />
          시작일 포함
        </label>
        <button onClick={handleCalc} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">날짜 계산하기</button>
        {result && <p className="text-center mt-4">👉 {result}</p>}
      </div>
    </div>
  );
}
