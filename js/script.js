//console.log('準備完了！');
//console.log(document.querySelector('#colorPicker').value);
//document.querySelector('#colorText').textContent ='カラーコード';
//document.querySelector('#colorText').textContent = 'カラーコード' +document.querySelector('#colorPicker').value;

//document.querySelector('#colorText').textContent= `カラーコード:${document.querySelector('#colorPicker').value}`;

//const name = 'Mana';
//console.log(name);

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

//カラーピッカーを操作した時の一連の動作
const colorBg =() => {
  //選択した色を背景色に設定
  document.body.style.backgroundColor = color.value;

  //カラーコードを表示
  text.textContent = `カラーコード:${color.value}`;
}

//カラーピッカーが変更されたらcolorBgを発動させる
color.addEventListener('input',colorBg);
