import { Icon } from "@iconify/react";

export const ExperienceSection = () => {
    return (
        <div id="contact" className='flex flex-col lg:flex-row gap-6'>
            <div className="card lg:w-2/3 hover:shadow-red-700">
                <h1 className='text-2xl font-bold mb-4'>Experience</h1>

                <div className='space-y-4'>
                    <div className='text-gray-400 font-semibold'>
                        <p>2020 – 2022  Freelance</p>
                        <p>E-commerce, Job Portals, Music Platforms</p>
                    </div>

                    <div className='text-gray-400 font-semibold'>
                        <p>2019 – 2020  Za Information Technology</p>
                        <p>Mid-Level Full-Stack Developer</p>
                    </div>

                    <div className='text-gray-400 font-semibold'>
                        <p>2016 – 2019  Mega Myanmar Links</p>
                        <p>Full-Stack Developer</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 card hover:shadow-teal-700">
                <h1 className="text-2xl font-bold mb-4">Let's Work Together</h1>

                <p className="text-gray-400 mb-4">Have a project or system to build? I work with teams and individuals to develop scalable, production-ready web applications. Let’s discuss how I can help.</p>

                <div className="flex flex-col gap-4">
                    <a href="mailto:zayyarphonepai95@gmail.com" className="flex items-center gap-2">
                        <Icon icon="logos:google-gmail" width="20" />
                        zayyarphonepai95@gmail.com
                    </a>

                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/zyphpi/" className="btn border-blue-400 hover:bg-blue-400 group" target="_blank">
                            <Icon icon="logos:linkedin-icon" width="20" className="group-hover:bg-white" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/saseuz" className="btn border-gray-500 hover:bg-gray-500" target="_blank">
                            <Icon icon="logos:github-icon" width="20" />
                            Github
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}