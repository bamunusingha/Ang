import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`adding -->>> title : ${title.value} and link : ${link.value}`);
    return;
  }
}