import { IsFocusedLname,IsTouchedLname,Submit,IsFocusedFname,IsTouchedFname} from '../actions/counter.actions';


export class InputBox{
    IsTouched:boolean;
    IsFocused:boolean;
    value:string

}
var fname:InputBox={
  IsTouched:false,
  IsFocused:false,
  value:""

};
var lname:InputBox={
  IsTouched:false,
  IsFocused:false,
  value:""

};

var IntialState={
  "fname":fname,
  "lname":lname
}

export function CounterReducer(state = IntialState, action: any): any {
    switch(action.type){
      case 'Submit':
        
        state.fname.value=action.payload.fname;
        state.lname.value=action.payload.lname;
        console.log(state);
        return state;
      case 'IsFocusedLname':
        state.lname.IsFocused=action.payload;
        
        return state;
      case 'IsFocusedFname':
        
        state.fname.IsFocused=action.payload;
        
        return state;
      case 'IsTouchedLname':
        state.lname.IsTouched=action.payload;
        
        return state;
      case 'IsTouchedFname':
        state.fname.IsTouched=action.payload;
        
        return state;

      default:
        return state;
    }
    
 
}


