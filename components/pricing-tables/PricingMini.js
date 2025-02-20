import ListCheck from "components/lists/ListCheck";
import ListDot from "components/lists/ListDot";

export default function PricingMini() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-xl-3" data-aos="fade-up">
        <div className="card shadow-lg rounded-4 h-100 p-4 border-0 overflow-hidden">
           <div className="flex-grow-1">
           <h5 className="mb-3">1 Month</h5>
            <div className="position-relative d-flex mb-4">
              <span className="display-6 lh-1 d-block">$5</span> <sup className="text-muted mt-auto mb-2 ms-2">/ Month</sup>
              </div>
            <ul className="list-unstyled mb-5">
              <ListDot className="d-flex align-items-center mb-3" listText="Unlimited tasks" />
              <ListDot className="d-flex align-items-center mb-3" listText="No Ads" />
              <ListDot className="d-flex align-items-center mb-0" listText="1 Month Subscription" />
            </ul>
           </div>
            <button type="button" className="w-100 btn btn-secondary hover-lift">Subscribe</button>
        </div>
      </div>
      <div className="col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="100">
        <div className="card p-4 border border-2 border-primary h-100 position-relative shadow-lg rounded-4 z-index-2 overflow-hidden">
         <div className="flex-grow-1">
        
          <h5 className="mb-3">3 Months</h5>
          <div className="position-relative d-flex mb-4">
              <span className="display-6 lh-1 d-block">$12</span>
              </div>
            <ul className="list-unstyled mb-5">
              <ListDot className="d-flex align-items-center mb-3" listText="Unlimited tasks" />
              <ListDot className="d-flex align-items-center mb-3" listText="No Ads" />
              <ListDot className="d-flex align-items-center mb-0" listText="3 Month Subscription" />
            </ul>
         </div>
            <button type="button" className="w-100 btn btn-primary hover-lift">Subscribe</button>
             
        </div>
      </div>
      <div className="col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="150">
      <div className="card p-4 bg-transparent h-100 border-0 shadow-lg rounded-4 overflow-hidden">
         <div className="mb-4 flex-grow-1">
          <h5 className="mb-3">6 Months</h5>
          <div className="position-relative d-flex mb-4">
              <span className="display-6 lh-1 d-block">$24</span>
              </div>
            <ul className="list-unstyled mb-5">
              <ListDot className="d-flex align-items-center mb-3" listText="Unlimited tasks" />
              <ListDot className="d-flex align-items-center mb-3" listText="No Ads" />
              <ListDot className="d-flex align-items-center mb-0" listText="6 Months Subscription" />
            </ul>
        </div>
        
        <button type="button" className="w-100 btn btn-secondary hover-lift">Subscribe</button>
             
      </div>
      </div>
      <div className="col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="150">
      <div className="card p-4 bg-transparent h-100 border-0 shadow-lg rounded-4 overflow-hidden">
         <div className="mb-4 flex-grow-1">
         <div className="mb-4 small">
         🎉 ON SALE NOW!
         </div>
          <h5 className="mb-3">12 Months</h5>
          <div className="position-relative d-flex mb-4">
              <span className="display-6 lh-1 d-block"><del className="text-danger">$60</del> $44</span>
              </div>
            <ul className="list-unstyled mb-5">
              <ListDot className="d-flex align-items-center mb-3" listText="Unlimited tasks" />
              <ListDot className="d-flex align-items-center mb-3" listText="No Ads" />
              <ListDot className="d-flex align-items-center mb-0" listText="12 Months Subscription" />
            </ul>
        </div>
        
        <button type="button" className="w-100 btn btn-secondary hover-lift">Subscribe</button>
             
      </div>
      </div>
    </div>
  );
}