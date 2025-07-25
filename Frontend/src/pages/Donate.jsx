import React from 'react';
import DonationCard from '../components/DonationCard';
import { assets } from '../assets/assets';

const Donate = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-10 mt-25 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <DonationCard
          image = {assets.Donation}
          title="Donate for Rescued Cows and Attain Blessings"
          description="Support Gau Seva Dham where rescued cows receive food and shelter. Your donation nourishes and protects them."
          disabled
          options={[
            { label: 'Feed 5 Rescued Gaumatas for ₹251' },
            { label: 'Feed 20 Rescued Gaumatas for ₹1001' },
            { label: 'Feed 40 Rescued Gaumatas for ₹2001' },
            { label: 'Feed 100 Rescued Gaumatas for ₹5001' },
            { label: 'Feed 200 Rescued Gaumatas for ₹10001' },
            { label: 'Feed 400 Rescued Gaumatas for ₹20001' },
            { label: 'Feed 1000 Rescued Gaumatas for ₹50001' },
            { label: 'Feed 2000 Rescued Gaumatas for ₹100001' },
          ]}
        />

        <DonationCard
          image={assets.Donation2}
          title="Donate Medicine for Injured Cows"
          description="Help provide urgent treatment and medicine to injured cows in need. ₹501 can change a life."
          disabled
          options={[
            { label: '₹1001 for 2 Cows' },
            { label: '₹2501 for 5 Cows' },
            { label: '₹5001 for 10 Cows' },
            { label: '₹10001 for 20 Cows' },
            { label: '₹15001 for 30 Cows' },
            { label: '₹25001 for 50 Cows' },
          ]}
        />

        <DonationCard
          image={assets.Donation3}
          title="Offer Jaggery to Gaumata this Winter"
          description="Provide jaggery for warmth and nourishment. Help Gaumatas stay healthy during winter."
          disabled
          options={[
            { label: 'Donate Jaggery for 4 Cows – ₹300' },
            { label: 'Donate Jaggery for 10 Cows – ₹750' },
            { label: 'Donate Jaggery for 15 Cows – ₹1125' },
            { label: 'Donate Jaggery for 30 Cows – ₹2250' },
            { label: 'Donate Jaggery for 50 Cows – ₹3750' },
            { label: 'Donate Jaggery for 100 Cows – ₹7500' },
          ]}
        />
      </div>
    </div>
  );
};

export default Donate;
