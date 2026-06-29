export default function Dashboard() {
  const token = localStorage.getItem('token');

  return (
    <div style={{ padding: '40px', background: '#0f172a', minHeight: '100vh', color: 'white' }}>
      <h1>Dashboard</h1>
      <p>Login successful bhai!</p>
      <p>Token: {token}</p>
    </div>
  );
}