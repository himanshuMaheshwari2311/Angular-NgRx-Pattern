import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {

    constructor(private actions$: Actions, private productService: ProductService) { }

    @Effect()
    loadProduct$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Load),
        mergeMap((action: productActions.Load) => this.productService.getProducts().pipe(
            map((products: Product[]) => (new productActions.LoadSuccess(products))),
            catchError(err => of(new productActions.LoadFail(err)))
        ))
    );

    @Effect()
    updateProduct$ = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.UpdateProduct),
        map((action: productActions.UpdateProduct) => action.payload),
        mergeMap((product: Product) =>
            this.productService.updateProduct(product).pipe(
                map(updateProduct => (new productActions.UpdateProductSuccess(updateProduct))),
                catchError(err => of(new productActions.UpdateProductFail(err)))
            )
        )
    );
}
