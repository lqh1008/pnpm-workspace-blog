const fs = require('fs');
const { exec } = require('child_process');

function getPackageJson(path){
    const pathArr = []
    const  items = fs.readdirSync(path)
    console.log(items)
    items.forEach(item=>{
        const  isDic= fs.statSync(item).isDirectory()
        if(isDic && item.startsWith('blog')){
            pathArr.push(item)
        }
    })
    return pathArr
}


exec('pnpm i -w', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行命令出错: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

getPackageJson('.').forEach(item=>{
    exec(`pnpm i --filter @mono/${item}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行命令出错: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });

})
