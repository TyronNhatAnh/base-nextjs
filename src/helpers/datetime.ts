import moment from "moment";

export const formatTime = (time: string, format = "HH:mm") => {
  if (!time || !time.length) {
    return "";
  }
  const now = moment().format("YYYY-MM-DD");

  return moment(`${now}T${time}`).format(format);
};

export const checkGreaterTime = (endTime: string, startTime: string) => {
  if (!startTime || !endTime) {
    return false;
  }
  const now = moment().format("YYYY-MM-DD");

  const startTimeMoment = moment(`${now}T${startTime}`);
  const endTimeMoment = moment(`${now}T${endTime}`);

  return endTimeMoment.isAfter(startTimeMoment);
};

export const formatDate = (date: string, format = "DD/MM/YYYY") => {
  if (!date || !date.length) {
    return "";
  }
  return moment(`${date}`).format(format);
};

export const makeArrayTimeDropDown = () => {
  const arr = [];
  for (let i = 7; i < 19; i++) {
    let type = "AM";
    let div = 0;
    if (i >= 12) {
      type = "PM";
      div = 12;
    }
    let h: any = i - div || 12;

    h = h < 10 ? `0${h}` : h;

    const hv = i < 10 ? `0${i}` : i;

    const hs = [
      {
        value: `${hv}:00:00`,
        label: `${h}:00 ${type}`,
      },
      {
        value: `${hv}:30:00`,
        label: `${h}:30 ${type}`,
      },
    ];

    if (i === 18) {
      hs.splice(1, 1);
    }

    arr.push(...hs);
  }

  return arr;
};
