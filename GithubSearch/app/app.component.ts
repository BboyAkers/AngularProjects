import { Component } from '@angular/core';
import { GithubService} from './services/github.service';
@Component({
  selector: 'my-app',
  template: `<profile></profile>`,
  providers: [GithubService]
})
export class AppComponent  { name = 'Angular'; }
