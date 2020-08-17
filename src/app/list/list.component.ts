import { Component, OnInit } from '@angular/core';
import { AllsongsService } from '../../app/service/allsongs.service';
import { SearchList } from '../searchlist';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public searchlist: AllsongsService) {}
  public loading: boolean = false;
  public s = [];
  public result = [];
  public s1: SearchList[];
  public search: string = '';

  ngOnInit(): void {
    this.search = String.fromCharCode(97 + Math.random() * 26);
    this.loading = true;
    this.searchlist.search(this.search, 30).subscribe((data) => {
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
}
