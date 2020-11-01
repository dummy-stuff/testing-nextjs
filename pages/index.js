// import { signIn, signOut, useSession } from "next-auth/client";

import { Fragment, useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <Fragment>
      <h1>Hi from Nextjs</h1>
      <div>
        {data && (
          <Fragment>
            <h3>{data.title}</h3>
            <p>{data.details}</p>
          </Fragment>
        )}
        {!data.title && <p>Loading...</p>}
      </div>
    </Fragment>
  );

  // const [session, loading] = useSession();

  // return (
  //   <>
  //     {!session && (
  //       <>
  //         Not signed in <br />
  //         <button onClick={signIn}>Sign in</button>
  //       </>
  //     )}
  //     {session && (
  //       <>
  //         Signed in as {session.user.email} <br />
  //         <button onClick={signOut}>Sign out</button>
  //       </>
  //     )}
  //   </>
  // );
}
