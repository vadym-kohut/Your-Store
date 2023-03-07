import { FormControl } from '@angular/forms';

export interface FilterForm {
    sortQuery: FormControl<string>;
    priceFromQuery: FormControl<number | null>;
    priceToQuery: FormControl<number | null>;
    ratingQuery: FormControl<string>;
}
