import HelloCard from "./components/HelloCard";

export default function App() {
  return (
    <main className="page-shell">
      <section className="panel">
        <p className="eyebrow">Remote application</p>
        <h1>HelloCard local preview</h1>
        <p className="copy">
          This app exposes a federated React component for the host.
        </p>
        <HelloCard />
      </section>
    </main>
  );
}
