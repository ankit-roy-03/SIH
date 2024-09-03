import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

function SocialLoginButtons() {
  return (
    <div className="mt-6">
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 bg-reseda-green px-2 text-cambridge-blue font-medium">
          Or sign in with
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-black font-medium hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Facebook</span>
            <FaFacebookF className="text-blue-600 text-xl" />
          </button>
        </div>

        <div>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-black font-medium hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Google</span>
            <FaGoogle className="text-red-600 text-xl" />
          </button>
        </div>

        <div>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-black font-medium hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Twitter</span>
            <FaTwitter className="text-blue-400 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialLoginButtons;
