import { animate, state, style, transition, trigger } from '@angular/animations';

const modalAnimationDuration = 300;

export const modalWindowAnimation = trigger('modalWindow', [
    state('in', style({transform: 'translateY(0)'})),
    transition(':enter', [
        style({transform: 'translateY(100vh)'}),
        animate(`${modalAnimationDuration}ms`, style({transform: 'translateY(0)'}))
    ])
]);

