import { AboutMeSection } from '../components/AboutMeSection.jsx'
import { EduSection } from '../components/EduSection.jsx'
import { ExperienceSection } from '../components/ExperienceSection.jsx'
import { WhatIdoSection } from '../components/WhatIdoSection.jsx'
import { ProductsSection } from '../components/ProductsSection.jsx'

export const Index = () => {
    return (
        <div className='space-y-4'>
            <AboutMeSection />

            <WhatIdoSection />

            <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            
            <ProductsSection />
            
            <ExperienceSection />

            <EduSection />
        </div>
    )
}