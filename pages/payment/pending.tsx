import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Pending() {
  const router = useRouter();
  const return_url = router.query.return_url as string | undefined;

  useEffect(() => {
    if (return_url) {
      const timer = setTimeout(() => {
        window.location.href = return_url;
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [return_url]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1 style={{ color: "orange" }}>⏳ Payment Pending</h1>
      <p>You will be redirected shortly...</p>
      {return_url ? (
        <a href={return_url}>Click here if not redirected</a>
      ) : (
        <button
          onClick={() => (window.location.href = "/")}
          style={{ padding: "10px" }}
        >
          Click here if not redirected
        </button>
      )}
    </div>
  );
}
