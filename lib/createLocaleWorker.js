(function (w){
let _=function createLocaleWorker(mainHandles, workerHandles) {
	let code='', blob, url, worker;

	if(typeof workerHandles=='function'){
		code+='this.addEventListener(\'message\','+workerHandles.toString()+');';
	}else{
		let k,f;
		for(k in workerHandles) {
			f=workerHandles[k]
			k=k.replace(/^on(.+)/, '$1');	// 去掉开头的on
			code+='this.addEventListener(\''+k+'\','+f.toString()+');';
		}
	}


	if(code){
		if(!_.cache[code]){
			blob=new Blob([code], {type:'text/javascript'});
			url=URL.createObjectURL(blob);
			_.cache[code]=url;
		}else{
			url=_.cache[code];
		}
		worker=new Worker(url);
		if(typeof mainHandles=='function'){
			worker.addEventListener('message', mainHandles);
		}else{
			let k,f;
			for(k in mainHandles){
				f=mainHandles[k];
				k=k.replace(/^on(.+)/, '$1');	// 去掉开头的on
				worker.addEventListener(k, f);
			}
		}
	}
	return worker;
}
Object.defineProperty(_,'cache',{value:Object.create(null)});
w.createLocaleWorker=_;
})(window);