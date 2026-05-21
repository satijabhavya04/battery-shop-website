const form = document.querySelector("#quote-form");
const note = document.querySelector("#enquiry-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "Customer").trim();
  const phone = String(data.get("phone") || "phone number not added").trim();
  const need = String(data.get("need") || "service").trim();
  const load = String(data.get("load") || "load details not added").trim();

  note.textContent = `Enquiry ready: ${name} needs ${need}. Phone: ${phone}. Load: ${load}.`;
});
