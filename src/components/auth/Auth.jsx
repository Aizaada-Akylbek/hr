import { useAuth } from "react-oidc-context";

function Auth() {
  const auth = useAuth();

//   const signOutRedirect = () => {
//     const clientId = "3v6l891om7vk4kntrqtaai2mmv";
//     const logoutUri = "http://localhost:5173";
//     const cognitoDomain = "https://us-east-2kgzurgo5b.auth.us-east-2.amazoncognito.com";
//     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
//   };
const signOutRedirect = () => {
    const clientId = "4s6grlp9bfvin6eob3kt41vo7r";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain = "https://us-east-27ktywnbrx.auth.us-east-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    console.log(auth.user?.profile?.sub)
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  

  return (
    // <div>
    //   <button onClick={() => auth.signinRedirect()}>Sign in</button>
    //   {/* <button onClick={() => signOutRedirect()}>Sign out</button> */}
    //   {/* <App2/> */}
    //   <Layout/>
    // </div>
      <div >
        <div className="background-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
    
        <div className="content">
          <div className="auth-box">
            {auth.isAuthenticated ? (
              <>
                <h2>Welcome</h2>
                <p>{auth.user?.profile.email}</p>
                <button onClick={() => auth.removeUser()}>Sign out</button>
              </>
            ) : (
              <>
                <h2>Sign in- Welcome to my Project</h2>
                <p>Access your account securely</p>
                <button onClick={() => auth.signinRedirect()}>Enter to the system</button>
                <button onClick={() => signOutRedirect()}> Sign out</button>
                {/* <button onClick={() => auth.removeUser()}>Sign out</button> */}

              </>
            )}
          </div>
        </div>
      </div>
    
    
  );
}

export default Auth;
