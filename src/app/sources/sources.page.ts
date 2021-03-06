import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {
  sources;
  fakeSources = new Array(20);
  term = '';
  constructor(private newsService: NewsService) { }

  ngOnInit() {
   // this.sources = this.newsService.getData('sources');
    this.newsService.getData('sources').subscribe(sources => {
      this.sources = sources['sources'];
    });
  }

}
