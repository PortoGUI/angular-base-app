import '../../../styles-utils/_variables.scss';

export class SnacksUtils {
  private static snackArea: HTMLElement = document.createElement('div');

  static success(text?: string): void {
    this.buildSnack(text, '#8BE836', 'fas fa-circle-check');
  }

  static info(text?: string): void {
    this.buildSnack(text, '#2121DB', 'fas fa-circle-info');
  }

  static warn(text?: string): void {
    this.buildSnack(text, '#FFC142', 'fas fa-circle-exclamation');
  }

  static error(text?: string): void {
    this.buildSnack(text, '#E83938', 'fas fa-circle-xmark');
  }

  private static buildSnack(text = '', color = '#686868', icon: string): void {
    if (!document.querySelectorAll('#snack-area').length) {
      this.snackArea.style.cssText = `position: absolute; top: 0; right: 0; max-width:300px;max-height: 100vh;z-index: 2147483647; overflow: hidden`;
      document.body.appendChild(this.snackArea);
    }
    const snack = document.createElement('div');
    snack.style.cssText = `display: flex;justify-content: between;align-items: center;background-color: #FFF;min-height: 60px;margin-top: 10px;
      margin-right: 10px;min-width: 200px;max-width: 287px;border-left: 3px solid ${color};border-top-left-radius: 2px;border-bottom-left-radius: 2px;
      box-shadow: 0 12px 18px 2px #2200330a, 0 6px 22px 4px #0730721f, 0 6px 10px -4px #0e0d1a1f;
    `;

    const iconElement = document.createElement('i');
    iconElement.className = icon;
    iconElement.style.cssText = `padding: 0 5px;font-size: 20px;color: ${color}`;

    const content = document.createElement('b');
    content.textContent = text;
    content.style.cssText = 'padding: 10px; white-space: pre;';

    snack.appendChild(iconElement);
    snack.appendChild(content);

    this.snackArea.style.display = 'block';
    this.snackArea.appendChild(snack);
    snack.style.transform = `translateX(${snack.offsetWidth + 13}px)`;
    setTimeout(() => this.animation(snack, true));

    let timeoutId = setTimeout(() => this.animation(snack, false), 3000);

    snack.addEventListener('mouseenter', () => clearTimeout(timeoutId));

    snack.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => this.animation(snack, false), 1000);
    });
  }

  private static animation(element: HTMLElement, showHide: boolean) {
    const width = element.offsetWidth;
    if (!showHide) {
      element.style.transition = 'transform 0.7s';
      element.addEventListener('transitionend', () => element.remove(), {once: true});
    } else {
      element.style.transition = 'transform 0.4s';
    }
    window.requestAnimationFrame(() => element.style.transform = showHide ? 'translateX(0px)' : `translateX(${width + 13}px)`);
  }

}
