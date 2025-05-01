import { useAuth } from "react-oidc-context";
import Welcome from "../../pages/Welcome";
import { useEffect, useState } from "react";
import axios from "axios";

function Auth() {
  const [user, setUser]=useState(null)
  const auth = useAuth();

//   const signOutRedirect = () => {
//     const clientId = "3v6l891om7vk4kntrqtaai2mmv";
//     const logoutUri = "http://localhost:5173";
//     const cognitoDomain = "https://us-east-2kgzurgo5b.auth.us-east-2.amazoncognito.com";
//     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
//   };
//https://m9zk8cje95.execute-api.us-east-2.amazonaws.com/prod/user?sub=a1fbc500-2011-703a-096c-ce7d1c393803
const signOutRedirect = () => {
    const clientId = "4s6grlp9bfvin6eob3kt41vo7r";
    const logoutUri = "http://localhost:5173/";
    const cognitoDomain = "https://us-east-27ktywnbrx.auth.us-east-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  // if (auth.isAuthenticated) {
  //   console.log(auth.user?.profile?.sub)
  //   return (
      // <div>
      //   <pre> Hello: {auth.user?.profile.email} </pre>
      //   <pre> ID Token: {auth.user?.id_token} </pre>
      //   <pre> Access Token: {auth.user?.access_token} </pre>
      //   <pre> Refresh Token: {auth.user?.refresh_token} </pre>

      //   <button onClick={() => auth.removeUser()}>Sign out</button>
      // </div>
  //     <>
  //     <button onClick={()=>signOutRedirect()}>Sign out</button>
  //     <h1>Hello: {auth.user?.profile.given_name}</h1>
  //           <Welcome/>

  //     </>
  //   );
  // }

  console.log(auth.user?.profile.email);
  console.log(auth.user?.profile.sub, 'sub');
  
  // const getUser=async()=>{
  //   const {data}=await axios.get(`https://m9zk8cje95.execute-api.us-east-2.amazonaws.com/prod/user?sub=${auth.user.profile.sub}`)
  //   console.log(data);
  //   setUser(data)
    
  // }
  // useEffect(() => {
  //   if (auth.isAuthenticated && auth.user) {
  //     getUser()
  //   }
  // }, [auth.isAuthenticated, auth.user]);
  


  return (
    // <div>
    //   <button onClick={() => auth.signinRedirect()}>Sign in</button>
    //   {/* <button onClick={() => signOutRedirect()}>Sign out</button> */}
    //   {/* <App2/> */}
    //   <Layout/>
    // </div>
      <div>
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
                {/* <p>{user?.given_name}</p> */}
                <button 
                onClick={()=>auth.signoutRedirect()}>Sign out</button>
                <Welcome getUser={auth.user?.profile?.sub}/>
              </>
            ) : (
              <>
                <h2>Sign in- Welcome to my Project</h2>
                <p>Access your account securely</p>
                <button onClick={() => auth.signinRedirect()}>Enter to the system</button>
                {/* <button onClick={() => signOutRedirect()}> Sign out</button> */}
                {/* <button onClick={() => auth.removeUser()}>Sign out</button> */}
                {/* <button 
                onClick={()=>auth.signoutRedirect()}>Sign out</button> */}

              </>
            )}
          </div>
        </div>
      </div>
    
    
  );
}

export default Auth;
