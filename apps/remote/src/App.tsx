import HelloCard from "./components/HelloCard";

export default function App() {
  return (
    <main className="page-shell">
      <section className="panel">
        <p className="eyebrow">Remote application</p>
        <h1>HelloCard local preview</h1>
        <p className="copy">
          Bu uygulama host tarafına federated bir React component expose eder.
        </p>
        <HelloCard />
      </section>
    </main>
  );
}
