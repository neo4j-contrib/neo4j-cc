import { RedirectLoginOptions, useAuth0, User } from "@auth0/auth0-react";
import React, { ReactNode, useEffect, useState } from 'react';

const auth0Config = {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  domain: process.env.NX_AUTH0_DOMAIN!,
}

const Button: React.FC = ({children}) => (<span className="relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">{children}</span>)

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button>
    <button
      type="button"
      onClick={() => loginWithRedirect({
        scope: "read:current_user",
      })}>Log In</button>
    </Button>
};


const LinkButton = ({connection}:RedirectLoginOptions) => {
  const { loginWithRedirect } = useAuth0();

  return <Button>
    <button
      type="button"
      onClick={() => loginWithRedirect({
        scope: "read:current_user",
        connection,
        redirectUri: ""
      })}>Authorize {connection}</button>
    </Button>
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (<Button>
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    </Button>
  );
};


const ProfileLoading = () => <div>Loading ...</div>

const ProfileDetails = () => {
  const {user, getAccessTokenSilently} = useAuth0();
  const [userMetadata, setUserMetadata] = useState({});

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        if (user !== undefined) {
          const accessToken = await getAccessTokenSilently({
            audience: `https://${auth0Config.domain}/api/v2/`,
            scope: "read:current_user",
          });
          const userDetailsByIdUrl = `https://${auth0Config.domain}/api/v2/users/${user.sub}`;
          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
    
          const metadataResponseJson = await metadataResponse.json();
          setUserMetadata(metadataResponseJson);
        }
      } catch (e) {
        console.log((e as Error).message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user, user?.sub]);

  return (user === undefined) ? (<span></span>) : (
    <div>
      <img src={user.picture} alt={user.name} className="rounded-full w-12" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <div className="bg-gray-800 text-white flex flex-col gap-4 p-4">

        <div className="w-1/2">
          <h3>User Data</h3>
          <pre className="break-all">{JSON.stringify(user, null, '\t')}</pre>
        </div>
        
        <div>
          <h3>User Metadata</h3>
            {userMetadata ? (
              <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
            ) : (
              "No user metadata defined"
            )}
        </div>
      </div>
    </div>
  )
  };
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return isLoading ? <ProfileLoading />
  : (user === undefined) ?
    <div>No user</div>
  : isAuthenticated ? 
    <ProfileDetails />
  : <div>Not authenticated.</div>
  
};


export function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="bg-yellow-200 p-8">
      <header className="">
        <h1 className="text-center">Neo4j Profile.. Reconcile!</h1>
      </header>
      <main>
        <ul className="divide-y divide-gray-200 w-1/2 mx-auto">
            <li  className="py-4 flex gap-4">
              <div className="mr-3 flex-grow">
                <p className="text-sm font-medium text-gray-900">Login...</p>
              </div>
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                  {isAuthenticated ?
                    <LogoutButton />
                    : <LoginButton />
                  }
              </span>
            </li>
            <li><LinkButton connection={"github"}/></li>
        </ul>
      <Profile />
      </main>
    </div>
  );
}

export default App;