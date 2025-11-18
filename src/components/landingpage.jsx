import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-3xl w-full border border-gray-200 text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🌐</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Networking Quiz
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Test your knowledge of networking concepts from the CoderCo module
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Topics Covered:
          </h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-2xl">✓</span>
              <span>IP Addressing and Subnetting</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-2xl">✓</span>
              <span>DNS and Domain Name System</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-2xl">✓</span>
              <span>Routing Concepts (Static & Dynamic)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-2xl">✓</span>
              <span>Firewalls and Network Security Basics</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-2xl">✓</span>
              <span>Network Protocols (TCP, UDP, DHCP, DNS)</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-gray-900 mb-1">10</div>
            <div className="text-sm text-gray-700">Questions</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
            <div className="text-sm text-gray-700">Choices Each</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-gray-900 mb-1">~5</div>
            <div className="text-sm text-gray-700">Minutes</div>
          </div>
        </div>

        {/* Start Quiz Button */}
        <button className="w-full bg-blue-600 text-white font-bold py-5 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-2xl">
          Start Quiz →
        </button>
      </div>
    </div>
  );
}
