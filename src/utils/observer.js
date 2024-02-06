export class Observer {
  constructor(findElement, onObserve, delay = 100) {
    this.findElement = findElement;
    this.onObserve = onObserve;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          this.disconnect();
          await this.onObserve();
        }
      });
    });
  }

  observe() {
    const element = this.findElement();
    if (element) {
      this.observer.observe(element);
    } else {
      console.error('Element not found', element);
    }
  }

  disconnect() {
    this.observer.disconnect();
  }
}
