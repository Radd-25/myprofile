import './bootstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Aurora from '@/components/Aurora';
import SpotlightCard from '@/components/SpotlightCard';
import ProfileCard from './components/profilecard';
import bg1 from '@/assets/bg1.jpg'
import bg2 from '@/assets/bg2.jpg'
import bg3 from '@/assets/bg3.jpg'

import axios from "./axios";

window.axios = axios;

// Konfigurasi WAJIB untuk akses lewat Cloudflare/Domain Berbeda
window.axios.defaults.withCredentials = true;
window.axios.defaults.withXSRFToken = true; 
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = window.location.origin;

function App() {
    const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccessMessage('');
        setErrorMessage('');
        setSubmitting(true);


        axios.post('/contact', formData, {
            headers: {
                'X-CSRF-TOKEN': csrf,
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            setSuccessMessage('Message sent successfully! Thank you.');
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
            console.error(err);
            setErrorMessage('Failed to send message. Please try again.');
        })
        .finally(() => {
            setSubmitting(false);
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSmoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6">
                <a href="/"><img src="/images/logo-b9.png" alt="Logo" className="h-11 w-auto"/></a>
                <a href="/dashboard"><img src="/images/menu.png" alt="Menu" className="h-8 w-auto cursor-pointer" /></a>
            </header>

            {/* 2. HERO SECTION (Unified Background and Content) */}
            <section className="relative h-screen w-full flex items-center overflow-hidden">
                {/* Aurora is absolute and covers the whole parent section */}
                <div className="absolute inset-0 z-0">
                    <Aurora />
                </div>

                {/* Content sits on top of Aurora */}
                <div className="container mx-auto px-10 relative z-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        
                        {/* Left Column: Text - flex-grow ensures it takes up space */}
                        <div className="flex-2 text-white pr-10 translate-x-[-10px]n">
                            <h2 className="font-bold text-[48px] leading-tight">
                                Hi!, I’m Raddin Pratama Rachmat
                            </h2>
                            <h1 className="font-bold text-[clamp(60px,8vw,96px)] -mt-2 tracking-wide leading-none">
                                WEB DESIGNER
                            </h1>
                            <p className="text-[20px] mt-6 max-w-none text-neutral-300 leading-relaxed">
                                I have an interest in design. I studied Design Communication Visual (DKV) <br /> at SMKIT Insan Toda 
                                and then continued my studies at Djuanda University Ciawi Bogor, <br /> majoring in Computer Science.
                               I dream of providing affordable and elegant web design services.
                            </p>
                            
                            <div className="flex mt-12 gap-8">
                                <button onClick={() => handleSmoothScroll('projects-section')} className="transition hover:-translate-y-2">
                                    <img src="/images/project.png" className="h-14 w-auto" />
                                </button>
                                <button onClick={() => handleSmoothScroll('contact-section')} className="transition hover:-translate-y-2">
                                    <img src="/images/contact.png" className="h-14 w-auto" />
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Hero Image */}
                        <div className="flex-1 flex justify-end">
                            <img 
                                src="/images/me.png" 
                                className="w-full max-w-[500px] object-contain drop-shadow-2xl -mt-30" 
                                alt="Raddin Pratama"
                            />
                        </div>
                    </div>
                </div>
            </section>

    {/* Main Wrapper: Stack title and cards vertically */}
    <div className="flex flex-col items-center py-20" id="projects-section"> 

    {/* Section title - Now stays on top */}
    <h1 className="text-white text-4xl font-bold mb-15 mr-15">
        My Projects
    </h1>

    {/* Cards row - Wrapped for responsiveness */}
    <div className="flex flex-wrap justify-center gap-20 px-10 pl-1 pb-70">
        <ProfileCard
            name="Telkomsel Website Reimagine"
            subtitle="Prototype Design using Figma"
            image={bg1}
            accentColor="blue"
            width="360px"
            height="280px"
            href='https://www.figma.com/proto/DSlDGWqXoGZCTWYYhyXeLa/telkom?node-id=0-1&fuid=1089808288110239676'
        />

        <ProfileCard
            name="AI Content Checker Website"
            subtitle="In Development using Html & Css Native"
            image={bg2}
            accentColor="blue"
            width="360px"
            height="280px"
            href='https://www.figma.com/proto/i8uaOFnNsYe1dzUvDiyrCY/Ai-content-checker?node-id=2014-65&p=f&t=bJ8y0zy865ZjLL9R-1'
        />

        <ProfileCard
            name="Portfolio Website Design"
            subtitle="Developed using ReactJS & TailwindCSS"
            image={bg3}
            accentColor="blue"
            width="360px"
            height="280px"
            href='https://www.figma.com/proto/GK6Fb8lqDM9FsFC387OpjY/Untitled?node-id=1-34&t=NMKpIdeYOGvQmTd9-1'
        />
    </div>
    </div>

            <section className="cards pb-40" id="contact-section"> 
                <div className="max-w-7xl mx-auto flex items-stretch gap-10"> 
                    
                    <div className="w-[450px]"> 
                        <form onSubmit={handleSubmit} className="w-full h-full"> 
                            <SpotlightCard className="p-8 pt-[30px] rounded-3xl bg-[#170d27] border border-neutral-800 shadow-lg h-full flex flex-col" >
                                
                                <h2 className="text-white text-3xl font-semibold mb-8">Contact Me</h2>
                                
                                <div className="flex flex-col grow space-y-6 justify-start"> 
                                    <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-4 rounded-xl bg-[#2a1d3e] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6b46c1] border border-transparent transition-all duration-200" required />
                                    <input type="email" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-4 rounded-xl bg-[#2a1d3e] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6b46c1] border border-transparent transition-all duration-200" required />
                                    
                                    <textarea id="message" name="message" placeholder="Your Message" rows="8.5" value={formData.message} onChange={handleChange} className="w-full p-4 rounded-xl bg-[#2a1d3e] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6b46c1] border border-transparent transition-all duration-200 resize-none" required></textarea>
                                    
                                    <div className="grow"></div> 
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full py-4 mt-6 rounded-xl bg-gray-300 text-gray-800 font-bold text-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 disabled:opacity-60"
                                    disabled={submitting}
                                >
                                    <p>{submitting ? 'Sending...' : 'Send'}</p>
                                </button>

                                {/* Feedback messages */}
                                {successMessage && (
                                    <p className="mt-3 text-green-400 text-sm">{successMessage}</p>
                                )}
                                {errorMessage && (
                                    <p className="mt-3 text-red-400 text-sm">{errorMessage}</p>
                                )}
                            </SpotlightCard>
                        </form>
                    </div>
                    
                    <div className='w-[740px]'> 
                        <div className='grid grid-cols-2 gap-10'> 
                            

                            <SpotlightCard className="w-[350px] h-[300px] text-white bg-[#170d27]" spotlightColor="rgba(0, 229, 255, 0.25)">
                                <div className='mt-7'>
                                    <img src="/images/folder.png" className="w-13 h-13 mb-5 mt-6"/>
                                    <p className="text-[20px] font-bold">Structured design</p>
                                    <p className='text-[15px] mt-3 text-[#7f7988]'>From wireframe to implementation, we guarantee transparency at every step of your project.</p>
                                </div>
                            </SpotlightCard>
                            
                            <SpotlightCard className="w-[350px] h-[300px] text-white bg-[#170d27]" spotlightColor="rgba(0, 229, 255, 0.25)">
                                <div className='mt-7'>
                                    <img src="/images/rocket.png" className="w-10 h-10 mb-7 mt-6"/>
                                    <p className="text-[20px] font-bold">Latest and Responsive Technology</p>
                                    <p className='text-[15px] mt-3 text-[#7f7988]'>Designed using the latest technology, making your website look more modern.</p>
                                </div>
                            </SpotlightCard>
                            
                            <SpotlightCard className="w-[350px] h-[300px] text-white bg-[#170d27]" spotlightColor="rgba(0, 229, 255, 0.25)">
                                <div className='mt-7'>
                                    <img src="/images/sparkle.png" className="w-10 h-10 mb-7 mt-6"/>
                                    <p className="text-[20px] font-bold">Elegant design, <br /> affordable price</p>
                                    <p className='text-[15px] mt-3 text-[#7f7988]'>Create your dream website with modern design without a big budget.</p>
                                </div>
                            </SpotlightCard>
                            
                            <SpotlightCard className="w-[350px] h-[300px] text-white bg-[#170d27]" spotlightColor="rgba(0, 229, 255, 0.25)">
                                <div className='mt-7'>
                                    <img src="/images/clock.png" className="w-10 h-10 mb-7 mt-6"/>
                                    <p className="text-[20px] font-bold">24/7 <br/> Consultation and Support</p>
                                    <p className='text-[15px] mt-3 text-[#7f7988]'>Consultation and support from the initial concept stage through to after the launch of your website.</p>
                                </div>
                            </SpotlightCard>

                        </div>
                    </div>
                </div>
            </section>

          <footer className='bg-[#020618] border-t border-neutral-800 text-neutral-400 py-6 rounded-t-3xl'>
              <div className='text-white flex justify-between items-start w-full px-30 py-5'>
                  <div className="text-left">
                      <p className='text-[16px]'>Made with love using</p>
                      <div className='flex space-x-6 mt-4 mb-4'>
                          <a href="https://laravel.com" target="_blank"><img src="/images/laravel-b.png" className='w-10'/></a>
                          <a href="https://react.dev/" target="_blank"><img src="/images/react.png" className='w-10'  /></a>
                          <a href="https://tailwindcss.com" target="_blank"><img src="/images/tailwind.png" className='w-10' /></a>
                      </div>
                      <p>laravel, react, tailwind css</p>
                  </div>
                  <div className="text-left">
                      <p className='text-[16px]'>Connect with me</p>
                      <div className='flex space-x-6 mt-4 mb-4'>
                          <a href="https://www.instagram.com/radd25_/" target="_blank"><img src="/images/instagram.png" className='w-10'/></a>
                          <a href="https://twitter.com/capsradd" target="_blank"><img src="/images/twitter.png" className='w-10' alt="" /></a>
                          <a href="https://github.com/radd-25" target="_blank"><img src="/images/github-b.png" className='w-10' alt="" /></a>
                          <a href="https://www.linkedin.com/in/raddin-pratama-rachmat-193143229/" target="_blank"><img src="/images/linkedin.png" className='w-10' alt="" /></a>
                      </div>
                      <p>instagram, twitter, github, linkedin</p>
                  </div>
                  <div className='text-right'> 
                      <img src="/images/logo-b9.png" className='w-64 ml-auto'/>
                      <p className='text-left mt-2'>Website Portofolio <br /> by Raddin Pratama/B9 Media,<br /> All right not reseve yet</p>
                  </div>
              </div>
          </footer>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);