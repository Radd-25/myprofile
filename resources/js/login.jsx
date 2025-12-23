import './bootstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Aurora from '@/components/Aurora';
import Navbar from './components/navbar';
import axios from "./axios";

window.axios = axios;

// Konfigurasi WAJIB untuk akses lewat Cloudflare/Domain Berbeda
window.axios.defaults.withCredentials = true;
window.axios.defaults.withXSRFToken = true; 
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = window.location.origin;

function App() {
    // Standard CSRF token retrieval for Laravel
    const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const [formData, setFormData] = useState({
        username: "", 
        password: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset states at the start of every attempt
        setSuccessMessage('');
        setErrorMessage('');
        setSubmitting(true);

        try {
            // Only one request, properly wrapped in try/catch
            const res = await axios.post('/login', formData, {
                headers: {
                    'X-CSRF-TOKEN': csrf,
                    'Accept': 'application/json'
                }
            });

            if (res.status === 200) {
                setSuccessMessage('Login successful! Redirecting...');
                
                // Use a short delay so the user can see the success message
                setTimeout(() => {
                    // Using /dashboard (lowercase) to match your web.php route
                    window.location.href = '/dashboard';
                }, 800);
            }
        } catch (err) {
            // This block handles the 401 (Unauthorized) error
            console.error("Login Error:", err.response);

            // Access the error message from Laravel's response
            const msg = err.response?.data?.message || 'Invalid account or password.';
            setErrorMessage(msg);
        } finally {
            // This runs regardless of success or failure
            // It resets the "Authenticating..." button text
            setSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen">
            {/* Background Layer */}
            <div className="min-h-screen justify-center bg-slate-950 absolute inset-0 -z-10 pointer-events-none">
                <Aurora />
            </div>
            
        {/* Header tetap paling atas */}
          <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6">
            <Navbar />
          </header>

            <section id='contact-section'> 
                <div className="flex justify-center items-center min-h-screen px-4"> 
                    <div className="w-[450px]"> 
                        <form onSubmit={handleSubmit} className="w-full h-full"> 
                            <div className="p-8 pt-[30px] rounded-3xl bg-[#170d273b] border border-neutral-800 shadow-lg h-full flex flex-col backdrop-blur-2xl">
                                
                                <h2 className="text-white text-3xl font-semibold mb-8">Login Page</h2>
                                
                                <div className="flex flex-col grow space-y-6 justify-start"> 
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="Account ID" 
                                        value={formData.username} 
                                        onChange={handleChange} 
                                        className="w-full p-4 rounded-xl bg-[#2a1d3e] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6b46c1] border border-transparent transition-all duration-200" 
                                        required 
                                    />

                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password" 
                                        value={formData.password} 
                                        onChange={handleChange} 
                                        className="w-full p-4 rounded-xl bg-[#2a1d3e] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6b46c1] border border-transparent transition-all duration-200" 
                                        required 
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full py-4 mt-6 rounded-xl bg-gray-300 text-gray-800 font-bold text-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 disabled:opacity-60"
                                    disabled={submitting}
                                >
                                    {submitting ? 'Authenticating...' : 'Login'}
                                </button>

                                {/* Alert Messages */}
                                {successMessage && (
                                    <p className="mt-4 p-2 bg-green-500/20 border border-green-500 rounded text-green-400 text-sm text-center">
                                        {successMessage}
                                    </p>
                                )}
                                {errorMessage && (
                                    <p className="mt-4 p-2 bg-red-500/20 border border-red-500 rounded text-red-400 text-sm text-center">
                                        {errorMessage}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

const rootElement = document.getElementById('login-root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}