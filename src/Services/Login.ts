import Api from "Services/Api";

const LoginService = {
   
  login: async (params : any) => {
    const response = await Api.post('/logins/entrar', params);
    localStorage.setItem('user', JSON.stringify(response.data.email));
    localStorage.setItem('token', response.data.token);
  },

  logout : () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}

export default LoginService