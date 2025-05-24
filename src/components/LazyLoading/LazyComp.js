import React, { Suspense } from 'react'
// import HeavyComponent from './HeavyComponent'
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));


function LazyComp() {
  return (
    <div>
      <Suspense fallback={<p>Loading this heavy component....</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default LazyComp
