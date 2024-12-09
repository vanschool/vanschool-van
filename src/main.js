
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".text-box", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".img-home", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".func", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".img-app", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".text-box-app", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".text-box-seguranca", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".img-seguranca", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});

