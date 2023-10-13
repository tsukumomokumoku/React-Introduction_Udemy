import React from "react";

// propsを使って、動的に変わるコンポーネントにする
export const ColorfulMessage = (props) => {
  // 分割代入を使うことでprops.colorがcolorのみで使用可能
  const { color, children } = props;

  const contentStyle = {
    // colorに対して、colorの変数を使う場合は省略ができる
    color,
    fontSize: "18px",
    fontWeight: "bold"
  };
  // childrenを指定することでタグで囲った中身を表示される
  return <p style={contentStyle}>{children}</p>;
};
