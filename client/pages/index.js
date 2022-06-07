import buildClient from "../api/build-client";
import BaseLayout from "../components/BaseLayout";

const LandingPage = (getServerSideProps) => {
const user = getServerSideProps.data.currentUser;
  return (
     <BaseLayout currentUser={user}>
      {user ? (
        <h1>You are signed in</h1>
      ) : (
        <h1>You are not signed in</h1>
      )}
    </BaseLayout>
  )
};

 export const getServerSideProps = async (context) => {
    const {data} = await buildClient(context).get('/api/users/currentuser');
    console.log(data.currentUser);
    return {props:{data}};
   };

export default LandingPage;
