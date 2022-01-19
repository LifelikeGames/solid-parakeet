import { Injectable } from '@angular/core';
import {SearchEngine} from "./search/searchEngine";
import {ENGINES} from "./search/mock-engines";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  getEngines(): SearchEngine[]{
    this.messageService.add('Search service: fetched services');
    return ENGINES;
  }

  constructor(private messageService: MessageService) { }

  getEngine(id: number): Observable<SearchEngine>{
    const engine = ENGINES.find(e => e.id === id)!;
    this.messageService.add(`SearchService: fetched engine id=${id}`);
    return of(engine);
  }
}
