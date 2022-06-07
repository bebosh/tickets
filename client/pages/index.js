import buildClient from "../api/build-client";
import BaseLayout from "../components/BaseLayout";

const LandingPage = ({ currentUser }) => {

  return (
     <BaseLayout currentUser={ currentUser }>
      {currentUser ? (
        <h1>You are signed in</h1>
      ) : (
        <h1>You are not signed in</h1>
      )}
    </BaseLayout>
  )
};

 export const getServerSideProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return { props: { currentUser: data } };
   };

export default LandingPage;
