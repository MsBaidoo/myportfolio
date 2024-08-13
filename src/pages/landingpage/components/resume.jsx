import React from 'react';

const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-center text-4xl font-bold mb-8">Resume</h1>
            
            <section className="mb-12 text-center text-gray-800">
                <p className="text-lg leading-relaxed">
                    Welcome to a detailed look at my professional journey, where customer service excellence meets the dynamic world of web development. With a strong foundation in communication, problem-solving, and customer-centric thinking, I am transitioning into web development to merge these strengths with my passion for technology. My diverse experience has equipped me with a unique perspective, enabling me to build user-friendly, responsive websites that prioritize the end-user experience while driving business results.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Customer Service Representative</h2>
                <h3 className="text-xl font-medium mb-2">March 2022 to Present</h3>
                <p className="text-gray-600 mb-4"><em>Accra, Ghana</em></p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Answers customers' calls and emails promptly and responds to customer inquiries.</li>
                    <li>Identifies and resolves any issues that customers might be experiencing.</li>
                    <li>Evaluates customer problems and complaints, providing appropriate solutions.</li>
                    <li>Provides information on Ecobank’s products and generates interest in the offerings.</li>
                    <li>Escalates complex issues to supervisors and managers.</li>
                    <li>Follows up with customers to ensure their issues have been resolved.</li>
                    <li>Meets performance metrics such as call volume, average handle time, and customer satisfaction.</li>
                    <li>Documents customer interactions in a CRM system.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Service Point Advisor / Multi-Channel Sales Executive</h2>
                <h3 className="text-xl font-medium mb-2">July 2020 to March 2022</h3>
                <p className="text-gray-600 mb-4"><em>Accra, Ghana</em></p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Received and processed shipments (parcels).</li>
                    <li>Managed money for processed shipments.</li>
                    <li>Handled customer complaints and provided solutions.</li>
                    <li>Assisted in educating customers on new initiatives (DHL X REWARD, DIY AIR WAYBILL).</li>
                    <li>Contacted clients through calls and emails to encourage more shipping.</li>
                    <li>Presented and sold DHL products to clients, generating interest in the offerings.</li>
                    <li>Established new customer relationships by researching and educating them on the benefits of doing business with DHL.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-500 py-8">Leadership Position and Acheivements</h2>
                
                
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Dorm Representative - Catholic Student Union -St. Louis Senior High School  
                    </li>
                    <li>Deputy General Secretary – Economics Department – Kwame Nkrumah University of Science and Technology.  
                    </li>


                    <h2 className="text-xl font-semibold mb-4 text-blue-500">Ecobank Ghana PLC</h2>
                    <li>CX Bravo Awards for excellent service delivery for the month of July 2023.</li>
                    
                    
                </ul>
            </section>
        </div>
    );
};

export default Resume;
