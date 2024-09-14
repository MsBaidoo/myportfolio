

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

                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Junior Frontend Developer- Mest Africa</h2>
                <h3 className="text-xl font-medium mb-2">June 2024– August 2024</h3>
                <p className="text-gray-600 mb-4"><em>Accra, Ghana</em></p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Developed and maintained a responsive event platform using React,JavaScript, Tailwind CSS and Node.js</li>
                    <li> Developed a responsive portfolio website using React,JavaScript,Tailwind CSS and Node.js</li>
                    <li> Integrated third-party APIs to enhance website functionality.</li>
                    <li>Contributed to an open source project on mobile wallet-fraud database using
                        React,TypeScript,JavaScript,Tailwind CSS.</li>
                    <li>Utilized Git for version control and collaborated with remote teams using GitHub,Slack and Discord.</li>

                </ul>

            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Customer Service Representative - Ecobank Ghana PLC</h2>
                <h3 className="text-xl font-medium mb-2">March 2022 to Present</h3>
                <p className="text-gray-600 mb-4"><em>Accra, Ghana</em></p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Consistently answered customer calls and emails promptly, ensuring timely responses to inquiries.</li>
                    <li> Identified and analyzed customer issues, leading to effective troubleshooting and resolution.</li>
                    <li> Evaluated and resolved customer problems, providing appropriate solutions that enhanced satisfaction.</li>
                    <li>Provided detailed information on Ecobank's products, successfully generating interest and
                        engagement</li>
                    <li> Escalated complex issues to supervisors and managers for further investigation and resolution.</li>
                    <li>Followed up with customers to confirm the successful resolution of their concerns, contributing to high
                        customer satisfaction.</li>
                    <li> Metandexceeded performance metrics, including call volume, average handle time, and customer
                        satisfaction ratings.</li>
                    <li>Documented all customer interactions in a CRM system, ensuring accurate records for future reference.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-500">Service Point Advisor / Multi-Channel Sales Executive - DHL Ghana Limited</h2>
                <h3 className="text-xl font-medium mb-2">July 2020 to March 2022</h3>
                <p className="text-gray-600 mb-4"><em>Accra, Ghana</em></p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Efficiently received and processed shipments, ensuring timely and accurate handling of parcels.</li>
                    <li> Managedfinancial transactions related to processed shipments, maintaining accuracy and
                        accountability</li>
                    <li>Resolved customer complaints by providing effective solutions, improving overall customer satisfaction.</li>
                    <li>Assisted my supervisor in educating customers on new initiatives, such as DHL X REWARD and DIY
                        Air Waybill, enhancing customer engagement</li>
                    <li> Contacted clients via calls and emails, successfully encouraging increased shipping activity.</li>
                    <li> Presented and promoted DHL products to clients, generating interest and fostering long-term
                        relationships.</li>
                    <li> Proactively established relationships with new customers by researching online and educating them on
                        the benefits of partnering with DHL.</li>
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
                <div className='p-8'>
                    <a href="https://docs.google.com/file/d/1IhQ1QvS7QgXVIf_dFxGrEmEQz75UNKFd/edit?usp=docslist_api&filetype=msword" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
                        <i class="fas fa-download mr-2"></i> Download My Resume</a>
                </div>

            </section>
        </div>
    );
};

export default Resume;
