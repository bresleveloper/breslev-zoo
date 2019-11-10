import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';

@Component({
  selector: 'app-birds-panel',
  templateUrl: './birds-panel.component.html',
  styleUrls: ['./birds-panel.component.css']
})
export class BirdsPanelComponent implements OnInit {

  constructor(public birdsSvc:BirdsService) { }

  ngOnInit() {
  }

}
