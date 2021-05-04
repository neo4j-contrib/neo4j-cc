import { SummaryPanel } from '../components/SummaryPanel';

import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { AuthenticationButton } from '../components/AuthenticationButton';

export const ProfilePage = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/hello`);

      const responseData = await response.text();

      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/whisper`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.text();

      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <SummaryPanel title="Profile">
          <p className="mt-1 text-sm text-gray-600">
            Welcome home.
          </p>
      </SummaryPanel>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <AuthenticationButton social="any"/>
        </div>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              onClick={callApi}
              type="button"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Public
            </button>
            <button
            onClick={callSecureApi}
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Private
            </button>
          </span>

          {message && (
            <div className="mt-5">
              <h6 className="muted">Result</h6>
              <div className="container-fluid">
                <div className="row">
                  <code className="col-12 text-light bg-dark p-4">{message}</code>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>

  )
}
