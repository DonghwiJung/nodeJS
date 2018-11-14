var fs = require('fs');

fs.open('./output.txt', 'w', function(err, fd){
    if(err) {
        console.dir(err);
        return;
    }
    var bf = new Buffer('안녕 나는 버퍼야\n')
    fs.write(fd, bf, 0, bf.length, null, function(err, written, buffer){
        if(err){
            console.dir(err);
            return;
        }
        fs.close(fd, function(){
            console.log('파일 닫기 완료')
        })
    })
})