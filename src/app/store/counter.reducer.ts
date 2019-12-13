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
var fname2:InputBox={
  IsTouched:false,
  IsFocused:false,
  value:""

};
var lname2:InputBox={
  IsTouched:false,
  IsFocused:false,
  value:""

};

var IntialState={
  "form1":{
  "fname":fname,
  "lname":lname
  },
  "form2":{
    "fname":fname2,
    "lname":lname2
    }
}

export function CounterReducer(state = IntialState, action: any): any {
    switch(action.type){
      case 'Submit':
        
        state.form1.fname.value=action.payload.fname;
        state.form1.lname.value=action.payload.lname;
        console.log(state);
        return state;
      case 'IsFocusedLname':
        state.form1.lname.IsFocused=action.payload;
        
        return state;
      case 'IsFocusedFname':
        
        state.form1.fname.IsFocused=action.payload;
        
        return state;
      case 'IsTouchedLname':
        state.form1.lname.IsTouched=action.payload;
        
        return state;
      case 'IsTouchedFname':
        state.form1.fname.IsTouched=action.payload;
        
        return state;
        case 'Submit2':
        
          state.form2.fname.value=action.payload.fname;
          state.form2.lname.value=action.payload.lname;
          
          return state;
        case 'IsFocusedLname2':
          state.form2.lname.IsFocused=action.payload;
          
          return state;
        case 'IsFocusedFname2':
          
          state.form2.fname.IsFocused=action.payload;
          
          return state;
        case 'IsTouchedLname2':
          state.form2.lname.IsTouched=action.payload;
          
          return state;
        case 'IsTouchedFname2':
          state.form2.fname.IsTouched=action.payload;
          
          return state;

      default:
        return state;
    }
    
 
}


