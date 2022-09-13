import pathB2C from "../path/pathB2C";

const menuB2C = (type: "public" | "protected") => {
  const menus = {
    public: [
      {
        path: pathB2C.HOME,
        label: "Home",
        key: "b2c_home",
        children: [],
        type: "public",
      },
      {
        path: pathB2C.PROFILE,
        label: "Profile",
        key: "b2c_profile",
        children: [],
        type: "public",
      },
      {
        path: pathB2C.PROFILE,
        label: "Menu 3- Submenu",
        key: "SubMenu",
        children: [
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
        label: "Menu 4",
        key: "b2c_menu4",
        children: [],
        type: "public",
      },
    ],
    protected: [
      {
        path: pathB2C.PROFILE,
        label: "Profile",
        key: "b2c_profile",
        children: [],
      },
      {
        path: pathB2C.PRICING,
        label: "Pricing Guild",
        key: "b2c_setting",
        children: [],
        type: "public",
      },
      {
        path: pathB2C.SETTING,
        label: "Settings",
        key: "setting",
        children: [
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
        path: pathB2C.FAQ,
        label: "FAQ",
        key: "b2c_faq",
        children: [],
      },
    ],
  };
  return menus[type];
};

export default menuB2C;
