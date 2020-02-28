import { useEffect, useContext, useCallback } from 'react';
import { AuthContext, updateStatus, updateError } from './AuthProvider'
import AuthManager from './AuthManager'

export default () => {
  const [{ authenticated }, dispatch] = useContext(AuthContext);
  const auth = AuthManager.getInstance()

  useEffect(() => {
          const init = async () => {
            const auth_ok = await auth.isAuthenticated();
            const user_info = await auth.getUser();
            dispatch(updateStatus({ authenticated: auth_ok, user: user_info }));
          };

    init();
  }, [authenticated]);

  const login = (redirectUrl) => auth.login(redirectUrl);

  const logout = (redirectUrl) => auth.logout(redirectUrl);

  const handleAuthentication = useCallback(
    () => auth.handleAuthentication()
      .then(() => dispatch(updateStatus({authenticated: true})))
      .catch((err) => dispatch(updateError(err))),
    []
  )

  const securedFetch = useCallback(
    async (url) => {
      const token = await auth.getAccessToken()

      if (!token) {
        return Promise.reject(new Error('Not authenticated'))
      }

      return fetch(
        url,
        { headers: { Authorization: `Bearer ${token}` } }
      )
    },
    []
  );

  return {
    authenticated,
    auth,
    login,
    logout,
    handleAuthentication,
    securedFetch,
  };
};
