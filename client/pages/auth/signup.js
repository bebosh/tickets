import { lorem } from 'faker/locale/zh_TW';
import { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault;
    console.log(' email ' + email + ' password ' + password);
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="from-group">
        <label htmlFor="">Email Address</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="from-control"
        />
      </div>
      <div className="from-group">
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="from-control"
        />
      </div>
      <button className="btn-primary">Sign up</button>
    </form>
  );
};
