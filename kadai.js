const tasks = ["掃除","買い物","散歩"];

const task = () => {
    console.log("========================");
    console.log("現在持っているタスクの一覧");
    console.log("========================");
    for (let i = 0; i < tasks.length; i++) {
        console.log( i + " : " + tasks[i]);
    };
}

const add = () => {
    const name = prompt("タスクを入力してください");
    alert("新しいタスクを追加しました。");
    tasks.push(name);
    task();
}

const edit = () => {
    const name = prompt("「確認、追加、削除、終了」の4つのいずれかを入力してください");
}

task();
add();
edit();