const Auth = {
    getAccessToken: () => localStorage.getItem("accessToken"),
    setAccessToken: (accessToken) =>
      localStorage.setItem("accessToken", accessToken),
  
    login: (accessToken, refreshToken) => {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("isLogin", true);
    },
    getRefreshToken: () => localStorage.getItem("refreshToken"),
    logout: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("isLogin");
    },
   checklogin: () => JSON.parse(localStorage.getItem("isLogin")),
  
  };
  
  export default Auth;