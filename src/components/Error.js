import { useRouteError } from "react-router";

const Error = () => {
  const wuterror = useRouteError();
  console.log(wuterror);
  return (
    <div>
      <h1>LAude lagle</h1>
      <h3> Error page</h3>
      <h1>
      {wuterror.status}  {wuterror.statusText}

      </h1>
    </div>
  );
};
export default Error;
