import { Component, OnInit } from '@angular/core';
import {SearchEngine, Search} from "./searchEngine";
import {ENGINES} from "./mock-engines";
import {SearchService} from "../search.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchEngine: SearchEngine = {
    id: 1,
    name: "Google",
    url: "https://www.google.com"
  };

  search: Search = {
    searchTerm: ""
  };

  engines: SearchEngine[] = [];

  getEngines(): void {
    this.engines = this.searchService.getEngines();
  }

  constructor(private searchService: SearchService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEngines()
  }

}
