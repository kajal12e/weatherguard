export default function Login() {
  const handleGoogleLogin = () => {
    // Ye line backend pe bhejegi
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: '#0f172a' }}>
      <div style={{ background: '#1e293b', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', marginBottom: '20px' }}>WeatherGuard</h1>
        <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Sign in to request weather alert access</p>
        <button 
          onClick={handleGoogleLogin}
          style={{ 
            background: 'white', 
            border: 'none', 
            padding: '12px 24px', 
            borderRadius: '8px', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '16px'
          }}
        >
          <img src="https://www.google.com/favicon.ico" width="20" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}