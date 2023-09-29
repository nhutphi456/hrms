import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appTestpassword]',
})
export class TestpasswordDirective implements OnChanges {
  @Input() userPassword!: any;


  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges(): void {
    this.clearMessages();
    const passwordStrength = this.calculatePasswordStrength(this.userPassword);
    this.updatePasswordStrengthUI(passwordStrength);
  }

  calculatePasswordStrength(password: string): number {
    let strength = 0;
    const passwordLength = password.length;
    if (passwordLength >= 8) {
      strength += 25;
    }
    if (/[a-z]/.test(password)) {
      strength += 25;
    }
    if (/[A-Z]/.test(password)) {
      strength += 25;
    }
    if (/\d/.test(password)) {
      strength += 25;
    }
    return strength;
  }

  updatePasswordStrengthUI(strength: number): void {
    const progressBar = this.el.nativeElement;
    const color = this.getColorForStrength(strength);

    this.renderer.setStyle(progressBar, 'width', `${strength}%`);
    this.renderer.setStyle(progressBar, 'border-radius', '15px');

    this.renderer.setStyle(progressBar, 'background-color', color);

    // Tạo phần tử HTML chứa thông báo

    const messageElement = this.renderer.createElement('div');
    this.renderer.addClass(messageElement, 'password-message');

    if (strength > 40) {
      this.renderer.setAttribute(messageElement, 'style', 'color: green');
      this.renderer.setStyle(messageElement, 'font-weight', 'bold');
      this.renderer.setProperty(messageElement, 'innerText', 'Great job! Your password is strong.');
    } else if (strength <= 40 && strength >= 1) {
      this.renderer.setAttribute(messageElement, 'style', 'color: red');
      this.renderer.setStyle(messageElement, 'font-weight','bold');
      this.renderer.setProperty(messageElement, 'innerText', 'Your password is weak');
    }

    // Gắn thông báo vào DOM
    this.renderer.appendChild(
      this.el.nativeElement.parentElement,
      messageElement,
    );
  }


  getColorForStrength(strength: number): string {
    if (strength >= 100) {
      return 'green';
    } else if (strength >= 40) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  clearMessages(): void {
    // Xóa các thông báo cũ
    const parentElement = this.el.nativeElement.parentElement;
    const oldMessages = parentElement.querySelectorAll('.password-message');

    oldMessages.forEach((message:HTMLElement) => {
      this.renderer.removeChild(parentElement, message);
    });
  }
}
