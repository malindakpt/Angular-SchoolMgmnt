import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'app';
	public showMenu = false;
	public showMenu2 = false;

	public openNav(): void {
		this.showMenu = !this.showMenu;
	}
	public myFunction(): void {
		this.showMenu2 = !this.showMenu2;
		// var x = document.getElementById(id);
		// if (x.className.indexOf("w3-show") == -1) {
		//   x.className += " w3-show";
		//   x.previousElementSibling.className += " w3-theme-d1";
		// } else {
		//   x.className = x.className.replace("w3-show", "");
		//   x.previousElementSibling.className =
		// 	x.previousElementSibling.className.replace(" w3-theme-d1", "");
		// }
	}
}
