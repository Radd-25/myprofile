import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Aurora from '@/components/Aurora';
import axios from 'axios';

window.axios = axios;

// Konfigurasi WAJIB untuk akses lewat Cloudflare/Domain Berbeda
window.axios.defaults.withCredentials = true;
window.axios.defaults.withXSRFToken = true; 
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = window.location.origin;
function App({ initialContacts = [] }) {
	const [contacts, setContacts] = useState(initialContacts || [])

	const csrfToken = () => document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')

    const userName = window.__USER_NAME__ || 'User';

    const handlelogout = async () => {
        try {
            const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            
            const res = await axios.post('/logout', {}, {
                headers: {
                    'X-CSRF-TOKEN': token,
                    'Accept': 'application/json',
                }
            });

            if (res.status === 200) {
                window.location.href = '/login';
            }
        } catch (err) {
            console.error('Logout error:', err.response?.status);
            alert('Logout failed');
        }
    };
    

	const handleDelete = async (id) => {
		if (!confirm('Are you sure you want to delete this contact?')) return

		try {
			const base = window.__DELETE_URL_BASE__ || '/contacts'
			const res = await fetch(`${base}/${id}`, {
				method: 'DELETE',
				headers: {
					'X-CSRF-TOKEN': csrfToken() || '',
					'Accept': 'application/json',
				},
			})

			if (res.ok) {
				setContacts((prev) => prev.filter((c) => c.id !== id))
			} else {
				const text = await res.text()
				console.error('Delete failed', res.status, text)
				alert('Delete failed')
			}
		} catch (err) {
			console.error(err)
			alert('Delete failed')
		}
	}

	if (!contacts || contacts.length === 0) {
		return <p className="text-center text-gray-500">No contacts found.</p>
	}

return (
	<div className="relative -h">

        <div className=" min-h-screen justify-center bg-slate-950 absolute inset-0 -z-10">
            <Aurora />
        </div>

        {/* Header tetap paling atas */}
        <header className="fixed -top-27 -left-113 -z-5 flex items-center space-x-6">
            <img src="/images/logo-b9.png" alt="Logo" className="scale-11"/>
            <img src="/images/menu.png" alt="Menu" className='ml-285 scale-90'/>
        </header>

        {/* TABEL DI ATAS BACKGROUND */}
        <div className="relative z-20 pt-32 pl-20 pr-20 ">
            <div className='flex justify-between items-center'>
                <h1 className='text-white font-bold text-3xl'>Welcome {userName}!</h1>
                <button 
                    onClick={handlelogout}
                    className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
            <p className='text-white text-[22px] pb-5'>here is your inbox :</p>
            <table className="min-w-full bg-white borde shadow rounded-lg">
                <thead className="">
                    <tr>
                        <th className="px-6 py-3 text-left text-gray-700 font-semibold">ID</th>
                        <th className="px-6 py-3 text-left text-gray-700 font-semibold">Name</th>
                        <th className="px-6 py-3 text-left text-gray-700 font-semibold">Email</th>
                        <th className="px-6 py-3 text-left text-gray-700 font-semibold">Message</th>
                        <th className="px-6 py-3 text-left text-gray-700 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr className="border-t" key={contact.id}>
                            <td className="px-6 py-4">{contact.id}</td>
                            <td className="px-6 py-4">{contact.name}</td>
                            <td className="px-6 py-4">{contact.email}</td>
                            <td className="px-6 py-4">{contact.message}</td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => alert('Not Yet Implemented')}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-5"
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleDelete(contact.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

	</div>
)
}	

const el = document.getElementById('admin-root')
if (el) {
	const root = createRoot(el)
	root.render(<App initialContacts={window.__INITIAL_CONTACTS__ || []} />)
}