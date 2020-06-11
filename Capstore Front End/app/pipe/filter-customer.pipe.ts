import { Pipe, PipeTransform } from '@angular/core';
import { CustomerDetails } from '../models/CustomerDetails';

@Pipe({
  name: 'filter'
})
export class FilterCustomerPipe implements PipeTransform {

 
  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}
