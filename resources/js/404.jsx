import React from 'react'
import { createRoot } from 'react-dom/client'
import Blue from '@/components/blue';
import axios from 'axios';

function App() {
return (
        <div className="min-h-screen justify-center bg-[#0066f5] relative">
          <div className="scale-100 w-full h-screen pointer-events-none">
            <Blue />
            </div>
            <div className='-top-15 left-0 scale-50 absolute'>
             <img src="/images/imphnen.png" className='z-5'/>
              <div className="text-white text-5xl z-10 text-center">
               <p>ini halaman 404, antara gw salah setting atau lu typo.</p>
               <p>balik ke main page teken <a href="/"><span className="underline">bagian ini.</span></a></p>
             </div>
            </div>
        </div>
        
    )
}

createRoot(document.getElementById('notfound')).render(<App />);