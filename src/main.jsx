import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_7KTyWNbRx",
  client_id: "4s6grlp9bfvin6eob3kt41vo7r",
  redirect_uri: "http://localhost:5173",
  post_logout_redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "phone openid email",
};
// const cognitoAuthConfig = {
//   authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_7KTyWNbRx",
//   client_id: "4s6grlp9bfvin6eob3kt41vo7r",
//   redirect_uri: "https://localhost:5137",
//   response_type: "code",
//   scope: "phone openid email",
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

// wrap the application with AuthProvider
root.render(
  <>
  {/* <BrowserRouter> */}
    <AuthProvider {...cognitoAuthConfig}>
    <HashRouter basename="/">
    <AppProvider>
    <App />

    </AppProvider>

      </HashRouter>

    </AuthProvider>
    {/* </BrowserRouter> */}
  </>
);