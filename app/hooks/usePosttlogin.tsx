
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../Utilities/utils';
import cookie from 'cookiejs';

interface LoginData {
  username: string;
  password: string;
}

const useLogin = (initialLoginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState({token: ''});

    const handleLogin = async () => {
      const response = await loginUser(initialLoginData.username, initialLoginData.password);
      if (response.token) {
        cookie.set('loginToken',response.token)
        router.replace('/homePage');
      } else {
        router.push('/homePage');
      }
    
    setUser(response);
  };

  return { user, handleLogin };
};

export default useLogin;
