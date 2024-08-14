import React, { useState } from 'react';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Se requiere el email y la contraseña');
      return;
    }

    try {
      const response = await fetch('http://localhost/realbit/src/backend/login.php', { // Cambia la ruta según sea necesario
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setSuccess(result.message);
        // Aquí puedes redirigir al usuario o hacer algo más
        onClose(); // Cierra el modal o popup
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Hubo un error al intentar iniciar sesión.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-violet-800 p-8 border-2 border-black shadow-lg w-full max-w-sm">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-yellow-600 hover:text-black"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-black mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="you@example.com"
              autoComplete="email" required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="********"
              autoComplete="current-password" required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-black text-white border-2 border-black uppercase font-semibold tracking-wider hover:bg-gray-800"
          >
            Log In
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
          <p className="text-xs text-gray-500">
            ¿No tienes una cuenta? <a href="./RegisterModal" className="text-teal-500">Regístrate aquí</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
