import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { CompanyDialog } from '../../shared/components/company/company-dialog';
import { Company } from '../../shared/components/company/company';
import { CompanyService } from '../../shared/components/company/company.service';
import { UserDialog } from '../../user/user-dialog';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
	providers: [CompanyService]
})
export class ProfileComponent implements OnInit {

	isLoading: boolean = false;
	dialogRef: MdDialogRef<CompanyDialog>;
	addUserDialogRef: MdDialogRef<UserDialog>;
	company: Company = null;

	constructor(public dialog: MdDialog, public viewContainerRef: ViewContainerRef, private companyService: CompanyService) { }

	ngOnInit() {

		this.companyService.findCompanyByUser(+sessionStorage.getItem("userId")).subscribe((company: Company) => {
			this.company = company;
		});

	}

	openAddCompanyDialog() {
		this.isLoading = true;

		let config = new MdDialogConfig();
		config.disableClose = true;
		config.viewContainerRef = this.viewContainerRef;
		let addressData = { "mode": "add", "type": "addType" };
		config.data = addressData;

		this.dialogRef = this.dialog.open(CompanyDialog, config);

		this.dialogRef.afterClosed().subscribe(company => {
			if (company !== undefined) {
				this.company = company;
			}
			this.dialogRef = null;
			this.isLoading = false;
		});
	}

	openAddUserDialog() {

		this.isLoading = true;

		let userConfig = new MdDialogConfig();
		userConfig.disableClose = true;
		userConfig.viewContainerRef = this.viewContainerRef;
		let userData = { "mode": "add" };
		userConfig.data = userData;

		this.addUserDialogRef = this.dialog.open(UserDialog, userConfig);

		this.addUserDialogRef.afterClosed().subscribe(user => {
			if (user !== undefined) {
				alert("User Added");
			}
			this.addUserDialogRef = null;
			this.isLoading = false;
		});
	}

}
