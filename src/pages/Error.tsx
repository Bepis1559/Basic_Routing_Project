import { ReactElement } from "react";
import { useRouteError } from "react-router-dom";
export function Error(): ReactElement {
  const error = useRouteError() as routeError;
  return (
    <main id="error-page">
      {import.meta.env.MODE == "production" ? (
        <h1>Something went wrong.</h1>
      ) : (
        <>
          <h1>This is the development error page</h1>
          <p>
            <i>{` ${error?.name ?? ""} \n ${error?.statusText ?? ""} \n  ${
              error?.message ?? ""
            } \n ${error?.stack ?? ""}`}</i>
          </p>
        </>
      )}
    </main>
  );
}
