import { Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

const withSuspense = (Component) => {
  return (
    <Suspense fallback={<Preloader />}>
      <Component />
    </Suspense>
  );
};

export default withSuspense;
