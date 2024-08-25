import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rb-ranks',
  standalone: true,
  imports: [],
  templateUrl: './rb-ranks.component.html',
  styleUrl: './rb-ranks.component.scss',
})
export class RbRanksComponent implements OnInit {
  rbRanks: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRbData().subscribe((data) => {
      this.rbRanks = data;
      console.log(this.rbRanks);
    });
  }

  getRbData() {
    return this.http.get('assets/rb-ranks.json');
  }

  toggleStrikethrough(qb: any) {
    qb.isStrikethrough = !qb.isStrikethrough;
  }
}
