import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  name: string;
  model: string;
  speed: number;
  colors: colors;
  options: string[];
  isEdit:boolean = false;
  isAdd:boolean = false;

  constructor() { }

  ngOnInit() {
    this.model = "Audi";
    this.name = "CLS"
    this.speed = 320;
    this.colors = {
      car: "black",
      salon: "white",
      wheels: "golden"
    }
    this.options = ["ABS", "AUTOPILOT", "AUTO PARKING"]
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }
  deleteOpt(option) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }
  ShowEdit(){
    this.isEdit = !this.isEdit;
  }
  ShowAdd(){
    this.isAdd = !this.isAdd;
  }


  CarSelect(carName) {
    if (carName == 'BMW') {
      this.model = "BMW";
      this.name = "M5"
      this.speed = 290;
      this.colors = {
        car: "red",
        salon: "white",
        wheels: "golden"
      };
      this.options = ["ABS", "AUTOPILOT", "AUTO PARKING"]
    }
    else if (carName == 'Audi') {
      this.model = "Audi";
      this.name = "CLS"
      this.speed = 320;
      this.colors = {
        car: "black",
        salon: "white",
        wheels: "golden"
      }
      this.options = ["ABS", "AUTOPILOT", "AUTO PARKING"]
    }
    else {
      this.model = "Merceders";
      this.name = "CLS"
      this.speed = 350;
      this.colors = {
        car: "silver",
        salon: "white",
        wheels: "white"
      }
      this.options = ["ABS", "AUTOPILOT", "AUTO PARKING", "FACE CONTROL"]
    }
  }
}


interface colors {
  salon: string,
  car: string,
  wheels: string
}
