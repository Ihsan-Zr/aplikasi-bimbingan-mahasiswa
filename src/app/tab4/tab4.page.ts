import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  public informasiData:any = [];

  public kd_informasi:any = "";
  public fakultas_info:any = "";
  public prodi_info:any = "";

  constructor(
    public modalCtrl: ModalController,
  ) {
    this.getData();
  }

// Ion-Refresh
handleRefresh(event){
  setTimeout(() => {
    this.getData();
    event.target.complete();
  }, 3000);
}

  async getData() {
    try{
      const res = await axios.get('https://ionbmu.gebyar-it.xyz/bmu_native/get_bimbingan_informasi.php');
      // const res = await axios.get('http://edmrlearning.gebyar-it.xyz/elearning_native/get_bimbingan_informasi.php');
      this.informasiData = res.data.result;
      console.log(this.informasiData);
    }catch(err){
      console.log(err);
    }
  }


}
