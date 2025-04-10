import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = () => {
    setRecommendation({
      title: '샤오미 무선청소기 Pro 4',
      price: '₩189,000',
      delivery: '7~10일 소요',
      description: '1688.com에서 직구 가능한 무선청소기. 가성비 우수.'
    });
    setSubmitted(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>GPT 구매대행 도우미</h1>
      <input
        type='text'
        placeholder='원하는 상품을 입력하세요'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleSearch}>상품 추천 받기</button>

      {recommendation && (
        <div style={{ marginTop: '2rem' }}>
          <h2>추천 상품</h2>
          <p><strong>상품명:</strong> {recommendation.title}</p>
          <p><strong>가격:</strong> {recommendation.price}</p>
          <p><strong>배송:</strong> {recommendation.delivery}</p>
          <p><strong>설명:</strong> {recommendation.description}</p>
          <hr />
          <h3>주문 요청</h3>
          <input type='text' placeholder='이름' value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
          <input type='email' placeholder='이메일' value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
          <textarea placeholder='요청사항' value={notes} onChange={(e) => setNotes(e.target.value)} style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
          <button onClick={handleSubmit}>주문 요청 보내기</button>
        </div>
      )}

      {submitted && <p style={{ color: 'green' }}>주문 요청이 접수되었습니다!</p>}
    </div>
  );
}

export default App;
