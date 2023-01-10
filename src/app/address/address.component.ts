import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  constructor() {}
  public districts: string[] = ['District / Town'];
  public vietnamData: VietnamData[] = [
    { city: 'Chọn thành phố', district: ['District / Town'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];
  ngOnInit(): void {}

  public changeCity(event: any): void {
    // console.log('vietnamData: ', event.target.value);
    // const city = event.target.value;
    // if (!city) return;
    // const search = this.vietnamData.filter((data) => data.city === city);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }
    // console.log('search: ', search);
    const city = event.target.value;
    this.districts =
      this.vietnamData.find((data) => data.city === city)?.district || [];
  }
}

class VietnamData {
  city: string;
  district: string[];
  constructor(city: string, district: string[]) {
    this.city = city;
    this.district = district;
  }
}
