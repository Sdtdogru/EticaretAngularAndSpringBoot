import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {LayoutService} from '../../shared/services/layout.service';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
    selector: 'app-user-navbar',
    templateUrl: './user-navbar.component.html',
    styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
    getname: string;
    role: string;
    roleSecurity: boolean;
    countBaket = [];
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    placement = 'bottom-right';
    public isCollapsed = true;
    layoutSub: Subscription;
    @Output()
    toggleHideSidebar = new EventEmitter<Object>();
    private translate: any;

    constructor(private layoutService: LayoutService, private authService: AuthService) {
    }

    ngOnInit(): void {
        this.countBaket = JSON.parse(localStorage.getItem('sepet')) || [];

        this.getname = localStorage.getItem('name');
        this.role = localStorage.getItem('role');
        this.controlrole(this.role);
    }

    logout() {
        this.authService.logout();
        this.ngOnInit();
    }

    controlrole(role) {
        if (role === 'user') {
            this.roleSecurity = true;
        } else {
            this.roleSecurity = false;
        }
    }

    toggleNotificationSidebar() {
        this.layoutService.emitNotiSidebarChange(true);
    }

    ChangeLanguage(language: string) {
        this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        } else {
            this.toggleClass = 'ft-maximize';
        }
    }

    toggleSidebar() {
        const appSidebar = document.getElementsByClassName('app-sidebar')[0];
        if (appSidebar.classList.contains('hide-sidebar')) {
            this.toggleHideSidebar.emit(false);
        } else {
            this.toggleHideSidebar.emit(true);
        }
    }
}
