const menuBtn = document.querySelector(".menu");
const navList = document.querySelector(".nav__list");

menuBtn.addEventListener("click", () => {
  console.log("click");
  navList.classList.toggle("active");
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const name = form.elements.name.value;
  const phone = form.elements.phone.value;
  const message = form.elements.message.value;
  const messageMail = `
Name: ${name}
Phone: ${phone}
Message: ${message}
`;

  const TOKEN = "6045967520:AAFJih1Uc1K0SN9dIFQRWaw-SRYYfjBiZ5Y";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const ID = "869645829";

  axios
    .post(URI_API, {
      chat_id: ID,
      parse_mode: "html",
      text: messageMail,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
    window.location.reload()
});
