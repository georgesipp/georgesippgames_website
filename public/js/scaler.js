function scaleWidget() {
  const widget = document.querySelector('.steam-widget');
  const wrapper = widget.parentElement;
  const scale = Math.min(1, wrapper.offsetWidth / 700);
  widget.style.transform = `scale(${scale})`;
  widget.style.marginBottom = `${(widget.offsetHeight * scale) - widget.offsetHeight}px`;
}

window.addEventListener('resize', scaleWidget);
scaleWidget(); // run on load