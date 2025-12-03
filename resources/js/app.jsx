import './bootstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Aurora from '@/components/Aurora';
import SpotlightCard from '@/components/SpotlightCard';
import axios from "./axios";



function App() {

const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://myprofile.test/api/contact", formData)
        .then((res) => {
            console.log("Success:", res.data);
        })
        .catch((err) => {
            console.log("Error:", err);
        });
};




    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

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
            block: 'start' // Aligns the top of the element to the top of the viewport
        });
    }
};

    return (
        <>
            <header className="fixed -top-27 -left-113 z-50 flex items-center space-x-6">
               <img src="/images/logo-b9.png" alt="Logo" className="scale-11 "/>
               <img src="/images/menu.png" alt="Menu" className='ml-285 scale-90' />
            </header>

            <div className="min-h-screen justify-center bg-slate-950 relative">
                <div className="scale-100 w-full h-screen">
                    <Aurora />
                </div>
            </div>
            <div className="absolute top-60 left-40 z-20 text-white">
                <div className='flex space-x-8 items-start'>
                    <div>   
                        <h1 className='font-bold text-[48px]'>Hi!, I’m Raddin Pratama Rachmat</h1>
                        <h1 className='font-bold text-[96px] -mt-2 tracking-wide'>WEB DESIGNER</h1>
                        <p className='text-[20px]'>I have an interest in design. I studied Design Communication Visual (DKV) at SMKIT Insan Toda <br/> and then continued my studies at Djuanda University Ciawi Bogor, majoring in Computer Science.<br/> Combining my previous expertise in design, I dream of providing affordable and elegant web design services.</p>
                        <div className='flex mt-20 gap-10'>
                            <a href="https://www.figma.com/proto/GK6Fb8lqDM9FsFC387OpjY/Untitled?node-id=1-34&p=f&t=tyhlDwLdCYGMmTHF-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" className='transition duration-300 ease-in-out hover:-translate-y-2' target="_blank"><img src="/images/project.png" /></a>
                            
                            <a onClick={() => handleSmoothScroll('contact-section')} 
                                className='transition duration-300 ease-in-out hover:-translate-y-2 cursor-pointer'>
                                <img src="/images/contact.png"/></a>
                        </div>
                    </div>
                    <img src="/images/me.png" className='-mt-40 ml-30 scale-90'/>
                </div>
            </div>
            <section className="cards pt-[90px] pb-40" id='contact-section'> 
                <div className="max-w-7xl mx-auto flex items-stretch gap-10"> 
                    
                    <div className="w-[450px] " id="contact-section"> 
                        <form onSubmit={handleSubmit} className="w-full h-full"> 
                            

                            <SpotlightCard className="p-8 pt-[30px] rounded-3xl bg-[#170d27] border border-neutral-800 shadow-lg h-full flex flex-col" >
                                
                                <h2 className="text-white text-3xl font-semibold mb-8">Contact Me</h2>
                                
                                <div className="flex flex-col grow space-y-6 justify-start"> 
                                    <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-4 rounded-xl bg-[#2a1d3e] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6b46c1] border border-transparent transition-all duration-200" required />
                                    <input type="email" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-4 rounded-xl bg-[#2a1d3e] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6b46c1] border border-transparent transition-all duration-200" required />
                                    
                                    <textarea id="message" name="message" placeholder="Your Message" rows="8.5" value={formData.message} onChange={handleChange} className="w-full p-4 rounded-xl bg-[#2a1d3e] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#6b46c1] border border-transparent transition-all duration-200 resize-none" required></textarea>
                                    
                                    <div className="grow"></div> 
                                </div>
                                
                                <button type="submit" className="w-full py-4 mt-6 rounded-xl bg-gray-300 text-gray-800 font-bold text-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200">
                                    <p>Send</p>
                                </button>
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