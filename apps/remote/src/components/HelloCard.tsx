export default function HelloCard() {
  return (
    <article className="hello-card">
      <span className="hello-card__badge">remote/HelloCard</span>
      <h2>Hello module federation</h2>
      <p>
        This card comes from `apps/remote` and runs inside the host app.
      </p>
    </article>
  );
}
