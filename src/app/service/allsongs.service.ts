import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchList } from '../../app/searchlist';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AllsongsService {
  private searchWord: string = '';
  private key: string = '';
  private url: string = '';
  private limit: number = 0;
  public result: SearchList[];
  search(f: string, g: number): Observable<SearchList[]> {
    this.searchWord = f;
    this.limit = g;
    this.key = '859371O6UtK1J968UeQIFOAJGkgKoGEAvGEcyqRTX0GY9ioes34EbHTK';
    this.url =
      'https://api.happi.dev/v1/music?q=' +
      this.searchWord +
      '&limit=' +
      this.limit +
      '&apikey=' +
      this.key +
      '&type=';
    return this.http.get<SearchList[]>(this.url);
  }

  constructor(private http: HttpClient) {}
}
