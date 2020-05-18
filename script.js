
var tanya = true;
while( tanya ){
		// menangkap pilihan player
var p = prompt('Pilih : Gajah, Orang,atau Semut');

	// menangkap pilihan komputer

	// memebangkitkan bilangan random
	var comp = Math.random();

	if ( comp < 0.34) {
		comp = 'gajah';
	} else if( comp >= 34 && comp <= 66){
		comp = 'orang';
	} else {
		comp = 'semut';
	}


	var hasil ='';
	// membentuk rules

	if ( p == comp ){
		hasil = 'SERI';
	} else if ( p == 'gajah') {
	// 	if( comp = 'orang') {
	// 		hasil = 'menang';
	// 	} else {
	// 		hasil = 'KALAH'
	// 	}
		hasil = ( comp = 'orang') ? 'MENANG' : 'KALAH';
	} else if ( p == 'orang'){
		hasil = ( comp = 'gajah') ? 'KALAH' : 'MENANG';
	} else if ( p == 'semut' ){
		hasil = ( comp = 'orang') ?  'KALAH' : 'MENANG';
	} else {
		hasil = 'Anda memasukkan pilihan yang salah';
	}
	// 	if( comp == 'gajah'){
	// 		hasil ='kalah';
	// 	} else {
	// 		hasil = 'menang';
	// 	}
	// }




	// tampilkan hasilnya
	alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil );

	tanya = confirm('lagi?');

}		