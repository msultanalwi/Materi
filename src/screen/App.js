// // buat nama fucntion harus sama dengan nama filenya.

// // component = bagian kecil yang bisa membentuk satu kesatuan code.
// // reusable seperti baut di mobil, bisa dipasang di mana saja.

// // import
// import React from 'react';
// import {/* bisa */ Text, View} from 'react-native';

// import Car from '../components/Car';
// // untuk mempersingkat import type aja 'Car' biar langsung muncul
// import Motor from '../components/Motor';
// import Helm from '../components/Helm';
// import Jacket from '../components/Jacket';
// import Glove from '../components/Glove';
// import Boot from '../components/Boot';
// import FontCustom from '../components/FontCustom';

// const App = () => {
//   // state = var yang bisa nyimpen data

//   // handler = segala sesuatu handling dari user baik scroll, click, touch, dll

//   // effect

//   // render = untuk menampilkan tampilannya.

//   return (
//     <View>
//       <View>
//         //props pada Text bisa kita isi style
//         <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
//           Hallo App
//         </Text>
//       </View>
//       <Car />
//       <Car />
//       <Car /> // mengikut default dari component Car
//       <Car size={20} weight="100" />
//       <Car size={20} color="red" />
//       /*Jika props default Car ke App diganti contoh : size = 40 ke 20 maka jadi
//       20, color = black ke red. */ /* statis */
//       <Text style={{fontSize: 20, fontWeight: '500', color: 'purple'}}>
//         this is car
//       </Text>
//       <Text style={{fontSize: 20, fontWeight: '250', color: 'purple'}}>
//         this is car
//       </Text>
//       <Text style={{fontSize: 20, fontWeight: '100', color: 'purple'}}>
//         this is car
//       </Text>
//       <View style={{marginVertical: 20}}>
//         <Motor />
//         <Helm />
//         <Jacket />
//         <Glove />
//       </View>
//       <Boot />
//       <FontCustom ukuran={25} /> /*props dalam bentuk object bisa kita ganti
//       sesuai kebutuhan kita maka biasakan agar bedakan dengan properti object
//       statis*/
//     </View>
//   );
// };

// export default App; // agar bisa dibaca di file lain

// // props = property adalah var bisa menyalurkan data ke component

// // component = baut, tapi size nya beda2 sesuai kebutuhan artinya component bisa sama tapi isi stylingnya bisa beda


// ---------------------------------------------------


// STATE ---
import React, {useState} from 'react';
import {View, Text, Button, Alert, StyleSheet, Pressable} from 'react-native';
import ButtonCustom from '../components/ButtomCustom';

const App = () => {
  // State adalah variable ---
  // state bisa menyimpan nilai ---
  // state dapat diubah ---

  // kolom pertama adalah nama statenya [title] ---
  // kolom kedua adalah method untuk mengubah state [setTitle] ---
  // assign value awal di dalam useState (semua tipe data = string, number, boolean, array, object, null , undefined etc.) ---

  const [title, setTitle] = useState('ini adalah title');
  const [isLamp, setIslamp] = useState(false);
  const [SwitchButton, setSwitchButton] = useState(false);

  const [title2, setTitle2] = useState("halloo")

  // //dinamis ---
  const isButtonHandling = () => {
    // Alert.alert("halo") ---
    setTitle(title + 'ditambah halo');
  };

  const isLampHandling = () => {
    // //  if (isLamp == false) { 
    // //    setIslamp(true); 
    // //  } else {
    // //    setIslamp(false);
    // //  }
    // // };

    // // atau bisa simple

    setIslamp(!isLamp);
  };

  const HandlerSwitchButton = () => {
    setSwitchButton(!SwitchButton);
  };

  return (
    <View style={{flex: 1, backgroud: 'white', alignItems: "center"}}>
      <Text style={{color: 'black'}}>{title}</Text>
      <Text style={{color: 'black'}}>{isLamp.toString}</Text>
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: isLamp ? 'aqua' : 'red',
        }}></View>
      <Button title="klik saya" onPress={() => isButtonHandling()} />
      // method: onPress
      <Button
        title="switch lamp" /*dinamis= onPress={() => isLampHandling()}*/
        /*statis= */ onPress={() => setIslamp(!isLamp)}
      />
      <Text style={{textAlign: 'center'}}>
        {isLamp ? 'lamp on' : 'lamp off'}
      </Text>
      <Pressable
        onPress={() => HandlerSwitchButton()}
        style={{alignItems: 'center',
            height: 100,
            width: 200,
            borderRadius: 50}}>
        <View
          style={{
            alignItems: 'center',
            height: 100,
            width: 200,
            backgroundColor: SwitchButton ? 'gray' : 'black',
            borderRadius: 50,
            alignItems: SwitchButton ? 'flex-end' : 'flex-start',
          }}>
          <View
            style={{
              alignItems: 'center',
              height: 100,
              width: 100,
              backgroundColor: SwitchButton ? 'aqua' : 'red',
              borderRadius: 50,
            }}></View>
        </View>
        
      </Pressable>
      <Text style={{textAlign: 'center', fontSize: 25}}>
          {SwitchButton ? 'Switch Button TRUE' : 'Switch Button FALSE DEFAULT'}
        </Text>
        <Text style={{color : "black"}}>{title2}</Text>
        <ButtonCustom titleCustom="klikkkk" userPress={() => Alert.alert("hallo")} />

    </View>
  );
};

const styles = StyleSheet.create({
  lamp: {},
});
export default App;
