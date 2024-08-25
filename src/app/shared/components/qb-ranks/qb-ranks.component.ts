import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qb-ranks',
  standalone: true,
  imports: [],
  templateUrl: './qb-ranks.component.html',
  styleUrl: './qb-ranks.component.scss',
})
export class QbRanksComponent implements OnInit {
  qbRanks: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getQbData().subscribe((data) => {
      this.qbRanks = data;
    });
  }

  getQbData() {
    return this.http.get('assets/qb-ranks.json');
  }

  toggleStrikethrough(qb: any) {
    qb.isStrikethrough = !qb.isStrikethrough;
  }
}
