import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Submit2, IsFocusedLname2, IsTouchedLname2, IsFocusedFname2, IsTouchedFname2 } from '../actions/counter.actions';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  title = 'ReduxSample';
  @select('counter') public counter$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit(){
    this.fname="",
    this.lname=""
  }
  fname:string;
  lname:string;
  submit(){
    
    this.ngRedux.dispatch({ type: Submit2,payload:{ fname:this.fname,lname:this.lname}});
  }
  
  fnamefocused(){
    this.ngRedux.dispatch({ type: IsFocusedFname2,payload:true });
    this.ngRedux.dispatch({ type: IsTouchedFname2,payload:true });
    
  }
  fnamefocusedout(){
    
    this.ngRedux.dispatch({ type: IsFocusedFname2,payload:false });
  }
  lnamefocused(){
    this.ngRedux.dispatch({ type: IsTouchedLname2,payload:true });
    this.ngRedux.dispatch({ type: IsFocusedLname2,payload:true });
  }
  lnamefocusedout(){
    this.ngRedux.dispatch({ type: IsFocusedLname2,payload:false });
  }

}
