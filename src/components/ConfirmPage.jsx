export default function ConfirmPage({ closePage }) {
  return (
    <div className="confirmPage">
      <button className="closeBtn" onClick={closePage}>
        +
      </button>
      <h1 className="confirm-text">We will reach out to you soon.</h1>
    </div>
  );
}
