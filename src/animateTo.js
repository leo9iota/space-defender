// gsap.to() function implemented from scratch
function animateTo(target, duration, properties) {
  const startTime = performance.now();
  const initialValues = {};

  // Store the initial values of the properties
  for (const prop in properties) {
    initialValues[prop] = target[prop];
  }

  function animate(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    // Update the properties of the target object
    for (const prop in properties) {
      const initialValue = initialValues[prop];
      const finalValue = properties[prop];
      target[prop] = initialValue + (finalValue - initialValue) * progress;
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

export { animateTo };
