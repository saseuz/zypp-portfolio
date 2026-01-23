import { Icon } from "@iconify/react";

export const ProductsSection = () => {
    return (
        <div id="projects">
            <div className='mb-8 text-center'>
                <h1 className='text-2xl font-bold mb-1'>Selected Projects</h1>
                <p><span className='text-red-500'>Real</span> systems. <span className='text-red-500'>Real</span> users. <span className='text-red-500'>Real</span> impact.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <a href='#' className="card hover:shadow-yellow-400 hover:scale-101 group">
                    <div className='space-y-4'>
                        <div className="flex justify-center">
                            <img src="https://img.freepik.com/free-vector/flat-shopping-online-landing-page_23-2148518934.jpg" alt="Project-1" className='rounded' />
                        </div>
                        <div className='text-gray-200 space-y-2'>
                            <h3 className='text-xl font-bold'>Myanmar Post & Logistics</h3>
                            <h5 className='font-semibold'>Laravel + Vue.js</h5>
                            <p className='text-sm text-gray-400'>Real-time shipment tracking RBAC for admin & clients 500+ daily shipments</p>
                        </div>

                        <div className='text-sm font-semibold flex items-center gap-2 group-hover:text-yellow-500'>
                            <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="group-hover:translate-x-1" />
                            View Case Study
                        </div>
                    </div>
                </a>

                <a href='#' className="card hover:shadow-yellow-400 hover:scale-101 group">
                    <div className='space-y-4'>
                        <div className="flex justify-center">
                            <img src="https://img.freepik.com/free-vector/flat-shopping-online-landing-page_23-2148518934.jpg" alt="Project-1" className='rounded' />
                        </div>
                        <div className='text-gray-200 space-y-2'>
                            <h3 className='text-xl font-bold'>Myanmar Post & Logistics</h3>
                            <h5 className='font-semibold'>Laravel + Vue.js</h5>
                            <p className='text-sm text-gray-400'>Real-time shipment tracking RBAC for admin & clients 500+ daily shipments</p>
                        </div>

                        <div className='text-sm font-semibold flex items-center gap-2 group-hover:text-yellow-500'>
                            <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="group-hover:translate-x-1" />
                            View Case Study
                        </div>
                    </div>
                </a>

                <a href='#' className="card hover:shadow-yellow-400 hover:scale-101 group">
                    <div className='space-y-4'>
                        <div className="flex justify-center">
                            <img src="https://img.freepik.com/free-vector/flat-shopping-online-landing-page_23-2148518934.jpg" alt="Project-1" className='rounded' />
                        </div>
                        <div className='text-gray-200 space-y-2'>
                            <h3 className='text-xl font-bold'>Myanmar Post & Logistics</h3>
                            <h5 className='font-semibold'>Laravel + Vue.js</h5>
                            <p className='text-sm text-gray-400'>Real-time shipment tracking RBAC for admin & clients 500+ daily shipments</p>
                        </div>

                        <div className='text-sm font-semibold flex items-center gap-2 group-hover:text-yellow-500'>
                            <Icon icon="material-symbols:arrow-right-alt-rounded" width="20" className="group-hover:translate-x-1" />
                            View Case Study
                        </div>
                    </div>
                </a>

                <a href='#' className="card hover:shadow-yellow-400 hover:scale-101 group">
                    <div className='space-y-4'>
                        <div className="flex justify-center">
                            <img src="https://img.freepik.com/free-vector/flat-shopping-online-landing-page_23-2148518934.jpg" alt="Project-1" className='rounded' />
                        </div>
                        <div className='text-gray-200 space-y-2'>
                            <h3 className='text-xl font-bold'>Myanmar Post & Logistics</h3>
                            <h5 className='font-semibold'>Laravel + Vue.js</h5>
                            <p className='text-sm text-gray-400'>Real-time shipment tracking RBAC for admin & clients 500+ daily shipments</p>
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