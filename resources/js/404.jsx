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
              <div className="text-white text-5xl z-10 text-  center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <p>This is 404, <br/> Either I set it wrong or you made a typo.</p>
               <p>back to main page using <a href="/"><span className="underline">this section.</span></a></p>
             </div>
            </div>
        
    )
}

createRoot(document.getElementById('notfound')).render(<App />);