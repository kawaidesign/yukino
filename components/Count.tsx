import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffectが実行されました");

    setInterval(() => {
      setCount((count) => count + 1);
      console.log("カウントが1アップしました");
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default Count;
