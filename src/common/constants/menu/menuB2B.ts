import pathB2B from "../path/pathB2B";

const menuB2B = (type: string) => {
  const menus = {
    public: [
      {
        path: pathB2B.ENTERPRISE,
        label: "Enterprise",
        key: "b2c_enterprice",
        children: [],
        type: "public",
      },
      {
        path: pathB2B.SERVICE,
        label: "Service",
        key: "b2c_profile",
        children: [],
        type: "public",
      },
      {
        path: pathB2B.DRIVER,
        label: "Service",
        key: "b2c_profile",
        children: [],
        type: "public",
      },
    ],
    protected: [
      {
        path: pathB2B.PROFILE,
        label: "Profile",
        key: "b2c_profile",
        children: [],
      },
      {
        path: pathB2B.PRICING,
        label: "Pricing Guild",
        key: "b2c_setting",
        children: [],
        type: "public",
      },
      {
        path: pathB2B.SETTING,
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
        path: pathB2B.FAQ,
        label: "FAQ",
        key: "b2c_faq",
        children: [],
      },
    ],
  };
  return menus[type];
};

export default menuB2B;
