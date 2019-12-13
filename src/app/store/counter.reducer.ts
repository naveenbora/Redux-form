import { IsFocusedLname,IsTouchedLname,Submit,IsFocusedFname,IsTouchedFname} from '../actions/counter.actions';


export class InputBox{
    Istouched:boolean;
    IsFocused:boolean;
    value:string

}
var fname:InputBox={
  Istouched:false,
  IsFocused:false,
  value:""

};
var lname:InputBox={
  Istouched:false,
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
        break;
      case 'IsFocusedLname':
          state.lname=action.payload;
          console.log(state);
        break;
      case 'IsFocusedFname':
          state.fname=action.payload;
          console.log(state);
        break;
      case 'IsTouchedLname':
          state.lname=action.payload;
          console.log(state);
        break;
      case 'IsTochedfname':
          state.lname=action.payload;
          console.log(state);
        break;

      default:
        break;
    }
    return state;
 
}


