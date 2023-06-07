import {ModuleWithProviders, NgModule} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatRadioModule} from '@angular/material/radio';

export const MOMENT_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    imports: [CdkTableModule, DragDropModule, MatButtonModule, MatCheckboxModule,
        MatInputModule, MatSidenavModule, MatMenuModule, MatSelectModule,
        MatTooltipModule, MatToolbarModule, MatSliderModule, MatSlideToggleModule,
        MatTabsModule, MatCardModule, MatIconModule, MatListModule, MatProgressBarModule,
        MatSnackBarModule, MatButtonToggleModule, MatDialogModule, MatProgressSpinnerModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatAutocompleteModule,
        MatPaginatorModule, MatTableModule, MatSortModule, MatExpansionModule, MatStepperModule,
        MatFormFieldModule, MatGridListModule, MatBadgeModule, MatRadioModule],
    exports: [CdkTableModule, DragDropModule, MatButtonModule, MatCheckboxModule,
        MatInputModule, MatSidenavModule, MatMenuModule, MatSelectModule,
        MatTooltipModule, MatToolbarModule, MatSliderModule, MatSlideToggleModule,
        MatTabsModule, MatCardModule, MatIconModule, MatListModule, MatProgressBarModule,
        MatSnackBarModule, MatButtonToggleModule, MatDialogModule, MatProgressSpinnerModule,
        MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatAutocompleteModule,
        MatPaginatorModule, MatTableModule, MatSortModule, MatExpansionModule, MatStepperModule,
        MatFormFieldModule, MatGridListModule, MatBadgeModule, MatRadioModule],
})
export class MaterialModule {
    public static forRoot(): ModuleWithProviders<MaterialModule> {
        return {
            ngModule: MaterialModule
        };
    }
}

