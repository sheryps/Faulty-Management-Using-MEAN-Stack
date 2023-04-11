import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../../../service/admin-auth.service'
import { Faculty } from 'src/app/model/faculty';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit{
  facultyDetailsForm = new FormGroup({
    _id:new FormControl(),
    faculty_number:new FormControl(),
    faculty_name:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    designation:new FormControl(),
    birth_date:new FormControl(),
    joining_year:new FormControl(),
    adharcard_number:new FormControl(),
    salary:new FormControl()

  })
  facultyUpdateForm=new FormControl({
    designation:new FormControl(),
    salary:new FormControl()
  })

  facultyobj: Faculty ={
    _id:'',
    faculty_number:0,
    faculty_name:'',
    email:'',
    mobile:0,
    designation:'',
    birth_date:'',
    joining_year:0,
    adharcard_number:0,
    salary:0

  }
  constructor(private fb:FormBuilder,private Auth:AdminAuthService,private router:Router){}
  allFaculties:any=[]
  len:any
  searchTerm:string='';
  ngOnInit(): void {
    this.facultyDetailsForm=this.fb.group({
      _id:['',[Validators.required]],
      faculty_number:['',[Validators.required]],
      faculty_name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.maxLength(10)]],
      designation:['',[Validators.required]],
      birth_date:['',[Validators.required]],
      joining_year:['',[Validators.required]],
      adharcard_number:['',[Validators.required,Validators.minLength(16)]],
      salary:['',[Validators.required]]

    })
    //search
    this.Auth.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm=data
      }
    )
    //for getting all faculties
    this.Auth.getAllFaculty().subscribe(
      (data:any)=>{
        this.allFaculties = data.faculties
        this.len=Object.keys(this.allFaculties).length
        console.log(this.allFaculties);
        
      }
    )    
  }
  
  password: any;
  generatePassword() {
    this.password = Math.random().toString(36).slice(-8);
    return this.password
  }
  
  addNewFaculty(){
    const password=this.generatePassword()
    const details =this.facultyDetailsForm.value
    console.log(details,password);
    this.Auth.addFaculty(details,password).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('admin/admin-dashboard')
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )    
  }
  viewFaculty(faculty:any){
    this.facultyDetailsForm=this.fb.group({
      _id:faculty._id,
      faculty_number:faculty.faculty_number,
      faculty_name:faculty.faculty_name,
      email:faculty.email,
      mobile:faculty.mobile,
      designation:faculty.designation,
      birth_date:faculty.birth_date,
      joining_year:faculty.joining_year,
      adharcard_number:faculty.adharcard_number,
      salary:faculty.salary

    })
  }
  editFaculty(faculty:any){
    console.log(faculty);
    
    this.facultyDetailsForm=this.fb.group({
      _id:faculty._id,
      faculty_number:faculty.faculty_number,
      faculty_name:faculty.faculty_name,
      email:faculty.email,
      mobile:faculty.mobile,
      designation:faculty.designation,
      birth_date:faculty.birth_date,
      joining_year:faculty.joining_year,
      adharcard_number:faculty.adharcard_number,
      salary:faculty.salary
    })

  }
  updateFaculty(){
    const user=this.facultyDetailsForm.value
    console.log(user.faculty_number,user.designation,user.salary);
    
    this.Auth.updateFaculty(user.faculty_number,user.designation,user.salary).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )    
  }
  @Output() OnDelete = new EventEmitter()//to geneerate event for cancel

  deleteFaculty(faculty_number:number){
    console.log('component');
    
    this.Auth.deleteFaculty(faculty_number).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
}

