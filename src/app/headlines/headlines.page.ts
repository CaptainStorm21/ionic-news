import { Component, OnInit } from '@angular/core';
import { NewsService } from './../services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  news;
  categories = ['world', 'elections', 'tech', 'food', 'to-do'];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onGetCategoryData(category){
    console.log(category.toLowerCase());
    this.news = this.newsService.getData(`everything?q=${category.toLowerCase()}`);
  }
}
