import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-updater-user-form',
  templateUrl: './updater-user-form.component.html',
  styleUrls: ['./updater-user-form.component.scss'],
})
export class UpdaterUserFormComponent implements OnInit {
  userId = this.config.data.userId;
  updateUserForm!: FormGroup;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.updateUserForm = this.fb.group({
      // name: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onUpdateUser() { return ''}
}
