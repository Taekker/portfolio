import "./style.css";

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".staggeranimation", () => {
  animate(
    ".staggeranimation li",
    { opacity: [0, 1] },
    {
      delay: stagger(0.6, { start: 0.6 }),
    }
  );
});

const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);

scroll(animate(".progress-bar", { scaleX: [0, 1] }));

inView(".slidein", ({ target }) => {
  animate(
    target.querySelectorAll("img"),
    { x: [-2000, 0] },
    { duration: 1.2, delay: stagger(0, { start: 0.15 }) }
  );
});

inView(".slidein", ({ target }) => {
  animate(
    target.querySelectorAll("p"),
    { x: [2000, 0] },
    { duration: 1.8, delay: stagger(0, { start: 0.8 }) }
  );
});
