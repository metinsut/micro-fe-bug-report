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
          The first card is exposed by `apps/remote` and loaded at runtime.
          The second card comes from `apps/scheduler`.
        </p>
        <Suspense fallback={<p className="status">Loading remote components...</p>}>
          <div className="remote-grid">
            <RemoteHelloCard />
            <SchedulerPanel />
          </div>
        </Suspense>
      </section>
    </main>
  );
}
