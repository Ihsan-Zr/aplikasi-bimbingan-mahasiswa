import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import axios from 'axios';
import { DetailPage } from '../detail/detail.page';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public captureData:any = [];

  public kd_capture:any = "";
  public kd_bimbingan:any = "";
  public keterangan:any = "";
  public photo:any = "";
  public dentry:any = "";
  public thn_akademik:any = "";

  constructor(
    public modalCtrl: ModalController,
    private storage: Storage
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
      this.storage.get('kd_bimbingan').then( async val => {
        console.log(val)
        const data = {
          kd_bimbingan: val
        }
        const header = {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Accept: 'application/json',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
        };
        fetch('https://ionbmu.gebyar-it.xyz/bmu_native/get_bimbingan_capture.php', {
          method: 'POST',
          headers: header,
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            this.captureData = res.result
          })
      })
 
    }catch(err){
      console.log(err);
    }
  }

  // async deleteData(id) {
  //   const fd = new FormData();
  //   fd.append('id',id);
  //   try{
  //     const res = await axios.post('http://localhost/elearning_native/delete_data_mahasiswa.php', fd);
  //     if(res.data.success == false){
  //       alert('Gagal Menghapus Data');
  //     }else{
  //       alert('Berhasil Menghapus Data');
  //       this.getData();
  //     }
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

 async getDataCapture(id){
  console.log(id);
  const modal = await this.modalCtrl.create({
    component: DetailPage,
    componentProps: {
      "id": id
    }
  });
  return await modal.present();
 }
}
