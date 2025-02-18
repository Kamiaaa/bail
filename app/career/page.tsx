import React from 'react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Career',
    description: '...',
}
interface JobOpening {
    id: number;
    title: string;
    location: string;
    type: string;
    description: string;
}

const jobOpenings: JobOpening[] = [
    {
        id: 1,
        title: 'Bail (Corporate)',
        location: 'Dhaka',
        type: 'Full-time',
        description: 'Develop beautiful UIs using React, TypeScript, and Tailwind CSS.',
    },
    {
        id: 2,
        title: 'Engineer',
        location: 'Dhaka',
        type: 'Part-time',
        description: 'Work with Node.js, Express, and MongoDB to build robust APIs.',
    },
    {
        id: 3,
        title: 'Manager (Business Development)',
        location: 'Dhaka',
        type: 'Full-time',
        description: 'Create intuitive designs that enhance user experience.',
    },
];

const CareerPage: React.FC = () => {
    return (
        <div className="bg-gray-100 dark:bg-slate-900">
            
            <div>
                <h2 className="text-gray-900 text-center mt-28">Join Our Team</h2>
            </div>

            {/* Job Openings Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className='text-gray-900 text-center mb-8 dark:text-gray-50'>We're looking for talented individuals to help shape the future.</h1>
                    <h1 className="text-center mb-8 dark:text-gray-50">Current Openings</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobOpenings.map((job) => (
                            <div key={job.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                                <h3 className="text-2xl font-semibold dark:text-gray-50">{job.title}</h3>
                                <p className="text-gray-600 mt-2 dark:text-gray-300">{job.location} - {job.type}</p>
                                <p className="mt-4 text-gray-700 dark:text-gray-300">{job.description}</p>
                                <a
                                    href="/upload"
                                    className="mt-6 inline-block text-white bg-blue-600 px-6 py-2 rounded hover:bg-blue-500 transition duration-300"
                                >
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Values Section */}
            <section className="py-16 bg-gray-50 dark:bg-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 dark:text-gray-50">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
                        <div>
                            <h3 className="text-xl font-semibold dark:text-gray-50">Innovation</h3>
                            <p className="mt-4 text-gray-700 dark:text-gray-50">We encourage creativity and embrace new ideas.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold dark:text-gray-50">Collaboration</h3>
                            <p className="mt-4 text-gray-700 dark:text-gray-50">Teamwork is at the heart of everything we do.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold dark:text-gray-50">Integrity</h3>
                            <p className="mt-4 text-gray-700 dark:text-gray-50">We believe in doing the right thing, always.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
                <p className="mt-4 text-lg">We're excited to hear from you!</p>
                <a
                    href="mailto:mail.kazimizan@gmail.com.com"
                    className="mt-8 inline-block text-white bg-blue-600 px-8 py-3 rounded hover:bg-blue-500 transition duration-300"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
};

export default CareerPage;
