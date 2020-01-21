import { Component, OnInit } from '@angular/core';
import {HammingService} from "../hamming.service";

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css']
})
export class DecodeComponent implements OnInit {
   decodedValue: string | void;

   constructor(private hammingService: HammingService) {
   }

   ngOnInit() {
   }

   onDecodeClick(input) {
      this.decodedValue = this.hammingService.decode(input.value);
   }
}
