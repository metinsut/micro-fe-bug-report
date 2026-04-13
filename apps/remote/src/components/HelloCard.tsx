export default function HelloCard() {
  return (
    <article className="hello-card">
      <span className="hello-card__badge">remote/HelloCard</span>
      <h2>Merhaba module federation</h2>
      <p>
        Bu kart `apps/remote` icinden geliyor ve host uygulamasinda calisiyor.
      </p>
    </article>
  );
}
