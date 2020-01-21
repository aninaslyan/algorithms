import { Component, OnInit } from '@angular/core';
import { HammingService } from "../hamming.service";

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent implements OnInit {
   encodedValue: string;

   constructor(private hammingService: HammingService) {
   }

   ngOnInit() {
   }

   onEncodeClick(input) {
      this.encodedValue = this.hammingService.encode(input.value);
   }
}
