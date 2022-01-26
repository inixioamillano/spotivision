import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  @Input()
  contestants: any[];

  @Input()
  contest: any;

  @Input()
  users: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.contestants)
  }

}
