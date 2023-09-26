import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.css']
})
export class StateManagementComponent {
  value: any;
  arr: any[] = [];
  values: any;
  array: any[] = []
  filteredItems: any[] = [];
  searchTerm: string = '';
  filter: any

  constructor( public router: Router, private toastr: ToastrService) {
    console.log('hit')
    this.values = localStorage.getItem('Values')
    if (this.values) {
      this.array = JSON.parse(this.values)
      this.filteredItems = this.array; 

    }
  }
  filterItems(event) {
    this.filteredItems = this.array.filter(item => {
      return item.toLowerCase().includes(this.searchTerm.toLowerCase());
    }
    );
    console.log(this.filteredItems)
  }
  list: any[] = []
  index: any
  checking: boolean = false
  check(event, items) {
    console.log(items)

    console.log(this.array.find(item => item == items))
    if (event.changed) {
      this.checking = true
    } else {
      this.checking = false
    }

  }

  remove(valueToRemove) {
    const index = this.array.indexOf(valueToRemove);
    console.log(index)

    if (index !== -1) {
      this.array.splice(index, 1);
    }
    localStorage.setItem('Values', JSON.stringify(this.array));
  }

  save() {
    // localStorage.setItem('value', this.value)
    this.array.push(this.value)
    console.log(this.arr)
    this.values = localStorage.setItem('Values', JSON.stringify(this.array))
    this.toastr.success('Successfully added on Localstorage')
    this.value = ''
  }

  Theme: string = 'red'
  use : any
  change(theme) {
    console.log(theme)
     if(theme === 'black'){
      this.use = 'white';
     }else{
      this.use = 'black'
     }
  }
}
