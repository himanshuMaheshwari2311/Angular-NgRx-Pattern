import { ProductActionTypes, ProductActions } from './product.actions';
import { Product } from '../product';

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number;
    products: Product[];
    error: string;
}

const initalState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
};

export function reducer(state = initalState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            };
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProductId: action.payload.id
            };
        case ProductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProductId: null
            };
        case ProductActionTypes.InitializeCurrentProduct:
            return {
                ...state,
                currentProductId: 0
            };

        case ProductActionTypes.LoadSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            };

        case ProductActionTypes.LoadFail:
            return {
                ...state,
                products: [],
                error: action.payload
            };

        case ProductActionTypes.UpdateProductSuccess:
            const updatedProduct = state.products.map(
                item => action.payload.id === item.id ? action.payload : item );
            return {
                ...state,
                products: updatedProduct,
                currentProductId: action.payload.id,
                error: ''
            };
        case ProductActionTypes.UpdateProductFail:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
