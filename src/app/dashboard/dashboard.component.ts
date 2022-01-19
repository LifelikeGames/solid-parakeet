import { Component, OnInit } from '@angular/core';
import { SearchEngine} from "../search/searchEngine";
import { SearchService } from '../search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  engines: SearchEngine[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.getEngines();
  }

  getEngines(): void {
    this.engines = this.searchService.getEngines();
  }
}
