import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeAccountStore } from '../../store/userAccount.store.service';
import { SystemAdminService } from '../../services/system-admin.service';
import { NotificationService } from 'src/app/shared/message/notification.service';

@Component({
  selector: 'app-updater-user-form',
  templateUrl: './updater-user-form.component.html',
  styleUrls: ['./updater-user-form.component.scss'],
  providers: [EmployeeAccountStore],
})
export class UpdaterUserFormComponent implements OnInit {
  userId = this.config.data.userId;
  updateUserForm!: FormGroup;
  user$ = this.accountStore.user$;
  isLoading = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder,
    private accountStore: EmployeeAccountStore,
    private systemService: SystemAdminService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.accountStore.getUser(this.userId);
    this.user$.subscribe(user => {
      this.updateUserForm.patchValue({
        username: user?.username,
        password: user?.password,
      });
    });
  }

  initForm() {
    this.updateUserForm = this.fb.group({
      // name: [''],
      username: ['', [Validators.required, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  onUpdateUser() {
    const { username, password } = this.updateUserForm.value;

    const data = {
      userId: this.userId,
      username,
      password,
    };

    this.systemService
      .updateUsernamePassword(data)
      .pipe(o$ => {
        this.isLoading = true;
        return o$;
      })
      .subscribe(() => {
        this.isLoading = false;
        this.notificationService.successNotification(
          $localize`Update account successfully`,
        );
        this.ref.close({ success: true });
      });
  }

  onCloseModal() {
    this.ref.close();
  }
}
