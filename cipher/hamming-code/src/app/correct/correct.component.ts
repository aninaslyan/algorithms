import { Component, OnInit } from '@angular/core';
import {HammingService} from "../hamming.service";

@Component({
  selector: 'app-correct',
  templateUrl: './correct.component.html',
  styleUrls: ['./correct.component.css']
})
export class CorrectComponent implements OnInit {
   correctedValue: string;

  constructor(private hammingService: HammingService) { }

  ngOnInit() {
  }

  onCorrectClick(input) {
     this.correctedValue = this.hammingService.correct(input.value);
  }
}
