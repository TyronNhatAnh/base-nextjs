import {renderHook} from "@testing-library/react";

import useDeviceDetect from "./useDeviceDetect";

let userAgentGetter: jest.SpyInstance<string, []>;
beforeAll(() => {
  userAgentGetter = jest.spyOn(window.navigator, "userAgent", "get");
});
afterAll(() => {
  userAgentGetter.mockRestore();
});

it("should return `false` on non-browser environment", () => {
  userAgentGetter.mockReturnValue("");
  const {result} = renderHook(() => useDeviceDetect());
  expect(result.current).toEqual({isMobile: false});
});

it("should return `false` on desktop browser", () => {
  userAgentGetter.mockReturnValue(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33",
  );
  const {result} = renderHook(() => useDeviceDetect());
  expect(result.current).toEqual({isMobile: false});
});

it("should return `true` on mobile browser", () => {
  userAgentGetter.mockReturnValue(
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
  );
  const {result} = renderHook(() => useDeviceDetect());
  expect(result.current).toEqual({isMobile: true});
});
