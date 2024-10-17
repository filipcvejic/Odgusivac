export default function gtag_report_conversion(url: string) {
  const callback = function () {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-16742086901/SnZwCN_7pN4ZEPXxn68-",
    event_callback: callback,
  });
  return false;
}
