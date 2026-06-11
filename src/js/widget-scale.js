function scaleWidget() {
  const widget = document.querySelector('.steam-widget');
  if (!widget) return;

  const wrapper = widget.parentElement;
  const scale = Math.min(1, wrapper.offsetWidth / 700);

  widget.style.transform = `scale(${scale})`;

  // Compensate for the layout gap left by the scaled-down element
  const originalHeight = widget.offsetHeight;
  widget.style.marginBottom = `${(originalHeight * scale) - originalHeight}px`;
}

window.addEventListener('resize', scaleWidget);
document.addEventListener('DOMContentLoaded', scaleWidget);