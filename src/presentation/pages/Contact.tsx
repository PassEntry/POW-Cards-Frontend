import React from 'react';
import { Link } from 'react-router-dom';
import POWCardPhone from "../../assets/images/POWCardPhone.png";
import { Header } from '../components/Header';
import POW from "../../assets/images/POW.png";

export const Contact: React.FC = () => {
  return (
    <main className="flex">
      {/* Content */}
      <div className="min-h-screen w-full lg:w-1/2">
        {/* Header */}
        <div className="absolute w-full lg:w-1/2 z-30">
          <div className="w-full max-w-lg px-6 mx-auto pt-8">
            <div className="flex h-16 md:h-20">
              <Link className="block group" to="/" aria-label="POW">
                <img src={POW} width={60} height={60} alt="POW Logo" />
              </Link>
            </div>
          </div>
        </div>

        {/* Centered Content */}
        <div className="min-h-screen flex items-center">
          <div className="w-full max-w-lg px-6 mx-auto">
            {/* Page header */}
            <div className="mb-10">
              <h1 className="h2 font-hkgrotesk">Partner with us</h1>
            </div>

            <div className="text-xl font-hkgrotesk font-bold text-slate-900 mb-8">
              Let's get started.
            </div>

            {/* Form */}
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="company">
                    Company Name <span className="text-blue-500">*</span>
                  </label>
                  <input 
                    id="company" 
                    className="form-input w-full" 
                    type="text" 
                    placeholder="E.g. PassEntry Ltd" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Full Name <span className="text-blue-500">*</span>
                  </label>
                  <input 
                    id="name" 
                    className="form-input w-full" 
                    type="text" 
                    placeholder="John Smith" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">
                    Email <span className="text-blue-500">*</span>
                  </label>
                  <input 
                    id="email" 
                    className="form-input w-full" 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">
                    Phone Number <span className="text-blue-500">*</span>
                  </label>
                  <input 
                    id="phone" 
                    className="form-input w-full" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="interest">
                    What interests you most? <span className="text-blue-500">*</span>
                  </label>
                  <select 
                    id="interest" 
                    className="form-select w-full" 
                    required
                  >
                    <option value="">Select an option</option>
                    <option>Loyalty Programs</option>
                    <option>Event Ticketing</option>
                    <option>NFT-Gated Access</option>
                    <option>POAP Distribution</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-end mt-6">
                <button className="btn inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 group">
                  Schedule a Call
                  <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 pointer-events-none -z-10" />

        {/* Phone Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <img
              src={POWCardPhone}
              className="max-w-none"
              width={298}
              height={601}
              alt="POW Card Phone"
            />
          </div>
        </div>

        {/* Top-right decorative blur */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/3 pointer-events-none -z-10 blur-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
            <defs>
              <filter id="hi-a" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
              <filter id="hi-b" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
              <filter id="hi-c" width="159.9%" height="145%" x="-29.9%" y="-22.5%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                fill="#3b82f6"
                fillOpacity=".72"
                d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                filter="url(#hi-a)"
                transform="translate(0 -605)"
              />
              <path
                fill="#67E8F9"
                fillOpacity=".64"
                d="M1265.664 513.257C1346.624 699.102 1639.5 459.962 1639.5 246.315S1038.728-380 825.007-380s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                filter="url(#hi-b)"
                transform="translate(0 -100)"
              />
              <path
                fill="#818cf8"
                fillOpacity=".6"
                d="M1800.164 892.257C1881.124 1078.102 2174 838.962 2174 625.315S1573.228-1 1359.507-1s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                filter="url(#hi-c)"
                transform="translate(0 -525)"
              />
            </g>
          </svg>
        </div>

        {/* Bottom-right decorative blur */}
        <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 pointer-events-none -z-10 blur-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="1106" height="1327">
            <defs>
              <filter id="hi-d" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
            </defs>
            <path
              fill="#c084fc"
              fillOpacity=".4"
              d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
              filter="url(#hi-d)"
              transform="translate(-800 -100)"
            />
          </svg>
        </div>

        {/* Center-right decorative blur */}
        <div className="absolute top-1/2 -right-48 -translate-y-1/2 pointer-events-none -z-10 blur-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="1106" height="1327">
            <defs>
              <filter id="hi-e" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
              </filter>
            </defs>
            <path
              fill="#3b82f6"
              fillOpacity=".8"
              d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
              filter="url(#hi-e)"
              transform="translate(-400 -400)"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}; 