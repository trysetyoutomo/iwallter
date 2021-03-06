// try{


var noPoi =[
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-48"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-30"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-58"
            }

        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "20"
            },
            {
                "lightness": "-20"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-76"
            },
            {
                "lightness": "-43"
            },
            {
                "gamma": "4.81"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "-41"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
];

// noPoi = [];
       

// Init App
var myApp = new Framework7({
    modalTitle: 'Framework7',
    // Enable Material theme
    // cacheIgnore:["http://gis.35utech.com"],
    // cacheIgnoreGetParameters : true,
    material: true,
    cacheDuration: 0,
    cache: false,
    tapHold: true, //enable tap hold events
    onPageInit: function (app, page) {
      // $'/'
      // alert("123");
      $('.ripple-wave').hide();
      // $('.panel-overlay').css("display","none!important");



        // }
    }
});

// alert(isLogged);
// alert(Logged_username);

// Expose Internal DOM library
var $$ = Dom7;
var marker ;
var server = "https://35utech.com/jenius";
var markers = [] ;
var markers_keliling = [] ;
var map;
var map_area;
var infowindow;
var minZoomLevel = 17;
var styledMap;

var result_marker = [];
var MyaMarkers = [];
var MyCircle = [];
var jenisUsaha = [];
var dataKecamatan = [];
var datakelurahan = [];
var dataRw = [];
var dataFilter = [];
var backbtn = 0;
var mainImageUMKM =  ["http://lorempixel.com/1024/1024/sports/1/"];
var myPhotoBrowserStandalone ;
var welcomescreen;
var tampil_terdekat = true;
var calon_pembeli_pos = [];
var buka_left = true;
var loader_refresh = true;
var kategori_favorite = [];
//suara alarm
var audio = new Audio('/sound/phone.mp3');

// var toast = myApp.toast('Marked star', '<div>☆</div>', {});

// var infoWindow = new google.maps.InfoWindow();

// Add main view
var mainView = myApp.addView('.view-main', {
  domCache: true
});
// var registerView = myApp.addView('.user-page-login-register', {});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
    name: 'right'
});

// In page events:
// $$(document).on('page:init', function (e) {
//   // Page Data contains all required information about loaded and initialized page 
//   var page = e.detail.page;
//   alert(page);
// });

// == map 

 
// == end of map 


var isLogged;
var Logged_username;

// var pnChannel = "gispem";
// var pnChannel2 = "admin";
// var pubnub = new PubNub({
//   publishKey: 'pub-c-ceee2bc6-11d3-427d-9aa4-7ae3d3d6b60c',
//   subscribeKey: 'sub-c-d1d28b54-74c3-11e7-91f5-0619f8945a4f'
// });
// var pubnub2 = new PubNub({
//   publishKey: 'pub-c-ceee2bc6-11d3-427d-9aa4-7ae3d3d6b60c',
//   subscribeKey: 'sub-c-d1d28b54-74c3-11e7-91f5-0619f8945a4f'
// });

// var keliling = [];
// var keliling_tmp = [];
// var unique_keliling_tmp = [];
// pubnub.subscribe({channels: [pnChannel]});
// pubnub2.subscribe({channels: [pnChannel2]});

// appennd backgroun hujau
// $$(".navbar-inner").addClass("bg-green");


// by Try Setyo Utomo
 $$(document).on('click', '.btn-transfer', function (e) {
   if (window.localStorage.getItem("isLogged")!="1"){
     myApp.loginScreen();
     exit;

  }else{
        mainView.router.load({
        url:"transfer.html",
        query:{
          id: "1"
        }    
      });
  }
 });

 $$(document).on('click', '.btn-history', function (e) {
   if (window.localStorage.getItem("isLogged")!="1"){
     myApp.loginScreen();
     exit;

  }else{
        mainView.router.load({
        url:"history.html",
        query:{
          id: "1"
        }    
      });
  }
 });

  $$(document).on('click', '.btn-saved', function (e) {
   if (window.localStorage.getItem("isLogged")!="1"){
     myApp.loginScreen();
     exit;

  }else{
        mainView.router.load({
        url:"savedpromo.html",
        query:{
          id: "1"
        }    
      });
  }
 });




 // end by try Setyo Utomo

function setLoginRainbow(jabberID)
{

	if (jabberID=="123"){
	return false;
	}

	var server = "http://gis.35utech.com";
	$$.ajax({
		url : server+"/index.php?r=gis/LoginRainbow",
		data : "jabberID="+jabberID,
		beforeSend : function(e){
		},
		success : function(r){

			var  data = JSON.parse(r);
			//alert(JSON.stringify(data));
			window.localStorage.setItem("isfirstlogin", data.isfirstlogin);
			window.localStorage.setItem("level", data.level);
			window.localStorage.setItem("isLogged", 1);
			window.localStorage.setItem("username", data.username);
			// window.localStorage.setItem("pemilik", data.ukm.pemilik);
//			window.localStorage.setItem("tanggal_akhir", data.ukm.tanggal_akhir);
			window.localStorage.setItem("ukm_id", data.ukm.id);
			window.localStorage.setItem("ukm_tipe", data.ukm.tipe);
			window.localStorage.setItem("ukm_nama", data.ukm.nama);
			window.localStorage.setItem("sisa", data.ukm.sisa);
			window.localStorage.setItem("point", data.poin.poin);
			window.localStorage.setItem("minimal", data.ukm.minimal);
			window.localStorage.setItem("delivery", data.ukm.delivery);
			var array_temp = [];
			$$.each(data.kategori_favorite,function(i,v){
				array_temp.push(v.jenis);
			});

			window.localStorage.setItem("kategori_favorite",JSON.stringify(array_temp));

			var array_temp = [];
			$$.each(data.td_favorite,function(i,v){
			array_temp.push(v.ukm_id);
			});

			window.localStorage.setItem("td_favorite",JSON.stringify(array_temp));
			cekLevel();
		}

	});

}



//jika menerima pubnub apa yang akan dilakukan ?
function getDistance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var radlon1 = Math.PI * lon1/180
    var radlon2 = Math.PI * lon2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
}  

// Pusher.logToConsole = false;
// var pusher = new Pusher('3d0c6896d79a0df7db6e', {
//   cluster: 'ap1',
//   encrypted: true
// });

// var channel = pusher.subscribe('my-channel');
// channel.bind('my-event', function(data) {
//   // alert(data.message);


//   if (data.tipe=="notif_panggilan_approved"){
//     console.log("1"+data.username);
//     console.log("2"+window.localStorage.getItem("username"));
//     if (data.username==window.localStorage.getItem("username")){
//         // jika orang manggil maka 
//        myApp.addNotification({
//         title: 'Halo',
//         message: data.pesan
//        });
//        var angka = parseInt($$(".order-qty-notif").html()) + 1;
//        $$(".order-qty-notif").html(angka);
//        $$(".order-qty-notif").css("display","inline-block");
//     }


//   }  

//   if (data.tipe=="notif_panggilan_selesai"){
//     // console.log("1"+data.username);
//     // console.log("2"+window.localStorage.getItem("username"));
//     if (data.username==window.localStorage.getItem("username")){
//         // jika orang manggil maka 
//        myApp.addNotification({
//         title: 'Halo',
//         message: data.pesan
//        });
//        var angka = parseInt($$(".order-qty-notif").html()) + 1;
//        $$(".order-qty-notif").html(angka);
//        $$(".order-qty-notif").css("display","inline-block");
//     }


//   }


//   if (data.tipe=="notif_panggilan"){
//     if (data.ukm_id==window.localStorage.getItem("ukm_id")){
//       myApp.addNotification({
//         title: 'Panggilan Baru',
//         message: 'Terdapat Pengguna yang memanggil!'
//       });
//       // $$(".notification-panggilan").addClass("blink_me");
//         var angka = parseInt($$(".panggilan-qty-notif").html()) + 1;
//        $$(".panggilan-qty-notif").html(angka);
//        $$(".panggilan-qty-notif").css("display","inline-block");
//       // $$(".bulat-notif").show();
//        audio.play();
//       try{

//       var pesan ;
//       if (data.pesan==""){
//          pesan = 'Pengguna yang memanggil kamu, ayo datangi dan dapatkan poin!'
//       }else{
//         pesan = data.pesan;
//       }

//       cordova.plugins.notification.local.schedule({
//           id: 1,
//           title: data.judul,
//           text: pesan,
//           foreground: true,
//           vibrate: true
//       });
//       cordova.plugins.notification.local.on('click', function (notification, eopts) {
//          // $$(".notification-panggilan").trigger("click");
//       });
//       // cordova.plugins.notification.local.schedule({
//       //     title: 'Panggilan Baru',
//       //     text: 'Terdapat Pengguna yang memanggil!',
//       //     foreground: true,
//       //     // attachments: ['file://img/rb-leipzig.jpg'],
//       //     vibrate: true,
//       //     icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH-eMnerHHuXv9egrw'
//       // });


//         // actions: [
//         //     { id: 'yes', title: 'Yes' },
//         //     { id: 'no',  title: 'No' }
//         // ]

     
//       var mp3URL = getMediaURL("sound/phone.mp3");
//       var media = new Media(mp3URL, null, mediaError);
//       media.setVolume(1.0);
//       media.play();
//       }catch(err){
//         // alert(err);
//       }
      
//       getListPanggilan();
//      } // ada
//   } // if ada notifikasi 



//   if (data.tipe=="notif_panggilan_sudahada"){
//      if (data.username==window.localStorage.getItem("username")){
//         // jika orang manggil maka 
//        myApp.addNotification({
//         title: 'Ayo Datangi',
//         message: data.pesan
//        });

//          try{

//            cordova.plugins.notification.local.schedule({
//               id: 1,
//               title: 'Ayo Datangi',
//               text: data.pesan,
//               foreground: true,
//               vibrate: true
//           });
//           cordova.plugins.notification.local.on('click', function (notification, eopts) {
//                // myApp.addNotification({
//                //  title: 'Ayo Datangi',
//                //  message: data.pesan
//                // });
//                console.log("ato");
//           });



//          }catch(err){
//           console.log(err);
//          }


//      }

//   }


// });
function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}
function mediaError(e) {
    // alert('Media Error');
    if (e.code!=0){   
      alert(JSON.stringify(e));
    }
}


// var redraw = function(payload) {
//   // alert("masuk");
//   if (payload.message.tipe=="notif_panggilan"){
//     if (payload.message.ukm_id==window.localStorage.getItem("ukm_id")){
      
  
    
//       // navigator.notification.beep(10);
//     }
//   }
//   var lx = window.localStorage.getItem("level");
//   // console.log("akurasi "+payload.message.accuracy);
//   // console.log("lat lng "+payload.message.lat+ " - "+payload.message.lng);
//   var distance = getDistance($$("#last_lat").val(),$$("#last_lng").val(),payload.message.lat,payload.message.lng,"K");
//   if (distance<=1){ // jika di bawah 1 KM
//   if (payload.message.accuracy<50){
//   if (1==1){
//         // alert();
//           keliling_tmp.push(payload.message.name);
//           unique_keliling_tmp.push(payload.message.name);
//           // console.log("masuk "+payload.message.name);
         
//           keliling_tmp = keliling_tmp.filter( function( item, index, inputArray ) {
//                    return inputArray.indexOf(item) == index;
//           });

//           unique_keliling_tmp = unique_keliling_tmp.filter( function( item, index, inputArray ) {
//                    return inputArray.indexOf(item) == index;
//           });
//            //  myApp.addNotification({
//            //  message:payload.message.lat 
//            // });

//     // console.log(" keliling"+keliling);
//           if (keliling[payload.message.name]==null){
//           var url  = server+"/icon/keliling.png";
//           var icon = {
//             url: url, // url
//             scaledSize: new google.maps.Size(30, 30), // scaled size
//             origin: new google.maps.Point(0,0), // origin
//             labelOrigin: new google.maps.Point(30, 40),
//             anchor: new google.maps.Point(0, 0) // anchor
//           };

//            keliling[payload.message.name] = new google.maps.Marker({
//               position : new google.maps.LatLng(payload.message.lat ,payload.message.lng ),
//                  map : map,
//                  title: "test",
//                   label: {
//                       text: payload.message.ukm_nama,
//                       color: 'black',
//                   },
//                  animation: google.maps.Animation.DROP,
//                  icon : icon
//             });




//             var me = keliling[payload.message.name];
//             var x  = new google.maps.InfoWindow();

//             var panggil = "";
//             if (window.localStorage.getItem("isLogged")=="1"){
//               if (payload.message.ukm_id==window.localStorage.getItem("ukm_id")){
//                 panggil = " Usahaku ";
//               }else{
//                 panggil = "<div ukm_id="+payload.message.ukm_id+" class='btn-panggil-ukm'><i class='fa fa-volume-up fa-2x'></i>&nbsp;&nbsp;panggil</div>";
//                 // panggil += "<div ukm_id="+payload.message.ukm_id+" class='btn-panggil-ukm'><i class='fa fa-info fa-2x'></i>&nbsp;&nbsp;panggil</div>";

//               }          
//             }else{
//               panggil = "<div ukm_id="+payload.message.ukm_id+" class='btn-panggil-login'><i class='fa fa-volume-up fa-2x'></i>&nbsp;&nbsp;panggil</div>";
//             }
            
//              var list = "<table>"+
//             "<tr><td colspan='2' style='text-align:center '>"+
//             "<a href='tabs-swipeable.html?id="+payload.message.ukm_id+"'' data-panel='right' class='open-detail'>"+
//             ""+payload.message.ukm_nama+"</a>"+
//             "<br><hr></td></tr>"+
//             "<tr><td colspan='2'>"+panggil+"</td></tr>"+
//             "</table>";
           

      


//             google.maps.event.addListener( me , 'click', (function( me ) {    
//                 return function() { 
//                   // var konten
//                   x.setContent(list);
//                   x.open(map, me);   

//                 }
//              })(me) );



//               // console.log("menerima PubNub ");

//           }else{
//               // console.log(payload.message.lat +" "+payload.message.lng );


//             // console.log("tmp "+keliling_tmp);
          
//             // console.log("u "+unique_keliling_tmp);
//             // console.log(" sementara "+keliling_tmp);

//             if(keliling_tmp.indexOf(payload.message.name) != -1) // jika di dalam keliling ada nama user
//             { 
//               var pos = new google.maps.LatLng(payload.message.lat ,payload.message.lng );
//               keliling[payload.message.name].setPosition(pos);
//               // console.log("edit");
//             }

            

             

            
//                 // if (payload.message.name!=null){ 
//                 // }


//             // $$.each(keliling_tmp,function(i,v){
//             //     // console.log(v);if ()
//             //     if (v!=payload.message.name){
//             //       keliling[payload.message.name].setMap(null);
//             //     }
//             // });


//           // keliling.setMap(null);


//       }


//     }
//   }//end of accuracy
//   }//end cek distance
// };



// pubnub.addListener({
//   message:redraw
// });


//kirim pesan ke admin
// pubnub2.addListener({
//   message:function(me){
//   if (window.localStorage.getItem("username")=="admin"){  // jika admin maka
    

//       myApp.addNotification({
//           message: me.message.berita,
//           buttonkey:  {
//               text: 'Tutup',
//           },
//           hold : 2000
//       });
//     }
//   }
  
// });





if(window.localStorage.getItem("isLogged") == 1) {
  isLogged = window.localStorage.getItem("isLogged");
  Logged_username = window.localStorage.getItem("username");
  $$("#User_username").html(Logged_username);

}else{          
  isLogged = 0;
  Logged_username = 0;
}


var welcomescreen_slides = [
  {
    id: 'slide0',
    picture: '<i class="fa fa-map fa-5x"></i>',
    text: 'Selamat Datang di Aplikasi Tukang Dagang , Aplikasi yang dapat memberikan informasi mengenai Tukang Dagang sekitarmu'
  },
  {
    id: 'slide1',
    picture: '<i class="fa fa-map-marker fa-5x"></i>',
    text: 'Memudahkan Anda untuk Menemukan Tukang Dagang  di sekitar anda, membuat hidup menjadi lebih mudah .'
  },
  {
    id: 'slide2',
    picture: '<i class="fa fa-location-arrow fa-5x"></i>',
    text: 'Bantu kami untuk mengumpulkan Tukang Dagang sekitar anda, dan dapatkan poin dari setiap pengajuan Tukang Dagang yang anda ajukan  '
  },
  {
    id: 'slide3',
    picture: '<i class="fa fa-thumbs-up fa-5x"></i>',
    text: 'Terimakasih telah mengunduh aplikasi ini ! Selamat menggunakan aplikasi ini .<br><br><center><a style="width:50%;color:white" class="button button-raised bg-orange tutorial-close-btn" id="" href="#">Selesai</a></center>'
  }
];

var options = {
  'bgcolor': '#0da6ec',
  'fontcolor': '#fff'
}




// ======================================================================================== NEW


 document.addEventListener("deviceready", onDeviceReady, false);
 document.addEventListener("onResume", onResume, false);

// document.addEventListener("backbutton", onBackKeyDown, false);


function onResume(e) {
  // myApp.alert("resume");
}
var clickClose = 0;
// function onBackKeyDown(e) {
//    e.preventDefault();
//    if (mainView.activePage.name=="home-index"){
//     initMap();
//     }
// //     mainView.router.back();
// }
//     if ($$(".login-screen").hasClass("modal-in"))
//       $$(".close-login").click();

//     myPhotoBrowserStandalone.close();
//     // loginscreen:opened  
//      // $$(document).on('loginscreen:opened', '.login-screen', function (e) {

//     // if (clickClose>0){
//     //   if (mainView.activePage.name=="home-index"){
//     //       myApp.addNotification({
//     //           message: "Tekan lagi untuk keluar",
//     //           buttonkey:  {
//     //               text: 'Tutup',
//     //               // color: 'lightgreen'
//     //           },
//     //           hold : 1000
//     //       });
//     //     clickClose = 0;
//     //   }
//     // }
//     // clickClose=1;

//      // });

//     // if (backbtn==0){
//     //   backbtn++;
//     //   myApp.alert("Press again to exit");
//     //   setTimeout(function() {backbtn=0}, 5000);
//     // }else{
//     //   navigator.app.exitApp();
//     // }
   
//  }

function onOffline() {
  try{ 
   // navigator.notification.alert(
   //  'Sorry your internet connection is not working, please enable it !', // message
   //  onBackKeyDown, // callback
   //  'Settings', // title
   //  'Done' // buttonName
   //  );
  alert("offline");
  return false;
  }catch(ee){
    alert(ee);
  }
}
    // alert(mainView.activePage);
// function pubnub(){




   // window.lat = 37.8199;
   // window.lng = -122.4783;

  


      // alert(payload.message.lat);

      // lat = payload.message.lat;
      // lng = payload.message.lng;
      //  console.log(lat+" "+lng);
      // map.setCenter({lat:lat, lng:lng, alt:0});
      // mark.setPosition({lat:lat, lng:lng, alt:0});
      // lineCoords.push(new google.maps.LatLng(lat, lng));
      // var lineCoordinatesPath = new google.maps.Polyline({
      //   path: lineCoords,


      //   geodesic: true,
      //   strokeColor: '#2E10FF'
      // });
      
      // lineCoordinatesPath.setMap(map);
   
  
  

  


  // alert(l);





function onDeviceReady() {

    
    // initMap();
    cekLevel();
    getSlider();
    $('#realtime-on').hide();
    if (window.localStorage.getItem("tracking_client")=="realtime"){
      $$(".radio-realtime").attr("checked",true);
      $$("#realtime-on").css("display","inline-flex");
    }else{
      $$(".radio-refresh").attr("checked",true);
      $$("#realtime-on").hide();
    }
    

    if (window.localStorage.getItem("isLogged")=="1"){
         $$(".btn-user-out").show();
    }else{
         $$(".btn-user-out").hide();
    }
 

  var backbtn = 0;
  try{
    document.addEventListener("backbutton", function(e){

      if ($$(".login-screen").hasClass("modal-in")){
          $$(".close-login").click();
          exit;
      }

      if ($$(".panel-right").hasClass("active")){
        myApp.closePanel("right");
          // $$(".close-login").click();
          exit;
      }

      if ($$(".panel-left").hasClass("active")){
        myApp.closePanel("left");
          // $$(".close-login").click();
          exit;
      }

      if ($$(".welcomescreen-container")[0]){
        $$(".welcomescreen-closebtn").click();
        exit;
      }



       if(mainView.activePage.name=="home-index"){
           e.preventDefault();

         if (backbtn==0){
//              backbtn++;
//               myApp.addNotification({
//                message: "Tekan lagi untuk keluar",
//                buttonkey:  {
//                    text: 'Tutup',
//                    // color: 'lightgreen'
//                },
//                hold : 3000
//             });
//
//            setTimeout(function() {backbtn=0}, 3000);
                Android.exitAp();
          }else{
            navigator.app.exitApp();
          }


         

       }
       else {
        mainView.router.back();
        myPhotoBrowserStandalone.close();
       }
    }, false); /// end back button

    
   // Android only: check permission
    function hasReadPermission() {
      window.plugins.sim.hasReadPermission(successCallback, errorCallback);
    }

    // Android only: request permission
    function requestReadPermission() {
      window.plugins.sim.requestReadPermission(successCallback, errorCallback);
    }
   window.plugins.sim.getSimInfo(successCallback, errorCallback);
   function successCallback(result) {
    // alert(JSON.stringify() );
    $$(".text-username").val(result.cards[0].phoneNumber);
   }

    function errorCallback(error) {
       // myApp.addNotification({
       //      message: "cannot get number"+JSON.stringify(error),
       //      buttonkey:  {
       //          text: 'Tutup',
       //          // color: 'lightgreen'
       //      },
       //      hold : 1000
       //  });
      // alert(JSON.stringify(error));
    }
   document.addEventListener("offline", this.onReceivedOffline, false);

    // checkGPS();
       if (window.cordova) {
      cordova.plugins.diagnostic.isLocationEnabled(function(enabled) {
        // alert("masuk");
        if (!enabled){
          myApp.confirm('Silahkan Aktifkan GPS', 'GPS Tidak Aktif', 
            function () {
             cordova.plugins.diagnostic.switchToLocationSettings();

            //start
            var options = {enableHighAccuracy: true,maximumAge: 3600000}
             var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
             function onSuccess(position) {
              // alert

                $$("#last_lat").val(position.coords.latitude);
                $$("#last_lng").val(position.coords.longitude);
                // alert(position.coords.latitude);
             };
             function onError(error) {
                alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
             }
             //ending
              // myApp.showPreloader();
            },
            function () {
              // alert('tidak aktif');

                // alert('Latitude: '          + position.coords.latitude          + '\n' +
                //    'Longitude: '         + position.coords.longitude         + '\n' +
                //    'Altitude: '          + position.coords.altitude          + '\n' +
                //    'Accuracy: '          + position.coords.accuracy          + '\n' +
                //    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                //    'Heading: '           + position.coords.heading           + '\n' +
                //    'Speed: '             + position.coords.speed             + '\n' +
                //    'Timestamp: '         + position.timestamp                + '\n');
              



            }
          );



         
        
        }else { // jika enabled
          // alert("aktif");
          $$(".current-location").trigger("click");

        }
            
        


      }, function(error) {
        console.log(error);
        // myApp.alert(error)
          // alert("The following error occurred: " + error);
      });



    }// end if window cordova

    //start
    var options = {enableHighAccuracy: true,maximumAge: 3600000}
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    function onSuccess(position) {
      $$("#val-lat").val(position.coords.latitude);
      $$("#val-lon").val(position.coords.longitude);
      // $$(".current-location").trigger("click");
    };
    function onError(error) {
      // alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
    //ending

   




  }catch(ee){
    console.log(ee);
    // myApp.addNotification({
    //   message :ee
    // });
    // myApp.alert(ee);
  }
}


// create by try setyo utomo
 function getSlider(){
      var username = "";
      if (window.localStorage.getItem("isLogged")=="1"){ 
        username = window.localStorage.getItem("username");
      }else{
        username = "null";
      }
      $$.ajax({
          url : server+"/index.php?r=jenius/showslide",
          // data : "username="+username,
          success : function(r){

            // alert(r);
              var data = JSON.parse(r);


              var string; 
              if (data.length!=0){
                var i = 0;
                var url_first = "";

               $$.each(data.result,function(i,v){
                // alert(i);
                // var status_hide;
                // if (v.tipe=="3"){
                //   status_hide = ";display:none;";
                // }else{
                //   status_hide = ";display:block;";
                // }
                
                // if (i==0){
                //   url_first = server+'/images/bast/'+v.gambar;
                // }
                // alert(v.id);
                // alert(JSON.stringify(v));
                string = '<div class="swiper-slide" > '+
                
                '<div '+
                'style="background-size:100%;background-repeat:no-repeat;height: 100%;width: 100%;margin-top: -17px;'+"background-image:url('"+v.image+"')"+'"'+'>'+
           
                '<center style="height:220px;background-color: rgba(255,255,255,0.01);padding-bottom: 9px;">'+
                '<div style="background-color:rgba(255,255,255,0);"><H2></H2> '+               
                // ' <H4> '+v.alamat+'</H4> '+                
                '<p class="buttons-row" >'+
                '&nbsp;&nbsp;'+
                // '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+v.lat+','+v.lon+'"  style="width:10%;background-color:transparent!important" class=" external button button-big button-fill button-raised bg-orange">'+
                // '<i style="position: relative;top: 5px;color:#D85404;font-size:30px"  class="fa fa-google"></i>'+
                // '</a>'+
                '</p>'+
                '</div></center>'+ 
                 '</div>'+
                // ' <a class="button button-big button-fill button-raised color-orange "> </a> '+ 
                               

                '</div>';

                $$("#iklan-wrapper").append(string);
                i++;

               });
              }
              else{
                // 'style="background-image:url('+"'/img/iklan disini.png'"+')" >'+
                  var string = '<div class="swiper-slide" > '+
                    '<h1 style="color:black">Tidak ada iklan tersedia</h1>'+
                  '</div>';

                  $$("#iklan-wrapper").append(string);
                }

                var mySwiper1 = new Swiper('.swiper-1', {
                  pagination:'.swiper-1 .swiper-pagination',
                  spaceBetween: 50,
                  preloadImages: false,
                  lazyLoading: true
                });
                // alert("123");

                // $$(".swiper-slide-active").css("background-image",url_first);


              }
        });

    }


 $$(document).on('click', '.notification-panggilan', function (e) {
    audio.pause();
    audio.currentTime = 0;
    $$(this).removeClass("blink_me");
 });


$$(document).on('page:back', '.page[data-page="edit-umkm"]', function (e) {
 // alert("refresh tukang dagang");
;
});
$$(document).on('page:init', '.page[data-page="edit-umkm"]', function (e) {
  getkategori(e.detail.page.query.data_kategori);

  $$("#Ukm_nama").val(e.detail.page.query.data_nama);
  $$("#Ukm_pemilik").val(e.detail.page.query.data_pemilik);
  $$("#Ukm_id").val(e.detail.page.query.data_ukm_id);
  $$("#Ukm_tipe").val(e.detail.page.query.data_tipe);
  $$("#Ukm_kendaraan").val(e.detail.page.query.data_kendaraan);
  


     $$('.form-edit-ukm').on('form:success', function (e) {

        var xhr = e.detail.xhr; // actual XHR object

        var data = e.detail.data; // Ajax response from action file
        data = JSON.parse(data);
        if (data.success==false){
          $$.each(data.err,function(i,v){  
             myApp.addNotification({
                  message: v,
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
            });
        }else{
          getAllUMKM();
          mainView.router.back();
        }
      });
  




});

 $$(document).on('click', '.td-edit', function (e) {
  var data_ukm_id = $$(this).attr("ukm-id");
  var data_kategori = $$(this).attr("data_kategori");
  var data_nama = $$(this).attr("data_nama");
  var data_pemilik = $$(this).attr("data_pemilik");
  var data_tipe = $$(this).attr("data_tipe");
   mainView.router.load({
    url:"edit-umkm.html",
    query:{
      data_ukm_id: data_ukm_id,
      data_kategori: data_kategori,
      data_nama: data_nama,
      data_pemilik: data_pemilik,
      data_tipe: data_tipe
    }    
  });

   

  // var buka = e.detail.page.query.buka;
  // var tutup = e.detail.page.query.tutup;
  // var is_tutup = e.detail.page.query.is_tutup;
  // var hari_id = e.detail.page.query.hari_id;

  // $$("#UkmOp_ukm_hari").val(hari_id);
  // $$("#UkmOp_ukm_id").val(id);
  // $$("#UkmOp_jam_buka").val(buka);
  // $$("#UkmOp_jam_tutup").val(tutup);

  // if (is_tutup==1){
  //   $$("#UkmOp_is_tutup").attr("checked",true);
  // }else{
  //   $$("#UkmOp_is_tutup").removeAttr("checked");
  // }


  //    $$('.form-add-produk').on('form:success', function (e) {

  //       var xhr = e.detail.xhr; // actual XHR object

  //       var data = e.detail.data; // Ajax response from action file
  //       // alert(data);
  //       data = JSON.parse(data);
  //       if (data.success==false){
  //         $$.each(data.err,function(i,v){  
  //            myApp.addNotification({
  //                 message: v,
  //                 buttonkey:  {
  //                     text: 'Tutup',
  //                     // color: 'lightgreen'
  //                   }
  //             });
  //           });
  //       }else{
  //         cariById(window.localStorage.getItem("ukm_id"));
  //         mainView.router.back();
  //       }
  //     });
  


 });


 if (window.localStorage.getItem("is_tracking")=="true"){
    $("#check-tracking2").attr("checked",true);
 }else{
    $("#check-tracking2").removeAttr("checked");
 }

 $$(document).on('click', '#check-tracking', function (e) {

 var checked_tracking =window.localStorage.getItem("is_tracking");
  if (checked_tracking=="true") {
    window.localStorage.setItem("is_tracking","false");
  }else{
    window.localStorage.setItem("is_tracking","true");
  }  
// setTimeout(function(){
//   window.location.reload();
// },1000);
  // alert(window.localStorage.getItem("is_tracking"));

 });

$$(document).on('change','#Ukm_tipe', function (e) {
  var nilai = $$(this).val();
  if (nilai==3){
    $$(".kendaraan-section").show();
    $$("#wrapper-map-area").hide();
    $$("#li-alamat").hide();
  }else{
    $$("#wrapper-map-area").show();
    $$(".kendaraan-section").hide();
    $$("#li-alamat").show();
  }
});

 $$(document).on('click', '.btn-tracking-ukm', function (e) {
   if (window.localStorage.getItem("isLogged")!="1"){
     $("#defaultReal").realperson();
     myApp.loginScreen();
     exit;

  }
      var ukm_id = $$(this).attr("ukm_id");
      $$.ajax({
          url : server+"/index.php?r=gis/updateTrackingStatus",      
          data : "username="+window.localStorage.getItem('username')+"&ukm_dest="+ukm_id,
          beforeSend : function(){
             myApp.hideIndicator();
          },
          success : function(r){  
          var data = JSON.parse(r);
          if (data.success){
            console.log("Updated");
            } else{

          }       
          },error: function(e){
           // alert(JSON.stringify(e));
          }
    });
 }); 


 $$(document).on('click', '.btn-panggil-ukm', function (e) {

  if (window.localStorage.getItem("isLogged")!="1"){
     $("#defaultReal").realperson();
     myApp.loginScreen();
     exit;

  }

  var ukm_id = $$(this).attr("ukm_id");
  var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
   // var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
   function onSuccess(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      var username = window.localStorage.getItem("username");
       myApp.prompt(' Silahkan isi Pesan Pemanggilan / Pesanan  kepada Tukang Dagang  ', 'Panggil dan Kirim pesan',
          function (value) {
            var pesan;
            if (value==""){
             pesan = "Tidak ada pesan";
            }else{
              pesan = value;
            }

            // alert(pesan);

            $$.ajax({
              url : server+"/index.php?r=Ukm/panggilUkm",
              data : "username="+username+"&pesan="+pesan+"&ukm_id="+ukm_id+"&lat="+lat+"&lng="+lng,
              type : "POST",
              success : function(r){  
                 var json = JSON.parse(r);
                 if (json.success==true){
                   myApp.addNotification({
                      message: json.message,
                      buttonkey:  {
                        text: 'Tutup',
                      }
                      // hold : 2000
                   });   
                 }else{
                   myApp.addNotification({
                      message: json.message,
                      buttonkey:  {
                        text: 'Tutup',
                      }
                      // hold : 2000
                   });   

                   // $$.each(json.message,function(i,v){  
                   //   myApp.addNotification({
                   //        message: v,
                   //        buttonkey:  {
                   //            text: 'Tutup',
                   //            // color: 'lightgreen'
                   //          }
                   //    });
                    // });
                 }
                 // if (json.success){
                 //  pubnub2.publish({channel:pnChannel, 
                 //    message: { 
                 //      tipe : "notif_panggilan",
                 //      name : window.localStorage.getItem("username"),
                 //      ukm_id : ukm_id
                 //    }
                 //  });  
                  
                 // } 
              }
            });

        });
   }
   function onError(error) {
     // myApp.alert('GPS, belum dinyalakan');
     // window.location.reload();
      // alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }



 });
 $$(document).on('click', '.close-picker-navigasi', function (e) {

    window.location.reload();
 });


function intervalTrigger() {
    loader_refresh = false;
    $$(".centerMarker").trigger("click");
}
 var refresh_realtime = 0;
 $$(document).on('click', '.close-picker-refresh', function (e) {
   var value = 0;
   if ($$(".radio-refresh").is(":checked") ){
       
        loader_refresh = true;
        var pos ;
        pos = {
          lat: parseFloat( $$("#val-lat").val() ),
          lng: parseFloat($$("#val-lon").val())
        };
        // alert()/
        tampil_terdekat = true;
        buka_left = true;
        loader_refresh = true;
        getDataNearest(pos.lat,pos.lng);

        $('#realtime-on').hide();
        
   }else if ($$(".radio-realtime").is(":checked") ) {
      value = "realtime";
      buka_left = false;
      $('#realtime-on').css("display","inline-flex");
   }
   window.localStorage.setItem("tracking_client",value);

   // if (window.localStorage.getItem("tracking_client")=="realtime"){
   //  setInterval(intervalTrigger, 3000);
   // }else{ 
   //  $(".centerMarker").trigger("click");
   // }


    // alert("123");
    // alert(window.localStorage.getItem("tracking_client"));
 });



 $$(document).on('click', '.btn-data-umkm', function (e) {
    mainView.router.load({
      url:"data-pedagang.html" 
    });
    myApp.closePanel("right");

})
 function tipeTukangDagang(id){
  if (id==1){
    return "Tenda";
  }
  else if (id==2){
    return "Bangunan";    
  }else{
    return "Keliling";    
  }
 }
function deleteTukangDagang(ukm_id){
   
   myApp.confirm(' Hapus ? ','Konfirmasi', function () {
        $$.ajax({
            url : server+"/index.php?r=Ukm/hapusUkm",
            data : "id="+ukm_id,
            success : function(r){
            // alert(r);
            var json = JSON.parse(r);
            if (json.success==true){
                $$(".md-td[ukm_id='"+ukm_id+"']").remove();
                myApp.addNotification({
                    message: "Terhapus ",
                    buttonkey:  {
                        text: 'Tutup',
                        // color: 'lightgreen'
                      }
                });
            }else{
                alert(r);
            }

            }
        });
    });

}

function getAllUMKM(){
   $$("#ul-umkm-list").html("");
   $$.ajax({
    url : server+"/index.php?r=ukm/getAllUMKM",
    // data : "username="+window.localStorage.getItem("username"),
    success : function(r){
      // alert(r);
        var data = JSON.parse(r);

        $$.each(data,function(i,data){
          // alert(data);
          var html =  '<li ukm_id="'+data.id+'"  style="top: 0px;" class="md-td swipeout transitioning">'+
          '<div class="swipeout-content " style="">'+
          '<a href="#" class="item-link item-content">'+
          '<div class="item-inner">'+
          '<div class="item-title-row">'+
          '<div class="item-title">'+data.nama+'</div>'+
          '<div class="item-after">'+data.nama_kategori+' </div>'+
          '</div>'+
          '<div class="item-subtitle">'+tipeTukangDagang(data.tipe)+'</div>'+
          '<div class="item-text">'+data.username+'</div>'+
          '</div>'+
          '</a>'+
          '</div>'+
          '<div class="swipeout-actions-right">'+
          '<a ukm-id="'+data.id+'" data_kendaraan="'+data.kendaraan+'"  data_tipe="'+data.tipe+'" data_kategori="'+data.nama_kategori+'" data_nama="'+data.nama+'" data_pemilik="'+data.pemilik+'"   class="td-edit demo-mark bg-green  " style="left: 0px;"><i class="fa fa-pencil" ></i></a>'+
          '<a ukm-id="'+data.id+'" onClick="deleteTukangDagang('+data.id+')"   class="td-delete demo-mark bg-red  " style="left: 0px;"><i class="fa fa-times" ></i></a>'+
          '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="pending-info demo-mark bg-orange  " style="left: 0px;"><i class="fa fa-info" ></i></a>'+
          // '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="external demo-mark bg-blue  " style="left: 0px;"><i class="fa fa-marker" ></i></a>'+
           // '<a onClick="getDirection('+data.lat+','+data.lon+');" >'+
           //  '<i class="material-icons  md-30">directions</i>'+
           //  '</a>'+

          '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+data.lat+','+data.lon+'" lat="'+data.lat+'" class="link external bg-blue"  lon="'+data.lon+'" class="" style="left: 0px;"><i class="material-icons  md-24 ">directions</i> <i class="fa fa-google"></i></a>'+

          '</div>'+
          '</li>';

          $$("#ul-umkm-list").append(html);
        });

    },error: function(e){
      alert(JSON.stringify(e));
    }
    });
}
$$(document).on('page:init', '.page[data-page="umkm-list"]', function (e) {
  getAllUMKM();
});


 $$(document).on('click', '.tutorial-close-btn', function (e) {
    welcomescreen.close();
    window.localStorage.setItem("isFirstLook",null);
    getDataNearest($$("#val-lat").val(), $$("#val-lon").val());

 });

//ajax tambah produk
 $$(document).on('page:init', '.page[data-page="add-produk"]', function (e) {
     var nama =e.detail.page.query.nama;
     var keterangan =e.detail.page.query.keterangan;
     var harga =e.detail.page.query.harga;
     var product_id =e.detail.page.query.p_id;
     var tersedia =e.detail.page.query.tersedia;


     if (tersedia=="1"){
      $$("#check-tersedia").attr("checked","true");
     }else{
      $$("#check-tersedia").removeAttr("checked");
     }

     if (product_id==null || product_id==""){
       $$("#wrapper-gambar").hide();
     } else{
       $$("#wrapper-gambar").show();      
     }

     $$("#Produk_id").val(product_id);
     $$("#Produk_nama").val(nama);
     $$("#Produk_harga").val(harga);
     $$("#Produk_keterangan").val(keterangan);

    if (imageExists(server+"/images/product/"+product_id+".jpg")){
      img = server+"/images/product/"+product_id+".jpg";
    }else{
      img = "http://is.tnu.edu.vn/wp-content/themes/motive/images/no_image.jpg";
    }

     $$("#Produk_gambar").attr("src",img);
    
     // alert(window.localStorage.getItem("ukm_id") );
      $$("#Produk_ukm_id").val(window.localStorage.getItem("ukm_id") );
     
       $$('.form-add-produk').on('form:success', function (e) {
        // alert("123");
          var xhr = e.detail.xhr; // actual XHR object

          var data = e.detail.data; // Ajax response from action file
          // alert(data);
          data = JSON.parse(data);
          if (data.success==false){
            $$.each(data.err,function(i,v){  
               myApp.addNotification({
                    message: v,
                    buttonkey:  {
                        text: 'Tutup',
                        // color: 'lightgreen'
                      }
                });
              });
          }else{
            cariById(window.localStorage.getItem("ukm_id"));
            mainView.router.back();
          }
        });
 });
//ajax tambah loker
 $$(document).on('page:init', '.page[data-page="add-loker"]', function (e) {
     var nama =e.detail.page.query.nama;
     var keterangan =e.detail.page.query.keterangan;
     var l_id =e.detail.page.query.l_id;

       $$("#UkmLoker_id").val(l_id);
       $$("#UkmLoker_nama").val(nama);
       $$("#UkmLoker_keterangan").val(keterangan);


       $$("#UkmLoker_ukm_id").val(window.localStorage.getItem("ukm_id") );
       $$('.form-add-loker').on('form:success', function (e) {
 
          var xhr = e.detail.xhr; // actual XHR object

          var data = e.detail.data; // Ajax response from action file
          // alert(data);
          data = JSON.parse(data);
          if (data.success==false){
            $$.each(data.err,function(i,v){  
               myApp.addNotification({
                    message: v,
                    buttonkey:  {
                        text: 'Tutup',
                        // color: 'lightgreen'
                      }
                });
              });
          }else{
            cariById(window.localStorage.getItem("ukm_id"));
            mainView.router.back();
          }
        });
 });


 $$(document).on('page:init', '.page[data-page="home-index"]', function (e) {
  // var ptrContent = $$('.pull-to-refresh-content');
  // ptrContent.on('ptr:refresh', function (e) {
  //   myApp.pullToRefreshDone();
  // });
  // window.localStorage.setItem("tampil_terdekat",false);
  // tampil_terdekat = false;
  // initMappull-to-refresh
});
function getPosition() {

   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
  
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {

      // alert('Latitude: '          + position.coords.latitude          + '\n' +
      //    'Longitude: '         + position.coords.longitude         + '\n' +
      //    'Altitude: '          + position.coords.altitude          + '\n' +
      //    'Accuracy: '          + position.coords.accuracy          + '\n' +
      //    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
      //    'Heading: '           + position.coords.heading           + '\n' +
      //    'Speed: '             + position.coords.speed             + '\n' +
      //    'Timestamp: '         + position.timestamp                + '\n');

      $$("#val2-lat").val(position.coords.latitude);
      $$("#val2-lon").val(position.coords.longitude);
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // return pos;
      // map.setCenter(pos);
   };

   function onError(error) {
     // myApp.alert('GPS, belum dinyalakan');

      // alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}
// $$(document).on('click', '#marker-choose span', function (e) {
//   alert("mantap");
// });
$$(document).on('click', '.current-location', function (e) {
   myApp.showIndicator();
  var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000,
      timeout: 20000
   }
   // var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
   function onSuccess(position) {
     myApp.hideIndicator();
      $$("#val2-lat").val(position.coords.latitude);
      $$("#val2-lon").val(position.coords.longitude);
      $$("#val-lat").val(position.coords.latitude);
      $$("#val-lon").val(position.coords.longitude);
      
      $$("#last_lat").val(position.coords.latitude);
      $$("#last_lng").val(position.coords.longitude);
      
      var pos2 = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // navigator.geolocation.clearWatch(watchID);
      map.setCenter(pos2);
      setMyMarker(pos2.lat,pos2.lng,map);
   };

   function onError(error) {
    myApp.hideIndicator();
     // myApp.alert('GPS, belum dinyalakan');
      // alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }

}); // end current map
$$(document).on('click', '.current-location-on-form', function (e) {
  var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
  
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {

      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      setMyMarker(pos.lat,pos.lng,map_area);

   };

   function onError(error) {
     // myApp.alert('GPS, belum dinyalakan');
     //  alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }

});
$$(document).on('click', '.btn-tutup-app', function (e) {
  myApp.confirm(' Keluar Aplikasi  ? ','Konfirmasi', function () {
    navigator.app.exitApp();
  });
});


//ubah jam operasional
$$(document).on('page:init', '.page[data-page="ubah-jam"]', function (e) {
  var id = e.detail.page.query.ukm_id;
  var buka = e.detail.page.query.buka;
  var tutup = e.detail.page.query.tutup;
  var is_tutup = e.detail.page.query.is_tutup;
  var hari_id = e.detail.page.query.hari_id;

  $$("#UkmOp_ukm_hari").val(hari_id);
  $$("#UkmOp_ukm_id").val(id);
  if (buka=="" && tutup==""){
    $$("#UkmOp_jam_buka").val("00:00");
    $$("#UkmOp_jam_tutup").val("00:00");
  }else{ 
    $$("#UkmOp_jam_buka").val(buka);
    $$("#UkmOp_jam_tutup").val(tutup);
  }

  if (is_tutup==1){
    $$("#UkmOp_is_tutup").attr("checked",true);
  }else{
    $$("#UkmOp_is_tutup").removeAttr("checked");
  }


     $$('.form-add-produk').on('form:success', function (e) {

        var xhr = e.detail.xhr; // actual XHR object

        var data = e.detail.data; // Ajax response from action file
        // alert(data);
        data = JSON.parse(data);
        if (data.success==false){
          $$.each(data.err,function(i,v){  
             myApp.addNotification({
                  message: v,
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
            });
        }else{
          cariById(window.localStorage.getItem("ukm_id"));
          mainView.router.back();
        }
      });
  




});



$$(document).on('click', '.hold-edit', function (e) {
  e.preventDefault();
  // alert("123");

  var id = $$(this).attr("id_jam");
  var ukm_id = $$(this).attr("ukm_id");
  var buka = $$(this).attr("jam_buka");
  var tutup = $$(this).attr("jam_tutup");
  var is_tutup = $$(this).attr("is_tutup");
  var hari_id = $$(this).attr("hari_id");
  // alert(is_tutup);
  // alert(ukm_id);
  // alert(id);
  // alert(buka);
  // alert(tutup);
  if (window.localStorage.getItem("ukm_id")==ukm_id){
      // myApp.confirm(' Ubah Informasi ? ','Konfirmasi', function () {
          mainView.router.load({
            url:"ubah-jam.html",
            query:{
              id: id,
              buka: buka,
              tutup: tutup,
              hari_id: hari_id,
              ukm_id: ukm_id,
              is_tutup : is_tutup
            }    
          });
      // });
  }

});

$$(document).on('click', '.hold-hapus-produk', function (e) {
   var ukm_id = $$(this).attr("ukm_id");
   var p_id = $$(this).attr("p_id");
   var nama = $$(this).attr("data-nama");
   var harga = $$(this).attr("data-harga");
   var keterangan = $$(this).attr("data-keterangan");
   var tersedia = $$(this).attr("data-tersedia");
   
    if (window.localStorage.getItem("ukm_id")==ukm_id){
       mainView.router.load({
        url:"tambah-produk.html",
        query:{
          p_id: p_id,
          nama: nama,
          harga: harga,
          keterangan: keterangan,
          tersedia: tersedia
        } 
      }); 
    }
                
});
$$(document).on('taphold', '.hold-hapus-produk', function (e) {
  e.preventDefault();
  var ukm_id = $$(this).attr("ukm_id");
  var p_id = $$(this).attr("p_id");
  var item = $$(this);
  if (window.localStorage.getItem("ukm_id")==ukm_id){
      myApp.confirm(' Hapus ? ','Konfirmasi', function () {

          $$.ajax({
              url : server+"/index.php?r=produk/hapus",
              data : "id="+p_id,
              success : function(r){
              // alert(r);
              var json = JSON.parse(r);
              if (json.success==true){
                  item.remove();
                  myApp.addNotification({
                      message: "Terhapus ",
                      buttonkey:  {
                          text: 'Tutup',
                          // color: 'lightgreen'
                        }
                  });
              }else{
                  alert(r);
              }

              }
          });
      });
  }

});

$$(document).on('click', '.hold-hapus-loker', function (e) {
   var ukm_id = $$(this).attr("ukm_id");
   var l_id = $$(this).attr("l_id");
   var nama = $$(this).attr("data-nama");
   var keterangan = $$(this).attr("data-keterangan");
   if (window.localStorage.getItem("ukm_id")==ukm_id){ 
        mainView.router.load({
        url:"tambah-loker.html",
        query:{
          l_id: l_id,
          nama: nama,
          keterangan: keterangan
        } 
        }); 
    } 
                
});
$$(document).on('taphold', '.hold-hapus-loker', function (e) {
  e.preventDefault();
    var ukm_id = $$(this).attr("ukm_id");
    var l_id = $$(this).attr("l_id");
    var item = $$(this);
    if (window.localStorage.getItem("ukm_id")==ukm_id){
        myApp.confirm(' Hapus ? ','Konfirmasi', function () {

            $$.ajax({
                url : server+"/index.php?r=UkmLoker/hapus",
                data : "id="+l_id,
                success : function(r){
                // alert(r);
                var json = JSON.parse(r);
                if (json.success==true){
                    item.remove();
                    myApp.addNotification({
                        message: "Terhapus ",
                        buttonkey:  {
                            text: 'Tutup',
                            // color: 'lightgreen'
                          }
                    });
                }else{
                    alert(r);
                }

                }
            });
        });
  }
});




function hapusProduk(id){
    $$.ajax({
        url : server+"/index.php?r=produk/hapus",
        data : "id="+id,
        success : function(r){
          // alert(r);
          var json = JSON.parse(r);
          if (json.success==true){
              return true;
          }else{
             return false;
          }

        }
    });

}


$$(document).on('click', '.btn-yes-point-rupiah', function (e) {
  // alert(ukm_id);
   myApp.prompt('Jumlah Poin yang akan ditukar ', 'Tukar Poin dengan Rupiah',
      function (value) {
        // alert(value);
        if (value<50000){
           myApp.addNotification({
              message: "Minimal Penukaran 50.000 poin ",
              buttonkey:  {
                  text: 'Tutup',
                }
          });
        }else{
            var nilai = value;
            var nama_umkm  = $(".UMKM_nama").html();
             myApp.confirm(' Mencarikan Poin ke Rupiah sebesar '+value+' Poin  ?  ','Konfirmasi', function () {
              tukarPoinRupiah(window.localStorage.getItem("username"),nilai)
            });
        }
      }
    );
});
$$(document).on('click', '.btn-kirim-komentar', function (e) {
  var text_komentar = $$("#text-komentar").val();
  var ukm_id = $$(this).attr("ukm_id");
  kirimKomentar(window.localStorage.getItem("username"),text_komentar,ukm_id);
  
  // alert(text_komentar);
});
function kirimKomentar(username,komentar,ukm_id){
    // alert(ukm_id);
  $$.ajax({
    url : server+"/index.php?r=Ukm/kirimKomentar",
    data : "username="+username+"&komentar="+komentar+"&ukm_id="+ukm_id,
    success : function(r){
      var json = JSON.parse(r);
      $$("#text-komentar").val("");
      if (json.success==true){
            if (username==null){
              username = "Anonymous";
            }else{
              username = username.substring(0,3)+'******';
            }   
        
            var string_komentar = " ";
              string_komentar = '<a href="#" class="item-link item-content">'+
              '<div class="item-media"><i class="fa fa-user fa-3x"></i></div>'+
              '<div class="item-inner">'+
              '<div class="item-title-row">'+
              '<div class="item-title">'+username+'</div>'+
              '<div class="item-after">'+moment(moment(), "YYYY-MM-DD h:mm:ss").fromNow()+'</div>'+
              '</div>'+
              '<div class="item-subtitle">'+moment(moment(), "YYYY-MM-DD h:mm:ss").fromNow()+'</div>'+
              '<div class="item-text">'+komentar+'</div>'+
              '</div></a>';

              $$("#list-comment-td").append(string_komentar);
 
            $$(".btn-kirim-komentar").attr("ukm_id",ukm_id);
            // end set komentar  

        myApp.addNotification({
          message: json.message,
          buttonkey:  {
          text: 'Tutup',
          }
        });
      }else{

         myApp.addNotification({
          message: json.message,
          buttonkey:  {
          text: 'Tutup',
          }
        }); 

      }
    } 
  });
}
$$(document).on('click', '.btn-kirim-poin', function (e) {
  var ukm_id = $(this).attr("ukm_id");
  // alert(ukm_id);
  myApp.prompt('Jumlah Poin ', 'Kirim Poin',
      function (value) {
        // alert(value);
        var nilai = value;
        var nama_umkm  = $(".UMKM_nama").html();
         myApp.confirm(' Mengirim Poin ke '+nama_umkm+' sebesar '+value+' ?  ','Konfirmasi', function () {
          KirimPoin(window.localStorage.getItem("username"),ukm_id,nilai)
        });
      }
    );
});



function tukarPoinRupiah(sender, poin){
 if (!poin==""){ // jika kosong
      $$.ajax({
          url : server+"/index.php?r=Gis/tukarPoinRupiah",
          data : "sender="+sender+"&poin="+poin,
          success : function(r){

            // alert(r);
            var json = JSON.parse(r);
            if (json.success==true){
               myApp.addNotification({
                    message: json.message,
                    buttonkey:  {
                        text: 'Tutup',
                      }
                });
                    
            }else{
                 $$.each(json.err,function(i,v){  
                   myApp.addNotification({
                        message: v,
                        buttonkey:  {
                            text: 'Tutup',
                            // color: 'lightgreen'
                          }
                    });
                 });
               // return false;
            }

          }
      });
    }else{
      myApp.addNotification({
          message: "Poin Tidak boleh kosong",
          buttonkey:  {
              text: 'Tutup',
            }
      });
    }

}
function KirimPoin(sender, receiver, poin){
    // alert(poin=="");

    if (!poin==""){ // jika kosong
      $$.ajax({
          url : server+"/index.php?r=Gis/transfer",
          data : "sender="+sender+"&receiver="+receiver+"&poin="+poin,
          success : function(r){

            // alert(r);
            var json = JSON.parse(r);
            if (json.success==true){
               myApp.addNotification({
                    message: json.message,
                    buttonkey:  {
                        text: 'Tutup',
                      }
                });
                    
            }else{
                 $$.each(json.err,function(i,v){  
                   myApp.addNotification({
                        message: v,
                        buttonkey:  {
                            text: 'Tutup',
                            // color: 'lightgreen'
                          }
                    });
                 });
               // return false;
            }

          }
      });
    }else{
      myApp.addNotification({
          message: "Poin Tidak boleh kosong",
          buttonkey:  {
              text: 'Tutup',
            }
      });
    }

}



function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function GetProdukByUMKM(id){
     $$.ajax({
        url : server+"/index.php?r=Produk/GetProdukByUMKM",
        data : "id="+id,
        beforesend:function(bf){
          myApp.showIndicator();
        },
        success : function(r){
            var produk = JSON.parse(r);
             $$("#cart-beli").html(" ");
            if (produk.length>0){

              $$.each(produk,function(i,v){
                // alert(JSON.stringify(v));
                var ke = "" ;
                var img = "" ;
                if (v.keterangan==""){
                  ke = "Tidak ada keterangan";
                }else{
                  ke = v.keterangan;
                }
                var tersedia = "";
                if (v.tersedia=="1"){
                  tersedia = "<b style='color:green'>Tersedia</b>";
                }else{
                  tersedia = "<b style='color:red'>Tidak Tersedia</b>";
                }

               if (imageExists(server+"/images/product/"+v.id+".jpg")){
                img = server+"/images/product/"+v.id+".jpg";
               }else{
                img = "img/no_image.jpg";
               }

               string = '<li class="hold-hapus-produk-" data-tersedia="'+v.tersedia+'" p_id="'+v.id+'" data-keterangan="'+v.keterangan+'" data-harga="'+v.harga+'" data-id="'+v.id+'"  data-nama="'+v.nama+'" ukm_id="'+v.ukm_id+'" >'+
                '<a href="#" class="item-link item-content">'+
                '<div class="item-media"><img src="'+img+'" width="80"></div>'+
                '<div class="item-inner">'+
                    '<div class="item-title-row" style="background-image:url()">'+
                          '<div class="item-title" style="width: 150px; margin-top: 20px"> <span class="nama-item">'+v.nama+' </span><br> <span class="harga-item" angka="'+v.harga+'"> Rp.'+numberWithCommas(v.harga)+'</span></div>'+
                          '<div class="item-after'+' '+i+'" style="float:right; margin-top: 30px">'+
                                '<i style="float:none;display:none; font-size: 1.5em" class="fa fa-minus-circle btn-min-qty"></i>&nbsp;'+
                                '<input item_id="'+v.id+'" ukm_id="'+id+'" class="order-qty"  type="number" value="0" style="width:40px;border:0px solid gray;padding:5px 3px 16px 10px;display:inline-block" />'+
                        '&nbsp;<i class="fa fa-plus-square btn-add-qty" style="font-size: 1.5em" ></i>'
                  '</div>'+
                '</div>'+
                // '&nbsp;<i class="fa fa-minus-square fa-2x btn-min-qty" ></i>'
                '</div>'+
                '</a>'+
                '</li>';
                $$("#cart-beli").append(string);
                // alert(string);
              });

          }else{
              $$("#cart-beli").append("<p style='text-align:center;padding: 15px;font-family: inherit;'> Data TIdak Ditemukan </p>");

          }
            
        }
    });
}


/** event remove class ripple-wave */
$$(document).on("click",".item-link.item-content",function(e){
  $('.ripple-wave').remove();

});

/** event untuk menambah pesanan */
$$(document).on("click",".btn-add-qty",function(e){
  var index = $(".btn-add-qty").index(this);
  var jml = parseInt($('.order-qty').eq(index).val()) +1;
  $('.order-qty').eq(index).val(jml);
  $('.btn-min-qty').eq(index).show();
  $('.item-after').css('width','68px !important');
  // console.log($('.item-after').eq(index));
});

/** event untuk mengurangi pesanan */
$$(document).on("click",".btn-min-qty",function(e){
  var index = $(".btn-min-qty").index(this);
  var jml = parseInt($('.order-qty').eq(index).val()) -1;
  $('.order-qty').eq(index).val(jml);
  if (jml <= 0) {
    $('.btn-min-qty').eq(index).hide();
    $('.item-after'+' '+index).css('width','68px !important');
    // $('.item-after').css('width','50px');
    // console.log(index);
  }
});

$$(document).on("click",".btn-panggil-pesan",function(e){
    var final_order_head = [];
    var final_order = [];
    var ukm_id = 0;
     $$(".order-qty-final").each(function(e){
        var nama = $$(this).closest(".item-inner").find(".item-title-row").find(".item-title").find(".nama-item").html();
        var harga = $$(this).closest(".item-inner").find(".item-title-row").find(".item-title").find(".harga-item").attr("angka");
        
        if (parseInt($$(this).val())>0){
            ukm_id = $$(this).attr("ukm_id"); 
            final_order.push(
                {
                    "ukm_id":$$(this).attr("ukm_id"),
                    "item_id":$$(this).attr("item_id"), 
                    "qty":$$(this).val(), 
                    "nama":nama, 
                    "harga":harga 
                }
            );
        }else{
            // alert("ga masuk"); 
        }

    });

    final_order_head.push(
        {
            "username":window.localStorage.getItem("username"),
            "ukm_id":ukm_id,
            "pesan":$$("#pesan-order").val(),
            "alamat":$$(".alamat-kirim").html(),
            "lat":$$("#val-lat").val(),
            "lng":$$("#val-lon").val(),
            "jarak":$$(".order-jarak").attr("meter"),
            "total":$$("#total-biaya").attr("value"),
            "produk":final_order
        }
    );
    // alert($$(".order-jarak").attr("order-jarak-val"));

    $$.ajax({
        url : server+"/index.php?r=Ukm/PanggilPesanUkm",
        data : final_order_head,
        beforesend:function(bf){
          myApp.showIndicator();
        },
        success : function(r){
          var data = JSON.parse(r);
          if (data.success==false){
               $$.each(data.err,function(i,v){  
                 myApp.addNotification({
                      message: v,
                      buttonkey:  {
                          text: 'Tutup',
                          // color: 'lightgreen'
                        }
                  });
                });
            // mainView.router.back();
          }else{
    
             myApp.addNotification({
                  message: "Pesanan Berhasil Dikirim ke Tukang Dagang !",
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
              var tabActive = $('.tabbar.pesanan a.tertunda').attr('href');
              getListOrder(window.localStorage.getItem("username"), tabActive);
              mainView.router.loadPage({url:'order.html', ignoreCache:true, reload:true });

              // $$(".btn-refresh-order").trigger("click");
              // mainView.router.back();
              // window.location.reload();
          
             // myApp.closePanel();
          }
            // alert(r);
            // var produk = JSON.parse(r);
        }
    });


});
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function reloadSetting(ukm_id){
   $$.ajax({
      url: server+"/index.php?r=api/PostSetting",
      data: {
          ukm_id: ukm_id, 
          for_what:"get_all", 
      },
      success:function(data){
          var data = JSON.parse(data);
          // console.log(data.delivery);
          // console.log(data.minimal);
          $("#minimum-value").text(numberWithCommas(data.minimal));
          $("#minimum-value-umkm").text(data.nama);
          if (data.delivery == 1) {
            $("#check-tracking2-3").prop('checked', true);
          }else{
            $("#check-tracking2-3").prop('checked', false);
          };
       },
      error:function(err){
          console.log(err);
      }
  });
}
$$(document).on("click","#li_button_peng_saya",function(e){
 // mainView.router.loadPage({url:'pengaturan.html', ignoreCache:true, reload:true })
  mainView.router.load({
        url:"pengaturan.html"
    });
 myApp.closePanel();
  var ukm_id = window.localStorage.getItem("ukm_id");
  reloadSetting(ukm_id);
 
 
});
$$(document).on("click",".btn-check-out",function(e){
    var order = [];
    var ttl = 0;
    var alamat = geocodePositionReturn(new google.maps.LatLng($$("#val-lat").val(), $$("#val-lon").val() ) );
    // alert(jarak);
    // $$("#jarak-td").html(jarak);
    $$(".order-qty").each(function(e){
        var nama = $$(this).closest(".item-inner").find(".item-title-row").find(".item-title").find(".nama-item").html();
        var harga = $$(this).closest(".item-inner").find(".item-title-row").find(".item-title").find(".harga-item").attr("angka");
        
        if (parseInt($$(this).val())>0){
            ttl++;
            order.push(
                {
                    "ukm_id":$$(this).attr("ukm_id"),
                    "item_id":$$(this).attr("item_id"), 
                    "qty":$$(this).val(), 
                    "nama":nama, 
                    "harga":harga 
                }
            );
        }else{
          
        }


    });
    // alert(JSON.stringify(order));
    if ( ttl>0 ){
        mainView.router.load({
            url:"cekout.html",
            query:{
              order : order
          }
        });
    }else{
           myApp.addNotification({
                  message: "Anda belum memilih Jasa/Produk",
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
          
    }
    // alert(JSON.stringify(order));
    // $$.each(function())
});
$$(document).on('page:init', '.page[data-page="tambah-cart"]', function (e) {
    var id =e.detail.page.query.id;
    GetProdukByUMKM(id);
});
// $$(document).on('page:mounted', '.page[data-page="cekout"]', function (e) {
//   alert("masuk");
// });
$$(document).on('page:init', '.page[data-page="cekout"]', function (e) {
    var order =e.detail.page.query.order;

    var total_order = 0;
      if (order.length>0){
          $$.each(order,function(i,v){
            total_order+= parseInt(v.harga)*parseInt(v.qty);

               if (imageExists(server+"/images/product/"+v.id+".jpg")){
                img = server+"/images/product/"+v.id+".jpg";
               }else{
                img = "img/no_image.jpg";
               }
             string = '<li class="hold-hapus-produk-"  data-harga="'+v.harga+'" data-id="'+v.id+'"  data-nama="'+v.nama+'" ukm_id="'+v.ukm_id+'" >'+
                    '<a href="#" class="item-link item-content">'+
                    '<div class="item-media"><img src="'+img+'" width="80"></div>'+
                    '<div class="item-inner">'+
                    '<div class="item-title-row" style="background-image:url()">'+
                    '<div class="item-title" style="width: 150px;"> '+v.nama+'</div>'+
                    '<div class="item-after" angka="'+v.harga+'"> Rp.'+numberWithCommas(v.harga)+'</div>'+
                    '</div>'+
                     '<div class="item-text" style="width:80px">'+
                    '<i style="float:none;display:none" class="fa fa-plus-square fa-2x btn-add-qty"></i>&nbsp;'+
                    '<input readonly item_id="'+v.item_id+'" ukm_id="'+v.ukm_id+'" class="order-qty-final"  type="text" value="'+v.qty+'" style="width:40px;border:1px solid gray;padding:5px;display:inline-block;float:right" />'+
                    '&nbsp;<i style="display:none" class="fa fa-minus-square fa-2x btn-min-qty" ></i>'
                     '</div>'+
                    '</div>'+
                    '</div>'+
                    '</a>'+
                '</li>';
                $$("#cart-beli-cekout").append(string);
          });
          $$("#total-biaya").html(numberWithCommas(total_order) );
          $$("#total-biaya").attr("value",total_order);
            var jarak = roundToTwo(getDistance($$("#val-lat").val(),$$("#val-lon").val(),$$(".UMKM_lat").html(),$$(".UMKM_lon").html(),"K"));
            var jarak_murni = roundToTwo(getDistance($$("#val-lat").val(),$$("#val-lon").val(),$$(".UMKM_lat").html(),$$(".UMKM_lon").html(),"K"));
            var meter = jarak*1000;
            // var jarak_murni = 0;
            if (jarak<1){
                jarak = jarak*1000+" Meter";
                // jarak_murni = jarak
            }else{
                // jarak = jarak * 1 +"Kilo Meter"
                jarak = jarak * 1 +" Kilo Meter"
            }
            $$(".order-jarak").html(jarak);
            $$(".order-jarak").attr("order-jarak-val",jarak_murni);
            $$(".order-jarak").attr("meter",meter);
            // alert(jarak);


      }
    // alert(JSON.stringify(order));
    // $$("#cart-beli-cekout").html();
    // GetProdukByUMKM(id);
});

$$(document).on("click",".btn-add-cart",function(e){
  if (window.localStorage.getItem("isLogged")!="1"){
      myApp.loginScreen();
     exit;
  }
    var id = $(this).attr("ukm_id");
    mainView.router.load({
        url:"tambah-cart.html",
        query:{
          id: id
      }
    });

    myApp.closePanel();
 });

function cariById(id){
 
  var id_ukm = id;
  // alert(id_ukm);
  loader_refresh = true;
  // alert(id);
  // console.log(server);
  // myApp.alert('Akses Detail');
   // var id = $$(this).attr("ukm-id");
   $$.ajax({
        url : server+"/index.php?r=gis/CariById",
        data : "id="+id,
        beforesend:function(bf){
          myApp.showIndicator();
        },
        success : function(r){
            $$(".btn-kirim-komentar").attr("ukm_id",id_ukm);
            
            myApp.hideIndicator();
            if (window.localStorage.getItem("ukm_id")==id){
              $$(".btn-add-cart").hide();
              $$(".btn-ganti-gambar").show();
              $$(".btn-tambah-penjual").css("display","flex");
             
            }else{
              $$(".btn-add-cart").css("display","flex");
              $$(".btn-ganti-gambar").hide();
              $$(".btn-tambah-penjual").css("display","none");
             
            }

            // alert(r);
            // alert(id);
            var json = JSON.parse(r);
            var data = json.model;
            // alert(data.tipe)
            if (data.tipe=="3"){
                $$(".khusus-tetap").hide();
            }
            var jadwal = json.jadwal;
            var produk = json.produk;
            var loker = json.loker;
            var rate = json.rate;
            var komentar = json.komentar;
            // alert(JSON.stringify(data));
            $$(".UMKM_ulasan").html(rate.rate);
            $$(".btn-kirim-poin").attr("ukm_id",id);
            $$(".UMKM_nama").html(data.nama);
            $$("div data-page[rincian-umkm]").find(".navbar-inner .center").html("Informasi Tukang Dagang ("+data.nama+")");

            $$(".UMKM_nama_pemilik").html(data.pemilik);
            $$(".UMKM_keterangan").html(data.keterangan);
            $$(".UMKM_kategori").html(data.nama_kategori);
            $$(".UMKM_alamat").html(data.alamat);
            $$(".UMKM_kelurahan").html(data.nama_kelurahan);
            $$(".UMKM_kecamatan").html(data.nama_kecamatan);
            $$(".UMKM_rw").html(data.rw);
            $$(".UMKM_produk").html(data.produk);
            $$(".UMKM_lat").html(data.lat);
            $$(".UMKM_lon").html(data.lon);
            if (data.delivery=="0"){   
                $$(".UMKM_kirim_pesanan").html("Tidak");
            }else{
              // console.log(data);
                // $$(".UMKM_kirim_pesanan").html("Ya, Minimal Pembelian RP. "+numberWithCommas(data.minimal) );
            }
            // $$(".UMKM_kirim_pesanan").html(""12);

            $$(".btn-add-cart").attr("ukm_id",id);

            $$(".UMKM_tel").attr("jabberID",data.jabberID);
            $$(".UMKM_wa").attr("href","https://api.whatsapp.com/send?phone=62"+data.telepon.substring(1,100));
            $$(".UMKM_bbm").attr("href","http://pin.bbm.com/"+data.telepon.substring(1,100));
            $$(".UMKM_sms").attr("jabberID",data.jabberID);

            //$$(".UMKM_sms").attr("href","sms:62"+data.telepon.substring(1,100)+"?body= Tukang Dagang 2018 \n");
            // alert(data.gambar);
            $$("#background-umkm").css("background-image","url('"+server+"/images/bast/"+data.gambar+"'");

            mainImageUMKM = [server+"/images/bast/"+data.gambar];
            // alert(mainImageUMKM);
            myPhotoBrowserStandalone = myApp.photoBrowser({
                photos : mainImageUMKM
            });
            // $$(".photo-browser .navbar .center").html("Gambar Tukang Dagang");



          //set komentar    
            var string_komentar = " ";
             $$("#list-comment-td").html(" "); 
       
            if (komentar.length>0){

                $$.each(komentar,function(i,v){
                  // alert(v.username);
                      if (v.username=="null"){
                        username = "Anonymous";
                      }else{
                        username = v.username.substring(0,4)+'******';
                      }
                    string_komentar = '<a href="#" class="item-link item-content">'+
                    '<div class="item-media"><i class="fa fa-user fa-4x"></i></div>'+
                    '<div class="item-inner">'+
                    '<div class="item-title-row">'+
                    '<div class="item-title">'+username+'</div>'+
                    '<div class="item-after">'+moment(v.datetime, "YYYY-MM-DD h:mm:ss").fromNow()+'</div>'+
                    '</div>'+
                    '<div class="item-subtitle">'+moment(moment(), "YYYY-MM-DD h:mm:ss").fromNow()+'</div>'+
                    '<div class="item-text">'+v.komentar+'</div>'+
                    '</div></a>';
                    $$("#list-comment-td").append(string_komentar);
                });
                // alert(string_komentar);
                
            // end set komentar  
          }else{
              $$("#list-comment-td").append("<p> TIdak Ditemukan </p>");

          }



            // alert(mainImageUMKM);
            var string = "";
            var hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];

            $$("#list-jam-operasional").html(" ");
            var adt,css = "";
        

              // alert(JSON.stringify(jadwal));

            //set operasional
            for(var no_op=0;no_op<=6;no_op++){
                var jam_buka = "";
                var jam_tutup =  "";
                var id_jam =  "";
                var label_hari = hari[no_op];
                var is_tutup = "";
                adt = " ";
                $$.each(jadwal,function(i,v){
                  // alert(v.hari);
                  // alert(v.hari);
                  if (parseInt(v.hari)==parseInt(no_op) ){
                    // alert("123");
                     jam_buka = v.jam_buka;
                     jam_tutup =  v.jam_tutup;
                     id_jam =  v.hari;
                     label_hari = hari[no_op];
                     is_tutup = v.is_tutup;

                      // alert(jam_buka+" - "+jam_tutup);
                     if (is_tutup==1){
                         adt = "<b style='color:red'> : Libur </b>";
                        css = "style='display:none'";
                     }else{
                         adt = " ";
                        css = "style='display:block'";
                     }

                  }
                  // else{
                     
                  // }
              });

                // alert(no_op);

            string = '<li hari_id="'+no_op+'" class="hold-edit" id_jam="'+id_jam+'" jam_buka="'+jam_buka+'" jam_tutup="'+jam_tutup+'" is_tutup="'+is_tutup+'"  ukm_id="'+id_ukm+'" >'+
            '<a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
            '<div class="item-title-row" style="background-image:url()">'+
            '<div class="item-title">'+label_hari+' '+adt+'</div>'+
            '<div class="item-after"></div>'+
            '</div>'+
            '<div class="item-text UMKM_rabu" '+css+' >'+jam_buka+'-'+jam_tutup+'</div>'+
            '</div></a>'+
            '</li>';




                $$("#list-jam-operasional").append(string);
            }
              // alert(string);
            // });



            $$("#list-produk").html(" ");
            if (produk.length>0){

              $$.each(produk,function(i,v){
                // alert(JSON.stringify(v));
                var ke = "" ;
                var img = "" ;
                if (v.keterangan==""){
                  ke = "Tidak ada keterangan";
                }else{
                  ke = v.keterangan;
                }
                var tersedia = "";
                if (v.tersedia=="1"){
                  tersedia = "<b style='color:green'>Tersedia</b>";
                }else{
                  tersedia = "<b style='color:red'>Tidak Tersedia</b>";
                }

               if (imageExists(server+"/images/product/"+v.id+".jpg")){
                img = server+"/images/product/"+v.id+".jpg";
               }else{
                img = "img/no_image.jpg";
               }
               console
               string = '<li class="hold-hapus-produk" data-tersedia="'+v.tersedia+'" p_id="'+v.id+'" data-keterangan="'+v.keterangan+'" data-harga="'+v.harga+'" data-id="'+v.id+'"  data-nama="'+v.nama+'" ukm_id="'+v.ukm_id+'" >'+
                '<a href="#" class="item-link item-content">'+
                '<div class="item-media"><img src="'+img+'" width="80"></div>'+
                '<div class="item-inner">'+
                '<div class="item-title-row" style="background-image:url()">'+
                '<div class="item-title"> '+v.nama+'</div>'+
                '<div class="item-after"> Rp.'+numberWithCommas(v.harga)+'</div>'+
                '</div>'+
                '<div class="item-text ">'+ke+'<br>'+tersedia+
                 '</div>'+
                '</div>'+
                '</a>'+
                '</li>';
                $$("#list-produk").append(string);
                // alert(string);
              });

          }else{
              $$("#list-produk").append("<p> Data TIdak Ditemukan </p>");

          }


           $$("#list-loker").html(" ");
           if (loker.length>0){
            $$.each(loker,function(i,v){
              var ke = "" ;
              var img = "" ;
              if (v.keterangan==""){
                ke = "Tidak ada keterangan";
              }else{
                ke = v.keterangan;
              }

             string = '<li class="hold-hapus-loker" data-nama="'+v.nama+'" data-keterangan="'+v.keterangan+'"  l_id="'+v.id+'" ukm_id="'+v.ukm_id+'"  >'+
                '<a href="#" class="item-link item-content">'+
                  '<div class="item-inner">'+
                  '<div class="item-title-row" style="background-image:url()">'+
                  '<div class="item-title"> '+v.nama+'</div>'+
                  '<div class="item-after"></div>'+
                '</div>'+
                '<div class="item-text ">'+ke+'</div>'+
                '</div></a>'+
              '</li>';
              $$("#list-loker").append(string);
              // alert(string);
            });
          }else{
               $$("#list-loker").append("<p> Data TIdak Ditemukan </p>");
          }

            // <li><a href="#" class="item-link item-content">
            // <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"></div>
            // <div class="item-inner">
            // <div class="item-title-row">
            // <div class="item-title">Kebab Jumbo</div>
            // <div class="item-after">Rp. 15.000</div>
            // </div>
            // <div class="item-subtitle">Kebab </div>
            // <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>
            // </div></a></li>


            // alert($$("#list-jam-operasional").html());
            
            // window.location.href ="tabs-swipeable.html";
            // myApp.openPanel("right");
                // alert(JSON.stringify(v));
          
             // for(var i=1;i<=13;i++){   
             //      $$("#rw").append("<option value="+i+">"+i+"</option>");
             //  }
           
        }
    })
}

function browseGambar(){
  $$("#Produk_gambar").trigger("click");
  alert("change");
}
function cariGambar(){
    clearCache();
      var option =  { 
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        pictureSource : Camera.PictureSourceType.CAMERA,
        MediaType :  Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        allowEdit : true      
      }

      navigator.camera.getPicture(onSuccess, onFail,option);

      
}
function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
        // var reader = new FileReader();
        //  reader.onloadend = function(e) {
          // var imgBlob = new Blob([ imageURI ], { type: "image/jpeg" } );
          // gambar.append('Ukm_gambar', imgBlob);


            var fs = new CoFS();

            fs.readFile(imageURI, function (err, data) {

                if (err) {
                    return errHandler(err);
                }

                var fd = new FormData();

                 var imgBlob = new Blob([ imageURI ], { type: "image/jpeg" } );
                gambar.append('Ukm_gambar', imgBlob);
                
            });
      }

      function onFail(message) {
          // myApp.alert('Terjadi Kesalahan : ' + message," Ups.. ");
          clearCache();
      }
  // });

    function clearCache() {
      navigator.camera.cleanup();
   }
  $$(document).on('click', '.btn-ganti-gambar', function (e) {
      $$("#Ukm_ganti_gambar").click();
  });

  $$(document).on('click', '.UMKM_tel', function (e) {
   if (window.localStorage.getItem("isLogged")!="1"){
       myApp.loginScreen();
     }else{
      var jid = $(this).attr("jabberID");
       Android.showTampil(jid);
     }
   });


  $$(document).on('click', '.UMKM_sms', function (e) {
   if (window.localStorage.getItem("isLogged")!="1"){
       myApp.loginScreen();

    }else{
      var jid = $(this).attr("jabberID");
       Android.showChat(jid);
    }
   });

  $$(document).on('change', '#Ukm_ganti_gambar', function (e) {
       $$('.form-ganti-gambar').trigger("submit");

        $$('.form-ganti-gambar').on('form:success', function (e) {
           var xhr = e.detail.xhr; // actual XHR object

          var data = e.detail.data; // Ajax response from action file
          data = JSON.parse(data);
          if (data.success==false){
            // $$.each(data.err,function(i,v){  
               // myApp.addNotification({
               //      message: data.message,
               //      buttonkey:  {
               //          text: 'Tutup',
               //          // color: 'lightgreen'
               //        }
               //  });
              // });
          }else{
             // myApp.addNotification({
             //        message: "Gambar berhasil diganti",
             //        buttonkey:  {
             //            text: 'Tutup',
             //            // color: 'lightgreen'
             //          }
             //    });
              $$("#background-umkm").css("background-image","url('"+server+"/images/bast/"+data.gambar+"'");
          }
        });
    });
  // });


    //   alert("masuk");
    //     var xhr = e.detail.xhr; // actual XHR object

    //     var data = e.detail.data; // Ajax response from action file
    //     // alert(data);
    //     data = JSON.parse(data);
    //     alert(data.success);
    //     if (data.success==false){
    //       // $$.each(data.err,function(i,v){  
    //          myApp.addNotification({
    //               message: data.message,
    //               buttonkey:  {
    //                   text: 'Tutup',
    //                   // color: 'lightgreen'
    //                 }
    //           });
    //         // });
    //     }else{
    //         $$("#background-umkm").css("background-image","url('"+server+"/images/bast/"+data.gambar+"'");

    //       // cariById(window.localStorage.getItem("ukm_id"));
    //       mainView.router.back();
    //     }
    //   });


  $$(document).on('click', '.btn-refresh-poin', function (e) {
    $$.ajax({
      url : server+"/index.php?r=Gis/GetPoin",
      data : "username="+window.localStorage.getItem("username"),
      success : function(r){
          var data = JSON.parse(r);
            // alert(data.poin);
          window.localStorage.setItem("point", data.poin);
          $("#value-poinku").html(data.poin);
         
      },error: function(e){
        alert(JSON.stringify(e));
      }
    });

  });
  $$(document).on('click', '.btn-verifikasi', function (e) {
    var id = $$(this).attr("ukm-id");
    $$.ajax({
      url : server+"/index.php?r=gis/setverifikasi",
      data : "ukm_id="+window.localStorage.getItem("ukm_id")+"&username="+window.localStorage.getItem("username"),
      success : function(r){
          var data = JSON.parse(r);
          if (data.success==false){
               $$.each(data.err,function(i,v){  
                 myApp.addNotification({
                      message: v,
                      buttonkey:  {
                          text: 'Tutup',
                          // color: 'lightgreen'
                        }
                  });
                });
            // mainView.router.back();
          }else{

             myApp.addNotification({
                  message: "Berhasil Verifikasi !",
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
          
             // myApp.closePanel();
          }
          // alert(data);


      },error: function(e){
        alert(JSON.stringify(e));
      }
    });
  });
  $$(document).on('click', '.btn-favorite', function (e) {
    if (window.localStorage.getItem("username")==null || window.localStorage.getItem("username")=="" || window.localStorage.getItem("username")=="undefined" ){
      myApp.loginScreen();
      //  myApp.addNotification({
      //     message: "Silahkan Login terlebih dahulu",
      //     buttonkey:  {
      //         text: 'Tutup',
      //       }
      // }); 
       return
    }
    var id = $$(this).attr("ukm-id");
    $$.ajax({
      url : server+"/index.php?r=gis/setFavorite",
      data : "ukm_id="+id+"&username="+window.localStorage.getItem("username"),
      success : function(r){
          var data = JSON.parse(r);
          if (data.success==false){
               $$.each(data.err,function(i,v){  
                 myApp.addNotification({
                      message: v,
                      buttonkey:  {
                          text: 'Tutup',
                          // color: 'lightgreen'
                      },
                      hold : 1000

                  });
                });
            // mainView.router.back();
          }else{

             myApp.addNotification({
                  message: "Berhasil di tambahkan ke Daftar Favorite",
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
          }
          // alert(data);


      },error: function(e){
        alert(JSON.stringify(e));
      }
    });
 



  });

$$(document).on('page:init', '.page[data-page="add-umkm"]', function (e) {

  var kel =e.detail.page.query.kel;
  var title =e.detail.page.query.title;
  // alert(kel);
  $$("#Ukm_rekomender").val(window.localStorage.getItem("username"));
  getkategori(kel);
  var iskarang = e.detail.page.query.iskarang;
    // alert(iskarang)
  if (iskarang==false){
      $$("#Ukm_telepon").closest("li").hide();
  }else{
      $$("#Ukm_telepon").closest("li").show();

  }
  // alert("123");
  // alert(iskarang);
  $$("#Ukm_iskarang").val(iskarang);
  $$("#title-add-umkm").html(title);
  var gambar = new FormData();

   $$('.form-add-ukm').on('form:success', function (e) {
      var xhr = e.detail.xhr; // actual XHR object
      var data = e.detail.data; // Ajax response from action file
      // alert(data);
      data = JSON.parse(data);
      if (data.success==false){
        $$.each(data.err,function(i,v){  
           myApp.addNotification({
                message: v,
                buttonkey:  {
                    text: 'Tutup',
                    // color: 'lightgreen'
                  }
            });
          });
      }else{
        mainView.router.back();
      }

   });



  // $$(document).on('click', '.btn-cari-gambar', function (e) {

  // $$(".current-map").trigger("click");
  $$(document).on('click', '.current-map', function (e) {
      var options = {
          enableHighAccuracy: true,
          maximumAge: 3600000
          // timeout: 30000
       }
      
       var watchID2 = navigator.geolocation.watchPosition(onSuccess, onError, options);

       function onSuccess(position) {

          $$("#val2-lat").val(position.coords.latitude);
          $$("#val2-lon").val(position.coords.longitude);
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          // getDataNearest(pos.lat,pos.lng);
          map_area.setCenter(new google.maps.LatLng(pos.lat, pos.lng));
          map.setCenter(new google.maps.LatLng(pos.lat, pos.lng));
          // setMyMarker(pos.lat,pos.lng,map);
          // setMyMarker(pos.lat,pos.lng,map_area);
          clearWatch();
       };

       function clearWatch() {
        if (watchID2 != null) {
            navigator.geolocation.clearWatch(watchID2);
            watchID2 = null;
        }
      }

       function onError(error) {
         myApp.alert('GPS, belum dinyalakan');
          alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
       }

    });

  

    // $$('.form-add-ukm').on('form:error', function (e) {
    //    var data = e.detail.data;
    //     var xhr = e.detail.xhr;
    //     alert("error");
    //     alert(JSON.stringify(data));
    //     alert(JSON.stringify(xhr));
    // });
    // $$('#form-add-ukm').on('submit', function (e) { //submit add umkm
      // $$("#preloader-white").show();
      // myApp.showPreloader();
      // e.preventDefault();
      // $$("#submit-add-umkm").prop('disabled', true);

      // var arr = $$(this).serialize();
      // try {
      //     var imageURI = document.getElementById('myImage').getAttribute("src");
      //     // var imageURI = "C:/Users/35u/Pictures/my loc.png";
      //     // alert(imageURI)
      //     if (!imageURI) {
      //        myApp.addNotification({
      //             message: 'Foto Wajib di Masukan.',
      //             button: {
      //               text: 'Tutup',
      //               // color: 'lightgreen'
      //             }

      //        });
      //           $$("#submit-add-umkm").prop('disabled', false);
      //           // $$("#preloader-white").hide();
      //            myApp.hidePreloader();
      //         return;
      //     }

      //       //set upload options
      //       var options = new FileUploadOptions();
      //       options.fileKey = "file";
      //       options.fileName = imageURI.substr(imageURI.lastIndexOf('/')+1);
      //       options.mimeType = "image/jpeg";

      //       options.params = {
      //          // data : 
      //           nama: $$("#Ukm_nama").val(),
      //           pemilik: $$("#Ukm_pemilik").val(),
      //           kategori: $$("#jenisusaha").val(),
      //           telepon: $$("#Ukm_telepon").val(),
      //           keterangan: $$("#Ukm_keterangan").val(),
      //           kelurahan: $$("#Ukm_kelurahan").val(),
      //           rw: $$("#Ukm_rw").val(),
      //           lat: $$("#Ukm_lat").val(),
      //           lon: $$("#Ukm_lon").val(),
      //           alamat: $$("#Ukm_alamat").val(),
      //           iskarang: $$("#Ukm_iskarang").val(),
      //           rekomender:window.localStorage.getItem("username"),
      //           tipe: $$("#Ukm_tipe").val()
      //       }
      //         // alert(JSON.stringify(options));
      //         // alert(JSON.stringify(options.params));

      //       // alert("1");
      //       var ft = new FileTransfer();
      //       ft.upload(imageURI, encodeURI(server+"/index.php?r=ukm/createajax"), win, fail, options);
            
            

      //       function win(r) {
             

      //           if( typeof r === "object"){
      //                var d = JSON.parse(r.response);
      //                if (d.success){

      //                  pubnub2.publish({channel:"admin", 
      //                   message: { 
      //                     berita : "Terdapat permintaan pendataan Tukang Dagang baru"
      //                   }
      //                  });
      //                   myApp.hidePreloader();
      //                   mainView.router.back();

                        
      //                  // });


                                  
      //                  }else{
      //                   // alert(JSON.stringify(d));
      //                   myApp.hidePreloader();
      //                   alert("Error : "+JSON.stringify(d));
      //                   // $$.each(d.err,function(i,v){  
      //                   //  myApp.addNotification({
      //                   //       message: v,
      //                   //       button: {
      //                   //           text: 'Tutup',
      //                   //           // color: 'lightgreen'
      //                   //         }
      //                   //   });
      //                   // });
      //                 }
      //           }else{
      //             alert(r);
      //           }

      //       }

      //       function fail(error) {
      //         if (error.http_status==200){
      //           myApp.hidePreloader();
      //           mainView.router.back();
      //         }else{
      //           myApp.alert("An error has occurred: Code = " + error.code);
      //           myApp.alert("upload error source " + error.source);
      //           myApp.alert("upload error target " + error.target);
                
      //         }
      //           // myApp.alert(JSON.stringify(error));
      //           myApp.hidePreloader();
      //       }
      //     }catch(err){
      //       alert("Catch "+err);
      //       myApp.hidePreloader();
      //     }

      // alert("masul");
         // $$.ajax({
         //      url: this.action, 
         //      data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
         //      type: "POST", 
         //      contentType: false,       // The content type used when sending data to the server.
         //      cache: false,             // To unable request pages to be cached
         //      processData:false,   
         //      success : function(data){
         //        alert("sukses");
         //        alert(data);
         //       var data = JSON.parse(data);
         //       if (data.success){
         //         navigator.geolocation.getCurrentPosition(function(position) {
         //           pos = {
         //              lat: position.coords.latitude,
         //              lng: position.coords.longitude
         //            };
         //          });
         //        $$("#val-lat").val();
         //        $$("#val-lon").val();
         //        getDataNearest($$("#val-lat").val(),$$("#val-lon").val());
         //        mainView.router.back();
         //      }
         //      else{
         //        $$.each(data,function(i,v){  
         //         myApp.addNotification({
         //              message: v
         //          });
         //        });
         //      }
         //      },
         //      error : function(e){
         //        alert("error");
         //        alert(JSON.stringify(e));
         //      }
         //  }); 

    // });
    //       var xhr = e.detail.xhr; // actual XHR object
    //       var data = e.detail.data; // Ajax response from action file

    //       data = JSON.parse(data);
    //       alert(data);
    //       // console.log(data);
    //       if (data.success){
    //          navigator.geolocation.getCurrentPosition(function(position) {
    //            pos = {
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude
    //             };
    //           });
    //         $$("#val-lat").val();
    //         $$("#val-lon").val();
    //         getDataNearest($$("#val-lat").val(),$$("#val-lon").val());
    //         mainView.router.back();
    //       }
    //       else{
    //         $$.each(data,function(i,v){  
    //          myApp.addNotification({
    //               message: v
    //           });
    //         });
    //       }
    //       // alert(data);
          

    // });

 var watch_umkm = navigator.geolocation.getCurrentPosition(function(position) {       
  // clearWatch();
 pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  map_area = new google.maps.Map(document.getElementById('map-area'), {
   center: {lat: pos.lat, lng: pos.lng},
   // center: new google.maps.LatLng(-6.970305, 107.654088),
    zoom: 17,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: false,
    mapTypeId: 'terrain'

  });

  
  map_area.mapTypes.set('map_style', styledMap);
  map_area.setMapTypeId('map_style');



  $$("#Ukm_lat").val(pos.lat);
  $$("#Ukm_lon").val(pos.lng);

   var  marker2 = new google.maps.Marker({
        position : new google.maps.LatLng(pos.lat,pos.lng),
         map : map_area,
         title: "Lokasiku",
         draggable:true,
          // label: {
          //   text: "",
          //   color: 'black',
          // },
       // animation: google.maps.Animation.DROP
      icon : server+"/icon/ic_my_location_black_18px.svg"
    });
    // $$("#Ukm_lat").val(me2.position.lat());
    // $$("#Ukm_lon").val(me2.position.lng());

   //  if (watch_umkm != null) {
   //    navigator.geolocation.clearWatch(watch_umkm);
   //    watch_umkm = null;
   // }
     // function clearWatch() {
     //    if (watch_umkm != null) {
     //        navigator.geolocation.clearWatch(watch_umkm);
     //        watch_umkm = null;
     //    }
     //  }
     
  marker2.addListener("click",dragend );
  marker2.addListener("dragend",dragend );
  geocodePosition(new google.maps.LatLng(pos.lat,pos.lng));
  function dragend(event){
    
   geocodePosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
       $$("#Ukm_lat").val(event.latLng.lat());
       $$("#Ukm_lon").val( event.latLng.lng());


  }
  // google.maps.event.addListener(me2, 'dragend', function() 
  // {
  //   
  //   // $$("#Ukm_lat").val(me.position.lat());
  //   // $$("#Ukm_lon").val(me.position.lng());
  //   // geocodePosition(me.getPosition());
  // });

   
  
},
function (error) { 
if (error.code == error.PERMISSION_DENIED)
myApp.alert('PERMISSION_DENIED',"Ups");
else if (error.code == error.POSITION_UNAVAILABLE )
myApp.alert('POSITION_UNAVAILABLE',"Ups");
else if (error.code == error.TIMEOUT  )
myApp.alert('TIMEOUT',"Ups");

// location.reload();

    // alert("GPS, belum dinyalakan");
});

});

function geocodePositionReturn(pos) 
  {
   geocoder = new google.maps.Geocoder();
   geocoder.geocode
    ({
        latLng: pos
    }, 
        function(results, status) 
        {
            if (status == google.maps.GeocoderStatus.OK) 
            {
            $(".alamat-kirim").html(results[0].formatted_address);

                // alert(results[0].formatted_address);
              // alert(results[0].address_components[1].short_name);
              return results[0].formatted_address;
            } 
            else 
            {
            return "Address Not Found By Google";
            }
        }
    );
}
function geocodePosition(pos) 
  {
   geocoder = new google.maps.Geocoder();
   geocoder.geocode
    ({
        latLng: pos
    }, 
        function(results, status) 
        {


            if (status == google.maps.GeocoderStatus.OK) 
            {
              // alert(results[0].address_components[1].short_name);
              $$("#alamat").val(results[0].formatted_address);
              $$("#Ukm_alamat").val(results[0].formatted_address);
            } 
            else 
            {
                $$("#alamat").html('Cannot determine address at this location.'+status).show(100);
                $$("#Ukm_alamat").html('Cannot determine address at this location.'+status).show(100);
            }
        }
    );
  }
  // alert(e.detail.page.query);
  // alert(JSON.stringify(e.detail.page.query));
  // console.log(e.detail.page.query);

function getRate(ukm_id){
   $$.ajax({ // ajax start
      url : server+"/index.php?r=UkmRate/getRate",
      data : "ukm_id="+ukm_id,
      success : function(r){
          var data = JSON.parse(r);
          // alert(r);

          // if (data.length!=0){
            // if (data.success){
               $(".jRate").jRate({
                rating : data.rate,
                  width: 50,
                  height: 50,
                   min: 1,
                   max: 5, 
                    onSet: function(rating) {
                      setRate(rating,ukm_id);
                    } 
                });
               
            // }else{
            //    $$.each(data.err,function(i,v){  
            //      myApp.addNotification({
            //           message: v,
            //           buttonkey:  {
            //               text: 'Tutup',
            //               // color: 'lightgreen'
            //             }
            //       });
            //     });
            // }
          // }else{ // jika belum d rating maka
          //   // alert(data.length);
          // }
      },error: function(e){
        alert(JSON.stringify(e));
        }
      });// end of ajax
}

function setRate(rate,ukm_id){
    if (window.localStorage.getItem("ukm_id")==ukm_id){
        myApp.addNotification({
          message: "Anda tidak bisa memberikan ulasan",
          buttonkey:  {
              text: 'Tutup',
              // color: 'lightgreen'
            }
      });
        return false;
    }
   $$.ajax({
        url : server+"/index.php?r=UkmRate/baru",
        data : "rate="+rate+"&ukm_id="+ukm_id,
        success : function(r){
        var json = JSON.parse(r);
        if (json.success==false){

            $$.each(json.err,function(i,v){  
             myApp.addNotification({
                  message: v,
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
            });

        }else{ // success
            myApp.addNotification({
                  message: "Terima kasih telah memberikan ulasan",
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });

          // cariById(ukm_id);
            // alert(r);
        }

        }
    });
}
//halaman rincian Tukang Dagang
$$(document).on('click', '.btn-dashboard-admin', function (e) {
    mainView.router.load({
      url:"dashboard-admin.html"
    });
    myApp.closePanel("right");
});
$$(document).on('page:init', '.page[data-page="dashboard-admin"]', function (e) {
  $$.ajax({
        url : server+"/index.php?r=Ukm/getcountdashboard",
        // data : "rate="+rate+"&ukm_id="+ukm_id,
        success : function(r){
        var json = JSON.parse(r);
        if (json.success==false){

            $$.each(json.err,function(i,v){  
             myApp.addNotification({
                  message: v,
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
            });

        }else{ // success
            var angka = "";
            var d = [];
            var angka_keliling = 0;
            var angka_tetap = 0;
            var semua = 0;
            $$.each(json,function(i,v){
               d.push(parseInt(v));
               semua+=parseInt(v);
               // alert(i);
               if (i=="bangunan" || i=="tenda"){
                angka_tetap += parseInt(v);
               }else{
                angka_keliling += parseInt(v);
               }


            });

            $$(".angka-semua").html(semua);
            $$(".angka-bangunan").html(json.bangunan);
            $$(".angka-tenda").html(json.tenda);
            $$(".angka-gerobak").html(json.gerobak);
            $$(".angka-motor").html(json.motor);
            $$(".angka-mobil").html(json.mobil);
            $$(".angka-sepeda").html(json.sepeda);
            $$(".angka-freelance").html(json.freelance);
            $$(".angka-tetap").html(angka_tetap);
            $$(".angka-keliling").html(angka_keliling);
            // angka = "["+angka+"]";
            // alert(angka);
            // alert(JSON.stringify(d));
            // alert(d);

          // alert(JSON.stringify(r));
              Highcharts.chart('container', {
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: 'Jumlah Pedagang'
                  },
                  xAxis: {
                      categories: ['Bangunan', 'Tenda', 'Gerobak', 'Motor', 'Mobil','Sepeda','Freelancer']
                  },
                  credits: {
                      enabled: false
                  },
                  series: [{
                      name: 'John',
                      data: d
                  }]
              });
        }// end sukses

        }
    });
 
});
$$(document).on('page:init', '.page[data-page="rincian-umkm"]', function (e) {
  // alert("123");
  $$("#Ukm_id").val(e.detail.page.query.id);
  $$(".refresh-rincian").attr("ukm_id",e.detail.page.query.id);
  getRate(e.detail.page.query.id);
  cariById(e.detail.page.query.id);
  myApp.closePanel("right");
  cekLevel();

  $$('#background-umkm').on('click', function () {
      myPhotoBrowserStandalone.open();
  });

  $$('#row_User_nama_umkm').on('taphold', function (e) {  
  if (window.localStorage.getItem("isLogged")==1 ){

     myApp.prompt('Nama Tukang Dagang ', 'Ubah',
        function (value) {
          if (value!="")
            editInfo("UMKM_nama",window.localStorage.getItem("username"),"nama",value);
          else
            myApp.alert("Tidak boleh kosong","Ups");
        }
      );
  }
  });


});
function tolakTerima(status,id,telepon,comp){
  $$.ajax({
    url : server+"/index.php?r=gis/Konfirmasi",
    data : "ukm_id="+id+"&status="+status+"&telepon="+telepon,
    success : function(r){
        var data = JSON.parse(r);
        // alert(r);
        if (data.success){
            myApp.addNotification({
              message: "Tukang Dagang telah di konfirmasi  ",
              button: {
                    text: 'Tutup',
                    // color: 'lightgreen'
                  }
             });
             setTimeout(function(e){
                comp.closest("li").remove();
              },1000);

          // mainView.router.back();
        }else{
           $$.each(data.err,function(i,v){  
             myApp.addNotification({
                  message: v,
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
            });


        }
        // alert(data);


    },error: function(e){
      alert(JSON.stringify(e));
      }
    });
 
}

$$(document).on('click', '.btn-popover', function (e) {
  myApp.closeModal('.popover');
});
$$(document).on('click', '.btn-tambah-gambar', function (e) {
  e.preventDefault();

  




});

$$(document).on('click', '.pending-acc', function (e) {
  e.preventDefault();
  var a = $$(this);

     var ukm_id = $$(this).attr("ukm-id");
  // myApp.confirm(' Menyetujui Permintaan Tukang Dagang ? ','Konfirmasi', function () {
       myApp.prompt('Nomor telepon ', 'Konfirmasi',
          function (value) {
            if (value!="" && value.length>5){
             tolakTerima(1,ukm_id,value,a);
              // setTimeout(function(e){
              //   a.closest("li").remove();
              // },1000);
            }
            else
              myApp.alert("Nomor Telepon Tidak Valid","Ups");
          }
        );

});

$$(document).on('click', '.pending-reject', function (e) {
  var i = $$(this);
  e.preventDefault();
  var ukm_id = $$(this).attr("ukm-id");
    myApp.confirm(' Menolak Permintaan Tukang Dagang ? ','Konfirmasi', function () {

  $$.ajax({
    url : server+"/index.php?r=gis/setTolak",
    data : "ukm_id="+ukm_id,
    success : function(r){
        var data = JSON.parse(r);
        // alert(r);
        if (data.success){
            myApp.addNotification({
              message: "Tukang Dagang ditolak  ",
              button: {
                    text: 'Tutup',
                    // color: 'lightgreen'
                  }
             });
             setTimeout(function(e){
                i.closest("li").remove();
              },1000);

          // mainView.router.back();
        }else{
           $$.each(data.err,function(i,v){  
             myApp.addNotification({
                  message: v,
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
            });

        }
        // alert(data);


    },error: function(e){
      alert(JSON.stringify(e));
      }
    });
         // tolakTerima(3,ukm_id,"0000000000",null); // zero mean is set null
         //    setTimeout(function(e){
         //  $$(this).closest("li").remove();
         //  },1000);
    });

});

function getNewsSticker(){
      $$("#ticker").html(" ");
      $$.ajax({
          url : server+"/index.php?r=UkmStatus/getStatus",
           data : "lat="+$$("#val-lat").val()+"&lon="+$$("#val-lon").val(),
          success : function(r){
            $$(".timeline").html("");
            var data = JSON.parse(r);
            if (!data.success){
              myApp.addNotification({
                  message: data.message,
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
              return false;
            }
            
              
              if (data.data.length!=0){
               $$.each(data.data,function(i,v){
                string = '<li">'+moment(v.created_date, "YYYY-MM-DD h:mm:ss").fromNow()+" <a style='color:black' href='tabs-swipeable.html?id="+v.ukm_id+"'> <b style=''>&nbsp;&nbsp;"+v.nama_ukm+'  &nbsp;&nbsp;</b>  </a> mengatakan : <br> <i>'+v.status+'</i></li>';
                // ' <a class="button button-big button-fill button-raised color-orange "> </a> '+ 
                               


                $$("#ticker").append(string);

               });
              }
              else{
                string = '<li">Tidak terdapat berita terbaru</li>';

                $$("#ticker").append(string);
                  // string = '<div class="timeline-item" style="color:red;text-align:center>Tidak Tersedia Berita</div>';
                  //  $$(".timeline").append(string);
                // alert("masuk");
                  // var string = '<div class="swiper-slide" '+
                  // 'style="background-image:url("http://gis.35utech.com/images/iklan disini.png.jpg")">'+
                  // '</div>';

                  // $$("#iklan-wrapper").append(string);
                }
                  $('#ticker').tickerme({
                    duration: 10000,

                  });
                    $$("#controls").css("display","none");


              

              }
        }); // end of ajax
}
$$(document).on('page:init', '.page[data-page="dashboard"]', function (e) {
  // news sticker
getNewsSticker();


// 1 Slide Per View, 50px Between
    $$(".btn-rekomendasi").on("click",function(e){
      alert("123");
      e.preventDefault();

      $$.ajax({
          url : server+"/index.php?r=gis/cariCustom",
          data : "status="+$$(this).attr("value")+"&lat="+$$("#val-lat").val()+"&lon="+$$("#val-lon").val(),
          success : function(r){
            // alert(r);
              var data = JSON.parse(r);
              clearMarkers();
              // setMarkers(data);
              if (data.length!=0){


                myApp.addNotification({
                  message: "Tukang Dagang ditemukan ",
                  button: {
                        text: 'Tutup',
                        // color: 'lightgreen'
                      },
                      hold : 1000
                 });

                  appendToList(data);


               
              }
              else{
                 myApp.addNotification({
                  message: "Tukang Dagang Tidak ditemukan  ",
                  button: {
                        text: 'Tutup',
                        // color: 'lightgreen'
                      },
                      hold : 2000
                 });
          }
              }
        });
    });

   
    getSlider();


});
function getAllPengajuan(){
    $$.ajax({
    url : server+"/index.php?r=gis/GetPending",
    success : function(r){
      // alert(r);
        var data = JSON.parse(r);

        $$.each(data,function(i,data){
          // alert(data);
          var html =  '<li  style="top: 0px;" class="swipeout transitioning">'+
          '<div class="swipeout-content" style="">'+
          '<a href="#" class="item-link item-content">'+
          '<div class="item-inner">'+
          '<div class="item-title-row">'+
          '<div class="item-title">'+data.nama+'</div>'+
          '<div class="item-after">'+data.tinput+' </div>'+
          '</div>'+
          '<div class="item-subtitle">'+data.nama_kategori+'</div>'+
          '<div class="item-text">'+data.keterangan+'</div>'+
          '</div>'+
          '</a>'+
          '</div>'+
          '<div class="swipeout-actions-right">'+
          '<a ukm-id="'+data.id+'"   class="pending-acc demo-mark bg-green  " style="left: 0px;"><i class="fa fa-check" ></i></a>'+
          '<a ukm-id="'+data.id+'"   class="pending-reject demo-mark bg-red  " style="left: 0px;"><i class="fa fa-times" ></i></a>'+
          '<a ukm-id="'+data.id+'"   class="remove-favorite demo-mark bg-red  " style="left: 0px;"><i class="fa fa-trash" ></i></a>'+
          '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="pending-info demo-mark bg-orange  " style="left: 0px;"><i class="fa fa-info" ></i></a>'+
          // '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="external demo-mark bg-blue  " style="left: 0px;"><i class="fa fa-marker" ></i></a>'+
          '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+data.lat+','+data.lon+'" lat="'+data.lat+'" class="link external bg-blue"  lon="'+data.lon+'" class="" style="left: 0px;"><i class="material-icons  md-24 ">directions</i> <i class="fa fa-google"></i></a>'+

          '</div>'+
          '</li>';

          $$("#ul-request-list").append(html);
        });

    },error: function(e){
      alert(JSON.stringify(e));
    }
    });

}
$$(document).on('page:init', '.page[data-page="request-list"]', function (e) {
    getAllPengajuan();
});
$$(document).on('page:init', '.page[data-page="tambah-cart"]', function (e) {
    // data_ukm_id
    var id =e.detail.page.query.id;
    GetProdukByUMKM(id);

});
$$(document).on('click', '.btn-refresh-order', function (e) {
    var user_id = window.localStorage.getItem("username");
    getSaldo(user_id);
  // var tabActive = $('.tabbar.pesanan a.active:not(.tertunda)').attr('href') 
  // if (tabActive == undefined) tabActive = "#tab-1"; 
  // getListOrder(window.localStorage.getItem("username"), tabActive);
  // console.log(tabActive);
});

$$(document).on('page:init', '.page[data-page="order"]', function (e) {
  var tabActive = $('.tabbar.pesanan a.tertunda').attr('href'); 
  getListOrder(window.localStorage.getItem("username"), tabActive);
  $$(".order-qty-notif").hide();
  $$(".order-qty-notif").html(0);

});

$$(document).on('click', '.tab-link', function(){
  getListOrder(window.localStorage.getItem("username"), $(this).attr('href')); 
  console.log($(this).attr('href'));
});

function getListOrder(username, tabActive){
    $$.ajax({
      url : server+"/index.php?r=UkmPanggil/getListOrder",
      data : "username="+username,
      success : function(r){
        var data = JSON.parse(r);
        var style="";
        
        $$("#order-proses").html("");
        $$("#order-batal").html("");
        $$("#order-selesai").html("");
        $$("#order-pending").html("");
        
         $$.each(data,function(i,data){
          if (data.status=="2"){
            if (window.localStorage.getItem("username")==data.cancel_by) s = "Di Batalkan Olehku ";
            else s = "Di Batalkan Tukang Dagang ";
          } else {  s = " "; }

          var idString = "";
          var medialist = "";
          var style_batal = "";
          if (tabActive == '#tab-1') {
            if (data.status=="0"){
              idString = "#order-pending";
              medialist = ".media-list1";
              style = "style='display:flex'";
              style_batal = "style='display:flex'";
            }
          } else if(tabActive == '#tab-2') {
            if (data.status=="1"){
              idString = "#order-selesai";
              style = "style='display:flex'";
              style_batal = "style='display:none'";
            }
          } else if(tabActive == '#tab-3') {
            if (data.status=="2"){
              idString = "#order-batal";
              style = "style='display:none'";
              style_batal = "style='display:none'";
            }
          } else if(tabActive == '#tab-4') {
            if (data.status=="3"){
              idString = "#order-proses";
              style = "style='display:flex'";
              style_batal = "style='display:none'";
            }
          }

          var html =  '<li  style="top: 0px;" class="btn-lihat-pesanan swipeout transitioning tr-calon"  panggil_id="'+data.id+'" >'+
          '<div class="swipeout-content" style="">'+
          '<a href="#" class="item-link item-content">'+
          '<div class="item-inner">'+
          '<div class="item-title-row">'+
          '<div class="item-title">'+data.nama+'</div>'+
          '<div class="item-after">'+moment(data.jam, "YYYY-MM-DD h:mm:ss").fromNow()+' </div>'+
          '</div>'+
          '<div class="item-subtitle">'+data.alamat+'</div>'+
          '<div class="item-text" style="color:red">'+s+'</div>'+
          '</div>'+
          '</a>'+
          '</div>'+
          '<div panggil_id="'+data.id+'" class=" btn-lihat-pesanan swipeout-actions-right " '+style+'>'+
          // '<a ukm-id="'+data.id+'"   class="pending-acc demo-mark bg-green  " style="left: 0px;"><i class="fa fa-check" ></i></a>'+
          // '<a ukm-id="'+data.id+'"   class="pending-reject demo-mark bg-red  " style="left: 0px;"><i class="fa fa-times" ></i></a>'+
          // '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="pending-info demo-mark bg-orange  " style="left: 0px;"><i class="fa fa-info" ></i></a>'+
          // '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="external demo-mark bg-blue  " style="left: 0px;"><i class="fa fa-marker" ></i></a>'+
           // '<a class="bg-red" onClick="getDirection('+data.caller_lat+','+data.caller_lng+');" >'+
           //    '<i class="material-icons  md-30">directions</i>'+
           //    '</a>'+
              '<a '+style_batal+' class="bg-red external btn-delete-calon" panggil_id="'+data.id+'"  >'+
              '<i class="fa fa-times external"></i>'+
              '</a>'+
              '<a  class="bg-orange red" href="tel:'+data.username+'" >'+
              '<i class="fa fa-phone external"></i>'+
              '</a>'+
              '<a class="bg-blue external" href="sms:'+data.username+'" >'+
              '<i class="fa fa-envelope"></i>'+
              '</a>'+
              '<a class="bg-green external" href="https://api.whatsapp.com/send?phone=62"+data.telepon.substring(1,100));"">'+
              '<i class="fa fa-whatsapp"></i>'+
            '</a>'+

          // '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+data.lat+','+data.lon+'" lat="'+data.lat+'" class="link external bg-blue"  lon="'+data.lon+'" class="" style="left: 0px;"><i class="material-icons  md-24 ">directions</i> <i class="fa fa-google"></i></a>'+
          // media-list
          '</div>'+
          '</li>';
          $$('.media-list ul'+idString).append(html);
        
        });
     

      }
    });
  }
  function getListOrderDagang(panggil_id){
    var data2 = []
    $$.ajax({
      url : server+"/index.php?r=UkmPanggil/getListOrderDagang",
      data : "id="+panggil_id,
      success : function(r){
        var data = JSON.parse(r);
        // $$(".order-jarak").html(data.head.jarak);

        // data2 = data;
        // alert(JSON.stringify(data));
      }
    });
    // return data2;
   }



  function getListPanggilan(){

     $$("#ul-panggilan-list").html("");
    $$.ajax({
      url : server+"/index.php?r=gis/getListPanggilan",
      data : "ukm_id="+window.localStorage.getItem("ukm_id"),
      success : function(r){
       var data = JSON.parse(r);
       calon_pembeli_pos = [];
        calon_pembeli_pos = data;
        // alert(calon_pembeli_pos);
         $$.each(calon_pembeli_pos,function(i,data){
          // alert(data);
          var pesan;
          if (data.pesan.length>0){
            pesan = data.pesan;
            // $$(".btn-get-calon").show();
          }else{
            pesan = "Tidak ada pesan";
            // $$(".btn-get-calon").hide();

          }

          var status_sampai;
          var style;
          if (data.status==0){
            status_sampai = "<span style='color:red'>Tertunda</span>";
            style="style='display:flex'";
            style_done="style='display:none'";
          }else if (data.status==1){
            status_sampai = "<span style='color:green'>Selesai</span>";
          }else if (data.status==2){
            status_sampai = "<span style='color:red'>Batal</span>";
          }else if (data.status==3){
            status_sampai = "<span style='color:green'>Proses</span>";
            style="style='display:none'";
            style_done="style='display:flex'";
          }




          var html =  '<li wkwk  style="top: 0px;" class="btn-lihat-pesanan swipeout transitioning tr-calon"  panggil_id="'+data.id+'" >'+
          '<div class="swipeout-content" style="">'+
          '<a href="#" class="item-link item-content">'+
          '<div class="item-inner">'+
          '<div class="item-title-row">'+
          '<div class="item-title" nomor='+data.username+'>'+data.nama_user+' </div>'+
          '<div class="item-after">'+moment(data.jam, "YYYY-MM-DD h:mm:ss").fromNow()+' </div>'+
          '</div>'+
          '<div class="item-subtitle">'+data.pesan+'</div>'+
          '<div class="item-text">'+status_sampai+'<br>'+data.alamat+'</div>'+
          '</div>'+
          '</a>'+
          '</div>'+
          '<div class="swipeout-actions-right ">'+
          // '<a ukm-id="'+data.id+'"   class="pending-acc demo-mark bg-green  " style="left: 0px;"><i class="fa fa-check" ></i></a>'+
          // '<a ukm-id="'+data.id+'"   class="pending-reject demo-mark bg-red  " style="left: 0px;"><i class="fa fa-times" ></i></a>'+
          // '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="pending-info demo-mark bg-orange  " style="left: 0px;"><i class="fa fa-info" ></i></a>'+
          // '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="external demo-mark bg-blue  " style="left: 0px;"><i class="fa fa-marker" ></i></a>'+
              // '<a class="bg-red" onClick="getDirection('+data.caller_lat+','+data.caller_lng+');" >'+
              // '<i class="material-icons  md-30">directions</i>'+
              // '</a>'+
              '<a class="bg-gray external btn-lihat-pesanan" '+style+' panggil_id="'+data.id+'"  >'+
              '<i class="fa fa-list-ol external"></i>'+
              '</a>'+
              '<a class="bg-red external btn-delete-calon" '+style+' panggil_id="'+data.id+'"  >'+
              '<i class="fa fa-times external"></i>'+
              '</a>'+
                '<a class="bg-green external btn-approve-calon" '+style+' panggil_id="'+data.id+'"  >'+
              '<i class="fa fa-check external"></i>'+
              '</a>'+
                  '<a class="bg-green external btn-selesai-calon" '+style_done+' panggil_id="'+data.id+'"  >'+
              '<i class="fa fa-flag-checkered external"></i>'+
              '</a>'+
              '<a class="bg-orange red" href="tel:'+data.username+'" >'+
              '<i class="fa fa-phone external"></i>'+
              '</a>'+
              '<a class="bg-blue external" href="sms:'+data.username+'" >'+
              '<i class="fa fa-envelope"></i>'+
              '</a>'+
              '<a class="bg-green external" href="https://api.whatsapp.com/send?phone=62"+data.telepon.substring(1,100));"">'+
              '<i class="fa fa-whatsapp"></i>'+
                '</a>'+

          // '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+data.lat+','+data.lon+'" lat="'+data.lat+'" class="link external bg-blue"  lon="'+data.lon+'" class="" style="left: 0px;"><i class="material-icons  md-24 ">directions</i> <i class="fa fa-google"></i></a>'+

          '</div>'+
          '</li>';

          $$("#ul-panggilan-list").append(html);
        });
     

      }
    });
  }
  $$(document).on('page:back', '.page[data-page="edit-umkm"]', function (e) {
     // getAllUMKM()
  });
  // $$(document).on('page:beforeinit', '.page[data-page="panggilan-list"]', function (e) {
  //   getListPanggilan();
  //     // alert("masuk");
  // });
  $$(document).on('page:init', '.page[data-page="panggilan-list"]', function (e) {
    
    $$(".panggilan-qty-notif").hide();
    $$(".panggilan-qty-notif").html(0);
    
    getListPanggilan();
    // alert(JSON.stringify(calon_pembeli_pos));   
    // $$.ajax({
    // url : server+"/index.php?r=gis/getListPanggilan",
    // data : "ukm_id="+window.localStorage.getItem("ukm_id"),
    // success : function(r){
    //   // alert(r);
    //     var data = JSON.parse(r);

       
        // alert(JSON.stringify(calon_pembeli_pos));
       
});

    $$(document).on("click",'.btn-delete-calon', function (e) {
     e.preventDefault();
     var id = $$(this).attr("panggil_id");
     var ini = $$(this);

      myApp.confirm('Yakin ?',"Yakin Menolak/Membatalkan Pesanan ?", function () {
         $$.ajax({
            url : server+"/index.php?r=Ukm/bersihkan",
            data :"id="+id+"&username="+window.localStorage.getItem("username"),
            success : function(r){
                var data = JSON.parse(r);
                if (data.success){
                   $$(".tr-calon[panggil_id='"+id+"']").remove();
                }else{
                  alert("Gagal");
                }
            },error: function(e){
              alert(JSON.stringify(e));
            }
        });
      });

   });

     $$(document).on("click",'.btn-lihat-pesanan', function (e) {
       e.preventDefault();
       var id = $$(this).attr("panggil_id");
       var ini = $$(this);
       // alert(id);
       mainView.router.load({
          url:"view_order.html",
          query:{
            id: id
          }    
        });
       
       // getListOrderDagang(id);

     });

     $$(document).on("click",'.btn-approve-calon', function (e) {
     e.preventDefault();
     var id = $$(this).attr("panggil_id");
     var ini = $$(this);

      myApp.confirm('Yakin ?',"Yakin Menerima Pesanan ?", function () {
         $$.ajax({
            url : server+"/index.php?r=Ukm/ApproveCalon",
            data :"id="+id+"&username="+window.localStorage.getItem("username"),
            success : function(r){
                var data = JSON.parse(r);
                if (data.success){
                    $$(".refresh-calon").trigger("click");
                   // $$(".tr-calon[panggil_id='"+id+"']").remove();
                }else{
                  alert("Gagal");
                }
            },error: function(e){
              alert(JSON.stringify(e));
            }
        });
      });

   });
    $$(document).on("click",'.btn-selesai-calon', function (e) {
     e.preventDefault();
     var id = $$(this).attr("panggil_id");
     var ini = $$(this);

      myApp.confirm('Yakin ?',"Telah Menyelesaikan Pesanan ?", function () {
         $$.ajax({
            url : server+"/index.php?r=Ukm/SelesaiCalon",
            data :"id="+id+"&username="+window.localStorage.getItem("username"),
            success : function(r){
                var data = JSON.parse(r);
                if (data.success){
                    $$(".refresh-calon").trigger("click");
                   // $$(".tr-calon[panggil_id='"+id+"']").remove();
                }else{
                  alert("Gagal");
                }
            },error: function(e){
              alert(JSON.stringify(e));
            }
        });
      });

   });


 
   $$(document).on("click",'.btn-delete-fav', function (e) {
     e.preventDefault();
     var ukm_id = $$(this).attr("ukm_id");
     var ini = $$(this);
      myApp.confirm('Yakin ?', function () {

         $$.ajax({
            url : server+"/index.php?r=gis/DeleteFavorite",
            data :"username="+window.localStorage.getItem("username")+"&ukm_id="+ukm_id,
            success : function(r){
                var data = JSON.parse(r);
                if (data.success){
                   $$(".tr-fav[ukm_id='"+ukm_id+"']").remove();
                }else{
                  alert("Failed");
                }
            },error: function(e){
              alert(JSON.stringify(e));
            }
        });

      });
    }); // end click delete

   function refreshSavedpromo(){
    // alert("TEST");
       $$("#ul-favorit-list").html("");
        $$.ajax({
        url : server+"/index.php?r=jenius/listSavedPromo",
        data : "user_id="+window.localStorage.getItem("username"),
        success : function(r){
            var data = JSON.parse(r);
            console.log(data);

            $$.each(data.result,function(i,data){
                if (imageExists(data.logo)){
                    img = data.logo;
                }else{
                    img = "img/no_image.jpg";
                }
              var html =  '<li class="hold-hapus-produk-" data-id="'+data.id+'" >'+
                    '<a href="#" class="item-link item-content">'+
                    '<div class="item-media"><img src="'+img+'" width="80"></div>'+
                    '<div class="item-inner">'+
                      '<div class="item-title-row" style="background-image:url()">'+
                        '<div class="item-title" style="width: 150px;"><b><i>'+data.store+'</i></b></div>'+
                      '</div>'+
                      '<div class="item-title-row" style="background-image:url()">'+
                        '<div class="item-after" style="height: 150px;">'+data.description+'</div>'+
                      '</div>'+
                      '<i class="fa fa-heart saved_prom_1" data-id="'+data.id+'" aria-hidden="true"></i>'+
                      // '<div class="item-text" style="width:80px">'+
                      //   '<i style="float:none;display:none" class="fa fa-plus-square fa-2x btn-add-qty"></i>&nbsp;'+
                      //   '<input readonly item_id="'+v.id+'" ukm_id="'+v.id+'" class="order-qty-final"  type="text"  style="width:40px;border:1px solid gray;padding:5px;display:inline-block;float:right" />'+
                      //   '&nbsp;<i style="display:none" class="fa fa-minus-square fa-2x btn-min-qty" ></i>'
                      // '</div>'+
                      // '</div>'+
                    '</div>'+
                    '</a>'+
                '</li>';

              $$("#ul-favorit-list").append(html);
              // alert(html);
            });

        },error: function(e){
          alert(JSON.stringify(e));
        }
      });
      //  $$("#ul-favorit-list").html("");
      //   $$.ajax({
      //   url : server+"/index.php?r=gis/getFavorite",
      //   data : "username="+window.localStorage.getItem("username"),
      //   success : function(r){
      //     // alert(r);
      //       var data = JSON.parse(r);

      //       $$.each(data,function(i,data){
      //         // alert(data);
      //         var html =  '<li  style="top: 0px;" ukm_id="'+data.id+'" class=" tr-fav swipeout transitioning">'+
      //         '<div class="swipeout-content" style="">'+
      //         '<a href="#" class="item-link item-content">'+
      //         '<div class="item-inner">'+
      //         '<div class="item-title-row">'+
      //         '<div class="item-title">'+data.nama+'</div>'+
      //         '<div class="item-after">'+data.tinput+' </div>'+
      //         '</div>'+
      //         '<div class="item-subtitle">'+data.nama_kategori+'</div>'+
      //         // '<div class="item-text">Lokasi</div>
      //         '</div>'+
      //         '</a>'+
      //         '</div>'+
      //         '<div class="swipeout-actions-right  ">'+
      //         // '<a ukm-id="'+data.id+'"   class="pending-acc demo-mark bg-green  " style="left: 0px;"><i class="fa fa-check" ></i></a>'+
      //         // '<a ukm-id="'+data.id+'"   class="pending-reject demo-mark bg-red  " style="left: 0px;"><i class="fa fa-times" ></i></a>'+
      //           '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="pending-info demo-mark bg-orange  " style="left: 0px;"><i class="fa fa-info" ></i></a>'+
      //           // '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="external demo-mark bg-blue  " style="left: 0px;"><i class="fa fa-marker" ></i></a>'+
      //            '<a onClick="getDirection('+data.lat+','+data.lon+');" >'+
      //             '<i class="material-icons  md-30">directions</i>'+
      //            '</a>'+

      //            '<a href="#"  ukm_id="'+data.id+'" class="btn-delete-fav"  >'+
      //             '<i class="fa fa-times"></i>'+
      //            '</a>'+

      //           '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+data.lat+','+data.lon+'" lat="'+data.lat+'" class="link external bg-blue"  lon="'+data.lon+'" class="" style="left: 0px;"><i class="material-icons  md-24 ">directions</i> <i class="fa fa-google"></i></a>'+

      //         '</div>'+
      //         '</li>';

      //         $$("#ul-favorit-list").append(html);
      //       });

      //   },error: function(e){
      //     alert(JSON.stringify(e));
      //   }
      // });
   }

   function refreshFavoritku(){
    // alert("TEST");
       $$("#ul-favorit-list").html("");
        $$.ajax({
        url : server+"/index.php?r=jenius/listPromo",
        data : "username="+window.localStorage.getItem("username"),
        success : function(r){
            var data = JSON.parse(r);
            console.log(data);

            $$.each(data.result,function(i,data){
                if (imageExists(data.wallet_logo)){
                    img = data.wallet_logo;
                }else{
                    img = "img/no_image.jpg";
                }
              var html =  '<li class="hold-hapus-produk-" data-id="'+data.id+'" >'+
                    '<a href="#" class="item-link item-content">'+
                    '<div class="item-media"><img src="'+img+'" width="80"></div>'+
                    '<div class="item-inner">'+
                      '<div class="item-title-row" style="background-image:url()">'+
                        '<div class="item-title" style="width: 150px;"><b><i>'+data.store+'</i></b></div>'+
                      '</div>'+
                      '<div class="item-title-row" style="background-image:url()">'+
                        '<div class="item-after" style="height: 150px;">'+data.description+'</div>'+
                      '</div>'+
                      '<i class="fa fa-heart-o saved_prom" data-id="'+data.id+'" aria-hidden="true"></i>'+
                      // '<div class="item-text" style="width:80px">'+
                      //   '<i style="float:none;display:none" class="fa fa-plus-square fa-2x btn-add-qty"></i>&nbsp;'+
                      //   '<input readonly item_id="'+v.id+'" ukm_id="'+v.id+'" class="order-qty-final"  type="text"  style="width:40px;border:1px solid gray;padding:5px;display:inline-block;float:right" />'+
                      //   '&nbsp;<i style="display:none" class="fa fa-minus-square fa-2x btn-min-qty" ></i>'
                      // '</div>'+
                      // '</div>'+
                    '</div>'+
                    '</a>'+
                '</li>';

              $$("#ul-favorit-list").append(html);
              // alert(html);
            });

        },error: function(e){
          alert(JSON.stringify(e));
        }
      });
      //  $$("#ul-favorit-list").html("");
      //   $$.ajax({
      //   url : server+"/index.php?r=gis/getFavorite",
      //   data : "username="+window.localStorage.getItem("username"),
      //   success : function(r){
      //     // alert(r);
      //       var data = JSON.parse(r);

      //       $$.each(data,function(i,data){
      //         // alert(data);
      //         var html =  '<li  style="top: 0px;" ukm_id="'+data.id+'" class=" tr-fav swipeout transitioning">'+
      //         '<div class="swipeout-content" style="">'+
      //         '<a href="#" class="item-link item-content">'+
      //         '<div class="item-inner">'+
      //         '<div class="item-title-row">'+
      //         '<div class="item-title">'+data.nama+'</div>'+
      //         '<div class="item-after">'+data.tinput+' </div>'+
      //         '</div>'+
      //         '<div class="item-subtitle">'+data.nama_kategori+'</div>'+
      //         // '<div class="item-text">Lokasi</div>
      //         '</div>'+
      //         '</a>'+
      //         '</div>'+
      //         '<div class="swipeout-actions-right  ">'+
      //         // '<a ukm-id="'+data.id+'"   class="pending-acc demo-mark bg-green  " style="left: 0px;"><i class="fa fa-check" ></i></a>'+
      //         // '<a ukm-id="'+data.id+'"   class="pending-reject demo-mark bg-red  " style="left: 0px;"><i class="fa fa-times" ></i></a>'+
      //           '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="pending-info demo-mark bg-orange  " style="left: 0px;"><i class="fa fa-info" ></i></a>'+
      //           // '<a ukm-id="'+data.id+'" href="tabs-swipeable.html?id='+data.id+'"    class="external demo-mark bg-blue  " style="left: 0px;"><i class="fa fa-marker" ></i></a>'+
      //            '<a onClick="getDirection('+data.lat+','+data.lon+');" >'+
      //             '<i class="material-icons  md-30">directions</i>'+
      //            '</a>'+

      //            '<a href="#"  ukm_id="'+data.id+'" class="btn-delete-fav"  >'+
      //             '<i class="fa fa-times"></i>'+
      //            '</a>'+

      //           '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+data.lat+','+data.lon+'" lat="'+data.lat+'" class="link external bg-blue"  lon="'+data.lon+'" class="" style="left: 0px;"><i class="material-icons  md-24 ">directions</i> <i class="fa fa-google"></i></a>'+

      //         '</div>'+
      //         '</li>';

      //         $$("#ul-favorit-list").append(html);
      //       });

      //   },error: function(e){
      //     alert(JSON.stringify(e));
      //   }
      // });
   }
  $$(document).on('page:init', '.page[data-page="view_order"]', function (e) {
      // var id = e.detail.id;
      var page = e.detail.page;
      var id = page.query.id;
        
       // var data2 = [];
      $$.ajax({
        url : server+"/index.php?r=UkmPanggil/getListOrderDagang",
        data : "id="+id,
        success : function(r){
          var data = JSON.parse(r);
          // alert(JSON.stringify(data.detail));
           $$.each(data.detail,function(i,v){
                if (imageExists(server+"/images/product/"+v.id+".jpg")){
                img = server+"/images/product/"+v.id+".jpg";
               }else{
                img = "img/no_image.jpg";
               }
             string = '<li class="hold-hapus-produk-"  data-harga="'+v.total_cost+'" data-id="'+v.id+'"  data-nama="'+v.item_name+'" ukm_id="'+v.item_name+'" >'+
                    '<a href="#" class="item-link item-content">'+
                    '<div class="item-media"><img src="'+img+'" width="80"></div>'+
                    '<div class="item-inner">'+
                    '<div class="item-title-row" style="background-image:url()">'+
                    '<div class="item-title" style="width: 150px;"> '+v.item_name+'</div>'+
                    '<div class="item-after" angka="'+v.total_cost+'"> Rp.'+numberWithCommas(v.total_cost)+'</div>'+
                    '</div>'+
                     '<div class="item-text" style="width:80px">'+
                    '<i style="float:none;display:none" class="fa fa-plus-square fa-2x btn-add-qty"></i>&nbsp;'+
                    '<input readonly item_id="'+v.id+'" ukm_id="'+v.id+'" class="order-qty-final"  type="text"  style="width:40px;border:1px solid gray;padding:5px;display:inline-block;float:right" />'+
                    '&nbsp;<i style="display:none" class="fa fa-minus-square fa-2x btn-min-qty" ></i>'
                     '</div>'+
                    '</div>'+
                    '</div>'+
                    '</a>'+
                '</li>'; 
                $$("#cart-beli-cekout").append(string);
          });

           // alert(JSON.stringify(data.head));
          $$(".order-jarak").html(data.head.jarak+" Meter");
          $$("#total-biaya").html( numberWithCommas(data.head.total) );
          $$(".alamat-kirim").html( data.head.alamat );
          if (data.head.pesan!=""){
            $$("#pesan-order").val( data.head.pesan );
          }else{
            $$("#pesan-order").val("Catatan Tidak Ada ");
          }
            
          $$("#order-nama-user").html( data.head.nama_user );
          $$("#order-telepon").html( data.head.username );
          // }
        //   alert(data);
          // data2 = data;
        }
      });

      // var data = getListOrderDagang(id);
      // alert(JSON.stringify(data));
  });

  $$(document).on('page:init', '.page[data-page="saved-promo-list"]', function (e) {
    refreshSavedpromo();
     $$('.refresh-saved-promo').on('click', function () {
        refreshSavedpromo();
     });
  });

  $$(document).on('page:init', '.page[data-page="favorite-list"]', function (e) {
    refreshFavoritku();
     $$('.refresh-favoriteku').on('click', function () {
        refreshFavoritku();
     });
  });


 $$('#li_button_permintaan').on('click', function () {
    mainView.router.load({
      url:"list-request.html"
    });
    myApp.closePanel();
 });
 $$('#li_button_fav_saya').on('click', function () {
   mainView.router.load({
      url:"list-favorite.html"
    });
     myApp.closePanel();
 });
 $$('#li_button_rekomendasi').on('click', function () {
      var lat = $$("#val-lat").val();
      var lng = $$("#val-lon").val();
      var lurah = "";
       $$.ajax({
            url : "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&sensor=false",
            success : function(r){
                var data = JSON.parse(r);
                // alert(JSON.stringify(data));
                // alert(r);
                lurah = data.results[0].address_components[1].short_name;
                // alert(lurah);
                myApp.closePanel();
                mainView.router.load({
                  url:"add-umkm.html",
                  query:{
                    kel: lurah
                  }    
                });
                

            },error: function(e){
              alert(JSON.stringify(e));
            }
        });
 });
 $$('.close-login').on('click', function () {
//     var username = $$('.login-screen').find('input[name="username"]').val();
//     var password = $$('.login-screen').find('input[name="password"]').val();
//     myApp.alert('Username: ' + username + ', password: ' + password, function () {
//     });
        myApp.closeModal('.login-screen');
}); 

$$(document).on('click','.btn-berita', function () {

    mainView.router.load({
      url:"berita.html" 
   });
    myApp.closePanel("right");
}); 
$$(document).on('click','.btn-user-sign', function () {
   myApp.loginScreen();

});
$$(document).on('click','.btn-user-out', function () {
       // $$.ajax({
       //      url : server+"/index.php?r=gis/logout",
       //      data :"username="+window.localStorage.getItem("username"),
       //      success : function(r){
       //      Android.logoutRainbow();
       //          var data = JSON.parse(r);
       //          if (data.success){
                      window.localStorage.removeItem("isLogged");
                      window.localStorage.removeItem("username");
                      cekLevel();
                      // window.localStorage.removeItem("ukm_id");
                      // window.localStorage.removeItem("ukm_tipe");
                      // window.localStorage.removeItem("ukm_nama");
                      // window.localStorage.removeItem("level");
                      // window.localStorage.removeItem("kategori_favorite");
                      // window.localStorage.removeItem("td_favorite");
                      // window.localStorage.removeItem("delivery");
                      // window.localStorage.removeItem("minimal");
                      // window.localStorage.removeItem("");

        //                cekLevel();
        //                myApp.closePanel();
                       myApp.addNotification({
                        message: "Berhasil Keluar ",
                        button: {
                              text: 'Tutup',
                              // color: 'lightgreen'
                            },
                            hold : 1000
                       });
        //                $$(".btn-user-out").hide();
        //                 //Android.logoutRainbow();
        //               // setTimeout(function(e){                   
        //               //  window.location.reload();
        //               // },1000);
        //         }
                

        //     },error: function(e){
        //       alert(JSON.stringify(e));
        //     }
        // });
  // alert("keluar");
  // keliling["08122178"].setMap(null);


  // myApp.
});


$$(document).on('page:init', '.page[data-page="add-rek-umkm"]', function (e) {
  
   

  var page = e.detail.page;
  var kel = page.query.kel;

    //set kelurahan
    $$.ajax({
        url : server+"/index.php?r=gis/getjenisusaha",
        success : function(r){
            var data = JSON.parse(r);
            // console.log(data);
            // myApp.alert(data);
             $$.each(data.kelurahan,function(i,v){
              if (kel==v.nama){
                // myApp.alert(kel+" "+v.nama);
                // console.log(kel+" "+v.nama);
                 $$("#Ukm_kelurahan").append("<option selected value="+v.id+">"+v.nama+"</option>");
              }
               else{
                // myApp.alert(kel+" "+v.nama);

                 $$("#Ukm_kelurahan").append("<option value="+v.id+">"+v.nama+"</option>");
               }
            });
           
        }
    })

  


});
$$(document).on('page:init', '.page[data-page="filter-search"]', function (e) {
    getPosition();

    getkategori(null);
    $$('#isnear').on('change', function (e) {
     if ($$(this).prop('checked') ){

      $$(".non-terdekat").hide();
     }
      else{
      $$(".non-terdekat").show();

      }
        // alert("false");

    });


      
      // alert("l;ewat");

    // REFILL
    // alert(JSON.stringify(dataFilter));
    if (dataFilter.length!=0){
      // alert("no kosong");
      $$("#kata_kunci").val(dataFilter.keyw);

      // alert(dataFilter.isnear);
      if (dataFilter.kelurahan!="")
        window.localStorage.setItem("filter-rw", dataFilter.kelurahan);
      else
        window.localStorage.setItem("filter-rw", "");

      if (dataFilter.rw!="")
        window.localStorage.setItem("filter-kelurahan", dataFilter.rw);
      else
        window.localStorage.setItem("filter-kelurahan", "");


      if (dataFilter.isnear==null){
        $$("#isnear").removeAttr("checked");
        $$(".non-terdekat").show();
      }



      // alert(JSON.stringify(dataFilter));
    }
    // alert(window.localStorage.getItem("filter-kelurahan"));
    // alert(window.localStorage.getItem("filter-rw"));

    // var page = e.detail.page;
    // $$("#rt").append("<option value=''>Semua RT</option>");
    

        // ajax       
        $$('.form-pencarian').on('form:beforesend', function (e) {
          // alert("beforesend");
          try{

           $$("#val2-lat").val(-6.9144948);
           $$("#val2-lon").val(107.5641419);
           $$(".current-map").trigger("click");
          dataFilter = new FormData(this);
          // alert(JSON.stringify(dataFilter));

          // alert(JSON.stringify(dataFilter));
        }catch(err){
          alert(err);
          return 
        }
        });
        $$('.form-pencarian').on('form:error', function (e) {
            myApp.addNotification({
              message: "Terjadi Kesalahan, Silahkan Aktifkan GPS / Restart Aplikasi  ",
              button: {
                    text: 'Tutup',
                    // color: 'lightgreen'
                  }
             });
           // var xhr = e.detail.xhr; // actual XHR object
           // alert(JSON.stringify(xhr));

        });
        $$('.form-pencarian').on('form:success', function (e) {


            
        // initMap();
          clearMarkers();
          var xhr = e.detail.xhr; // actual XHR object

          var data = e.detail.data; // Ajax response from action file
          // alert(data);
          data = JSON.parse(data);
          dataFilter = data.filterdata;

          // alert(JSON.stringify(dataFilter));
          result_marker = data.model;
          // alert(data);
          setMarkers(data.model);
          // alert(JSON.stringify(data));
          if (data.model.length!=0){
            tampil_terdekat = true;
            appendToList(data.model);

          }
          else{
            myApp.addNotification({
              message: "Tidak Menemukan Tukang Dagang yang sesuai dengan Kata Kunci   ",
              button: {
                    text: 'Tutup',
                    // color: 'lightgreen'
                  }
             });
          }
       
            var icon = "";
         
           
            mainView.router.back();
            // alert(markers);


        });
});


  var isFirstTime = true;
  var pol;
   function circlePath(center,radius,points){
    var a=[],p=360/points,d=0;
    for(var i=0;i<points;++i,d+=p){
        a.push(google.maps.geometry.spherical.computeOffset(center,radius,d));
    }
    return a;
  }

  function setMyMarker(lat,lng,map){
    clearMyMarkers();
    clearMyCircle();
    // var pol = new google.maps.Polygon() ;
    me = new google.maps.Marker({
        position : new google.maps.LatLng(lat,lng),
         map : map,
         title: "Lokasiku",
          // label: {
          //   text: "",
          //   color: 'black',
          // },
       // animation: google.maps.Animation.DROP
      icon : server+"/icon/ic_my_location_black_18px.svg"
    });




    me.setDraggable(false);
    var x  = new google.maps.InfoWindow();
    google.maps.event.addListener(me, 'click', (function(me) {    
      // alert(JSON.stringify(me));

        return function() { 
          // var konten
          x.setContent("Lokasiku");
          x.open(map, me);   

        }
     })(me));


    MyaMarkers.push(me);


    if (isFirstTime){

      pol = new google.maps.Polygon({
        map:map,
        path:circlePath(map.getCenter(),1000,360),
        strokeColor: '#D85404',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#D85404',
        fillOpacity: 0.2

      });
      isFirstTime = false;
    }
    // MyCircle.push(pol);
    pol.setPaths(circlePath(new google.maps.LatLng(me.position.lat(),me.position.lng()),1000,360));
    map.panTo(new google.maps.LatLng(me.position.lat(),me.position.lng()));
    google.maps.event.addListener(me, 'dragend', function() 
    {       
         pol.setPaths(circlePath(new google.maps.LatLng(me.position.lat(),me.position.lng()),1000,360));
    });
   
      // pol.setMap(null);     
      // pol = new google.maps.Polygon({
      //     map:map,
      //     path:circlePath(new google.maps.LatLng(me.position.lat(),me.position.lng()),1000,360),
      //     strokeColor: '#D85404',
      //     strokeOpacity: 1,
      //     strokeWeight: 2,
      //     fillColor: '#D85404',
      //     fillOpacity: 0.2
      //   });

    
  }
  function setMarkers(data){
    var infowindow  = new google.maps.InfoWindow();
     $$.each(data,function(i,v){  
          var desc = "";
          if (v.verif=="0"){

            // alert(v.tipe);

            if (v.tipe=="1" || v.tipe=="2" || v.tipe==""){ // JIKA PEDAGANG TETAP MAKA
              icon = server+"/icon/rumah-td.png";
              desc = "";
            }else if (v.tipe=="3"){ // jika pedagang keliling maka
              // alert(v.kendaraan);
              if (v.kendaraan=="1"){
                icon = server+"/icon/keliling.png";
                desc = "";
               }else if (v.kendaraan=="2"){
                icon = server+"/icon/motor.png";
                desc = "";
               }else if (v.kendaraan=="3"){
                icon = server+"/icon/mobil2.png";
                desc = "";
               }else if (v.kendaraan=="4"){
                icon = server+"/icon/sepeda.png";
                desc = "";
              }else if (v.kendaraan=="5"){
                icon = server+"/icon/worker2.png";
                desc = "";
              }else{
                icon = server+"/icon/keliling.png";
                desc = "";
              }
              
            }
          
          }
          else{
            icon = server+"/icon/rumah-question.png";  
             desc = "<p style='color:red'>Kami tidak bisa memastikan keberadaan Tukang Dagang ini</p>"
          }

          // "<tr><td colspan='2'>"+
          // "<img src='http://www.novelupdate&nbsp;&nbsp;&nbsp;&nbsp;s.com/img/noimagefound.jpg' />"+
          // "</td></tr>"+
          if (v.tipe=="3"){

           var panggil = "";
            if (window.localStorage.getItem("isLogged")=="1"){
              if (v.id==window.localStorage.getItem("ukm_id")){
                panggil = " Usahaku ";
              }else{
                // panggil = "<div style='display:inline' ukm_id="+v.id+" class='btn-panggil-ukm'><i class='fa fa-volume-up fa-2x'></i>&nbsp;&nbsp;panggil &nbsp;&nbsp;&nbsp;&nbsp;</div>";
                panggil+= "<a style='display:inline;color:black' ukm_id="+v.id+" class='link icon-only' href='tabs-swipeable.html?id="+v.id+"'' ><i class='fa fa-info fa-2x'></i>&nbsp;&nbsp;Informasi&nbsp;&nbsp;&nbsp;&nbsp;</a>"
                panggil+= "<a style='display:inline;color:black' ukm-id='"+v.id+"'  class='btn-favorite' ><i class='fa fa-star fa-2x'></i>&nbsp;&nbsp;Favorit</a>"
              }          
            }else{
                // panggil = "<div style='display:inline' ukm_id="+v.id+" class='btn-panggil-ukm'><i class='fa fa-volume-up fa-2x'></i>&nbsp;&nbsp;panggil &nbsp;&nbsp;&nbsp;&nbsp;</div>";
                panggil+= "<a style='display:inline;color:black' ukm_id="+v.id+" class='link icon-only' href='tabs-swipeable.html?id="+v.id+"'' ><i class='fa fa-info fa-2x'></i>&nbsp;&nbsp;Informasi&nbsp;&nbsp;&nbsp;&nbsp;</a>"
                panggil+= "<a style='display:inline;color:black' ukm-id='"+v.id+"'  class='btn-favorite' ><i class='fa fa-star fa-2x'></i>&nbsp;&nbsp;Favorit</a>"
                 // panggil+= "<br><div ukm_id="+v.id+" class='btn-tracking-ukm'><i class='fa fa-send'></i>&nbsp;&nbsp;Tracking</div>"
          
            }
            
           var list = "<table>"+
          "<tr><td colspan='2' style='text-align:center;color:black;font-size:20px;color:black '>"+
          "<a ukm-id='"+v.id+"' href='#' data-panel='right' class='open-detail'>"+v.nama+"</a>"+
          "<br>"+desc+"<hr></td></tr>"+
          "<tr><td colspan='2'>"+panggil+"</td></tr>"+
          "</table>";
        }else{

          
          var list = "<table>"+
          "<tr><td colspan='2' style='text-align:center;color:black;font-size:20px;color:black '>"+
          "<a ukm-id='"+v.id+"' href='#' data-panel='right' class='open-detail'>"+v.nama+"</a>"+
          "<br>"+desc+"<hr></td></tr>"+
          "<tr><td colspan='2'>"+v.nama_kategori+"</td></tr>"+
          // "<tr><td>Produk :</td><td>"+v.produk+"</td></tr>"+
          "<tr><td colspan='2'>"+v.alamat+"</td></tr>"+
          "<tr><td colspan='2'>"+
              '<p class="buttons-row " style="padding:0 8px 8px 8px">'+
              
              '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+v.lat+','+v.lon+'"   class=" external ">'+
              '<i class="fa fa-google  fa-2x"></i>'+
              '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

              '<a onClick="getDirection('+v.lat+','+v.lon+');" >'+
              '<i class="material-icons  md-30">directions</i>'+
              '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

              '<a ukm-id="'+v.id+'" ukm_id="'+v.id+'"  href="#" style="" class="btn-add-cart">'+
              '<i class="fa fa-cart-plus fa-2x "></i>  '+
              '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+


              '<a ukm-id="'+v.id+'"  href="tabs-swipeable.html?id='+v.id+'" style="" class="  ">'+
              '<i class="fa fa-info fa-2x "></i>  '+
              '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

              '<a ukm-id="'+v.id+'"  class="btn-favorite  ">'+
              '<i  class="fa fa-star fa-2x "></i> '+
              '</a>'+

              '</p>'+

          "</td></tr>"+
        
          "</table>";
        }
              
   

        var icon = {
            url: icon, // url
            scaledSize: new google.maps.Size(45, 35), // scaled size
            origin: new google.maps.Point(0,0), // origin
            labelOrigin: new google.maps.Point(20, 45),
            anchor: new google.maps.Point(0, 0) // anchor
        };

        // alert(v.lat); 
        // alert(v.lon);
        //apakah bisa d drag

        // var isdrag = true;
        var string_ush = ""
        if (window.localStorage.getItem("ukm_id")==v.id){
          string_ush = "(Usahaku)";
        }else{
          string_ush = " ";
        }

        marker = new google.maps.Marker({
            position : new google.maps.LatLng(v.lat,v.lon),
            map : map,
            title: v.nama,
            // draggable:isdrag,
            label: {
              text: v.nama + string_ush,
              color: 'black',
            },
            // animation: google.maps.Animation.DROP,
            icon : icon,
            tipe: v.tipe,
            ukm_id: v.id
        });

        if (window.localStorage.getItem("level")==1  ){
             marker.setDraggable(true);
        }else{
             marker.setDraggable(false);
        }

        var lat_bef = "";
        var lng_bef = "";
        google.maps.event.addListener(marker, 'dragstart', function(e){
          // alert(this.tipe);
          // nama_umkm = marker.title;
          lat_bef = e.latLng.lat();
          lng_bef = e.latLng.lng();
          // alert(JSON.stringify(marker));
        });
        google.maps.event.addListener(marker, 'dragend', function(e){
           // alert(nama_umkm);
           // alert(this.ukm_id);
           var ukm_id = this.ukm_id;
           geocoder = new google.maps.Geocoder();
           geocoder.geocode
            ({
                latLng: new google.maps.LatLng(e.latLng.lat(),e.latLng.lng())
            }, 
                function(results, status) {

                  // alert(results[0].formatted_address);
                    // after success then ajax
                      if (window.localStorage.getItem("level")==1 ) {
                      $$.ajax({
                        url : server+"/index.php?r=ukm/setlokasi",
                        data : "bef_lat="+lat_bef+"&bef_lng="+lng_bef+"&nama="+marker.title+"&lat="+e.latLng.lat()+"&lng="+e.latLng.lng()+"&alamat="+results[0].formatted_address+"&ukm_id="+ukm_id,
                        success : function(r){
                          var d  = JSON.parse(r);
                          if (d.success){
                            // alert("ok");
                          }else{
                            alert("gagal")
                          }
                          // alert(r);
                        }
                      });
                      // end
                      } 
                      // alert(JSON.stringify(results));
                  });
                    
                // }
           // });
          // alert(marker.posi);
            
        });
        



          // alert(map_area);

         if (map_area!=null){
            marker2 = new google.maps.Marker({
              position : new google.maps.LatLng(v.lat,v.lon),
                 map : map_area,
                 title: v.nama,
                  label: {
                      text: v.nama,
                      color: 'black',
                    },
               animation: google.maps.Animation.DROP,
              icon : icon
            });

         }

      //   marker.bindTo('position', "123");
    //       marker.bindTo('map', mapLabel);
    // marker.bindTo('position', mapLabel);


          markers.push(marker);
          // map.setCenter(new google.maps.LatLng($$("#val-lat").val(), $$("#val-lon").val()));

           google.maps.event.addListener(marker, 'click', (function(marker) {
              
              return function() { 
                // alert(this.tipe);
                // var konten
                infowindow.setContent(list);
                infowindow.open(map, marker);   

              }
           })(marker));

          // alert(marker);
      });

   // marker = new google.maps.Marker({
   //    position : new google.maps.LatLng($$("#val-lat").val(),$$("#val-lon").val()),
   //       map : map,
   //       title: "Tes"
   //     // animation: google.maps.Animation.DROP
   //    // icon : "http://gis.35utech.com/icon/my loc.png"
   //  });
}


// $$(document).on('page:init', '.page[data-page="panel-right1"]', function (e) {
//     alert("ini index");
//     // console.log(e);
//   // Do something here when page with data-page="about" attribute loaded and initialized
// });



// $$(window).on('load', function () {
//   // myApp.popup('.popup-about');
//   


//   // getkategori();
//         // $$.ajax({
//         //         url : "http://cipagalo.35utech.tk/index.php?r=gis/cari",
//         //         data "
//         //         success : function(r){
//         //             // var data = JSON.parse(r);
//         //             // alert(data);
//         //             // alert(JSON.stringify(data));
//         //                 // alert(JSON.stringify(v));
//         //             $$.each(data,function(i,v){
//         //                 $$("#jenisusaha").append("<option value="+v.id+">"+v.nama+"</option>");
//         //             });
//         //              // for(var i=1;i<=13;i++){   
//         //              //      $$("#rw").append("<option value="+i+">"+i+"</option>");
//         //              //  }
                   
//         //         }
//         // });
// });





// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
function setMapOnAll2(map) {
  for (var i = 0; i < MyaMarkers.length; i++) {
    MyaMarkers[i].setMap(map);
  }
}
function setMapOnAllC(map) {
  // alert(MyCircle.length);
  for (var a = 0; a < MyCircle.length; a++) {
    MyCircle[a].setMap(map);
  }
  // alert("removed");
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}
function clearMarkersTetap(){
  for(var i=0; i < markers.length; i++){
      if (markers[i].tipe=="2" || markers[i].tipe=="1" ){
          markers[i].setMap(null);
      }
   }
}
function clearMarkersKeliling() {
  for(var i=0; i < markers.length; i++){
      if (markers[i].tipe=="3"){
          markers[i].setMap(null);
      }
   }
}
function clearMarkersCalon() {
  for(var i=0; i < markers.length; i++){
      if (markers[i].tipe=="4"){
          markers[i].setMap(null);
      }
   }
}
function clearMyMarkers() {
  setMapOnAll2(null);
}
function clearMyCircle() {
  setMapOnAllC(null);
}

var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};
function getkategori(kel){
    // alert("awal"+window.localStorage.getItem("kategori_favorite") );

  var kf = window.localStorage.getItem("kategori_favorite");
  kf  = JSON.parse(kf);     
  var array_fav = [];
  $$.each(kf,function(i,v){
    array_fav.push(v);
  });
    // alert("after"+JSON.stringify(array_fav));
  
    if (jenisUsaha.length>0){//jika bukan ajax


      $$("#rt").append("<option value=''> </option>");
      for(var i=1;i<=19;i++){   
          $$("#rt").append("<option value="+i+">"+i+"</option>");
      }

      // $$("#rw").append("<option value=''>Semua RW</option>");
      $$("#rw").append("<option value=''> </option>");
      $$("#Ukm_rw").append("<option value=''> </option>");
      for(var i=1;i<=99;i++){   
          $$("#rw").append("<option value="+i+">"+i+"</option>");
           $$("#Ukm_rw").append("<option value="+i+">"+i+"</option>");
      }




       // $$.each(dataKecamatan,function(i,v){
       //    $$("#kecamatan").append("<option value="+v.id+">"+v.nama+"</option>");
       // });

        // alert(JSON.stringify(dataFilter.jenisusaha));
       $$.each(jenisUsaha,function(i,v){
          if (dataFilter.jenisusaha!=null){


            if(dataFilter.jenisusaha.indexOf(v.id) != -1)
            {  
              $$("#jenisusaha").append("<option selected value="+v.id+">"+v.nama+"</option>");
            }else{

              $$("#jenisusaha").append("<option  value="+v.id+">"+v.nama+"</option>");
            }

          }else{
              $$("#jenisusaha").append("<option  value="+v.id+">"+v.nama+"</option>");
          }


           if(kel==v.nama){
               $$("#Ukm_kategori").append("<option selected value="+v.id+">"+v.nama+"</option>");
           }else{
               $$("#Ukm_kategori").append("<option value="+v.id+">"+v.nama+"</option>");
           }
          // 




       });
    
    


      

         var string_tanya = "";
            $$.each(jenisUsaha,function(i,v){
                var string_s = "";
                // alert(JSON.stringify(array_fav));
                // alert(v.nama);
                if (array_fav.indexOf(v.nama) > -1){
                  string_s = "checked";
                }else{
                  string_s = "";
                }


                  // alert(string_s);

                  string_tanya += "<li>"+
                    '<label class="label-checkbox item-content label-check-nama"  value="'+v.id+'">'+
                       '<input '+string_s+' type="checkbox" name="check-nama" class="check-nama" value="'+v.nama+'" >'+
                       '<div class="item-media"><i class="icon icon-form-checkbox"></i></div>'+
                       '<div class="item-inner">'+
                          '<div class="item-title">'+v.nama.toLowerCase()+'</div>'+
                       '</div>'+
                    '</label>'+
                 '</li>';

                 // alert(string_tanya);
            });
            $$("#jenis-usaha-favorite").append(string_tanya);
       // alert(JSON.stringify(dataFilter))

       // $$("#Ukm_tipe").val(dataFilter.tipe);


      $$.each(datakelurahan,function(i,v){
          $$("#kelurahan").append("<option value="+v.id+">"+v.nama+"</option>");
          $$("#Ukm_kelurahan").append("<option value="+v.id+">"+v.nama+"</option>");
      });

      // alert(window.localStorage.getItem("filter-kelurahan"));
      // alert(window.localStorage.getItem("filter-rw"));

      // alert(JSON.stringify(dataFilter));
      $$("#rw").val(dataFilter.rw);
      $$("#kelurahan").val(dataFilter.kelurahan);





     }else{

      
    
    


    $$.ajax({
        url : server+"/index.php?r=gis/getjenisusaha",
        success : function(r){
            var data = JSON.parse(r);
            // alert(data);
            // alert(JSON.stringify(data));
                // alert(JSON.stringify(v));
          
         
            var string_tanya = "";
            $$.each(data.kategori,function(i,v){
                $$("#jenisusaha").append("<option  value="+v.id+">"+v.nama+"</option>");
                 if(kel==v.nama){
                     $$("#Ukm_kategori").append("<option selected value="+v.id+">"+v.nama+"</option>");
                 }else{
                     $$("#Ukm_kategori").append("<option value="+v.id+">"+v.nama+"</option>");
                 }
                 jenisUsaha.push({"id":v.id,"nama":v.nama});
                // $$("#jenis-usaha-favorite").append("<option  value="+v.id+">"+v.nama+"</option>");
                 // jenisUsaha.push({"id":v.id,"nama":v.nama});
                  var string_s = "";
                  if (array_fav.indexOf(v.nama) > -1){
                    string_s = "checked";
                  }else{
                    string_s = "";
                  }
                   // alert(string_s);
                  string_tanya += "<li>"+
                    '<label class="label-checkbox item-content label-check-nama"  value="'+v.id+'">'+
                       '<input '+string_s+' type="checkbox" name="check-nama" class="check-nama" value="'+v.nama+'" >'+
                       '<div class="item-media"><i class="icon icon-form-checkbox"></i></div>'+
                       '<div class="item-inner">'+
                          '<div class="item-title">'+v.nama.toLowerCase()+'</div>'+
                       '</div>'+
                    '</label>'+
                 '</li>';
            });
             $$("#jenis-usaha-favorite").append(string_tanya);
            // alert(jenisUsaha.length);

            // if (jenisUsaha.length<1){
              // alert("ajax");
            // dataKecamatan.push({"id":" ","nama":" "});
            //  $$.each(data.kecamatan,function(i,v){
            //      $$("#kecamatan").append("<option value="+v.id+">"+v.nama+"</option>");
            //     dataKecamatan.push({"id":v.id,"nama":v.nama});
            //  });
             // alert(JSON.stringify(jenisUsaha));
            // }else{
            
            // }


             $$("#rw").append("<option value=''> </option>");
             $$("#Ukm_rw").append("<option value=''> </option>");
              for(var i=1;i<=99;i++){   
                  $$("#rw").append("<option value="+i+">"+i+"</option>");
                   $$("#Ukm_rw").append("<option value="+i+">"+i+"</option>");
              }



            $$("#kelurahan").append("<option value=''> </option>");
            $$("#Ukm_kelurahan").append("<option value=''> </option>");
            datakelurahan.push({"id":" ","nama":" "});
            
            //  $$.each(data.kelurahan,function(i,v){
            //     $$("#kelurahan").append("<option value="+v.id+">"+v.nama+"</option>");
            //      datakelurahan.push({"id":v.id,"nama":v.nama});

            //       if (kel==v.nama){
            //          $$("#Ukm_kelurahan").append("<option selected value="+v.id+">"+v.nama+"</option>");
            //       }
            //        else{
            //          $$("#Ukm_kelurahan").append("<option value="+v.id+">"+v.nama+"</option>");
            //      }
            // });
            
            }
        });
     }

}
function editInfo(comp,id,attr,newvalue){

    $$.ajax({
        url : server+"/index.php?r=Ukm/updateAjax",
        data : "id="+id+"&attr="+attr+"&value="+newvalue,
        success : function(r){
            // alert(r);
            if (r!="sukses"){
             myApp.addNotification({
              message: "Terdapat Kesalahan, Silahkan Coba lagi nanti. ",
              button: {
                    text: 'Tutup',
                    // color: 'lightgreen'
                  }
             });
            }else if (r=="sukses"){
              // alert(newvalue);
              $$("#"+comp+"").html(newvalue);
              $$("."+comp+"").html(newvalue);

               window.localStorage.setItem(attr, newvalue);

            }else{
              alert("else");
            }
        
        },error: function(e){
          alert("error "+JSON.stringify(e));
        }
    });
}

$$('#row_User_pemilik').on('taphold', function (e) {


   myApp.prompt('Nama Pemilik ', 'Ubah',
      function (value) {
        if (value!="")
          editInfo("User_pemilik",window.localStorage.getItem("username"),"pemilik",value);
        else
          myApp.alert("Tidak boleh kosong","Ups");
      }
    );


});

$$(document).on('click', '.btn-get-calon', function(e){
     var icon = {
          url: server+"/icon/calon-call.png",
          scaledSize: new google.maps.Size(40, 40), // scaled size
          origin: new google.maps.Point(0,0), // origin
          labelOrigin: new google.maps.Point(20, 50),
          anchor: new google.maps.Point(0, 0) // anchor
      };
      clearMarkersCalon();
      // alert(JSON.stringify(calon_pembeli_pos));
  if (calon_pembeli_pos.length>0){
      var arr_cal = [];  

      $$.each(calon_pembeli_pos,function(i,v){
        arr_cal.push(v.is_sampai);
         if (v.is_sampai=="0"){
          var p = new google.maps.LatLng(v.caller_lat,v.caller_lng);
         var marker_calon = new google.maps.Marker({
          position : p,
            map : map,
            // title: v.username,
            title: v.nama_user,
            // draggable:isdrag,
            label: {
              text: v.nama_user,
              color: 'black',
            },
            animation: google.maps.Animation.DROP,
            icon : icon,
            tipe : 4
          });
          map.setCenter(p);

           markers.push(marker_calon);

           // alert($$("#last_lat").val());
           // alert($$("#last_lng").val());
           var list = "<table>"+
            "<tr><td colspan='2' style='text-align:center '>"+
            "<a style='color:black'  ukm-id='"+v.id+"' href='#' data-panel='right' class='open-detail'>"+v.nama_user+"</a>"+
            "<br><hr></td></tr>"+
            "<tr><td colspan='2'>"+
                '<p class="buttons-row " style="padding:0 8px 8px 8px">'+
                
                '<a style="color:black" class="btn-lihat-pesanan link external" panggil_id="'+v.id+'" >'+
                '<i  class="fa fa-list-ol fa-2x"></i> '+
                '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

                '<a style="color:black" class="link external" href="sms:'+v.username+'">'+
                '<i  class="fa fa-envelope fa-2x"></i> '+
                '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

                '<a style="color:black" class="link external" href="tel:'+v.username+'">'+
                '<i  class="fa fa-phone fa-2x"></i> '+
                '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

                // '<a class="link external" href="https://api.whatsapp.com/send?phone=62'+v.username.substring(1,100)+'" >'+
                // '<i class="fa fa-whatsapp fa-2x"></i>'+
                // '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

                // '<a onclick="getDirection('+v.caller_lat+','+v.caller_lng+')"  class=" external">'+
                // '<i class="material-icons">directions</i>'+
                // '</a>'+

                '</p>'+

            "</td></tr>"+
          
            "</table>";

         

      var infowindow_keliling  = new google.maps.InfoWindow();
     google.maps.event.addListener(marker_calon, 'click', (function(marker_calon) {    
        return function() { 
          infowindow_keliling.setContent(list);
          infowindow_keliling.open(map, marker_calon);
        }
     })(marker_calon));

       } // end 
       else{

        

       }
     });// end for

      // jika ada yang belum d datangi maka 
      // if(arr_cal.indexOf("1")!= -1){ // value exist
      //   // alert("123");
      // }else{
      //     myApp.addNotification({
      //         message: "Tidak Terdapat Calon Pelanggan",
      //         buttonkey:  {
      //             text: 'Tutup',
      //         },
      //         hold : 5000
      //     });

      // }                 
      clearMarkersTetap();
      // clearMarkersTetap();
      mainView.router.back();
    }else{
      
    }
});

$$(document).on('click', '.refresh-ajuanku', function(e){
  getNewsSticker();
});

$$(document).on('click', '.refresh-dashboard', function(e){
  getNewsSticker();
});
$$(document).on('click', '.refresh-calon', function(e){
  getListPanggilan();
});
$$(document).on('click', '.refresh-data-rincian', function(e){
  getAllUMKM();
});
$$(document).on('click', '.refresh-rincian', function(e){
    var id = $$(this).attr("ukm_id");
    cariById(id);
});
$$(document).on('click', '.btn-yes-point', function(e){
  myApp.alert("Sedang dalam proses  ","Informasi");
});

// $$(document).on('click', '.btn-lihat-pesanan', function(e){
  // alert("123");
// });

$$(document).on('click', '.btn-yes-point-iklan', function(e){
  $$.ajax({
    url : server+"/index.php?r=gis/KonfirmasiIklan",
    data : "ukm_id="+window.localStorage.getItem("ukm_id"),
    success : function(r){
        // alert(r);
        var data = JSON.parse(r);
          if (data.success==false){
            $$.each(data.err,function(i,v){  
               myApp.addNotification({
                    message: v,
                    buttonkey:  {
                        text: 'Tutup',
                        // color: 'lightgreen'
                    },
                    hold : 1500
                });
              });
          }else{
            myApp.addNotification({
                message: "Iklan anda berhasil tayang!",
                buttonkey:  {
                    text: 'Tutup',
                    // color: 'lightgreen'
                },
                hold : 1500
            });
           
          }
      }
  });
  // myApp.alert("Silahkan Hubungi Admin ","Informasi");
});
$$(document).on('click', '.button-menuju', function(e){
  
  // console.log("masuk")
  var lat = $$(this).attr("lat");
  var lon = $$(this).attr("lon");
  getDirection(lat,lon);
});

$$(document).on('click', '.btn-tukar-poin', function(e){
   mainView.router.load({
      url:"tukar-poin.html" 
   });
   myApp.closePanel();
});

$$(document).on('click', '.buka-ukm', function(e){
 var id = $$(this).attr("ukm_id");
  mainView.router.load({
      url:"tabs-swipeable.html" 
  });
  $("#jRate").jRate();
  myApp.closePanel();
  cariById(id);
});
$$(document).on('click', '.btn-riwayat-rekomendasi', function(e){
    $$.ajax({
    url : server+"/index.php?r=gis/GetPengajuan",
    data : "username="+window.localStorage.getItem("username"),
    success : function(r){
        // alert(r);
        var data = JSON.parse(r);

        $$.each(data,function(i,data){
          var st;
          if (data.isaktif==1){
            st = "Diterima";
          }else if (data.isaktif==0){
            st = "Tidak Aktif";
          }else if (data.isaktif==3){
            st = "Ditolak";
          }else{
            st = "Ditolak";
          }


          var html =  '<li  style="top: 0px;" class="swipeout transitioning">'+
          '<div class="swipeout-content" style="">'+
          '<a href="#" class="item-link item-content">'+
          '<div class="item-inner">'+
          '<div class="item-title-row">'+
          '<div class="item-title">'+data.nama+'</div>'+
          '<div class="item-after">'+data.tinput+' </div>'+
          '</div>'+
          '<div class="item-subtitle">'+data.nama_kategori+'</div>'+
          '<div class="item-text">'+st+'</div></div>'+
          '</a>'+
          '</div>'+
          // '<div class="swipeout-actions-right">'+
          // '<a ukm-id="'+data.id+'"   class="pending-acc demo-mark bg-green  " style="left: 0px;"><i class="fa fa-check" ></i></a>'+
          // '<a ukm-id="'+data.id+'"   class="pending-reject demo-mark bg-red  " style="left: 0px;"><i class="fa fa-times" ></i></a>'+
          // '</div>'+
          '</li>';

          $$("#ul-umkm-list").append(html);
        });

    },error: function(e){
      alert(JSON.stringify(e));
    }
    });

   mainView.router.load({
      url:"list-umkm-user.html" 
   }); 
   myApp.closePanel();


});

function appendToList(result_marker){
  // alert("data");
   // data = JSON.parse(result_marker);
    // $$("#direction ul").html(" ");
   var tmp = $$("#tmp-location").html();
    $$("#direction").html(tmp);
    // alert($$("#direction").html());
    // alert(result_marker);

    // alert(JSON.stringify(result_marker) );
    // alert(result_marker.length);

  
      // alert(JSON.stringify(result_marker));
    
    $$.each(result_marker,function(i,v){
      var sb;
      if (v.status_buka=="Sedang Buka"){
        sb = "- <span style='color:green'>"+v.status_buka+"</span>"
      }if(v.status_buka=="Tutup"){
        sb = "- <span style='color:red'> Tutup</span>"
      }else{
        sb = " ";
      }  

      
        if (v.tipe=="3"){
            color_row = "style='background-color:cornsilk'";
        }else{
            color_row = "";
        }
  // ukm-id="'+v.id+'"  href="tabs-swipeable.html?id='+v.id+'"
        var data = '<li class="swipeout transitioning" '+color_row+'  >'+
        '<div class="swipeout-content"  >'+
        '<a  class="item-link item-content buka-ukm"   ukm-id="'+v.id+'" ukm_id="'+v.id+'"  >'+
        '<div class="item-inner">'+
        '<div class="item-title-row">'+
        '<div class="item-title">'+v.nama+'</div>'+
        '<div class="item-after">'+v.distance+' KM </div>'+
        '</div>'+
        '<div class="item-subtitle" style="color:#D85404!important">'+v.nama_kategori+' '+sb+'</div>'+
        '<div class="item-text" >'+v.alamat+'</div>'+
        '</div></a></div>'+
        '<div class="swipeout-actions-left">'+
        // '<a href="#" class="bg-green swipeout-overswipe demo-reply" style="left: 0px; z-index: 2;">Reply</a>'+
        '<a ukm-id="'+v.id+'" ukm_id="'+v.id+'"  class="buka-ukm demo-mark bg-orange close-panel " style="left: 0px;"><i class="material-icons md-24" >info</i></a>'+
        // '<a href="#" class="demo-forward bg-blue" style="z-index: 1;">Forward</a>
        '</div>'+
        '<div class="swipeout-actions-right">'+
        '<a href="#" lat="'+v.lat+'" lon="'+v.lon+'" class="button-menuju bg-blue" style="left: 0px;"><i class="material-icons  md-24">directions</i></a>'+
        '<a href="http://maps.google.com/maps?saddr='+$$("#val-lat").val()+','+$$("#val-lon").val()+'&daddr='+v.lat+','+v.lon+'" lat="'+v.lat+'" class="link external bg-green"  lon="'+v.lon+'" class="" style="left: 0px;"><i class="material-icons  md-24 ">directions</i> <i class="fa fa-google"></i></a>'+
      
        // '<a href="#" data-confirm="Are you sure you want to delete this item?" class="swipeout-delete swipeout-overswipe" style="left: 0px;">Delete</a></div>'+
        '</li>';
        // alert(v.nama);
        $$("#direction .media-list ul ").append(data);
     
    });
    // alert(buka_left);
    if (buka_left){ 
      myApp.openPanel("left");
    }else{
      buka_left = true;
    }

}

var list_td_favoritku = [];
var jml = 0; //jumlah ulang dikasih tau

function refresMapLocation(lat,lng){
  $$.ajax({
        url : server+"/index.php?r=gis/cari",
        data : "isnear=true&lat="+lat+"&lon="+lng+"&username="+username+"&tipe_hard=3",
        beforeSend : function(e){
          // if (loader_refresh==false){
            myApp.hideIndicator();
          // }
        },
        success : function(r){
            myApp.hideIndicator();
            // clearMarkersKeliling();
            var data = JSON.parse(r);
            // alert(data);
            result_marker = data.model;
            // alert(JSON.stringify(data) );
            // setMarkers(result_marker);

            // update location 
              $$.each(result_marker,function(i,v){
                for(var i=0; i < markers.length; i++){
                    if (v.tipe=="3" && v.id==markers[i]["ukm_id"] ){
                       markers[i].setPosition(new google.maps.LatLng(v.lat,v.lon) );
                    }
                    // alert(window.localStorage.getItem("td_favorite"));               
                }
                // cek keberadaan si emang

                // if (wind)


                 if (v.tipe=="3"){
                        // setTimeout(function(){
                        //   list_td_favoritku = [];
                        //   console.log("kasih tau ulang");
                        // },20000);
                    // jika tukang dagang ada pada daftar favoritku maka
                    if(window.localStorage.getItem("td_favorite").indexOf(v.id)!= -1){ // value exist                  
                      
                         if (list_td_favoritku.indexOf(v.id)!= -1){ // jika sudah di notifikasi maka
                           console.log("sudah di kasih tauuuu");
                           jml++;
                           // console.log(jml);
                           if (jml>50){
                            list_td_favoritku = [];
                            jml = 0; // kemabalikan 
                           }
                          }// end if
                          else{ // memberi tahukan bahawa ada tukang dagang favorite
   
                            list_td_favoritku.push(v.id);
                            // myApp.addNotification({
                            //     message: "Terdapat Tukang Dagang Favorit kamu ("+v.nama+") dalam 1 KM",
                            //     buttonkey:  {
                            //         text: 'Tutup',
                            //         // color: 'lightgreen'
                            //     },
                            //     hold : 10000
                            // });

                          }
                    }else{
                      list_td_favoritku = [];
                    }
                }// jika tipe 3 maka


              });
                  // markers[0].setPosition(new google.maps.LatLng(v.lat,v.lon) );


                  // alert(v.lat);
                  // if (markers[i].tipe=="3"){
                  //   markers[i].setLatLng(new google.maps.LatLng(data.model.lat,data.model.lon));
                  // }

           //    }
           // }
            // if (data.model.length!=0){
            //    appendToList(data.model);  
            // }
            // else{
            //    myApp.addNotification({
            //       message: "Tidak menemukan seluruh jenis Tukang Dagang   dalam 1 KM",
            //       button: {
            //         text: 'Tutup',
            //         // color: 'lightgreen'
            //       },
            //       hold : 1500
            //    });

            // }         
        }
    });
}
var isFirstTime2 = true;
function getDataNearest(lat,lng){
  if (tampil_terdekat){

    
    username = "null";
    // if (isFirstTime2){ // jika baru pertama kali membuka
    //   var username = window.localStorage.getItem("username");
    //   if (username==""){
    //     username = "null";
    //   }
    //   isFirstTime2 = false;
    // }else{ // jika bukan pertama kali membuka
    //     username = "null";
    // }

    $$.ajax({
        url : server+"/index.php?r=gis/cari",
        data : "isnear=true&lat="+lat+"&lon="+lng+"&username="+username,
        beforeSend : function(e){
          if (loader_refresh==false){
            myApp.hideIndicator();
          }
        },
        success : function(r){
            clearMarkers();
            var data = JSON.parse(r);
            // alert(data);
            result_marker = data.model;
            setMarkers(result_marker);
            if (data.model.length!=0){
             
              appendToList(data.model);  
               // myApp.addNotification({
            }
            else{
              // myApp.toast('Tidak menemukan', '', {}).show(true);
                // window.plugins.toast.showShortTop('Hello there!', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})

               myApp.addNotification({
                  message: "Tidak menemukan seluruh jenis Tukang Dagang   dalam 1 KM",
                  button: {
                    text: 'Tutup',
                    // color: 'lightgreen'
                  },
                  hold : 1500
               });

            }         
        }
    });
  }// end if cari terdekat
}
var x ;
var isFirst = true;

var directionsService;
var directionsDisplay;


function refreshUserData(){
  $$.ajax({
        url : server+"/index.php?r=gis/refreshUserData",
        data : "username="+window.localStorage.getItem("username"),
        success : function(r){
          var data = JSON.parse(r);

          // alert(JSON.stringify(data));
         // window.localStorage.setItem("level", data.level);
         window.localStorage.setItem("username", data.username);
         window.localStorage.setItem("point", data.poin.poin);
         // if (data,)
         if (data.ukm!=null){
           window.localStorage.setItem("pemilik", data.ukm.pemilik);
           window.localStorage.setItem("tanggal_akhir", data.ukm.tanggal_akhir);
           window.localStorage.setItem("sisa", data.ukm.sisa);
         }
         myApp.openPanel("right");
        }

    });        
}

  // hapus calon pembeli 
  function deleteCalonPembeli(caller_username,ukm_id,id_panggilan){
    $$.ajax({
        url : server+"/index.php?r=Ukm/deleteCalonPembeli",      
        data : "username="+caller_username+"&ukm_id="+ukm_id+"&id="+id_panggilan,
        beforeSend : function(){
           myApp.showIndicator();
        },
        success : function(data){
          var json = JSON.parse(data);
          if (json.success==true){
              myApp.addNotification({
                message :  " Anda telah mendatangi "+caller_username+", Selamat anda Mendapatkan  poin 1.000 " ,
                button: {
                  text: 'Tutup',
                }
             });
            getListPanggilan();
            try {
              cordova.plugins.notification.local.schedule({
                  id: 2,
                  title: "Selamat !",
                  text: " Anda telah mendatangi "+caller_username+", Selamat anda Mendapatkan Kredit poin 1.000 ",
                  foreground: true,
                  vibrate: true
              });
            }catch(err){
              console.log(err);
            }

              // alert("sukses");

            // console.log("delete ok");
          }
           myApp.hideIndicator();
          // alert(data);

        }, 
        error : function(e){
           myApp.hideIndicator();

        }
    });

  }




  // update table user last kirim lokasi pedagang
   setInterval(function(e){ 
    if ( window.localStorage.getItem("is_tracking")=="true"){
      if ( window.localStorage.getItem("isLogged")=="1"){
        if ( window.localStorage.getItem("ukm_tipe")=="3"){ 
            calon_pembeli_pos2 = calon_pembeli_pos;
      

            //start
              var options = {enableHighAccuracy: true,maximumAge: 3600000}
               var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
               function onSuccess(position) {
             
           
                  $$.ajax({
                    url : server+"/index.php?r=gis/updateLokasi",      
                    data : "username="+window.localStorage.getItem('username')+"&lat="+position.coords.latitude+"&lng="+position.coords.longitude,
                    beforeSend : function(){
                        $$("#last_lat").val(position.coords.latitude);
                        $$("#last_lng").val(position.coords.longitude);
                       myApp.hideIndicator();
                    },
                    success : function(r){  
                    var data = JSON.parse(r);
                      if (data.success){
                            if (calon_pembeli_pos.length>0){ // jika ada calon
                                $$.each(calon_pembeli_pos,function(i,v){ // for calon
                                  if (v.is_sampai==0){ // yang belum sampai
                                    var d = getDistance(position.coords.latitude,position.coords.longitude,v.caller_lat,v.caller_lng,"K");
                                    var m = d*1000;
                                    console.log(m);
                                    if (m<=30){ // jika jarak dibawah 15 meter maka
                                        calon_pembeli_pos = [];
                                        deleteCalonPembeli(v.username,v.ukm_id,v.id);
                                    } // end di bawah 20 meter
                                  }
                                
                                }); // end each
                            }// end jika ada pemanggil



                             // window.localStorage.setItem
                      }else{

                      }       
                    },error: function(e){
                     // alert(JSON.stringify(e));
                    }
                  });    

               };
               function onError(error) {
                  alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
               }


        }
      }// end cek login
    }// end check tracking


    
   },2500);

   setInterval(function(e){ // dapatkan secara realtime
    if (window.localStorage.getItem("tracking_client")=="realtime"){
       loader_refresh = false; 
        buka_left = false;
          //start
        var options = {enableHighAccuracy: true,maximumAge: 3600000}
       var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
       function onSuccess(position) {
         refresMapLocation(position.coords.latitude,position.coords.longitude);
        };
         function onError(error) {

            alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
         }
    }

   },5000);
  //start interval 
  // kirim lokasi saat ini
   // setInterval(function(e){
   //    // alert(window.localStorage.getItem("is_tracking"));
   //    if ( window.localStorage.getItem("is_tracking")=="true"){
     
        

   //    if (unique_keliling_tmp.length>0){

   //      $$.each(unique_keliling_tmp,function(i,v){ // place history
   //          if (keliling_tmp.length>0){
   //              if(keliling_tmp.indexOf(v)!= -1){ // value exist
   //                console.log("ok mantap");
   //              }else{
   //                  // if (keliling.length>0){
   //                   try{
   //                    // console.log("1 :"+v);

   //                     // console.log("will remove "+v);
   //                     if (v==null){
   //                       keliling[v].setMap(null);
   //                       keliling[v] = null;
   //                       console.log("remove "+v);
   //                     }
   //                     // kelilaunchUrlling.splice(v, 1);
   //                   }catch(err){
   //                    console.log(err);
   //                   }
   //                  // }
   //              }
   //          }else{
   //            // if (keliling.length>0){
   //              // console.log("2 :"+v);

   //              try{
   //                if (v==null){
   //                  keliling[v].setMap(null);
   //                  keliling[v] = null;
   //                }
   //                }catch(err){
   //                  console.log(err);
   //              }
   //              // keliling = [];
   //            // }

   //          }


   //        // $$.each(keliling_tmp,function(i2,v2){

   //        // });
   //      });
   //    }
   

    

   //  keliling_tmp = [];
   //  // console.log("UKM Tipeku :"+window.localStorage.getItem("ukm_tipe")); 
   //  // console.log(window.localStorage.getItem("ukm_tipe"));
   //  // console.log(window.localStorage.getItem("is_tracking"));
   //   if (window.localStorage.getItem("ukm_tipe")==3 ){
   //         // console.log("tracking sent");
   //         var watchCount = 0; 
   //         var options = {
   //            enableHighAccuracy: true,
   //            maximumAge: 3600000,
   //            timeout: 3600000
   //         }


   //         // if (watchCount<2){
   //         // }else{
   //         //  // navigator.geolocation.clearWatch(IDwatch);
   //         // }
   //         // watchCount++;
           

   //          var IDwatch = navigator.geolocation.watchPosition(onSuccess, onError, options);
   //         function onSuccess(position) {
   //             // pubnub.publish({channel:pnChannel, 
   //             //    message: { 
   //             //      accuracy: position.coords.accuracy, 
   //             //      lat:position.coords.latitude, 
   //             //      lng:position.coords.longitude,
   //             //      level : null,
   //             //      ukm_id : window.localStorage.getItem("ukm_id"),
   //             //      ukm_nama : window.localStorage.getItem("ukm_nama"),
   //             //      name : window.localStorage.getItem("username")
   //             //    }
   //             // });
   //             // console.log(message);
   //         };
   //         function onError(error) {
   //            alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   //         }

   //          // if (window.localStorage.getItem("ukm_tipe")==3){

   //          // }


   //             // console.log("send "+position.coords.latitude+" - "+position.coords.longitude);

             

   //   }

   // }else{ // jika mati
   //   if (unique_keliling_tmp.length>0){
   //        console.log("diatas 0 1");

   //      $$.each(unique_keliling_tmp,function(i,v){ // place history
   //          if (keliling_tmp.length>0){
   //                console.log("diatas 2");
              
   //              if(keliling_tmp.indexOf(v)!= -1){ // value exist
   //                // console.log("exist");
   //                // console.log("k tmp"+keliling_tmp);
   //                // console.log("k tmp unik"+unique_keliling_tmp);
   //                // console.log("k "+keliling);

   //                //  keliling[v].setMap(null);
   //                //  keliling[v] = null;
   //              }else{
   //                   try{
   //                     if (v==null){
   //                       keliling[v].setMap(null);
   //                       keliling[v] = null;
   //                       // console.log("remove "+v);
   //                     }
   //                   }catch(err){
   //                    // console.log(err);
   //                   }
   //              }
   //          }else{
   //              try{
   //                if (v==null){
   //                  keliling[v].setMap(null);
   //                  keliling[v] = null;
   //                }
   //                }catch(err){
   //                  // console.log(err);
   //              }
   //          }
   //      });
   //    }else{
   //      // console.log(unique_keliling_tmp);
   //    }
   

   // }

   // },1000000000000000); // 5 detik

//ending interval 

$$('#form-login').on('form:success', function (e) {

      var xhr = e.detail.xhr; // actual XHR object
      var data = e.detail.data; // Ajax response from action file
      // alert(data);
      data = JSON.parse(data);

       if (data.success){
        // alert(data.data[0].id);
        // alert(JSON.stringify(data));

        // alert(data.isfirstlogin);
        // alert(data.ukm.id);
         // window.localStorage.setItem("isfirstlogin", data.isfirstlogin);
         // window.localStorage.setItem("isfirstlogin", data.isfirstlogin);
         // window.localStorage.setItem("level", data.level);
         window.localStorage.setItem("isLogged", 1);
         window.localStorage.setItem("username", data.data[0].id);
         // window.localStorage.setItem("pemilik", data.ukm.pemilik);
         // window.localStorage.setItem("tanggal_akhir", data.ukm.tanggal_akhir);
         // window.localStorage.setItem("ukm_id", data.ukm.id);
         // window.localStorage.setItem("ukm_tipe", data.ukm.tipe);
         // window.localStorage.setItem("ukm_nama", data.ukm.nama);
         // window.localStorage.setItem("sisa", data.ukm.sisa);
         // window.localStorage.setItem("point", data.poin.poin);
         // window.localStorage.setItem("minimal", data.ukm.minimal);
         // window.localStorage.setItem("delivery", data.ukm.delivery);
         // var array_temp = [];
         // $$.each(data.kategori_favorite,function(i,v){
         //  array_temp.push(v.jenis);
         // });

         // window.localStorage.setItem("kategori_favorite",JSON.stringify(array_temp));

         //  var array_temp = [];
         // $$.each(data.td_favorite,function(i,v){
         //  array_temp.push(v.ukm_id);
         // });

         // window.localStorage.setItem("td_favorite",JSON.stringify(array_temp));
         
         // cekLevel();
         //  clearRegisterLogin();         
         
        myApp.closeModal('.login-screen');
        if (data.isfirstlogin==1){ 
           mainView.router.load({
              url:"tanya-favorite.html" 
           });
        }else{ 
          cekLevel();
           // window.location.reload();
        }

         $$(".btn-user-out").css("display","inline");

        // myApp.openPanel("right");
       // }else{
         // myApp.addNotification({
         //    message: data.login,
         //    button: {
         //      text: 'Tutup',
         //      // color: 'lightgreen'
         //    },
         //    hold : 3000
         // });
       // }
     }else{ //jika gagal login
      myApp.addNotification({
            message: data.login,
            button: {
              text: 'Tutup',
              // color: 'lightgreen'
            },
            hold : 3000
         });
     }
});

function clearRegisterLogin(){
  $$("#username").val("");
  $$("#password").val("");

  $$("#username2").val("");
  $$("#password2").val("");
  $$("#ulangi_password").val("");
  
}
function SetVerified(username){
  $$.ajax({
          url : server+"/index.php?r=gis/SetVerified",      
          data : "username="+username,
          success : function(r){
          var data = JSON.parse(r);
          if (data.success){
            myApp.alert("Anda Terverifikasi ","Selamat");    
            $$("#form-login").show();
            $$("#form-register").hide();
            $$("#form-verifikasi").hide();


          } else{
            myApp.alert("Kode Verifikasi Salah ","Ups");    
          }       
      },error: function(e){ 
        alert(JSON.stringify(e));
      }
  });

}
$$('#form-register').on('form:beforeSend', function (e) {
  myApp.showIndicator();
});
$$('#form-verifikasi').on('form:success', function (e) {
  var xhr = e.detail.xhr; // actual XHR object
  var data = e.detail.data; // Ajax response from action file
  data = JSON.parse(data);
  if (data.success){
    myApp.alert("Anda Terverifikasi!","Selamat !");

    

    window.localStorage.setItem("isRegistering", false);
    window.localStorage.setItem("RegisteringPhone", null);
    $$("#form-login").show();
    $$("#form-register").hide();
    $$("#form-verifikasi").hide();

   
  }else{
     myApp.addNotification({
        title: 'Terdapat Kesalahan',
        message: data.message,
         hold : 3000
       });
  }
});


$$('#btn-change-phone').on('click', function (e) {
   // $$("#btn-change-phone").attr("phone",window.localStorage.getItem("RegisteringPhone"));

   
   $$.ajax({
      url : server+"/index.php?r=gis/cancelVerification",
      data : "username="+window.localStorage.getItem("RegisteringPhone"),
      success : function(r){
          var data = JSON.parse(r);
          if (data.success==false){
               $$.each(data.err,function(i,v){  
                 myApp.addNotification({
                      message: v,
                      buttonkey:  {
                          text: 'Tutup',
                          // color: 'lightgreen'
                        }
                  });
                });
            // mainView.router.back();
          }else{

             myApp.addNotification({
                  message: "Pendaftaran di batalkan",
                  buttonkey:  {
                      text: 'Tutup',
                      // color: 'lightgreen'
                    }
              });
              window.localStorage.setItem("isRegistering", false);
              window.localStorage.setItem("RegisteringPhone", null);
              $$("#form-login").hide();
              $$("#form-register").show();
              $$("#form-verifikasi").hide();


          }
          // alert(data);


      },error: function(e){
        alert(JSON.stringify(e));
      }
    });

    // window.localStorage.setItem("isRegistering", false);
    // window.localStorage.setItem("RegisteringPhone", null);
    // $$("#form-login").hide();
    // $$("#form-register").show();
    // $$("#form-verifikasi").hide();
});

$$('#form-register').on('form:success', function (e) {
  e.preventDefault();
  myApp.hidePreloader();


    var ulangi_password = $$("#ulangi_password").val();
    var password2 = $$("#password2").val();
    var username2 = $$("#username2").val();

    if (username2=="" ||  password2==""){
      // myApp.alert(" No Telepon atau Kata Sandi tidak boleh kosong   !","Ups.. ")
         myApp.addNotification({
              message: " No Telepon atau Kata Sandi tidak boleh kosong   !"
          });
      return false;
    }
    if (ulangi_password!=password2){
          myApp.addNotification({
              message: " Konfirmasi kata sandi tidak sama   !"
          });      return false;
    }

  // alert('123');
      var xhr = e.detail.xhr; // actual XHR object
      var data = e.detail.data; // Ajax response from action file
      data = JSON.parse(data);
      // alert(JSON.stringify(data));
      // console.log(data);
       try {
       if (data.status){
       
        myApp.showIndicator();
        var u = $$("#username2").val();
        window.localStorage.setItem("isRegistering", true);
        // alert(u);
        window.localStorage.setItem("RegisteringPhone", u);
        clearRegisterLogin();
        $$("#form-login").hide();
        $$("#form-register").hide();
        $$("#form-verifikasi").show();


        // $$("#verifikasi").val(data.number);
        
      //   var app = {
      //     sendSms: function() {
      //         var number = data.phone ;
      //         var message = "Tukang Dagang 2017 , Silahkan Verifikasi dengan kode "+data.number+"  ";

      //         //CONFIGURATION
      //         var options = {
      //             replaceLineBreaks: false, // true to replace \n by a new line, false by default
      //             android: {
      //                 intent: ''  // send SMS with the native android SMS messaging
      //                 //intent: '' // send SMS without open any other app
      //             }
      //         };

      //         var success = function () { 
      //             // alert('Message sent successfully'); 
                  
      //             // myApp.showPreloader();


      //            //  myApp.prompt('Silahkan masukan kode verifikasi yang telah dikirim via SMS, ke no yang anda daftarkan ', 'Verifikasi',
      //            //    function (value) {
      //            //      if (data.number==value){
      //            //        // myApp.alert("anda terverifikasi");
      //            //        SetVerified(data.phone);
      //            //      }else{
      //            //        myApp.alert("Tidak valid");
      //            //      }
      //            //    }
      //            // );


      //             // myApp.alert("Verifikasi ","Silahkan Periksa Inbox, Untuk mendapatkan Kode Verifikasi");

      //         };
      //         // var error = function (e) { alert('Message Failed:' + e); };
      //         // sms.send(number, message, options, success, error);

      //     }
      // };
      $$("#phone-verifikasi").val(username2);
      $$("#phone-verifikasi").val(data.phone);
      // app.sendSms();
      myApp.hidePreloader();

        // alert(data.username);
      
        // myApp.closeModal('.login-screen');
        


        // myApp.openPanel("right");
       }else{
        // alert(data);
         $$.each(data.response.err,function(i,v){  
           myApp.addNotification({
                message: v
            });
          });
         // myApp.addNotification({
         //    message: data.login,
         //    button: {
         //      text: 'Tutup',
         //      // color: 'lightgreen'
         //    }
         // });
       }
     }catch(err){
      alert(err);
     }
});

   // $$(document).on('page:init', '.page[data-page="form-login-page"]', function (e) {


   // });
    $$("#btn-back-login").on('click', function (e) {
    e.preventDefault();
    $$(".label-login").html("Masuk");
    $$("#form-login").show();
    $$("#form-register").hide();      
    clearRegisterLogin();
    });
    $$("#btn-register").on('click', function (e) {

      e.preventDefault();

      $("#email2").val("");

      $$(".label-login").html("Daftar");
      var u = $$("#username").val();
      $$("#form-login").hide();
      $$("#form-register").show();
        clearRegisterLogin();
        $$("#username2").val(u);
    });

  function cekLevel(){



     var isLogged = window.localStorage.getItem("isLogged");
    if (isLogged=="1"){
        $$(".btn-user-out").show();
        $$(".btn-user-sign").hide();
    }else{
        $$(".btn-user-out").hide();
        $$(".btn-user-sign").show();
    }




   

    var lev = window.localStorage.getItem("ukm_tipe");
     
     if (lev=="3" || lev=="2"  || lev=="1"  || lev=="4"  || lev=="5"){ //jika penjual kliling
        if (!isNaN(window.localStorage.getItem("ukm_id")) ){   
             $$("#li_button_panggilan").show();
             $$(".wrapper-tracking").show();
             $$(".notification-panggilan").show();
            // alert(lev);
        }
        // alert(window.localStorage.getItem("ukm_id"));

      }else{
         // $$(".notification-panggilan").hide();
        $$("#li_button_panggilan").hide();
         $$(".wrapper-tracking").hide();
      }



    var s = window.localStorage.getItem("sisa");

    // alert(window.localStorage.getItem("level"));

    if (window.localStorage.getItem("level")==2){ //jika penjual
         // alert("masuk");
        // alert(isNaN(window.localStorage.getItem("ukm_id")));
      // if (window.localStorage.getItem("ukm_id")!=null || window.localStorage.getItem("ukm_id")!=""    )//jika penjual
    if (!isNaN(window.localStorage.getItem("ukm_id")) ) // jik ada umkm
     {
        // alert(window.localStorage.getItem("ukm_id"));
         
        // $$(".bg-green").css("background-color","blue");
            $$(".btn-tambah-penjual").css("display","flex");

            $$(".float-button-cepat").show(); // add float button
          
            $$(".panel-right .btn-add-umkm").hide();
            $$("#li_button_fav_saya").show();
            $$(".btn-dashboard-admin").hide();
            $$("#row_User_pemilik").show();
            $$("#User_masaaktif").show();
            $$("#li_button_ukmku").show();
            $$("#li_button_peng_saya").show();
            $$("#li_User_masaaktif").show();
            $$("#li_button_permintaan").hide();
            $$("#li_button_rekomendasi").hide();
            $$("#box-poin").show();
            $$(".btn-data-umkm").hide();
            $$("#li_button_kat_fav").show();
            $$(".btn-list-order").hide();
            $$(".btn-list-order").css("display","flex");

        }else{
            $$("#li_button_peng_saya").hide();
            $$(".float-button-cepat").hide(); // add float button
            $$(".btn-list-order").css("display","flex");
            // $$(".btn-list-order").show();

        }


        // alert(s);
        if (s<0){ 
          $$("#li_button_verifikasi").show();
        }else{
          $$("#li_button_verifikasi").hide();
        }
     }else if (window.localStorage.getItem("level")==1){ // jika admin
        $$(".float-button-cepat").hide(); // add float button
         $$(".btn-dashboard-admin").show();
        $$(".panel-right .btn-add-umkm").show();
        $$(".btn-tambah-penjual").hide();
        $$(".btn-data-umkm").show();
        $$("#box-poin").hide();
        $$("#row_User_pemilik").hide();
        $$("#li_button_fav_saya").hide();
        $$("#li_button_kat_fav").hide();
        $$("#User_masaaktif").hide();
        $$("#li_button_verifikasi").hide();
        $$("#li_button_ukmku").hide();
        $$("#li_User_masaaktif").hide();
        $$("#li_button_rekomendasi").hide();
        $$("#li_button_permintaan").show();
        

     }else if (window.localStorage.getItem("level")==3){ // jika admin
        $$(".btn-tambah-penjual").hide();
         $$(".btn-dashboard-admin").hide();
        $$(".btn-data-umkm").hide();
        $$("#li_button_kat_fav").show();

        $$("#li_button_rekomendasi").show();
        $$(".panel-right .btn-add-umkm").hide();
        $$("#li_button_permintaan").hide();
        
        $$("#row_User_pemilik").hide();
        $$("#User_masaaktif").hide();
        $$("#li_button_verifikasi").hide();
        $$("#li_button_ukmku").hide();
        $$("#li_User_masaaktif").hide();
        $$("#box-poin").show();
     }else{
       $$(".btn-tambah-penjual").hide();
        $$(".float-button-cepat").hide();
         $$(".btn-dashboard-admin").hide();
         
     }

  }
  $$(document).on("click","#user-link",function(e){
    $("#defaultReal").realperson();
    var c = window.localStorage.getItem("isLogged");
     cekLevel();
   
    // alert(po);
    // alert(c);
    if (c==1 && c!="" ){
      myApp.openPanel("right");

      // refreshUserData();
      var po = window.localStorage.getItem("point");
      // alert(po);
      var u = window.localStorage.getItem("username");
      var p = window.localStorage.getItem("pemilik");
      var a = window.localStorage.getItem("tanggal_akhir");
      var s = window.localStorage.getItem("sisa");
      var l = window.localStorage.getItem("level");

   

    if (l==2){
        if (isNaN(window.localStorage.getItem("ukm_id"))){
          $$("#User_akses").html(" Pengguna ");
        }else{
          $$("#User_akses").html("  Penjual ");
        }

    }else if (l==1){
      $$("#User_akses").html(" Admin ");
    }else if (l==3){
      $$("#User_akses").html(" Pengguna Umum ");
    }
 
   $$("#User_username").html(u);
    // $$("#value-poinku").html("0");
    if (isNaN(po)){
      po = "0";
    }


    $$("#value-poinku").html(po);

    // alert(p);
    // alert(a);
    if (p=="undefined")
      $$("#User_pemilik").html("-");
    else
      $$("#User_pemilik").html(p);
    

    if (a=="undefined")
      $$("#User_masaaktif").html("-");
    else{
      if (s<0){
        $$("#User_masaaktif").html("<p style='color:red' >Habis, Segera Verifikasi </p>");
      }else{
        $$("#User_masaaktif").html(a+" ("+s+") hari ");
      } 
    }


   
      
      


    }else{
      // alert("masuk 2");
      // if (window.localStorage.getItem("isRegistering")==true){
       
       myApp.loginScreen();
       cekLoginVerified();
      // }

    }


  });

  $$("#li_button_panggilan").on("click",function(e){
    if ( !isNaN(window.localStorage.getItem("ukm_id") )  ){ 
       myApp.closePanel();
       mainView.router.load({
        url:"list-panggilan.html",
        query:{
          id: window.localStorage.getItem("ukm_id")
        }    
      }); 
   }else{
      myApp.alert("Akun ini belum memiliki Usaha ","Ups");


    }

  });
  $$("#li_button_ukmku").on("click",function(e){
    // alert(window.localStorage.getItem("ukm_id"));
    if ( !isNaN(window.localStorage.getItem("ukm_id") )  ){ 

       mainView.router.load({
        url:"tabs-swipeable.html",
        query:{
          id: window.localStorage.getItem("ukm_id")
        }    
      }); 

    }else{
       myApp.addNotification({
          message: " Anda belum memiliki Usaha, Silahkan Ajukan Usaha Anda ",
          buttonkey:  {
              text: 'Tutup',
          },
          hold : 2000
      });
      // myApp.alert("Akun ini belum memiliki Tukang Dagang ","Ups")
    }
  });
  $$("#karang-add-umkm").on("click",function(e){
    var lat = $$("#val-lat").val();
    var lng = $$("#val-lon").val();
    var lurah = "";
    // try{

     // $$.ajax({
     //      url : "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&sensor=false",
     //      success : function(r){
     //          var data = JSON.parse(r);
            
     //          lurah = data.results[0].address_components[1].short_name;
            
    mainView.router.load({
      url:"add-umkm.html",
      query:{
        kel: "null",
        iskarang: true,
        title: "Tambahkan Tukang Dagang"
      }    
    });
    myApp.closePanel("right");
                
              
     //          // alert(lurah);
     //          // myApp.closePanel();
             
              

     //      },error: function(e){
     //        alert(JSON.stringify(e));
     //      }
     //  });
     // }catch(){
     //      mainView.router.load({
     //      url:"add-umkm.html",
     //      query:{
     //        kel: lurah,
     //        iskarang: true,
     //        title: "Tambahkan Tukang Dagang"
     //      }    
     //    });

     // }

  });
  $$(document).on("click","#upload-link",function(e){
    // e.preventDefault();
    $("#defaultReal").realperson();

    $$("#label-add-umkm").html("Ajak Tukang Dagang");
    
    
    // alert("masuk");
    var c = window.localStorage.getItem("isLogged");
    var u = window.localStorage.getItem("username");
    var p = window.localStorage.getItem("pemilik");
    var l = window.localStorage.getItem("level");
    var a = window.localStorage.getItem("tanggal_akhir");
    
    // myApp.alert(c);
    var lat = $$("#val-lat").val();
    var lng = $$("#val-lon").val();
    var lurah = "";


    if (c==1 ){
      // alert("masuk 1");
        if (l==3 || l==2){
          mainView.router.load({
            url:"add-umkm.html",
            query:{
              kel: lurah,
              iskarang: false,
              title: "Ajukan Tukang Dagang"
            }    
          });
          myApp.closePanel("right");
        }else if (l==1){
           myApp.addNotification({
              message: "Admin tidak bisa mengajukan tempat",
              buttonkey:  {
                  text: 'Tutup',
                  // color: 'lightgreen'
              },
              hold : 1000
          });
         
        }

    }else{
      // alert("masuk 2");
       myApp.loginScreen();
       cekLoginVerified();
    }

     // $$.ajax({
     //      url : "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&sensor=false",
     //      success : function(r){
     //          var data = JSON.parse(r);
            
     //          lurah = data.results[0].address_components[1].short_name;
     //          // alert(lurah);
     //          if (c==1 ){
     //            // alert("masuk 1");
     //              if (l==3 || l==2){
     //                mainView.router.load({
     //                  url:"add-umkm.html",
     //                  query:{
     //                    kel: lurah,
     //                    iskarang: false,
     //                    title: "Rekomendasikan Tukang Dagang"
     //                  }    
     //                });
     //                myApp.closePanel("right");
     //              }else if (l==1){
     //                 myApp.addNotification({
     //                    message: "Admin tidak bisa mengajukan tempat",
     //                    buttonkey:  {
     //                        text: 'Tutup',
     //                        // color: 'lightgreen'
     //                    },
     //                    hold : 1000
     //                });
                   
     //              }

     //          }else{
     //            // alert("masuk 2");
     //             myApp.loginScreen();
     //             cekLoginVerified();
     //          }
     //          // alert(lurah);
     //          // myApp.closePanel();
             
              

     //      },error: function(e){
     //        location.reload();
     //        myApp.addNotification({
     //            message: JSON.stringify(e),
     //            buttonkey:  {
     //                text: 'Tutup',
     //                // color: 'lightgreen'
     //              }
     //        });
     //        // alert(JSON.stringify(e));
     //      }
     //  });

   

    
  });

  function cekLoginVerified(){
    if (window.localStorage.getItem("isRegistering")=="true"){
        $$("#form-login").hide();
        $$("#form-register").hide();
        $$("#form-verifikasi").show();
        $$("#phone-verifikasi").val(window.localStorage.getItem("RegisteringPhone"));
      }
  }

  //   $$(document).on("click",".button-menuju",function(e){
  //   // $$(".button-menuju").on("click",function(e){

  //   alert("masuk");
  //   // getDirection();
  //   // $$(".close-panel").trigger("click");

  // });

   // $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        // myApp.openPanel('left');
    // });
    
    // function

    // function getLivePosition(){
    //      navigator.geolocation.watchPosition(function(position) {
    //            x  = new google.maps.InfoWindow();
    //            var pos = {
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude
    //             };
    //             // return pos;
    //             // console.log(pos);

    //         },
    //         function (error) { 
    //           if (error.code == error.PERMISSION_DENIED)
    //             myApp.alert('GPS, belum dinyalakan');
    //           else if (error.code == error.POSITION_UNAVAILABLE )
    //             myApp.alert('GPS, belum dinyalakan');
    //           else if (error.code == error.TIMEOUT  )
    //             myApp.alert('GPS, belum dinyalakan');
    //               // alert("GPS, belum dinyalakan");
    //         }); 
    // }
    function getDirection(lat,lon){
      // clearMarkers();
     
      myApp.showIndicator();
      directionsService = new google.maps.DirectionsService;
      directionsDisplay = new google.maps.DirectionsRenderer;
       map = new google.maps.Map(document.getElementById('map'), {
         // center: {lat: pos.lat, lng: pos.lng},
         // center: new google.maps.LatLng(-6.970305, 107.654088),
         zoom: minZoomLevel,
          zoomControl: true,
                  mapTypeControl: false,
                  scaleControl: true,
                  streetViewControl: true,
                  rotateControl: true,
                  fullscreenControl: false,
         mapTypeId: 'terrain'
      });
       // alert(result_marker);
       // console.log(result_marker);
       setMarkers(result_marker);

      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');

      directionsDisplay.setMap(null);
       directionsDisplay.setMap(map);
  
      directionsDisplay.setPanel(document.getElementById('petunjuk-jalan'));
      // console.log("123");
      calculateAndDisplayRoute(directionsService, directionsDisplay,lat,lon);

    }


    function calculateAndDisplayRoute(directionsService, directionsDisplay,lat,lon) {
   
     navigator.geolocation.getCurrentPosition(function(position) {
       if (window.localStorage.getItem("ukm_tipe")=="3"){
           var pos = {
            lat: parseFloat($$("#last_lat").val() ),
            lng: parseFloat($$("#last_lng").val() )
          };

       }else{

         var pos = {
            lat: parseFloat($$("#val-lat").val() ),
            lng: parseFloat($$("#val-lon").val() )
          };
       
       }

    
      // console.log(pos);
      // console.log($$("#val-lat").val()+","+$$("#val-lon").val());
      // watchPosition
      // setMyMarker($$("#val-lat").val()+","+$$("#val-lon").val());
      // console.log(lat+","+lon);
        directionsService.route({
        origin: pos.lat +","+pos.lng ,
        destination: lat+","+lon,
        travelMode: 'WALKING'
      }, function(response, status) {
        if (status === 'OK') {
          myApp.hideIndicator();

           // directionsDisplay.setMap("directions",null);
          // initMap();
         
          // directionsDisplay.setDirections(response);
          directionsDisplay.setDirections(response);
           // var route = response.routes[0];
           //    var summaryPanel = document.getElementById("direction");
           //    summaryPanel.innerHTML = "";
           //    // For each route, display summary information.
           //    for (var i = 0; i < route.legs.length; i++) {
           //        var routeSegment = i + 1;
           //        summaryPanel.innerHTML += "<b >Rute : " + routeSegment + "</b><br />";
           //        summaryPanel.innerHTML += route.legs[i].start_address + " <p style='color:red'>menuju</p>  ";
           //        summaryPanel.innerHTML += route.legs[i].end_address + "<br /> Dengan Jarak";
           //        summaryPanel.innerHTML += route.legs[i].distance.text + "<br /><br />";
           //    }
           // myApp.openPanel('left');
           myApp.closePanel();
           mainView.router.back();
            myApp.pickerModal('.picker-info')  

           // myApp.openPanel('left');

        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    }, function (error) { 
        if (error.code == error.PERMISSION_DENIED)
          myApp.alert('PERMISSION_DENIED',"Ups");
        else if (error.code == error.POSITION_UNAVAILABLE )
          myApp.alert('POSITION_UNAVAILABLE',"Ups");
        else if (error.code == error.TIMEOUT  )
          myApp.alert('TIMEOUT',"Ups");
            // alert("GPS, belum dinyalakan");
      }); 



    }

    //action untuk menambahkan status
    $$(document).on("click",".btn-add-status",function(){
         myApp.prompt('Apa yang terjadi ?? ',"Berita Anda", function (data) {
            var status = data;          
            $$.ajax({
              url : server+"/index.php?r=UkmStatus/baru",
              data : "status="+status+"&ukm_id="+window.localStorage.getItem("ukm_id"),
              success : function(r){

              var json = JSON.parse(r);
              if (json.success==false){
                  $$.each(json.err,function(i,v){  
                   myApp.addNotification({
                        message: v,
                        buttonkey:  {
                            text: 'Tutup',
                            // color: 'lightgreen'
                          }
                    });
                  });

              }else{
                  // alert(r);
              }

              }
          });
         
        });
    });

     $$(document).on('page:reinit', '.page[data-page="tanya-favorite"]', function (e) {
        // alert("123");
     });
     $$(document).on('page:init', '.page[data-page="tanya-favorite"]', function (e) {
      try{
        // alert("masuk");
      var date = new Date();
      
    }catch(err){
        alert(err);
    }


        var isfirstloginDB = window.localStorage.getItem("isfirstlogin");
        $$('.navbar').addClass("bg-green");
        //get kategori
        getkategori(null);
        $$(document).on("click",".check-nama",function(e){
          var is = $$(this).is(':checked');
        
        });

        $$(document).on("click",".btn-check-favorite",function(e){
          var array = [];
          // alert("123");
          console.log("btn check");

          $$(".check-nama").each(function(i,v){
            if ($$(this).is(':checked')){
              var value = $$(this).attr("value");
              array.push(value);
            }

          });
          // alert(JSON.stringify(array));

          window.localStorage.setItem("kategori_favorite",JSON.stringify(array));

          // alert(window.localStorage.getItem("kategori_favorite") );
            if (array.length<5){
               myApp.addNotification({
                  message: "Minimal memilih 5 Kategori  Favorit",
                  buttonkey:{
                    text: 'Tutup',
                  },
                  hold : 1000
              });
               return false;
            }
          // if (isfirstloginDB==1){
          // }

          //jika sudah oke
          //start ajax 
          $$.ajax({
            url : server+"/index.php?r=User/SetJenisFavorite",
             data : {"jenis":array,"username":window.localStorage.getItem("username")},
            success : function(r){
              var data = JSON.parse(r);
              if (!data.success){
                myApp.addNotification({
                    message: data.message,
                    buttonkey:  {
                        text: 'Tutup',
                        // color: 'lightgreen'
                      }
                });
                return false;
              }else{
                myApp.addNotification({
                    message: "Data Berhasil di Perbaharui",
                    buttonkey:  {
                        text: 'Tutup',
                    },
                    hold : 1000
                });
                $(".back").trigger("click");
                // window.location.reload();


              }
              
              // alert(r);

            }
          });
          //end ajax

        });

     });
    //action untuk menampilkan berita ke time line
     $$(document).on('page:init', '.page[data-page="berita"]', function (e) {
      $$.ajax({
          url : server+"/index.php?r=UkmStatus/getStatus",
           data : "lat="+$$("#val-lat").val()+"&lon="+$$("#val-lon").val(),
          success : function(r){
            $$(".timeline").html("");
            var data = JSON.parse(r);
            if (data.length>0){
              if (!data.success){
                myApp.addNotification({
                    message: data.message,
                    buttonkey:  {
                        text: 'Tutup',
                        // color: 'lightgreen'
                      }
                });
                return false;
              }
            }
            
              
              if (data.length!=0){
               $$.each(data.data,function(i,v){
                string = '<div class="timeline-item">'+
                  '<div class="timeline-item-date">'+moment(v.created_date, "YYYY-MM-DD h:mm:ss").fromNow()+' </div>'+
                  '<div class="timeline-item-divider"></div>'+
                  '<div class="timeline-item-content"><div class="timeline-item-inner">'+
                  '<b><a href="tabs-swipeable.html?id='+v.ukm_id+'" >'+v.nama_ukm+'</a></b>'+
                  '<br>'+v.status+'</div></div>'+
               '</div>';
                // ' <a class="button button-big button-fill button-raised color-orange "> </a> '+ 
                               

                '</div>';

                $$(".timeline").append(string);

               });
              }
              else{
                  string = '<div class="timeline-item" style="color:red;text-align:center>Tidak Tersedia Berita</div>';
                   $$(".timeline").append(string);
                // alert("masuk");
                  // var string = '<div class="swiper-slide" '+
                  // 'style="background-image:url("http://gis.35utech.com/images/iklan disini.png.jpg")">'+
                  // '</div>';

                  // $$("#iklan-wrapper").append(string);
                }

              

              }
        }); // end of ajax

     }); // end function

    //action untuk pengenalan
    $$(document).on("click",".btn-pengenalan",function(){
       welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);
        $$(".welcomescreen-closebtn").html("Lewati");
       $$(".welcomescreen-closebtn").css("display","inline!important");


    });

    $$(document).on('page:beforeinit', '.page[data-page="panggilan-list"]', function (e) {
      // getListPanggilan();
    });
    $$(document).on('page:init', '.page[data-page="lokasi-calon-pembeli"]', function (e) {
      styledMap = new google.maps.StyledMapType(noPoi,{name: "Styled Map"});
        var map_pembeli;
        // alert("123");
          map_pembeli = new google.maps.Map(document.getElementById('map-lokasi-calon'),
          {
           center: new google.maps.LatLng($$("#last_lat").val(), $$("#last_lng").val()),
            zoom: 16,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: true,
            fullscreenControl: false,
            mapTypeId: 'terrain'
          });
          map_pembeli.mapTypes.set('map_style', styledMap);
          map_pembeli.setMapTypeId('map_style');

          var url  = server+"/icon/keliling.png";
           var icon = {
              url: icon, // url
              scaledSize: new google.maps.Size(35, 35), // scaled size
              origin: new google.maps.Point(0,0), // origin
              labelOrigin: new google.maps.Point(20, 45),
              anchor: new google.maps.Point(0, 0) // anchor
          };
         
          var keliling_me = new google.maps.Marker({
            position : new google.maps.LatLng($$("#last_lat").val(),$$("#last_lng").val()),
             // map : map_pembeli,
             map : map_pembeli,
             title: "Lokasiku",
              label: {
                text: "Lokasiku",
                color: 'black',
              },
           // animation: google.maps.Animation.DROP
            icon : icon
          });


          // alert(calon_pembeli_pos.length);

           var icon = {
            url: server+"/icon/calon-call.png",
            scaledSize: new google.maps.Size(20, 20), // scaled size
            origin: new google.maps.Point(0,0), // origin
            labelOrigin: new google.maps.Point(20, 30),
            anchor: new google.maps.Point(0, 0) // anchor
        };

          if (calon_pembeli_pos.length>0){
            $$.each(calon_pembeli_pos,function(i,v){
               if (v.is_sampai=="0"){
               var marker_calon = new google.maps.Marker({
                position : new google.maps.LatLng(v.caller_lat,v.caller_lng),
                map : map_pembeli,
                title: v.username,
                // draggable:isdrag,
                label: {
                  text: v.username,
                  color: 'black',
                },
                animation: google.maps.Animation.DROP,
                icon : icon
                });

                 var list = "<table>"+
                  "<tr><td colspan='2' style='text-align:center '>"+
                  "<a ukm-id='"+v.id+"' href='#' data-panel='right' class='open-detail'>"+v.username+"</a>"+
                  "<br><hr></td></tr>"+
                  "<tr><td colspan='2'>"+
                      '<p class="buttons-row " style="padding:0 8px 8px 8px">'+
                      
                      '<a class="link external" href="sms:'+v.username+'">'+
                      '<i  class="fa fa-envelope fa-2x"></i> '+
                      '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

                      '<a class="link external" href="tel:'+v.username+'">'+
                      '<i  class="fa fa-phone fa-2x"></i> '+
                      '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+

                      '<a class="link external" href="https://api.whatsapp.com/send?phone=62'+v.username.substring(1,100)+'" >'+
                      '<i class="fa fa-whatsapp fa-2x"></i>'+
                      '</a>'+

                



                      '</p>'+

                  "</td></tr>"+
                
                  "</table>";

               


               google.maps.event.addListener(marker_calon, 'click', (function(marker_calon) {    
            // alert(JSON.stringify(me));

              return function() { 
               

                // alert("123");
                // var konten
                infowindow_keliling.setContent(list);
                infowindow_keliling.open(map_pembeli, marker_calon);   

              }
           })(marker_calon));

             } // end 
           });// end for
          }else{
             myApp.addNotification({
                message: "Tidak Terdapat Calon Pelanggan",
                buttonkey:  {
                    text: 'Tutup',
                },
                hold : 5000
            });
          }


                // icon : icon









    });
    // initMap();
   function initMap() {
       styledMap = new google.maps.StyledMapType(noPoi,{name: "Styled Map"});
        var pos ;
      
        // $$(".current-location").trigger("click");
        if ($$("#val-lat").val()==""){
          $$("#val-lat").val(-6.9144948);
          $$("#val-lon").val(107.5641419);
        }
        pos = {
          lat: parseFloat( $$("#val-lat").val() ),
          lng: parseFloat($$("#val-lon").val())
        };
                if (x) {
                    x.close();
                }
               x  = new google.maps.InfoWindow();
              //  setTimeout(function(){
              // },1500);

                map = new google.maps.Map(document.getElementById('map'), {
                 center: pos,
                 // center: new google.maps.LatLng(-6.970305, 107.654088),
                 zoom: minZoomLevel,
                  zoomControl: false,
                  mapTypeControl: false,
                  scaleControl: true,
                  streetViewControl: true,
                  rotateControl: true,
                  fullscreenControl: false,
                 mapTypeId: 'terrain'
                });
                map.setTilt(45);

                google.maps.event.addListener(map,'center_changed', function() {
                    $$("#val-lat").val(map.getCenter().lat());
                    $$("#val-lon").val(map.getCenter().lng());
                });
                 // marker2.addListener("dragend",dragend );
                // google.maps.event.addListener(map, 'click', function( event ){
                //   // $(".center").html
                //   alert( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() ); 
                // });


                $$('<div/>').addClass('centerMarker').appendTo(map.getDiv());
                $$(document).on("click",".centerMarker",function(e){
                    clearMarkersCalon();

                    var pos ;
                    pos = {
                      lat: parseFloat( $$("#val-lat").val() ),
                      lng: parseFloat($$("#val-lon").val())
                    };
                    // alert()/
                    tampil_terdekat = true;
                    buka_left = true;
                    loader_refresh = true;
                    getDataNearest(pos.lat,pos.lng);
                    // console.log("masuk ko "+pos.lat+" - "+pos.lng);
                    
                    if (pos.lat!="" && pos.lng!="")
                      pol.setPaths(circlePath(new google.maps.LatLng(pos.lat,pos.lng),1000,360));

                });
                  //do something onclick
                    // .click(function() {
                    //   var pos ;
                    //   pos = {
                    //     lat: parseFloat( $$("#val-lat").val() ),
                    //     lng: parseFloat($$("#val-lon").val())
                    //   };
                    //   getDataNearest(pos.lat,pos.lng);
                    //   pol.setPaths(circlePath(new google.maps.LatLng(pos.lat,pos.lng),1000,360));
  
                    // });

                
                map.mapTypes.set('map_style', styledMap);
                map.setMapTypeId('map_style');

           
                isFirstTime = true;
                setMyMarker(pos.lat, pos.lng,map);
                var isFirstLook = window.localStorage.getItem("isFirstLook");
                // var isFirstLook = null;
                if (isFirstLook==null){ 
                  welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);
                  window.localStorage.setItem("isFirstLook",true);
                  $$(".welcomescreen-closebtn").html("Lewati");
                }
                else{
                  $$(".current-location").trigger("click");
                  setTimeout(function(e){
                      pos = {
                        lat: parseFloat( $$("#val-lat").val() ),
                        lng: parseFloat($$("#val-lon").val())
                      };
                    // if (window.localStorage.getItem("ukm_tipe")!="3"){ // jika bukan pedagang keliling
                     getDataNearest(pos.lat, pos.lng);
                    // }  
                  },3000);
                }
                myApp.hidePreloader();
               
            isFirst = false; 
        
         // Limit the zoom level
         google.maps.event.addListener(map, 'zoom_changed', function () {

           var zoom = map.getZoom();
           // alert(markers.length);
           for (var a = 0; a < markers.length; a++) {

            var bool = zoom >= 16;
            // console.log(bool);
            // markers[a].setVisible(bool);
          }
          // alert("123");
          // alert(JSON.stringify(markers);
         });


}

$$(document).on("click",".cari-semua",function(e){
  myApp.pickerModal(".picker-tracking");
});

// ========================================================================================
// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
         myApp.showIndicator();
  // alert('start');
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
   
});
$$(document).on('ajaxComplete', function (e) {
  myApp.hideIndicator();
  if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
    // Don't show preloader for autocomplete demo requests
    return;
  }
});


$$('.open-password').on('click', function () {
  myApp.prompt( 'Masukan Email Anda', [ 'Lupa Password'],
    function (value) {
      if (value == '') {
        customAlert('Email harap diisi', 'Peringatan');
      } else {
        if (validateEmail(value)) {
          $$.ajax({
            url: server+'/index.php?r=api/getForgotPassword',
            method: 'GET', 
            data : {email: value},
            success:function(data){
              var dataObj  = JSON.parse(data)
              if (dataObj.status) {
                
                /** encode username */
                var encodeuser = btoa(dataObj.data.username);
                window.localStorage.setItem('username', encodeuser)
                
                customAlert('Kami telah mengirimkan link untuk reset password, Silahkan check email anda', 'Informasi');
              } else {
                customAlert(dataObj.message, 'Peringatan');
              }
            },
            error:function(err){
              customAlert('Oops terjadi kesalahan', 'Peringatan');
            }
          });
        } else {
          customAlert('Format email salah', 'Peringatan');
        }  
      }
    },
    function(value) {
      // myApp.alert('silahkan check email anda', ['']);
    }
  );
});


// }catch(err){
//     alert(err);
// }

// $$('.tetew').click(function(){
//   // $("#bg").attr('src',"img/picture1.jpg");
//   // return false;
//   alert("ngghgh");
// });
$$(document).on('click', '.wallet', function (e) {
  var change1 =  $("#change1").attr('nilai');
  var change2 =  $("#change2").attr('nilai');
  var gambar = $(this).attr('gambar');
  var pk = $(this).attr('value');

  var change1 =  $("#change1").attr('nilai');
  var change2 =  $("#change2").attr('nilai');
  if(change1 == ""){
    $("#change1").attr('src',gambar);
    $("#change1").attr('nilai',pk);
  }else{
    $("#change2").attr('src',gambar);
    $("#change2").attr('nilai',pk);
  }

});



//reset data
$$(document).on('click', '.reset', function (e) {
  $("#change1").attr('nilai',"");
  $("#change2").attr('nilai',"");
  $("#change1").attr('src',"");
  $("#change2").attr('src',"");
});

// mengirim data ke halaman konfirmasi
$$(document).on('click', '.kirim_konfirmasi', function (e) {
  var change1 =  $("#change1").attr('nilai');
  var change2 =  $("#change2").attr('nilai');
  if (change1==""|| change2==""){
    myApp.addNotification({
     title: 'oops',
     message: 'Wallet Belum Dipilih'
    });

}else if (change1 == change2){
  myApp.addNotification({
   title: 'oops',
   message: 'Wallet Tidak Boleh Sama'
  });

}else{
  var gambar1 =  $("#change1").attr('src');
  var gambar2 =  $("#change2").attr('src');
       mainView.router.load({
       url:"konfirmasi.html",
       query:{
         tampil1: change1,
         tampil2: change2,
         tampilimg1:gambar1,
         tampilimg2:gambar2
         
       }    
     });
    }
});

function refreshHistory(){
$$("#ul-favorit-list").html("");
$$.ajax({
url : server+"/index.php?r=jenius/historyTransfer",
data : "username="+window.localStorage.getItem("username"),
success : function(r){
    var data = JSON.parse(r);
    $$.each(data.result,function(i,data){
        /** logo destination*/
        if (imageExists(data.wallet_id_dest_url)){
            img_dest = data.wallet_id_dest_url;
        } else{
            img_dest = "img/no_image.jpg";
        }

        /** logo origin */
        if(imageExists(data.wallet_id_origin_url)){
            img_origin = data.wallet_id_origin_url;
        } else {
            img_origin = "img/no_image.jpg";
        }
        
        var html =  
        '<li class="hold-hapus-produk-" data-id='+data.id+'>'+
        '<a href="#" class="item-link item-content">'+
        '<div class="item-media">'+
        '<img src="'+img_origin+'" class="custom-image-history">'+
        '</div>'+
        '<div class="item-inner" style="margin-left: 50px">'+
        '<div class="item-title-row" style="background-image:url()">'+
        '<div class="item-title" style="width: 150px;">'+
        '<div style="margin-left: 50px">'+
        '<i class="fa fa-angle-double-right"></i>'+
        '<i class="fa fa-angle-double-right"></i>'+
        '<i class="fa fa-angle-double-right"></i>'+
        '</div>'+
        '<b><i>'+data.transaction_date+'</i></b>'+
        '</div>'+
        '</div>'+
        '<div class="item-title-row" style="background-image:url()">'+
        '<div class="item-after" style="margin-left: 30px;">Rp. '+data.ammount+'</div>'+
        '</div>'+
        '</div>'+
        '<div class="item-media">'+
        '<img src="'+img_dest+'" class="custom-image-history" style="margin-left: -37px">'+
        '</div>'+
        '</a>'+
        '</li>';
      

          $$("#ul-history-list").append(html);
          // alert(html);
        });
        }

        });
}
//         });
// });
// menampilkan data dari halaman transfer
$$(document).on('page:init', '.page[data-page="konfirmasi"]', function (e) {
  var tampil1 = e.detail.page.query.tampil1;
  var tampil2 = e.detail.page.query.tampil2;
  var tampilimg1 = e.detail.page.query.tampilimg1;
  var tampilimg2 = e.detail.page.query.tampilimg2;
  // var tampil2 = e.detail.page.query.change2;
  // var tampil_gambar1 = e.detail.page.query.change2;
  // var tampil_gambar2 = e.detail.page.query.change2;

  $("#tampil1").attr('src',tampilimg1);
  $("#tampil2").attr('src',tampilimg2);
  $("#tampil1").attr('value',tampil1);
  $("#tampil2").attr('value',tampil2);
  // $("#tampil2").attr('src',gambar);
  // alert(tampil2);
});

$$(document).on('click', '.btn-berhasil-kembali', function (e) {
  mainView.router.load({
    url:"transfer.html",
  });
});
$$(document).on('page:init', '.page[data-page="page-berhasil"]', function (e) {
  var tampilimg1 = e.detail.page.query.tampilimg1;
  var tampilimg2 = e.detail.page.query.tampilimg2;

  // alert(tampilimg1);

  $("#tampil1_berhasil").attr('src',tampilimg1);
  $("#tampil2_berhasil").attr('src',tampilimg2);
});


// menampilkan data dari halaman transfer
function getSaldo(user_id){
  $$.ajax({
		url : server+"/index.php?r=jenius/getSaldo",
		data : "user_id="+user_id,
		beforeSend : function(e){
		},
		success : function(r){
      // alert(r)  ;
      var  json = JSON.parse(r);
      if (json.success==true){
        $$.each(json.data,function(i,v){
            // alert(v.isActive);
          if (isNaN(v.isActive)){// jika tidak tersedia
              $$(".wallet[value='"+v.wallet_id+"']").css("text-decoration","underline"); 
              $(".wallet[value='"+v.wallet_id+"']").addClass("btn-harus-aktivasi"); 
              // alert("123");
              // $$(".wallet[value='"+v.wallet_id+"']").addClass("btn-aktivasi"); 
          }else{ // jika tersedia
              $$(".wallet[value='"+v.wallet_id+"']").find(".jml_wallet").html("Rp."+numberWithCommas(v.ammount));
          }
              // if (v.isActive=="1"){
              // }else{
                // alert("123");
                  // $(".wallet[value='"+v.wallet_id+"']").find(".jml_wallet").html("Rp."+numberWithCommas(v.ammount));
              // }
          
       
        });
      
      }
      
    }
  });
}
$$(document).on('click', '.btn-harus-aktivasi', function (e) {
    e.preventDefault();
    var wallet_id = $$(this).attr("value");
    // var dialog = app.dialog.prompt('Enter your name');
    // dialog.$el.find('input').val('John');
   myApp.prompt('Silahkan Masukan Nomor Handphone ', 'Aktivasi',
      function (value) {
        // alert(value);
        myApp.showPreloader();
        $$(".modal-title").html(" Proses Pengiriman Kode OTP");
        setTimeout(function(e){
            myApp.hidePreloader();
        },2000);

        inputOTP(value,wallet_id);
       
      }
    );
});
function inputOTP(nomor,wallet_id){
    myApp.prompt('Silahkan Masukan kode OTP ', 'Aktivasi',
      function (nilai) {
         $$.ajax({
    // https://35utech.com/jenius/index.php?r=jenius/transfer&user_id=1&wallet_origin_id=1&wallet_dest_id=2&ammount=3000&fee=100
            url : server+"/index.php?r=jenius/SaveWalletUsers",
            data : {
                wallet_id : wallet_id,
                user_name : "Try Setyo",
                wallet_phone : nomor,
                user_id : window.localStorage.getItem("username")
            },
            success:function(r){
                      var  json = JSON.parse(r);
                      if (json.status==true){
                         myApp.addNotification({
                          title: 'Berhasil!',
                          message: json.message
                        });
                         getSaldo(window.localStorage.getItem("username"))
                      }else{
                        myApp.addNotification({
                          title: 'Gagal!',
                          message: json.message
                        });
                      }

            }

        });
      }
    ); 
}

$$(document).on('click', '.btn-fix-transfer', function (e) {
  $$.ajax({
    // https://35utech.com/jenius/index.php?r=jenius/transfer&user_id=1&wallet_origin_id=1&wallet_dest_id=2&ammount=3000&fee=100
		url : server+"/index.php?r=jenius/transfer",
		data : {
      user_id : window.localStorage.getItem("username"),
      wallet_origin_id : $$("#tampil1").attr("value"),
      wallet_dest_id : $$("#tampil2").attr("value"),
      ammount : $$("#nominal").val(),
      fee : 0,
    },
		beforeSend : function(e){
      
    },
		success : function(r){
      // alert(r)  ;
      var  json = JSON.parse(r);
      if (json.success==true){
        myApp.addNotification({
          title: 'Berhasil!',
          message: json.message
        });
        var gambar1 =  $$("#tampil1").attr('src');
        var gambar2 =  $$("#tampil2").attr('src');      
        // alert(gambar1);
        mainView.router.load({
          url:"berhasil.html",
            query:{
              tampilimg1:gambar1,
              tampilimg2:gambar2
            }    
        });
        // alert("123");
  

      }else{
        myApp.addNotification({
          title: 'Gagal!',
          message: json.message
        });
      }
    }
    });
});
$$(document).on('page:init', '.page[data-page="transfer"]', function (e) {
  var user_id = window.localStorage.getItem("username");
  getSaldo(user_id);
  // alert("123");
  // var tampil1 = e.detail.page.query.tampil1;
  // var tampil2 = e.detail.page.query.tampil2;
  // var tampilimg1 = e.detail.page.query.tampilimg1;
  // var tampilimg2 = e.detail.page.query.tampilimg2;
  // // var tampil2 = e.detail.page.query.change2;
  // // var tampil_gambar1 = e.detail.page.query.change2;
  // // var tampil_gambar2 = e.detail.page.query.change2;

  // $("#tampil1").attr('src',tampilimg1);
  // $("#tampil2").attr('src',tampilimg2);
  // $("#tampil1").attr('value',tampil1);
  // $("#tampil2").attr('value',tampil2);
  // $("#tampil2").attr('src',gambar);
  // alert(tampil2);
});


$$(document).on('click', '.saved_prom', function (e) {
    var id_promo = $$(this).attr("data-id");
    var user_id = window.localStorage.getItem("username")
    // alert(id+" - "+user);
    // alert("WEW");
      $$.ajax({
        url: server+'/index.php?r=jenius/savedPromo',
        method: 'GET', 
        data : {
            id_promo: id_promo,
            user_id: user_id
        },
        success:function(data){
          var dataObj  = JSON.parse(data)
          console.log(data);
          if (dataObj.status) {
            
          //   /** encode username */
          //   var encodeuser = btoa(dataObj.data.username);
          //   window.localStorage.setItem('username', encodeuser)
            
            // customAlert('Berhasil Menambahkan Ke Favorite', 'Informasi');
            myApp.addNotification({
                title: 'Berhasil Menambahkan Ke Favorite',
                message: data.message
            });
          } else {
            myApp.addNotification({
                title: dataObj.message,
                message: 'Peringatan'
            });
            // customAlert(dataObj.message, 'Peringatan');
          }
        },
        error:function(err){
            myApp.addNotification({
                title: 'Oops terjadi kesalahan',
                message: 'Peringatan'
            });
          customAlert('Oops terjadi kesalahan', 'Peringatan');
        }
      });
})

$$(document).on('page:init', '.page[data-page="history-list"]', function (e) {
    refreshHistory();
});