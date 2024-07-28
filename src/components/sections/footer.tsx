import { SectionLayout } from '@/layouts/SectionLayout'

const Footer = () => {
  return (
    <SectionLayout>
      <div className="grid grid-cols-2 w-full">
        <div className="space-y-1">
          <h4 className="text-2xl">Company</h4>
          <p className="sub-text clickable-text">Services</p>
          <p className="sub-text clickable-text">Testimonials</p>
          <p className="sub-text clickable-text">Pricing</p>
          <p className="sub-text clickable-text">Developer Portfolio</p>
        </div>

        <div className="space-y-1">
          <h4 className="text-2xl">Services</h4>
          <p className="sub-text clickable-text">Contact</p>
          <p className="sub-text clickable-text">Privacy Policy</p>
          <p className="sub-text clickable-text">Terms & Conditions</p>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Footer
