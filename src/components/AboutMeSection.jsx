import { Icon } from "@iconify/react";

export const AboutMeSection = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-6">
                <div id="home" className="card lg:w-1/2 hover:shadow-green-700">
                    <div className="flex items-center gap-6">
                        <img src="/images/zypp-illustration.png" className="flex-1/3 w-30 object-cover rounded-lg bg-gray-700 shadow shadow-slate-800" alt="Zay Yar Phone Pai" />
                        <div className="flex-2/3 flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">Zay Yar Phone Pai</h1>
                            <h3 className="text-lg font-semibold">Senior Full-Stack Developer</h3>
                            <p className="text-gray-400">Specializing in Laravel, Django, React, Vue, and scalable architecture.</p>

                            <div className="flex gap-4 mt-2">
                                <a href="#projects" className="btn border-green-500 hover:bg-green-500">
                                    <Icon icon="material-symbols:chevron-right-rounded" width="24" /> <span className="text-sm">View My Works</span>
                                </a>
                                <a href="/zayyarphonepai-cv.pdf" className="btn border-blue-500 hover:bg-blue-500" target="_blank">
                                    <Icon icon="mdi:download" width="20" />
                                    <span className="text-sm">Download CV</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:w-2/3 hover:shadow-blue-700">
                    <h1 className="text-2xl font-bold mb-2">About Me</h1>
                    <p className="text-gray-400">I’m a <span className="font-bold">Full-stack web developer with 8+ years of hands-on experience</span> building production-ready systems for government platforms, logistics companies, and commercial products. I specialize in <span className="font-bold">Laravel</span> and <span className="font-bold">Django</span> backends with modern frontend frameworks like <span className="font-bold">React</span> and <span className="font-bold">Vue</span>. I focus on clean architecture, security, and scalable solutions that perform reliably in real-world environments.</p>
                </div>
            </div>
        </>
    )
}