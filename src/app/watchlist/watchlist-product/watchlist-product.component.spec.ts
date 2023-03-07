import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistProductComponent } from './watchlist-product.component';

describe('WatchlistProductComponent', () => {
    let component: WatchlistProductComponent;
    let fixture: ComponentFixture<WatchlistProductComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WatchlistProductComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WatchlistProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
