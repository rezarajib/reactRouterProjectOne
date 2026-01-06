import React from 'react';

const About = () => {
    return (
        <div className="bg-base-200 min-h-screen py-10 px-5">
            <div className="max-w-4xl mx-auto">
                
                {/* ১. হিরো সেকশন (আপনার তথ্য অনুযায়ী) */}
                <div className="hero bg-base-100 rounded-2xl shadow-xl p-8 mb-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="/images/facebook.png" className="max-w-sm rounded-full shadow-2xl w-32 h-32 md:w-48 md:h-48" alt="Md. Rajib Reza" />
                        <div className="ml-0 lg:ml-8 text-center lg:text-left">
                            <h1 className="text-4xl font-bold text-primary">Md. Rajib Reza</h1>
                            <p className="text-md font-semibold text-secondary mt-1">Software Engineer (AI & Web Product Development)</p>
                            <p className="py-4 text-lg text-neutral-content">
                                Forward-thinking Software Engineering graduate specializing in AI-driven application development. 
                                Proficient in building MVPs using <strong>Python, React, and FastAPI</strong>.
                            </p>
                            {/* সিভি ডাউনলোড বাটন */}
                            <a href="/resume/CV_Md_Rajib_Reza.pdf" download className="btn btn-primary rounded-full">
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* ২. স্ট্যাট সেকশন (সিভি থেকে নেওয়া তথ্য) */}
                <div className="stats shadow w-full mb-10 bg-base-100 overflow-x-auto">
                    <div className="stat place-items-center">
                        <div className="stat-title text-secondary">Expertise</div>
                        <div className="stat-value text-2xl">AI & Web</div>
                        <div className="stat-desc text-info font-bold">Python & React</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title text-secondary">Projects</div>
                        <div className="stat-value text-2xl text-primary">MVP Focus</div>
                        <div className="stat-desc font-bold">Scalable Architecture</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title text-secondary">Location</div>
                        <div className="stat-value text-2xl">Dhaka</div>
                        <div className="stat-desc text-info font-bold">Available On-site</div>
                    </div>
                </div>

                {/* ৩. টেকনিক্যাল স্কিলস (আপনার সিভির স্কিলস) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card bg-base-100 shadow-xl border-t-4 border-primary">
                        <div className="card-body">
                            <h2 className="card-title text-primary font-bold">Technical Skills</h2>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="badge badge-primary p-4">Python</span>
                                <span className="badge badge-primary p-4">JavaScript</span>
                                <span className="badge badge-outline badge-primary p-4">React.js</span>
                                <span className="badge badge-outline badge-primary p-4">FastAPI</span>
                                <span className="badge badge-outline badge-primary p-4">Node.js</span>
                                <span className="badge badge-secondary p-4 font-bold">Prompt Engineering</span>
                                <span className="badge badge-accent p-4">LLM APIs</span>
                                <span className="badge badge-ghost p-4 border border-gray-300">SQL</span>
                            </div>
                        </div>
                    </div>

                    {/* ৪. শিক্ষা ও লক্ষ্য (IP3 ফোকাসড) */}
                    <div className="card bg-base-100 shadow-xl border-t-4 border-secondary">
                        <div className="card-body">
                            <h2 className="card-title text-secondary font-bold">Education & Career Goal</h2>
                            <p className="text-sm leading-relaxed">
                                <strong>Degree:</strong> B.Sc. in Software Engineering <br />
                                <strong>Institution:</strong> Daffodil International University (2025 Graduate) <br />
                                <br />
                                <strong>Objective:</strong> Passionate about contributing to <strong>IP3 Consulting Limited</strong> as an Intern. 
                                My goal is to support innovative product cycles through prompt optimization, API architecture, and rigorous QA testing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ৫. কন্টাক্ট ইনফো (ফুটার স্টাইল) */}
                <div className="mt-10 text-center text-sm opacity-70">
                    <p>Phone: 01819976046 | Email: rajib35-1830@diu.edu.bd</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default About;