import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  generateDifference() {
    return this._dataService.generateDifference();
  }

}
