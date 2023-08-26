console.log("1番目");

// お約束を取り付けたい処理にPromise
const promise = new Promise((resolve, reject) => {
    //1秒後に実行する処理
    setTimeout(() => {
        console.log("2番目(1秒後に実行)");
        //無事処理が終わったことを伝える
        resolve("");
    }, 1000);
}).then(() => {
    // 処理が無事終わったことを受けとって実行される処理
    console.log("3番目");
    return "完全に完了しました";
});
