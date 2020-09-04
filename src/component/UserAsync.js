import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const UserAsync = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (userData.loading) {
    return <div>LOADING</div>;
  }

  return (
    <div>
      <h2>USE DATA</h2>
      {userData &&
        userData.users &&
        userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );

  //   return userData.loading ? (
  //     <h2>loading</h2>
  //   ) : userData.error ? (
  //     <h2>{userData.error}</h2>
  //   ) : (
  //     <div>
  //       <h2>USE DATA</h2>
  //       {userData &&
  //         userData.users &&
  //         userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
  //     </div>
  //   );
};

export default UserAsync;
