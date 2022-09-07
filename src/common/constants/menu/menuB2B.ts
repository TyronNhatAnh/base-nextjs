import pathB2B from "../path/pathB2B";

const menuB2B = (type: string) => {
  const menus = [
    {
      path: pathB2B.HOME,
      label: "Home",
      key: "b2b_home",
      children: [],
      type: "public",
      // icon: faUsersRectangle
    },
    {
      path: pathB2B.PROFILE,
      label: "Profile",
      key: "b2b_profile",
      children: [],
      type: "public",
      // icon: faUsersRectangle
    },
  ];
  return menus.filter(menu => menu.type === type);
};

export default menuB2B;
