const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
}, 250);

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
}, 10000);

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

//useful for text
function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

//useful for mouse events
function throttle(cb, delay = 1000) {
  let shouldwait = false;
  let waitingargs;
  return (...args) => {
    if (shouldwait) {
      waitingargs = args;
      return;
    }
    cb(...args);
    shouldwait = true;
    setTimeout(() => {
      if (waitingargs == null) {
        shouldwait = false;
      } else {
        cb(...waitingargs);
        waitingargs = null;
      }
    }, delay);
  };
}
