import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuideListComponent} from './component/guide/guide-list/guide-list.component';
import {
  AuctionProductDetailComponent
} from './component/auction/auction-product-detail/auction-product-detail.component';
import {ProductAddComponent} from './component/product/product-add/product-add.component';
import {ProductEditComponent} from './component/product/product-edit/product-edit.component';
import {TransactionComponent} from './component/transaction/transaction.component';
import {HomeComponent} from './component/home/home.component';
import {UserListComponent} from './component/user/user-list/user-list.component';
import {UserEditComponent} from './component/user/user-edit/user-edit.component';
import {UserAddComponent} from './component/user/user-add/user-add.component';
import {LockaccountUserComponent} from './component/user/lockaccount-user/lockaccount-user.component';
import {ListProductsComponent} from './component/product/list-products/list-products.component';
import {ProductReviewComponent} from './component/product/product-review/product-review.component';
import {RegisterWithGoogleComponent} from "./security/register-with-google/register-with-google.component";
import {AddressPaymentComponent} from './component/payment/address-payment/address-payment.component';
import {MethodPaymentComponent} from './component/payment/method-payment/method-payment.component';
import {AuctionProductAddComponent} from './component/auction/auction-product-add/auction-product-add.component';
import {GuideAddComponent} from "./component/guide/guide-add/guide-add.component";
import {GuideEditComponent} from "./component/guide/guide-edit/guide-edit.component";
import {ChatUserComponent} from "./component/chat/chat-user/chat-user.component";
import {ChatAdminComponent} from "./component/chat/chat-admin/chat-admin.component";
import {UserCreateComponent} from "./component/user/user-create/user-create.component";
import {UserUpdateComponent} from "./component/user/user-update/user-update.component";
import {LoginComponent} from "./security/login/login.component";
import {UserGuard} from "./security/guard/user.guard";
import {AdminGuard} from "./security/guard/admin.guard";
import {PaymentCartComponent} from "./component/payment/payment-cart/payment-cart.component";
import {AccountForgotPassComponent} from "./security/account-forgot-pass/account-forgot-pass.component";
import {ResetPasswordComponent} from "./security/reset-password/reset-password.component";
import {LoginGuard} from "./security/guard/login.guard";
import {ProductListComponent} from "./component/product/product-list/product-list.component";
import {
  AuctionProductHistoryComponent
} from "./component/auction/auction-product-history/auction-product-history.component";
import {PaymentReceiptComponent} from "./component/payment/payment-receipt/payment-receipt.component";
import {ChatVisitorComponent} from "./component/chat/chat-visitor/chat-visitor.component";


const routes: Routes = [
  {path: 'products', component: ListProductsComponent, canActivate: [AdminGuard]},
  {path: 'products/review/:id', component: ProductReviewComponent, canActivate: [AdminGuard]},
  {path: 'product/create', component: ProductAddComponent, canActivate: [AdminGuard]},
  {path: "product/edit/:id", component: ProductEditComponent, canActivate: [AdminGuard]},
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'user/list', component: UserListComponent, canActivate: [AdminGuard]},
  {path: 'user/edit/:id', component: UserEditComponent, canActivate: [AdminGuard]},
  {path: 'user-add', component: UserAddComponent, canActivate: [AdminGuard]},
  {path: 'user/lockaccount', component: LockaccountUserComponent, canActivate: [AdminGuard]},
  {path: 'product/add', component: ProductAddComponent, canActivate: [AdminGuard]},
  {path: 'auction/product/add', component: AuctionProductAddComponent, canActivate: [UserGuard]},
  {path: 'receipt', component: PaymentReceiptComponent},
  {path: 'methodPayment', component: MethodPaymentComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'guide', component: GuideListComponent},
  {path: 'guide/edit/:id', component: GuideEditComponent, canActivate: [AdminGuard]},
  {path: 'guide/add', component: GuideAddComponent, canActivate: [AdminGuard]},
  {path: 'chat/user', component: ChatUserComponent},
  {path: 'chat/support', component: ChatAdminComponent, canActivate: [AdminGuard]},
  {path: "auction-detail/:productId", component: AuctionProductDetailComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: 'user/update/:id', component: UserUpdateComponent, canActivate: [UserGuard]},
  {path: 'registerWithGoogle', component: RegisterWithGoogleComponent},
  {path: 'cart', component: PaymentCartComponent, canActivate: [UserGuard]},
  {path: 'account/forgot_password', component: AccountForgotPassComponent, canActivate: [LoginGuard]},
  {path: 'account/reset_password', component: ResetPasswordComponent},
  {path: 'historyProduct', component: ProductListComponent, canActivate: [UserGuard]},
  {path: 'historyAuctionProduct', component: AuctionProductHistoryComponent, canActivate: [UserGuard]},
  {path: 'user/add', component: UserAddComponent},
  {path: 'user/lock/:id', component: LockaccountUserComponent},
  {path: 'chat/visitor', component: ChatVisitorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
