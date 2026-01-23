import { Icon } from "@iconify/react";

export const WhatIdoSection = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-6'>
            <div className="card lg:w-2/3 hover:shadow-lime-400">
                <h1 className='text-2xl font-bold mb-4'>What I Do </h1>

                <div className='space-y-2'>
                    <div className='text-gray-600 dark:text-gray-400'>
                        <p className='font-semibold'>Backend Architecture</p>
                        <p>Laravel & Django systems built for scale</p>
                    </div>

                    <div className='text-gray-600 dark:text-gray-400'>
                        <p className='font-semibold'>API & Integration</p>
                        <p>REST APIs, mobile & third-party integrations</p>
                    </div>

                    <div className='text-gray-600 dark:text-gray-400'>
                        <p className='font-semibold'>Admin & Dashboard Systems</p>
                        <p>Secure RBAC, analytics, management tools</p>
                    </div>

                    <div className='text-gray-600 dark:text-gray-400'>
                        <p className='font-semibold'>Performance & Security</p>
                        <p>Optimization, authentication, best practices</p>
                    </div>
                </div>
            </div>

            <div className="card lg:w-1/2 hover:shadow-purple-700">
                <h1 className="text-2xl font-bold mb-5">Tech Stack</h1>

                <div className='space-y-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <h4 className='text-md font-semibold'>Backend</h4>
                        <ul className='flex flex-wrap gap-2'>
                            <li className='tag-item border-red-400 shadow-red-400'>
                                <Icon icon="logos:laravel" width="20" />
                                Laravel
                            </li>
                            <li className='tag-item border-green-800 shadow-green-800'>
                                <Icon icon="logos:django-icon" width="20" />
                                Django
                            </li>
                            <li className='tag-item border-blue-600 shadow-blue-600'>
                                <Icon icon="logos:php" width="20" />
                                PHP
                            </li>
                            <li className='tag-item border-blue-900 shadow-blue-900'>
                                <Icon icon="logos:python" width="20" />
                                Python
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <h4 className='text-md font-semibold'>Frontend</h4>
                        <ul className='flex flex-wrap gap-2'>
                            <li className='tag-item border-blue-400 shadow-blue-400'>
                                <Icon icon="logos:react" width="20" />
                                React
                            </li>
                            <li className='tag-item border-green-400 shadow-green-400'>
                                <Icon icon="logos:vue" width="20" />
                                Vue
                            </li>
                            <li className='tag-item border-black shadow-black'>
                                <Icon icon="logos:nextjs-icon" width="20" />
                                Next.js
                            </li>
                            <li className='tag-item border-sky-400 shadow-sky-400'>
                                <Icon icon="logos:typescript-icon" width="20" />
                                Typescript
                            </li>
                            <li className='tag-item border-violet-800 shadow-violet-800'>
                                <Icon icon="logos:vitejs" width="20" />
                                Vite
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4'>
                        <h4 className='text-md font-semibold'>Database</h4>
                        <ul className='flex flex-wrap gap-2'>
                            <li className='tag-item border-sky-400 shadow-sky-400'>
                                <Icon icon="logos:mysql" width="20" />
                                MySQL
                            </li>
                            <li className='tag-item border-sky-800 shadow-sky-800'>
                                <Icon icon="logos:postgresql" width="20" />
                                PostgreSQL
                            </li>
                            <li className='tag-item border-red-600 shadow-red-600'>
                                <Icon icon="logos:redis" width="20" />
                                Redis
                            </li>
                            <li className='tag-item border-green-800 shadow-green-800'>
                                <Icon icon="logos:mongodb-icon" width="10" />
                                Mongodb
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <h4 className='text-md font-semibold'>Tools</h4>
                        <ul className='flex flex-wrap gap-2'>
                            <li className='tag-item border-yellow-800 shadow-yellow-800'>
                                <Icon icon="logos:git-icon" width="20" />
                                Git
                            </li>
                            <li className='tag-item border-black shadow-black'>
                                <Icon icon="logos:github-icon" width="20" />
                                GitHub
                            </li>
                            <li className='tag-item border-gray-400 shadow-gray-400'>
                                <Icon icon="eos-icons:api" width="20" />
                                API
                            </li>
                            <li className='tag-item border-amber-800 shadow-amber-800'>
                                <Icon icon="logos:postman-icon" width="20" />
                                Postman
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}