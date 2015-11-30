var allData = [];
function getReq (url, callback){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
    if(this.readyState===4 && this.status < 400) {
        allData.push(JSON.parse(this.responseText));
        callback();
        }
    }
req.open('GET', url);
req.send();
}

function handleData(data){
    console.log('handle data?');
    if(allData.length===3){
        console.log('can now use stuff');
    }
}

getReq('https://www.google.com', handleData);
getReq('https://www.yahoo.com', handleData);
getReq('https://www.bing.com', handleData);
