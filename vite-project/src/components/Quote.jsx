import { useEffect, useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://api.quotable.io/random");

        if (!res.ok) {
          throw new Error("Error fetching quote");
        }
        const data = await res.json();
        setQuote(data.content);
      } catch (err) {
        setError("Quote unavailable");
      }
    }
    fetchQuote();
  }, []);

  if (error) return <p className="quote-error">{error}</p>;

  return <p className="footer-quote"> "{quote}"</p>;
}
