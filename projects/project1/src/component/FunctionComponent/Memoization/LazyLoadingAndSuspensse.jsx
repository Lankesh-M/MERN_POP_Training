import { Suspense, lazy } from "react";
const LazyComp = lazy(()=>import ("../signup.jsx"));
const LazyLoadingAndSuspense = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading.... It may take few seconds</h1>}>
        <h1>This is Lazy Component.</h1>
        <LazyComp />
      </Suspense>
    </div>
  );
};
export default LazyLoadingAndSuspense;