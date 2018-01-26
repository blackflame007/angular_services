import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number[] = [1,2,3];
  numbers2: number[] = [1,2,3];

  constructor() { }

  retrieveNumbers(): number[] {
    return this.numbers;
  }
  retrieveNumbers2(): number[] {
    return this.numbers2;
  }

  addNumber(num: number) {
    this.numbers.push(num);
  }
  addNumber2(num: number) {
    this.numbers2.push(num);
  }

  generateDifference(): number {
    let temp = 0;
    let temp2 = 0;
    for(let num of this.numbers){
      temp += num;
    }
    for(let num of this.numbers2){
      temp2 += num;
    }
    var difference = temp - temp2;
    
    return difference;
  }
}
