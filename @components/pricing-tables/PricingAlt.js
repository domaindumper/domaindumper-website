import ListCheck from "@components/lists/ListCheck";
import ListDot from "@components/lists/ListDot";

export default function PricingAlt() {
  return (
    <div className="row g-0 justify-content-center">
      <div className="col-lg-4" data-aos="fade-up">
        <div className="card bg-transparent h-100 p-4 border-0 overflow-hidden">
           <div className="flex-grow-1">
           <h5 className="mb-3">Professional</h5>
            <p className="mb-4 small text-muted">For Professionals or startup teams..</p>
            <div className="position-relative mb-4">
              <span className="display-4">$49/Mo</span>
              </div>
            <ul className="list-unstyled mb-5">
              <ListDot className="d-flex align-items-center mb-3" listText="Unlimited tasks" />
              <ListDot className="d-flex align-items-center mb-3" listText="5 Projects" />
              <ListDot className="d-flex align-items-center mb-0" listText="Unlimited tasks" />
            </ul>
           </div>
            <button type="button" className="w-100 btn btn-gradient-secondary hover-lift">Get Professional Plan</button>
        </div>
      </div>
      <div className="col-lg-4 position-relative z-index-2" data-aos="fade-up" data-aos-delay="100">
        <div className="card p-4 h-100 border-0 position-relative shadow-lg rounded-4 z-index-2 overflow-hidden">
         <div className="mb-4">
         <span className="badge bg-success">Popular</span>
         </div>
          <h5 className="mb-3">Enterprise</h5>
            <p className="mb-4 small text-muted">For individuals or startup teams..</p>
            <div className="position-relative mb-4">
              <span className="display-4">$99/Mo</span>
              </div>
            <ul className="list-unstyled mb-5">
              <ListDot className="d-flex align-items-center mb-3" listText="Unlimited tasks" />
              <ListDot className="d-flex align-items-center mb-3" listText="5 Projects" />
              <ListDot className="d-flex align-items-center mb-3" listText="Unlimited tasks" />
              <ListDot className="d-flex align-items-center mb-3" listText="5 Projects" />
              <ListDot className="d-flex align-items-center mb-0" listText="Unlimited messages" />
            </ul>
            <button type="button" className="w-100 btn btn-gradient-primary hover-lift">Get Enterprise Plan</button>
             
        </div>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">
        <div className="card bg-transparent p-4 h-100 border-0 overflow-hidden">
        <div className="flex-grow-1">
         <h5 className="mb-3">Custom Plan</h5>
            <p className="mb-4 small text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
            
          <div className="mt-auto">
            <h5 className="mb-4">Let's Talk</h5>
          <a href="#!" className="w-100 btn btn-gradient-secondary hover-lift">Contact Sales</a>
             
          </div>
        </div>
      </div>
    </div>
  );
}