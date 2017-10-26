import {Component} from "@angular/core";
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  articles: Article[];
  choice: number;

  constructor() {
    this.choice = 0;
    this.articles = [new Article('Angular 2', 'http://angular.io', 10),
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Angular Homepage', 'http://angular.io', 1),];
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  nextChoice(): boolean {
    this.choice += 1;
    return false;
  }
}
