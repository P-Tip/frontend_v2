import { useEffect } from "react";
import ReactGA from "react-ga4";

const useAnalytics = (location: any) => {
  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send("pageview");
    /*ReactGA.send({ hitType: 'pageview', page: location.pathname });
    이것도 위(set+send)대신 가능*/
    return;
  }, [location]);
};

export default useAnalytics;
