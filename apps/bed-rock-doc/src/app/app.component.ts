import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BedRockComponent } from '@kidwen/bed-rock';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, BedRockComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    // public title = 'bed-rock-doc';

    // public referenceDocs = [
    //     {
    //         title: 'Explore the Docs', link:
    //             'https://angular.dev'
    //     }, {
    //         title: 'Learn with Tutorials', link:
    //             'https://angular.dev/tutorials'
    //     }, {
    //         title: 'CLI Docs', link:
    //             'https://angular.dev/tools/cli'
    //     }, { title: 'Angular LanguageService', link: 'https://angular.dev/tools/language-service' },
    //     {
    //         title: 'Angular DevTools', link:
    //             'https://angular.dev/tools/devtools'
    //     },
    // ];

    public text = 'button';

    public onClick() {
        console.log('click');
    }
}
