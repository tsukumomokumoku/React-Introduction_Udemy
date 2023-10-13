// JSX記法のルール
//ver17以降はJSXの記述のみの場合に限りimportの記載は不要
import React from "react";
import ReactDom from "react-dom";
// 他のファイルからimportすることで、コンポーネントされたものが使えるようになる
import App from "./App.jsx";

// 第一引数にレンダリングする意味でAppをHTMLのように記述
// 第二引数には、どこに反映するかを指定する
ReactDom.render(<App />, document.querySelector("#root")); //react開発の基盤
