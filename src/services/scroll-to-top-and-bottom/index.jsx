import { useRef } from "react";
import useFetch from "../useFetch";
import ProgressLoader from "../../components/progressLoader/ProgressLoader";
import UserCard from "../../components/UserCard";
import useElementScroll from "./useElementScroll";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const ScrollToTopAndBottom = () => {
  const scrollRef = useRef();
  const { data, errorMessage, loading } = useFetch(
    "https://dummyjson.com/users"
  );

  const {
    scroll,
    scrollableHeight,
    clientHeight,
    scrollToTop,
    scrollToBottom,
  } = useElementScroll("main", loading);

  const scrollDegree = Math.round(
    (scroll.scrollY / (scrollableHeight - clientHeight)) * 360
  );

  if (errorMessage) {
    return <h3>{errorMessage}</h3>;
  }
  if (loading) {
    return <ProgressLoader />;
  }
  return (
    <div ref={scrollRef} className="relative container mx-auto p-2 md:p-4">
      <h1 className="text-xl font-bold text-theme-color text-center p-4">
        Users
      </h1>
      {scroll.scrollY < scrollableHeight - clientHeight - 500 && (
        <button
          className="z-10 fixed top-20 right-6 rounded-full text-white p-0.5"
          style={{
            background: `conic-gradient(#73e3b7 ${scrollDegree}deg , #1e90ff ${scrollDegree}deg)`,
          }}
          onClick={scrollToBottom}
        >
          <div className="bg-theme-color rounded-full p-3">
            <FaArrowDown />
          </div>
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.users &&
          data.users.length &&
          data.users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
      {scroll.scrollY > 500 && (
        <button
          className="z-10 fixed bottom-4 right-6 rounded-full text-white p-0.5"
          style={{
            background: `conic-gradient(#73e3b7 ${scrollDegree}deg , #1e90ff ${scrollDegree}deg)`,
          }}
          onClick={scrollToTop}
        >
          <div className="bg-theme-color rounded-full p-3">
            <FaArrowUp />
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopAndBottom;
