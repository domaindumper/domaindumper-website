import { useState, useEffect } from 'react';

export default function PricingDefault({ isYearly }) {
  const [animatingPrice, setAnimatingPrice] = useState(false);
  const [prices, setPrices] = useState({});

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      monthlyPrice: 29,
      yearlyPrice: 279,
      features: [
        'Up to 100 domain searches/day',
        'Basic domain analytics',
        'Email notifications',
        'Standard support'
      ],
      btnText: 'Get Basic',
      btnLink: '/signup?plan=basic'
    },
    {
      id: 'pro',
      name: 'Professional',
      monthlyPrice: 99,
      yearlyPrice: 949,
      featured: true,
      features: [
        'Up to 1000 domain searches/day',
        'Advanced domain analytics',
        'Real-time notifications',
        'Priority support',
        'API access'
      ],
      btnText: 'Get Professional',
      btnLink: '/signup?plan=pro'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      monthlyPrice: 299,
      yearlyPrice: 2869,
      features: [
        'Unlimited domain searches',
        'Custom analytics dashboard',
        'Dedicated account manager',
        '24/7 premium support',
        'Full API access',
        'Custom integrations'
      ],
      btnText: 'Contact Sales',
      btnLink: '/contact'
    }
  ];

  // Initialize prices on mount and when isYearly changes
  useEffect(() => {
    // Start animation
    setAnimatingPrice(true);

    // Calculate new prices
    const newPrices = plans.reduce((acc, plan) => {
      acc[plan.id] = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
      return acc;
    }, {});

    // Update prices after animation starts
    const timer = setTimeout(() => {
      setPrices(newPrices);
      setAnimatingPrice(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [isYearly]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  // Get current price for a plan
  const getCurrentPrice = (plan) => {
    return prices[plan.id] || (isYearly ? plan.yearlyPrice : plan.monthlyPrice);
  };

  return (
    <div className="row g-4">
      {plans.map((plan) => (
        <div key={plan.id} className={`col-lg-4 col-md-6${plan.featured ? ' z-1' : ''}`}>
          <div className={`pricing-card card h-100 border-0 shadow-lg${
            plan.featured ? ' featured bg-primary text-white' : ''
          }`}>
            <div className="card-body p-5">
              <div className="mb-4">
                <h4 className={plan.featured ? 'text-white' : ''}>{plan.name}</h4>
                <div className="display-5 fw-bold mb-2">
                  <div className={`price-wrapper${animatingPrice ? ' price-animating' : ''}`}>
                    <span className="currency">$</span>
                    <span className="price-amount">
                      {formatPrice(getCurrentPrice(plan))}
                    </span>
                    <small className={`fs-6 fw-normal ${plan.featured ? 'text-white-50' : 'text-body-secondary'}`}>
                      /{isYearly ? 'year' : 'month'}
                    </small>
                  </div>
                  {isYearly && (
                    <div className="mt-2">
                      <small className={`${plan.featured ? 'text-white-50' : 'text-success'}`}>
                        Save {((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12) * 100).toFixed(0)}%
                      </small>
                    </div>
                  )}
                </div>
              </div>
              <ul className="list-unstyled mb-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="mb-3 d-flex align-items-center">
                    <i className={`bi bi-check-circle me-2${
                      plan.featured ? ' text-white' : ' text-success'
                    }`}></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={plan.btnLink}
                className={`btn ${plan.featured ? 'btn-featured' : 'btn-primary'} w-100`}
              >
                <span>{plan.btnText}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}