import { Icon } from "@iconify/react";

export const ProductsSection = () => {
    return (
        <div id="projects">
            <div className='mb-8 text-center'>
                <h1 className='text-2xl font-bold mb-1'>Selected Projects</h1>
                <p><span className='text-red-500'>Real</span> systems. <span className='text-red-500'>Real</span> users. <span className='text-red-500'>Real</span> impact.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <a href='https://tasteboat.vercel.app/' className="card hover:shadow-yellow-400 hover:scale-101 group" target="_blank">
                    <div className='space-y-4'>
                        <div className="flex justify-center">
                            <img src="images/tasteboat.png" alt="TasteBoat" className='rounded w-full' />
                        </div>
                        <div className='text-gray-800 dark:text-gray-200 space-y-2'>
                            <h3 className='text-xl font-bold'>TasteBoat</h3>
                            <h5 className='font-semibold'>(Laravel + Vue.js) - (Vite + React) + Tailwind CSS</h5>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>Cook & save favourites • Ratings & personal tracking • Better meal planning</p>
                        </div>

                        <div className='text-sm font-semibold flex items-center gap-2 group-hover:text-yellow-500'>
                            <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="group-hover:translate-x-1" />
                            View Case Study
                        </div>
                    </div>
                </a>

                <a href='https://onlineshop.aa.com.mm/' className="card hover:shadow-yellow-400 hover:scale-101 group" target="_blank">
                    <div className='space-y-4'>
                        <div className="flex justify-center">
                            <img src="/images/aa-shop.png" alt="AA Shop" className='rounded w-full' />
                        </div>
                        <div className='text-gray-800 dark:text-gray-200 space-y-2'>
                            <h3 className='text-xl font-bold'>Pacific-AA Online Shop</h3>
                            <h5 className='font-semibold'>Laravel + Vue.js</h5>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>Secure e-commerce platform • Product categories & promotions • Optimized performance</p>
                        </div>

                        <div className='text-sm font-semibold flex items-center gap-2 group-hover:text-yellow-500'>
                            <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="group-hover:translate-x-1" />
                            View Case Study
                        </div>
                    </div>
                </a>

                <a href='https://melomm.com/' className="card hover:shadow-yellow-400 hover:scale-101 group" target="_blank">
                    <div className='space-y-4'>
                        <div className="flex justify-center">
                            <img src="/images/melo-music.png" alt="Melo Music Streaming Platform" className='rounded w-full' />
                        </div>
                        <div className='text-gray-800 dark:text-gray-200 space-y-2'>
                            <h3 className='text-xl font-bold'>Melo Music Streaming Platform</h3>
                            <h5 className='font-semibold'>Laravel + Vue.js</h5>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>Music streaming platform • Subscription & payments • Mobile API integration</p>
                        </div>

                        <div className='text-sm font-semibold flex items-center gap-2 group-hover:text-yellow-500'>
                            <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="group-hover:translate-x-1" />
                            View Case Study
                        </div>
                    </div>
                </a>

                <a href='https://myanmarpost.com.mm/' className="card hover:shadow-yellow-400 hover:scale-101 group" target="_blank">
                    <div className='space-y-4'>
                        <div className="flex justify-center">
                            <img src="/images/mmpost.png" alt="Myanmar Post & Logistics" className='rounded w-full' />
                        </div>
                        <div className='text-gray-800 dark:text-gray-200 space-y-2'>
                            <h3 className='text-xl font-bold'>Myanmar Post & Logistics</h3>
                            <h5 className='font-semibold'>Laravel + Vue.js</h5>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>Real-time shipment tracking RBAC for admin & clients 500 + daily shipments</p>
                        </div>

                        <div className='text-sm font-semibold flex items-center gap-2 group-hover:text-yellow-500'>
                            <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="group-hover:translate-x-1" />
                            View Case Study
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}