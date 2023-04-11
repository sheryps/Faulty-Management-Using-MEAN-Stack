import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allFaculties:[],searchKey:string,propname:string): any[] {
    if(!allFaculties||searchKey==''||propname==''){
      return allFaculties;
    }
    const result:any=[]//new array
    allFaculties.forEach((product:any)=>{
      if(product[propname].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(product)
      }
    })
    return result;
  }

}
