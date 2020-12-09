import { HelloComponent } from './hello/hello.component';
import { ChildComponent } from './child/child.component';
import { User } from './user';
import { FormArray, FormBuilder } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: 'Rebel'
  @Input() nameValue: String; 
  @Input() mobile: String;
  public result: any;
  counter: number;
  public phone: any;
  say: any;
  userProfileForm = this.fb.group({
    mobiles: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb:FormBuilder){}

  number: Array<any>;
  ngOnInit(): void {
    this.say = ChildComponent;
  }

  onSubmit() {
    this.counter = 0;
    this.phone=this.mobiles.controls
    for (let mob of this.mobiles.controls) {
      console.log("mobile"+ (this.counter+1) +" :: " + this.userProfileForm.get(['mobiles', this.counter]).value)
      this.counter = this.counter + 1;
    }
    //console.log("mobile 1 is :"+this.userProfileForm.get(['mobiles','0']).value)
  }
  
  sayChild() {
    this.say = ChildComponent;
  }
  
  sayHello() {
    this.say =HelloComponent;
  }
  
  searchIndex(num2: any ) {
    if (num2 % 2 == 1) {
      console.log(2 + 4 * (Math.floor(parseInt(num2) / 2) + 1) * Math.floor(parseInt(num2) / 2))
      this.result = 2 + 4 * (Math.floor(parseInt(num2) / 2) + 1) * Math.floor(parseInt(num2) / 2);
    }
    else {
      console.log(4 * (parseInt(num2) / 2) ** 2 - 1)
      this.result = 4 * (parseInt(num2) / 2) ** 2 - 1
    }

  }

  get mobiles() {
    return this.userProfileForm.get('mobiles') as FormArray; 
  }

  addNewMobile()
  {
    this.mobiles.push(this.fb.control(''));
  }
  
}
