import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BedRockComponent } from './bed-rock.component';

describe('BedRockComponent', () => {
    let component: BedRockComponent;
    let fixture: ComponentFixture<BedRockComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BedRockComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BedRockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
