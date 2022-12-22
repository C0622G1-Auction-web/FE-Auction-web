import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product/product.service';
import {NotificationService} from '../../../service/notification/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductDtoRoleAdmin} from '../../../model/product/product-dto-role-admin';
import {Reason} from '../../../model/product/reason';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ImgDetailDto} from "../../../model/product/img-detail-dto";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})

/**
 * Create by: GiangLBH
 * Screen: Review Product, Role: Admin
 * Date: 17/12/2022
 */
export class ProductReviewComponent implements OnInit {

  product: ProductDtoRoleAdmin;
  reason: Reason | undefined;
  invalidProduct: boolean;
  imgs: ImgDetailDto[];
  rfReason: FormGroup;

  constructor(private _productService: ProductService,
              private _notificationService: NotificationService,
              private _activatedRoute: ActivatedRoute,
              private router: Router,
              private _formBuilder: FormBuilder,
              private _titleService: Title) {
    this._titleService.setTitle("Duyệt sản phẩm");
  }

  ngOnInit(): void {
    this.getInfo();
  }

  /**
   * Create by: GiangLBH
   * Function: find Product by id
   * Date: 17/12/2022
   */
  getInfo() {
    const id = +this._activatedRoute.snapshot.params.id;
    this._productService.getImgsByProductId(id).subscribe(data => {
      this.imgs = data;
    }, err => {
      this._notificationService.showErrorNotification('Có lỗi khi tải hình ảnh sản phẩm!');
      this.imgs = [{
        url:''
      }];
    });
    this._productService.getReason(id).subscribe(data => {
      this.reason = data;
      this.reason.productId = id;
    });
    this._productService.findByDtoId(id).subscribe(data => {
      this.product = data;
      this.invalidProduct = this.product.reviewStatusId == 3;
    }, error => {
      this._notificationService.showErrorNotification('Có lỗi khi tải thông tin sản phẩm!');
      this.router.navigateByUrl('/products');
    });
  }

  /**
   * Create by: GiangLBH
   * Function: do not review product
   * Date: 17/12/2022
   */
  doNotReview() {
    if (!this.invalidProduct) {
      this.invalidProduct = true;
      this.rfReason = this._formBuilder.group({
        reason: ['', [
          Validators.required,
          Validators.maxLength(250)
        ]]
      })
    } else {
      console.log(this.reason);
      this._productService.writeReason(this.reason).subscribe(data => {
        this._notificationService.showSuccessNotification('Đã lưu lý do khoá!');
      },);
      this._productService.doNotReview(this.product.id).subscribe(data => {
        this.router.navigateByUrl('/products');
        this._notificationService.showSuccessNotification('Sản phẩm không được duyệt!');
      }, error => {
        this._notificationService.showErrorNotification('Duyệt sản phẩm thất bại!');
      });
    }
  }


  /**
   * Create by: GiangLBH
   * Function: review product
   * Date: 17/12/2022
   */
  review() {
    this._productService.review(this.product.id).subscribe(data => {
      this.router.navigateByUrl('/products');
      this._notificationService.showSuccessNotification('Duyệt sản phẩm thành công!');
    }, error => {
      this._notificationService.showErrorNotification('Duyệt sản phẩm thất bại!');
    });
  }

  changeImage(event: any, i: any, j: number) {
    const src = event.target.src;
    const imgs = document.querySelectorAll('.img-selected' + i);
    document.getElementById('image__main' + i).setAttribute('src', src);
    imgs.forEach(value => {
      if (value.getAttribute('value') == j + '') {
        value.classList.add('actived');
      } else {
        value.classList.remove('actived');
      }
    });
  }

  selectedChangImage() {
    setTimeout(() => {
      const imgF = document.querySelectorAll('.carousel__images');
      console.log(imgF);
      imgF.forEach(value => {
        value.children[0].classList.add('actived');
      });
    }, 500);
  }
}
