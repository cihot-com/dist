const version = 2021.0616
{
	let e = document.getElementById('version')
	if (e) e.textContent = version
}
console.info('last modify date', version)

let searchRE = '^\\/<>()[-]?*+{,}.:=!|$'.split('').map((c) => '\\' + c)
let replaceRE = /\$/

let dict0
let dict1
let dict_
let dictONE
let dictPOTC
let dictGNSS
let dictGNTW
let dict0input = document.getElementById('dict0')
let dict1input = document.getElementById('dict1')
let dict_input = document.getElementById('dict_')
let dictONEinput = document.getElementById('dictONE')
let dictPOTCinput = document.getElementById('dictPOTC')
let dictGNSSinput = document.getElementById('dictGNSS')
let dictGODinput = document.getElementById('dictGOD')
let dictGBTWinput = document.getElementById('dictGBTW')

async function init() {
	dict0 = await readTextFile('./dict0.txt')
	dict1 = await readTextFile('./dict1.txt')
	dict_ = []
	dictONE = await readTextFile('./dictONE.txt')
	dictGNSS = await readTextFile('./dictGNSS.txt')
	dictPOTC = await readTextFile('./dictPOTC.txt')
	dictGOD = await readTextFile('./dictGOD.txt')
	dictGBTW = await readTextFile('./dictGBTW.txt')

	//console.log('dict0', dict0.length)
	//console.log('dict1', dict1.length)
	//console.log('dict_', dict_.length)
	//console.log('dictONE', dictONE.length)
	//console.log('dictGNSS', dictGNSS.length)
	//console.log('dictPOTC', dictPOTC.length)
	//console.log('dictGOD', dictGOD.length)
	//console.log('dictGBTW', dictGBTW.length)
}

async function readTextFile(path) {
	return await fetch(path)
		.then((res) => res.text())
		.then((text) => {
			let result = []
			// \r\n 这个问题。文本文件的LF或CRLF换行导致程序错误。
			text
				.trim()
				.split(/\r?\n/)
				.forEach((row) => {
					let [cn, tw] = row.split('\t')
					if (cn && tw) {
						let cnLength = cn.length
						let twLength = tw.length
						if (cnLength && twLength) {
							result.push([cn, tw])
						}
					}
				})
			//console.log(result.filter(e=>e.some(v=>/II/.test(v))))
			return result
		})
}


function dictionarySort(arr) {
	arr.sort((a, b) => {
		let al = a[0].length,
			bl = b[0].length
		// 长度排序：长的在前
		// 文字排序：charCode小的在前
		return al > bl ? -1 : al < bl ? 1 : a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
	})
	return arr
}

function dictionaryFilter(arr) {
	return arr.filter((e) => {
		if (!Array.isArray(e) || e.length !== 2) {
			return false
		}
		let [a, b] = e
		let al = a.length
		if (al > 0) {
			//if (a === b && al === 1 && /[\x00-\xff]/.test(a)) {
			if (a === b && al === 1) {
				return false
			}
			return true
		}
		return false
	})
}

function resetTermForCNKey() {
	let term = {}
	let results = []
	if (dict0input.checked) {
		results.push('0')
		dict0.forEach(([cn, tw]) => term[cn]=tw )
	}
	if (dict1input.checked) {
		results.push('1')
		dict1.forEach(([cn, tw]) => term[cn]=tw )
	}
	if (dict_input.checked) {
		results.push('_')
		dict_.forEach(([cn, tw]) => term[cn]=tw )
	}
	if (dictONEinput.checked) {
		results.push('ONE')
		dictONE.forEach(([cn, tw]) => term[cn]=tw )
	}
	if (dictGNSSinput.checked) {
		results.push('GNSS')
		dictGNSS.forEach(([cn, tw]) => term[cn]=tw )
	}
	if (dictPOTCinput.checked) {
		results.push('POTC')
		dictPOTC.forEach(([cn, tw]) => term[cn]=tw )
	}
	if (dictGODinput.checked) {
		results.push('GOD')
		dictGOD.forEach(([cn, tw]) => term[cn]=tw )
	}
	if (dictGBTWinput.checked) {
		results.push('GBTW')
		dictGBTW.forEach(([cn, tw]) => term[cn]=tw )
	}
	console.log(results)
	term = Object.entries(term)
	term = dictionarySort(term)
	term = dictionaryFilter(term)
	return term
}
function resetTermForTWKey() {
	let term = {}
	let results = []
	if (dict0input.checked) {
		results.push('0')
		dict0.forEach(([cn, tw]) => term[tw]=cn )
	}
	if (dict1input.checked) {
		results.push('1')
		dict1.forEach(([cn, tw]) => term[tw]=cn )
	}
	if (dict_input.checked) {
		results.push('_')
		dict_.forEach(([cn, tw]) => term[tw]=cn )
	}
	if (dictONEinput.checked) {
		results.push('ONE')
		dictONE.forEach(([cn, tw]) => term[tw]=cn )
	}
	if (dictGNSSinput.checked) {
		results.push('GNSS')
		dictGNSS.forEach(([cn, tw]) => term[tw]=cn )
	}
	if (dictPOTCinput.checked) {
		results.push('POTC')
		dictPOTC.forEach(([cn, tw]) => term[tw]=cn )
	}
	if (dictGODinput.checked) {
		results.push('GOD')
		dictGOD.forEach(([cn, tw]) => term[tw]=cn )
	}
	if (dictGBTWinput.checked) {
		results.push('GBTW')
		dictGBTW.forEach(([cn, tw]) => term[tw]=cn )
	}
	console.log(results)
	term = Object.entries(term)
	term = dictionarySort(term)
	term = dictionaryFilter(term)

	return term
}

window.addEventListener('load', init)

let cn = document.getElementById('cn')
let tw = document.getElementById('tw')
if (!cn.hasAttribute('autofocus')) cn.focus()
let worker = null
let timeout
function delayRun(func, ms = 500) {
	clearTimeout(timeout)
	timeout = setTimeout(func, ms)
}
cn.addEventListener('input', () => {
	if (worker instanceof Worker) worker.terminate()
	delayRun(() => {
		tw.value = '...'
		tw.disabled = true
		worker = new Worker('./worker.js')
		worker.addEventListener('message', function (e) {
			let { data } = e
			if (data && typeof data === 'string') {
				tw.disabled = false
			}
			tw.value = data
		})
		worker.postMessage([cn.value, resetTermForCNKey()])
	})
})
tw.addEventListener('input', () => {
	if (worker instanceof Worker) worker.terminate()
	delayRun(() => {
		cn.value = '...'
		cn.disabled = true
		worker = new Worker('./worker.js')
		worker.addEventListener('message', function (e) {
			let { data } = e
			if (data && typeof data === 'string') {
				cn.disabled = false
			}
			cn.value = data
		})

		let term = resetTermForTWKey()
		//console.log(term)
		worker.postMessage([tw.value, term])
	})
})

window.addEventListener('keydown', function cancelWorkerRunning(e) {
	if (
		e.keyCode === 27 &&
		!e.ctrlKey &&
		!e.shiftKey &&
		!e.altKey &&
		!e.metaKey &&
		worker
	) {
		worker.terminate()
		worker = null
		console.log('强退worker')
	}
	cn.disabled = false
	tw.disabled = false
})

//setting options
let projectKeyName = `${location.pathname}/#dicts[name="project"]`
let projectElement = document.querySelector('#dicts').project
window.addEventListener('load', function (e) {
	projectElement.value = localStorage.getItem(projectKeyName) || '_'
})
window.addEventListener('beforeunload', function (e) {
	localStorage.setItem(projectKeyName, projectElement.value || '_')
})

//no drop
window.addEventListener('drop', function (e) {
	e.preventDefault()
})

//click -> copy
document.getElementById('cnTitle').addEventListener('click', function (e) {
	e.preventDefault()
	let { selectionStart, selectionEnd, selectionDirection, value } = cn
	let length = value.length
	cn.focus()
	cn.setSelectionRange(0, length)
	setTimeout(() => {
		document.execCommand('copy')
		cn.setSelectionRange(selectionStart, selectionEnd, selectionDirection)
	})
})
document.getElementById('twTitle').addEventListener('click', function (e) {
	e.preventDefault()
	let { selectionStart, selectionEnd, selectionDirection, value } = tw
	let length = value.length
	tw.focus()
	tw.setSelectionRange(0, length)
	setTimeout(() => {
		document.execCommand('copy')
		tw.setSelectionRange(selectionStart, selectionEnd, selectionDirection)
	})
})

document.querySelector('#cn').value = ''
document.querySelector('#tw').value = ''






document.addEventListener('contextmenu', function (event) {
	if(event.ctrlKey && event.altKey && event.shiftKey) {
		event.preventDefault()

		let arr = [
			[cnTitle.textContent, twTitle.textContent],
		]
		let cns = cn.value.split(/\n/)
		let tws = tw.value.split(/\n/)
		let len = Math.max(cns.length, tws.length)
		for(let i=0; i<len; i++) {
			arr.push([cns[i]!==undefined ? cns[i] : '', tws[i]!==undefined ? tws[i] : '' ])
		}

		let sheet = XLSX.utils.aoa_to_sheet(arr)
		let html = XLSX.utils.sheet_to_html(sheet)
		let table = $(html).filter('table').get(0)
		let wb = XLSX.utils.table_to_book(table, { sheet: 'Sheet1' })
	
		let filename = getDictFilename() + '.xlsx'
	
		XLSX.writeFile(wb, filename)
	}
})