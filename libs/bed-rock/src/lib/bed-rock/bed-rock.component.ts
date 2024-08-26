/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-bed-rock',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './bed-rock.component.html',
    styleUrl: './bed-rock.component.scss',
})
export class BedRockComponent {
    @Input()
    public text = '';

    @Output()
    public onClick = new EventEmitter<void>();
}
