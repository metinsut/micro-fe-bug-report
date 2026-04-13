import SchedulePanel from "./components/SchedulePanel";

export default function App() {
  return (
    <main className="page-shell">
      <section className="panel">
        <p className="eyebrow">Scheduler remote</p>
        <h1>SchedulePanel local preview</h1>
        <p className="copy">
          This app exposes a second federated component for the host.
        </p>
        <SchedulePanel />
      </section>
    </main>
  );
}
