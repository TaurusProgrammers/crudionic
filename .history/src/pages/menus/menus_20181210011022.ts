import { HomePage } from './../../pages/home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {
  menus: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: HttpClient
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenusPage');
    this.getMenu();

  }
apiUrl="http://localhost/crud/";
  getMenu(){
    let funcion={
      'funcion': 'getMenu'
    };
    this.http.post(this.apiUrl, JSON.stringify(funcion))
    .subscribe(res=>{
      console.log(res);
      this.menus=res;
    }
    );
  }

newMenu(){
  this.navCtrl.push(HomePage);
}

enterToMenu(datos){
  console.log(datos);
}

editMenu(datos){
  console.log('edit');
}

deleteMenu(datos){

  console.log(datos);
  return this.filteredPost.indexOf(datos.idmenu) == -1;
}



}
