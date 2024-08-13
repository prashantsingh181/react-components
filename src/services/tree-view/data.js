export const menus = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Profile",
    to: "/profile",
    children: [
      {
        id: 3,
        label: "Details",
        to: "details",
        children: [
          {
            id: 4,
            label: "Location",
            to: "location",
            children: [
              {
                id: 5,
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: "Settings",
    to: "/settings",
    children: [
      {
        id: 7,
        label: "Account",
        to: "account",
      },
      {
        id: 8,
        label: "Security",
        to: "security",
        children: [
          {
            id: 9,
            label: "Login",
            to: "login",
          },
          {
            id: 10,
            label: "Register",
            to: "register",
            children: [
              {
                id: 11,
                label: "New User",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
