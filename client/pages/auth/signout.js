import { useEffect } from "react";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

import useRequest from '../../hooks/useRequest';

export default () => {
  const { doRequest, errors } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body:{},
    onSuccess: () => Router.push('/')
  });
  
  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing out...</div>
}


