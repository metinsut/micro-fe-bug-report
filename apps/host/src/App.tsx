import React, { Suspense } from "react";

const RemoteHelloCard = React.lazy(() => import("remote/HelloCard"));
const SchedulerPanel = React.lazy(() => import("scheduler/SchedulePanel"));

export default function App() {
  return (
    <main className="page-shell">
      <section className="panel">
        <p className="eyebrow">Host application</p>
        <h1>Remote component loader</h1>
        <p className="copy">
          Asagidaki kart `apps/remote` tarafindan expose edilip runtime&apos;da
          yukleniyor. Ikinci kart ise `apps/scheduler` icinden geliyor.
        </p>
        <Suspense fallback={<p className="status">Remote component yukleniyor...</p>}>
          <div className="remote-grid">
            <RemoteHelloCard />
            <SchedulerPanel />
          </div>
        </Suspense>
      </section>
    </main>
  );
}
