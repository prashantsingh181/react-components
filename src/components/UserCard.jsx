import { memo } from "react";
import { MdAlternateEmail, MdOutlinePhone } from "react-icons/md";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { format } from "date-fns";
import Badge from "./Badge";

function UserCard({ user }) {
  const badgeBackgroundColor = {
    male: "#01A6EA",
    female: "#FFB1CB",
  };
  const badgeText = {
    male: <IoMdMale size="1.5rem" />,
    female: <IoMdFemale size="1.5rem" />,
  };
  return (
    <div className="bg-primary-bg dark:bg-primary-dark-bg text-primary-text dark:text-primary-dark-text rounded p-4 shadow-md flex flex-col gap-4">
      <div className="relative flex justify-center">
        <div className="absolute top-3 right-3">
          <Badge
            badgeText={badgeText[user.gender]}
            backgroundColor={badgeBackgroundColor[user.gender]}
          />
        </div>
        <img
          src={user.image}
          alt={user.username}
          className="h-60 rounded aspect-square"
        />
      </div>
      <div className="p-2 flex flex-col gap-2 text-sm">
        <div className="font-bold text-base">
          <span>{user.firstName + " " + user.lastName}</span>
        </div>
        <div className="flex gap-2 items-center">
          <MdAlternateEmail className="1.2rem" />
          <span className="truncate" title={user.email}>
            {user.email}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlinePhone className="1.2rem" />
          <span>{user.phone}</span>
        </div>
        <div className="flex gap-2 items-center">
          <LiaBirthdayCakeSolid className="1.2rem" />
          <span>{format(user.birthDate, "do MMMM, yyyy")}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(UserCard);
