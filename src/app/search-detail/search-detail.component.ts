import { Component, OnInit, Input } from '@angular/core';
import { SearchEngine} from "../search/searchEngine";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {SearchService} from "../search.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  @Input() engine?: SearchEngine;
  public searchTerm = "";

  constructor(private route: ActivatedRoute, private searchService: SearchService, private location: Location) { }

  ngOnInit(): void {
    this.getEngine();
  }

  getEngine(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.searchService.getEngine(id).subscribe(engine => this.engine = engine);
  }

  goBack(): void {
    this.location.back();
  }

  onSearch(): void{
    if(this.searchTerm === "") return;
    window.location.href = this.engine!.url+this.searchTerm.replace(" ", "+");
  }


}
