import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wr-ranks',
  standalone: true,
  imports: [],
  templateUrl: './wr-ranks.component.html',
  styleUrl: './wr-ranks.component.scss',
})
export class WrRanksComponent implements OnInit {
  wrRanks: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWrData().subscribe((data) => {
      this.wrRanks = data;
    });
  }

  getWrData() {
    return this.http.get('assets/wr-ranks.json');
  }

  toggleStrikethrough(qb: any) {
    qb.isStrikethrough = !qb.isStrikethrough;
  }
}
