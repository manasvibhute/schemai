// import React, { useState } from 'react';
// import { Check, Sparkles, Zap, Crown } from 'lucide-react';
// import GlassCard from '../components/GlassCard';

// const Pricing = () => {
//   const [billingCycle, setBillingCycle] = useState('monthly');

//   const plans = [
//     {
//       name: 'Free',
//       icon: Sparkles,
//       price: { monthly: 0, yearly: 0 },
//       description: 'Perfect for trying out SchemaAI',
//       features: [
//         '3 schemas per month',
//         'Basic AI generation',
//         'Export to SQL',
//         'Community support',
//         '7-day history'
//       ],
//       cta: 'Get Started',
//       href: '/signup',
//       popular: false,
//       gradient: 'from-slate-600 to-slate-700'
//     },
//     {
//       name: 'Pro',
//       icon: Zap,
//       price: { monthly: 29, yearly: 290 },
//       description: 'For professional developers',
//       features: [
//         'Unlimited schemas',
//         'Advanced AI models',
//         'Export to all SQL dialects',
//         'Visual editor access',
//         'Priority support',
//         'Team collaboration (5 members)',
//         'Version control',
//         'API access'
//       ],
//       cta: 'Start Free Trial',
//       href: '/signup?plan=pro',
//       popular: true,
//       gradient: 'from-violet-600 to-pink-600'
//     },
//     {
//       name: 'Enterprise',
//       icon: Crown,
//       price: { monthly: 'Custom', yearly: 'Custom' },
//       description: 'For large teams and organizations',
//       features: [
//         'Everything in Pro',
//         'Unlimited team members',
//         'Custom AI training',
//         'Dedicated support',
//         'SLA guarantee',
//         'SSO & SAML',
//         'Audit logs',
//         'On-premise deployment',
//         'Custom integrations'
//       ],
//       cta: 'Contact Sales',
//       href: '/contact',
//       popular: false,
//       gradient: 'from-amber-600 to-orange-600'
//     }
//   ];

//   return (
//     <div className="min-h-screen py-20 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//             Simple, transparent pricing
//           </h1>
//           <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
//             Choose the perfect plan for your needs. All plans include a 14-day free trial.
//           </p>

//           {/* Billing Toggle */}
//           <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1">
//             <button
//               onClick={() => setBillingCycle('monthly')}
//               className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                 billingCycle === 'monthly'
//                   ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg'
//                   : 'text-slate-400 hover:text-white'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setBillingCycle('yearly')}
//               className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                 billingCycle === 'yearly'
//                   ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg'
//                   : 'text-slate-400 hover:text-white'
//               }`}
//             >
//               Yearly
//               <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
//                 Save 17%
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {plans.map((plan, index) => (
//             <GlassCard
//               key={index}
//               className={`p-8 relative ${plan.popular ? 'ring-2 ring-violet-500' : ''}`}
//               hover
//               glow={plan.popular}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold">
//                   Most Popular
//                 </div>
//               )}

//               <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
//                 <plan.icon className="text-white" size={24} />
//               </div>

//               <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
//               <p className="text-slate-400 mb-6">{plan.description}</p>

//               <div className="mb-6">
//                 {typeof plan.price[billingCycle] === 'number' ? (
//                   <>
//                     <span className="text-5xl font-bold text-white">
//                       ${plan.price[billingCycle]}
//                     </span>
//                     <span className="text-slate-400 ml-2">
//                       /{billingCycle === 'monthly' ? 'month' : 'year'}
//                     </span>
//                   </>
//                 ) : (
//                   <span className="text-5xl font-bold text-white">
//                     {plan.price[billingCycle]}
//                   </span>
//                 )}
//               </div>

//               <a
//                 href={plan.href}
//                 className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-6 ${
//                   plan.popular
//                     ? 'bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50'
//                     : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
//                 }`}
//               >
//                 {plan.cta}
//               </a>

//               <ul className="space-y-3">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-3 text-slate-300">
//                     <Check size={20} className="text-violet-400 flex-shrink-0 mt-0.5" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </GlassCard>
//           ))}
//         </div>

//         {/* FAQ Section */}
//         <div className="mt-20">
//           <h2 className="text-3xl font-bold text-white text-center mb-12">
//             Frequently asked questions
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 q: 'Can I change plans later?',
//                 a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
//               },
//               {
//                 q: 'What payment methods do you accept?',
//                 a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.'
//               },
//               {
//                 q: 'Is there a free trial?',
//                 a: 'Yes! All paid plans include a 14-day free trial with full access to all features.'
//               },
//               {
//                 q: 'Can I cancel anytime?',
//                 a: 'Absolutely. Cancel anytime with no questions asked. No hidden fees or penalties.'
//               }
//             ].map((faq, index) => (
//               <GlassCard key={index} className="p-6">
//                 <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
//                 <p className="text-slate-400">{faq.a}</p>
//               </GlassCard>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 text-center">
//           <GlassCard className="p-12 max-w-3xl mx-auto" glow>
//             <h2 className="text-3xl font-bold text-white mb-4">
//               Still have questions?
//             </h2>
//             <p className="text-slate-300 mb-6">
//               Our team is here to help. Get in touch and we'll respond within 24 hours.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
//             >
//               Contact Sales
//             </a>
//           </GlassCard>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;







// src/pages/Pricing.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added Link for navigation buttons/links
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
// -----------------------------------------------------------------
// FIX: Change to a named import {} to match the export in GlassCard.jsx
import { GlassCard } from '../components/GlassCard'; 
// -----------------------------------------------------------------

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Free',
      icon: Sparkles,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for trying out SchemaAI',
      features: [
        '3 schemas per month',
        'Basic AI generation',
        'Export to SQL',
        'Community support',
        '7-day history'
      ],
      cta: 'Get Started',
      href: '/signup',
      popular: false,
      gradient: 'from-slate-600 to-slate-700'
    },
    {
      name: 'Pro',
      icon: Zap,
      price: { monthly: 29, yearly: 290 },
      description: 'For professional developers',
      features: [
        'Unlimited schemas',
        'Advanced AI models',
        'Export to all SQL dialects',
        'Visual editor access',
        'Priority support',
        'Team collaboration (5 members)',
        'Version control',
        'API access'
      ],
      cta: 'Start Free Trial',
      href: '/signup?plan=pro',
      popular: true,
      gradient: 'from-violet-600 to-pink-600'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: { monthly: 'Custom', yearly: 'Custom' },
      description: 'For large teams and organizations',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Custom AI training',
        'Dedicated support',
        'SLA guarantee',
        'SSO & SAML',
        'Audit logs',
        'On-premise deployment',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false,
      gradient: 'from-amber-600 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <GlassCard
              key={index}
              className={`p-8 relative ${plan.popular ? 'ring-2 ring-violet-500' : ''}`}
              hover
              glow={plan.popular}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                <plan.icon className="text-white" size={24} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-6">{plan.description}</p>

              <div className="mb-6">
                {typeof plan.price[billingCycle] === 'number' ? (
                  <>
                    <span className="text-5xl font-bold text-white">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-slate-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold text-white">
                    {plan.price[billingCycle]}
                  </span>
                )}
              </div>

              {/* Use Link component for routing, or keep anchor if external */}
              <a 
                href={plan.href}
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <Check size={20} className="text-violet-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.'
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes! All paid plans include a 14-day free trial with full access to all features.'
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Absolutely. Cancel anytime with no questions asked. No hidden fees or penalties.'
              }
            ].map((faq, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <GlassCard className="p-12 max-w-3xl mx-auto" glow>
            <h2 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-slate-300 mb-6">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
            >
              Contact Sales
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Pricing;