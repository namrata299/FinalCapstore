import { ProductFeedback } from './ProductFeedback';
import { Cart } from './Cart';

export class Product{
    productId:number;
	productName:String;
	productImage:String;
	productPrice: DoubleRange;
	productRating:number;
	noOfProductViewed:number;
	productBrand:String;
	noOfProducts:number;
    productInfo:String;
    discount:number;
    productCategory:String;
    productActivated: Boolean;
    status:boolean;
    featured:boolean;
    userId:number;

    constructor(){}
   // productfeedbacks: ProductFeedback;
    //customerCarts:Cart;

}