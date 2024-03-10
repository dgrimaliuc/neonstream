export class Observer {
  constructor(findElement, onObserve) {
    this.findElement = findElement;
    this.onObserve = onObserve;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            await this.onObserve();
          }
        });
      },
      { threshold: 0.5 }
    );
  }

  observe() {
    const element = this.findElement();
    if (element) {
      this.observer.observe(element);
    }
  }

  disconnect() {
    this.observer.disconnect();
  }
}
