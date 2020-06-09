const taskList = ["掃除","買い物","散歩"];

const printTask = () => {
    console.log("========================");
    console.log("現在持っているタスクの一覧");
    console.log("========================");
    for (let i = 0; i < taskList.length; i++) {
        console.log( i + " : " + taskList[i]);
    };
}

const addTask = () => {
    const name = prompt("タスクを入力してください");
    alert("新しいタスクを追加しました。");
    taskList.push(name);
    printTask();
}

const editTask = () => {
    const name = prompt("「確認、追加、削除、終了」の4つのいずれかを入力してください");
}

printTask();
addTask();
editTask();