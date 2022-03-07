

let d = [{text: 'one', timer: 2000}, {text: 'two', timer: 4000}, {text: 'three', timer: 3000},]


function showAll (gen) {
    const {value, done} = gen.next();
    if (done) return;

    console.log('animation Started for : ', value.text)

    setTimeout(() => {
        new Promise((resolve, reject) => {
            console.log('animation Exit for : ', value.text)
            resolve();
        })
            .then( () => showAll(gen))
    }, value.timer)

}

function* getNext (items){
    for (const item of items) {
        yield item;
    }
}

let m = ['one', 'two', 'three']
let t = [1,2,3];
console.log(m.map((m, i) => ({text: m, timer: t[i]})));