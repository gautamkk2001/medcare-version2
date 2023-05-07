import { FormGroup } from '@angular/forms';

export function cpasswordvalid (ps:string,cps:string) {
   return(FormGroup:FormGroup)=>{
    const password1=FormGroup.controls[ps];
    const cpassword1=FormGroup.controls[cps];

    if(password1.value !=cpassword1.value){
      cpassword1.setErrors({cpasswordvalid:true});
    }
    else{
      cpassword1.setErrors(null);
    }
   };
}
