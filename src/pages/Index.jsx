import { AboutMeSection } from '../components/AboutMeSection.jsx'
import { MetaStrip } from '../components/MetaStrip.jsx'
import { WhatIdoSection } from '../components/WhatIdoSection.jsx'
import { TechStackSection } from '../components/TechStackSection.jsx'
import { ProductsSection } from '../components/ProductsSection.jsx'
import { ExperienceSection } from '../components/ExperienceSection.jsx'
import { ContactSection } from '../components/ContactSection.jsx'
import { EduSection } from '../components/EduSection.jsx'

export const Index = () => {
    return (
        <div className="w-full">
            <AboutMeSection />
            <MetaStrip />
            <WhatIdoSection />
            <TechStackSection />
            <ProductsSection />
            <ExperienceSection />
            <ContactSection />
            <EduSection />
        </div>
    )
}