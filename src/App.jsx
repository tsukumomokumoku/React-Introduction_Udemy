/*
eslint react-hooks/exhaustive-deps: off
*/

// App.jsにReactのコードを書いていく
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// コンポーネントの命名規則について / 先頭は必ず大文字から始め、パスカルケースで記述すること
const App = () => {
  console.log("最初");

  // stateの使用
  // 第一引数に自由な変数名を指定 / 第二引数にstateを変更するための関数 / useState()の()の中に初期値を設定できる
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    // faceShowFlagをtrueの場合にはfalse、falseの場合にはtrueに変更する
    setFaceShowFlag(!faceShowFlag);
  };

  // 他の処理が邪魔し合わないようにするuseEffect
  // useEffectの第二引数に空の配列を渡すと最初の一回だけコンポーネントを通す処理ができる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // faceShowFlagがfalseの時に、右を返す
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // faceShowFlagがtrueの時に、右を返す
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // 配列にnumを入れることで、numを監視してnumの内容が変わるときに処理が走る
  }, [num]);

  return (
    // JSXは一つのタグで囲うこと
    // <></>で囲っても、React.Fragmentと同じ機能を持つ
    <>
      {/* 外側の{}はJavaScriptを書くところ */}
      {/* 内側の{}はJavaScriptのオブジェクトの波カッコ */}
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* color,messageがprops */}
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* faceShowFlag（左）がtrueの場合に右を返す&& */}
      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

// ほかのファイルでも使えるようにする export
export default App;
