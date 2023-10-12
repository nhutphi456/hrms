import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IDropdownItem } from 'src/app/models/global.model';
import { EmployeeAccountStore } from '../../store/userAccount.store.service';
import { SystemAdminService } from '../../services/system-admin.service';
import { IUpdateAccountParams } from '../../models/system-admin.model';
import { NotificationService } from 'src/app/shared/message/notification.service';

@Component({
  selector: 'app-user-activate-form',
  templateUrl: './user-activate-form.component.html',
  styleUrls: ['./user-activate-form.component.scss'],
  providers: [EmployeeAccountStore],
})
export class UserActivateFormComponent implements OnInit {
  selectedIds = this.config.data.selectedIds;
  selectedIdsCount = this.selectedIds.length;
  roleOptions!: IDropdownItem[];
  activateOptions = [
    {
      label: 'Activate',
      value: true,
    },
    {
      label: 'Deactivate',
      value: false,
    },
  ];
  activateUserForm!: FormGroup;
  isLoading = false;

  constructor(
    private accountStore: EmployeeAccountStore,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder,
    private systemAdminService: SystemAdminService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.accountStore.getRoles();
    this.accountStore.roles$.subscribe(roles => {
      this.roleOptions = roles.map(r => {
        return {
          label: r.name,
          value: r.roleId,
        };
      });
    });

    this.initForm();
  }

  initForm() {
    this.activateUserForm = this.fb.group({
      roles: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onActivate() {
    // console.log({ value: this.activateUserForm.value });
    const { roles, status } = this.activateUserForm.value;
    const updateData: IUpdateAccountParams = {
      roles,
      status,
      ids: this.selectedIds,
    };

    console.log({ updateData });

    this.systemAdminService
      .updateUsers(updateData)
      .pipe(o$ => {
        this.isLoading = true;
        return o$;
      })
      .subscribe(() => {
        this.isLoading = false;
        this.notificationService.successNotification(
          $localize`Update account successfully`,
        );
        this.ref.close({success: true});
      });
  }
}
