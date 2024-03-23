import React from "react";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-950">About Urban Nest</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Urban Nest is a leading real estate agency specializing in helping clients buy, sell, and rent properties in desirable neighborhoods. Our experienced agents are dedicated to providing exceptional service and making the buying and selling process smooth.
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Our mission is to help clients achieve their real estate goals with expert advice, personalized service, and a deep understanding of the local market. Whether you're buying, selling, or renting, we're here for you every step of the way.
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          With a wealth of experience and knowledge in the real estate industry, our team is committed to delivering the highest level of service. We believe that buying or selling a property should be an exciting and rewarding experience, and we're dedicated to making that a reality for each client.
        </p>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-950">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Buying</h3>
            <p className="text-gray-700">
              Looking to buy your dream home? Our expert agents will guide you through the entire process, from finding the perfect property to negotiating the best deal.
            </p>
            <ul className="mt-4 text-gray-700">
              <li>Personalized property search based on your preferences</li>
              <li>Expert advice on market trends and property valuation</li>
              <li>Assistance with financing and mortgage options</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Selling</h3>
            <p className="text-gray-700">
              Ready to sell your property? Let us handle the process for you. Our dedicated team will market your property effectively and negotiate the best price on your behalf.
            </p>
            <ul className="mt-4 text-gray-700">
              <li>Comprehensive marketing strategies to attract potential buyers</li>
              <li>Professional photography and virtual tours to showcase your property</li>
              <li>Expert negotiation skills to maximize your sale price</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Renting</h3>
            <p className="text-gray-700">
              Need to find the perfect rental property? We've got you covered. Our team will help you navigate the rental market and find a property that meets your needs and budget.
            </p>
            <ul className="mt-4 text-gray-700">
              <li>Personalized rental search based on your criteria</li>
              <li>Assistance with rental applications and lease agreements</li>
              <li>Support throughout the entire rental process, from search to move-in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
