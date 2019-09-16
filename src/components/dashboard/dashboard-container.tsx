import * as React from "react";
import ErrorPage from "../error-page/whoops-no-data";
import Dashboard from "./dashboard";
import LoadingSpinner from "../../utils/loading-spinner";

interface MixData {
  from: string;
  generationmix: Array<{ fuel: string; perc: number }>;
  to: string;
}

interface ErrorMessage {
  message: string;
}

interface Response {
  data: {
    from: string;
    generationmix: Array<{ fuel: string; perc: number }>;
    to: string;
  };
}

export default function DashboardContainer() {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [mixData, setMixData] = React.useState<MixData | undefined>();
  const [error, setError] = React.useState<string | undefined>();

  function fetchData() {
    fetch("https://api.carbonintensity.org.uk/generation")
      .then(res => res.json())
      .then(
        (res: Response) => {
          const { from, generationmix, to } = res.data;
          from && generationmix && to
            ? setMixData(res.data)
            : setError("Incomplete dataset");
          setLoaded(true);
        },
        (error: ErrorMessage) => {
          setError(error.message);
          setLoaded(true);
        }
      );
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  if (mixData) {
    return <Dashboard mixData={mixData} />;
  }

  return <LoadingSpinner loading={!loaded} />;
}
