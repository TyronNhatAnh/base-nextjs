import pathB2C from "../path/pathB2C";

const menuB2C = (type: string) => {
  const menus = [
    {
      path: pathB2C.HOME,
      label: "Home",
      key: "b2c_home",
      items: [],
      type: "public",
      // icon: faUsersRectangle
    },
    {
      path: pathB2C.PROFILE,
      label: "Profile",
      key: "b2c_profile",
      children: [],
      type: "public",
      // icon: faUsersRectangle
    },
    {
      path: pathB2C.PROFILE,
      label: "Menu 3- Submenu",
      key: "SubMenu",
      items: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
      type: "public",
    },
    {
      label: "Logout",
      key: "b2c_logout",
      items: [],
      type: "public",
      // icon: faUsersRectangle
    },
  ];
  return menus.filter(menu => menu.type === type);
};

export default menuB2C;
