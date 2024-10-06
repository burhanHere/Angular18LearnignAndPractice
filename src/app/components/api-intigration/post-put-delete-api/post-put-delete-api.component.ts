import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DepartmentService } from '../../../services/departmentService/department-.service';
import { AlertComponent } from '../../../reuseableComponent/alert/alert.component';

@Component({
  selector: 'app-post-put-delete-api',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './post-put-delete-api.component.html',
  styleUrl: './post-put-delete-api.component.css',
})
export class PostPutDeleteApiComponent implements OnInit {
  public newDepartmentForm: FormGroup;
  public departmentsData: Array<any>;
  public editDepartment: boolean;
  public alertName: string;
  public alertText: string;
  public showAlert: boolean;
  private departmentService: DepartmentService;

  constructor() {
    this.newDepartmentForm = new FormGroup({
      departmentId: new FormControl(''),
      departmentName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      dateOfCreation: new FormControl(''),
    });
    this.departmentService = inject(DepartmentService);
    this.departmentsData = [];
    this.editDepartment = false;
    this.alertName = 'success';
    this.alertText = 'success';
    this.showAlert = false;
  }

  ngOnInit(): void {
    this.getAllDepartments();
  }

  public resetAll() {
    this.newDepartmentForm.reset();
    this.newDepartmentForm.setValue({
      departmentId: 0,
      departmentName: '',
      dateOfCreation: new Date().toISOString().split('T')[0],
    });
    this.editDepartment = false;
  }

  public startEditing(target: any) {
    this.newDepartmentForm.setValue({
      departmentId: target?.deptId,
      departmentName: target?.deptName,
      dateOfCreation: target?.createdDate,
    });
    this.editDepartment = true;
  }

  public submitRecord() {
    if (!this.editDepartment) {
      if (this.postNewDepartment()) {
        this.alertText = 'Department Created Succcessfully.';
        this.alertName = 'success';
      } else {
        this.alertText = 'Department Creation failed.';
        this.alertName = 'warning';
      }
    } else {
      if (this.updateDepartment()) {
        this.alertText = 'Department Updation Succcessfully.';
        this.alertName = 'success';
      } else {
        this.alertText = 'Department Updation failed.';
        this.alertName = 'warning';
      }
    }
    this.resetAll();
    this.getAllDepartments();
    this.showAlert = true;
  }

  public getAllDepartments(): void {
    this.departmentsData = new Array<any>();
    this.departmentService.getAllDepartments().subscribe(
      (result: any) => {
        let apiResponce = result;
        this.departmentsData = apiResponce.data;
      },
      () => {
        this.departmentsData = ['No Data Found.'];
      }
    );
    this.departmentsData = this.departmentsData.reverse();
  }

  private postNewDepartment(): boolean {
    const postData = this.newDepartmentForm.value;
    let responce = false;
    this.departmentService
      .postDepartments({
        deptName: postData.departmentName,
        createdDate: new Date().toISOString().split('T')[0],
      })
      .subscribe(
        (result: any) => {
          responce = result?.result;
        },
        (error: any) => {
          console.log(error);
        }
      );
    return responce;
  }

  private updateDepartment(): boolean {
    const putData = this.newDepartmentForm.value;
    let responce = false;
    this.departmentService
      .putDepartments({
        deptId: putData.departmentId,
        deptName: putData.departmentName,
        createdDate: putData.dateOfCreation,
      })
      .subscribe(
        (result: any) => {
          responce = result?.result;
        },
        (error: any) => {
          console.log(error);
        }
      );
    return responce;
  }

  public deleteDepartment(targetId: number): void {
    let responce = false;
    this.departmentService.deleteDepartments(targetId).subscribe(
      (result: any) => {
        responce = result?.result;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.getAllDepartments();
    if (responce) {
      this.alertText = 'Department Deletion Succcessfully.';
      this.alertName = 'success';
    } else {
      this.alertText = 'Department Deletion failed.';
      this.alertName = 'warning';
    }
  }
}
