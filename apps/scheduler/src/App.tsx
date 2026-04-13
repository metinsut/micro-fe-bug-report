import SchedulePanel from "./components/SchedulePanel";

export default function App() {
  return (
    <main className="page-shell">
      <section className="panel">
        <p className="eyebrow">Scheduler remote</p>
        <h1>SchedulePanel local preview</h1>
        <p className="copy">
          Bu uygulama host icin ikinci bir federated bileşen expose eder.
        </p>
        <SchedulePanel />
      </section>
    </main>
  );
}
