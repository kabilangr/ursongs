import { Component, OnInit } from '@angular/core';
import { SearchlistService } from '../../app/service/searchlist.service';
import { SearchList } from '../searchlist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public loading: boolean = false;
  public s = [];
  public result = [];
  public s1: SearchList[];
  constructor(public searchlist: SearchlistService) {}

  doSearch(search: string): void {
    this.loading = true;
    this.searchlist.search(search).subscribe((data) => {
      this.s = data;
      this.loading = false;
      console.log(this.s);
      this.result = Object.entries(this.s);
      this.s1 = this.result[2][1];
      console.log(this.result);
      console.log(this.s1);
    });
  }
  shrinker(str1): string {
    var str: string = '';
    var strab: string[];
    let scc: string = '';
    strab = str1.split(' ');
    scc = '';
    str = strab[0] + strab[1];
    var letters = /^[A-Za-z0-9]+$/;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i).match(letters)) {
        scc = scc + str.charAt(i);
      } else scc = scc + ' ';
    }

    return scc;
  }
  ngOnInit(): void {}
}
