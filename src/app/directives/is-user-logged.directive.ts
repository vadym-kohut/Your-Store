import { Directive, HostBinding, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { UserDBService } from '../services/user-db.service';

@Directive({
    selector: '[ysIsUserLogged]',
})
export class IsUserLoggedDirective implements OnInit {
    constructor(private userDB: UserDBService) { }

    ngOnInit(): void {
        this.userDB
            .getUserData$()
            .pipe(
                map((user) => !!user),
                tap((isLogged) => (this.isDisabled = !isLogged))
            )
            .subscribe();
    }

    @HostBinding('disabled')
    isDisabled = false;
}
