import Letter from "../components/Letter";

function Letters() {
  return (
    <main className="zesto-page-shell">
      <section className="zesto-page-card">
        <span className="text-4xl" aria-hidden="true">💌</span>
        <p className="zesto-page-kicker">Letters</p>
        <h1>Write a little note.</h1>
        <p>Your letter is ready to send.</p>
      </section>

      <Letter defaultOpen hideTrigger />
    </main>
  );
}

export default Letters;
