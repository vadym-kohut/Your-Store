import { Directive, HostBinding, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { getUserData, State } from '../user/state/user.reducer';

@Directive({
    selector: '[ysIsUserLogged]'
})
export class IsUserLoggedDirective implements OnInit {
    constructor(
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.store.select(getUserData)
            .pipe(
                map((user) => !!user),
                tap((isLogged) => (this.isDisabled = !isLogged))
            )
            .subscribe();
    }

    @HostBinding('disabled')
    isDisabled = false;
}
