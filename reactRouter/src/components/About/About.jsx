import React from 'react'
import DP from '../../assets/DP.png'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={DP}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            As a Full Stack Developer and UI/UX Designer, I work at the
                            intersection of clean engineering and intuitive design — 
                            which means the products I touch look good AND work well. 
                            Right now I'm in my second year of Computer Software
                            Engineering at BIIT (CGPA: 3.90), and I recently completed 
                            a 4-month Full Stack internship at Ezitech Institute where 
                            I built and shipped real-world web applications using 
                            React.js, Node.js, and JavaScript.  
                            What I bring to the table: 
                            → Frontend: React.js, HTML, CSS, JavaScript 
                            → Backend: Node.js, ASP.NET, REST APIs 
                            → Design: UI/UX, Figma, User Interface Prototyping 
                            → Other: C#, Python, Java, Git, Jira
                        </p>
                        <p className="mt-4 text-gray-600">
                            I'm the kind of developer who cares about the user 
                            experience, not just the code quality. I've learned that 
                            the best products happen when the person writing the code 
                            also understands the person using it. 
                            Currently open to: internships, part-time remote roles,
                             and collaborative projects.    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}