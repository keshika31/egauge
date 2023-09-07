var getScriptPromisify = (src) => {
    return new Promise(resolve => {
        $getScript(src, resolve)
    })
}

(function () {
    const template = document.createElement('template')
    template.innerHTML = 
             <style>
             </style>
             <div id="root" style="width: 100%; heigth: 100%"> 
             </div>

    class SampleTemplate extends HTMLElement {
        constructor() {
            super
        }
    }
})