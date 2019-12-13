import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState } from './store/index';
import { IsFocusedLname,IsTouchedFname,IsFocusedFname,IsTouchedLname,Submit } from './actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    
    this.ngRedux.dispatch({ type: Submit,payload:{ fname:this.fname,lname:this.lname}});
  }
  
  fnamefocused(){
    this.ngRedux.dispatch({ type: IsFocusedFname,payload:true });
    this.ngRedux.dispatch({ type: IsTouchedFname,payload:true });
    
  }
  fnamefocusedout(){
    
    this.ngRedux.dispatch({ type: IsFocusedFname,payload:false });
  }
  lnamefocused(){
    this.ngRedux.dispatch({ type: IsTouchedLname,payload:true });
    this.ngRedux.dispatch({ type: IsFocusedLname,payload:true });
  }
  lnamefocusedout(){
    this.ngRedux.dispatch({ type: IsFocusedLname,payload:false });
  }
}
