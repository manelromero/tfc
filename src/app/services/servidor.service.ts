import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Servidor {

  constructor(private http: Http) {}

  login(url: string, param: string, payload = '') {
    return this.http.post(url + param, payload)
      .map((res: Response) => JSON.parse(res.json()));
  }

}
