import debounce from "./debounce.js";
import Slide from "./slide.js";

debounce();
const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
slide.changeSlide(5);
