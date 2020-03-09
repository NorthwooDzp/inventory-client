import { AfterViewInit, Directive, ElementRef, Inject } from '@angular/core';

@Directive({
    selector: '[appShowHidePassword]'
})
export class ShowHidePasswordDirective implements AfterViewInit {
    private passwordIsShown: boolean = false;

    constructor(private element: ElementRef) {
    }

    public ngAfterViewInit(): void {
        const element = this.element.nativeElement;
        const icon = element.querySelector('i[matsuffix]');
        const input = element.querySelector('input[matinput]');
        icon.addEventListener('click', () => {
            this.passwordIsShown = !this.passwordIsShown;
            if (this.passwordIsShown) {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
                input.setAttribute('type', 'text');
            } else {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
                input.setAttribute('type', 'password');
            }
        });

    }

}
