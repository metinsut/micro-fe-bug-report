import React, { Suspense } from "react";

const RemoteHelloCard = React.lazy(() => import("remote/HelloCard"));

export default function App() {
  return (
    <main className="page-shell">
      <section className="panel">
        <p className="eyebrow">Host application</p>
        <h1>Remote component loader</h1>
        <p className="copy">
          Asagidaki kart `apps/remote` tarafindan expose edilip runtime&apos;da
          yukleniyor.
        </p>
        <Suspense fallback={<p className="status">Remote component yukleniyor...</p>}>
          <RemoteHelloCard />
        </Suspense>
      </section>
    </main>
  );
}
