import errorImage from "../assets/error.png";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = error.status
    ? `${error.status} : ${error.statusText}`
    : error.message;
  return (
    <div className="p-8 text-primary-text dark:text-primary-dark-text bg-primary-bg dark:bg-primary-dark-bg h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-bold">{errorMessage}</h1>
      <img src={errorImage} alt="404 error" />
      <Link to="/" className="primary-button">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
