import './bootstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Aurora from '@/components/Aurora';
import axios from "./axios";

function App() {
    // Note: If using Sanctum, it's better to call /sanctum/csrf-cookie 
    // rather than manual meta tag selection for better session handling.
    const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const [formData, setFormData] = useState({
        username: "", // Changed from 'name' to 'username'
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
        setSuccessMessage('');
        setErrorMessage('');
        setSubmitting(true);

        try {

            // 2. Perform Login
            const res = await axios.post('/login', formData, {
                headers: {
                    'X-CSRF-TOKEN': csrf,
                    'Accept': 'application/json'
                }
            });

            setSuccessMessage('Login successful! Redirecting...');
            // Redirect to dashboard after 1 second
            setTimeout(() => {
                window.location.href = '/admin';
            }, 1000);

        } catch (err) {
            console.error(err);
            setErrorMessage(err.response?.data?.message || 'Invalid account or password.');
        } finally {
            setSubmitting(false);
        }
        
    };

    return (
        <div className="relative min-h-screen">
            <div className="min-h-screen justify-center bg-slate-950 absolute inset-0 -z-10">
                <Aurora />
            </div>

            <section id='contact-section'> 
                <div className="flex justify-center items-center min-h-screen px-4"> 
                    <div className="w-[450px]"> 
                        <form onSubmit={handleSubmit} className="w-full h-full "> 
                            <div className="p-8 pt-[30px] rounded-3xl bg-[#170d273b] border border-neutral-800 shadow-lg h-full flex flex-col backdrop-blur-2xl">
                                
                                <h2 className="text-white text-3xl font-semibold mb-8">Login Page</h2>
                                
                                <div className="flex flex-col grow space-y-6 justify-start"> 
                                    <input 
                                        type="text" 
                                        name="username" // Matches formData key
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

                                {successMessage && <p className="mt-3 text-green-400 text-sm text-center">{successMessage}</p>}
                                {errorMessage && <p className="mt-3 text-red-400 text-sm text-center">{errorMessage}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('login-root')).render(<App />);