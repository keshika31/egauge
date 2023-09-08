var getScriptPromisify = (src) => {
    return new Promise(resolve => {
        $.getScript(src, resolve)
    })
}

(function () {
    const template = document.createElement('template')
    template.innerHTML = `
            <style>
            </style>
            <div id="root" style="width: 100%; height: 100%;">
            </div>
        `
    class SampleTemplate extends HTMLElement {
        constructor() {
            super ()

            this._shadowRoot = this.attachShadow({
                mode: 'open'
            })
            this._shadowRoot.appendChild(template.content.cloneNode(true))

            this._root - this._shadowRoot.getElementById('root')

            this._props = {}

            this.render()
        }

        onCustomWidgetResize(width, height) {
            this.render()
        }

        async rneder(value) {
            await getScriptPromisify('https://cdn.bootcdn.net/ajax/libs/echarts/5.0.0/echarts.min.js')

            const chart = echarts.init(this._root, 'dark')
            const option = {
                series: [{
                    type: 'gauge',
                    center: ["50%", "60%"],
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 20,
                    splitNumber: 1,
                    itemStyle: {
                        color: '#FFAB91'
                    },
                    progress: {
                        show: true,
                        width: 30
                    },
                    pointer: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle:{
                            width: 30
                        }
                    },
                    axisTick:{
                        distance: -45,
                        splitNumber: 5,
                        lineStyle: {
                            width: 2,
                            color: '#999'
                        }
                    },
                    splitLine: {
                        distance: -52,
                        length: 14,
                        lineStyle: {
                            width: 3,
                            color: '#999'
                        }
                    },
                    axisLabel: {
                        distance: -20,
                        color: '#999',
                        fontSize: 20
                    },
                    anchor: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        valueAnimation true,
                        width: '60%',
                        lineHeight: 40,
                        height: '15%',
                        borderRadius: 8,
                        offsetCenter: [0, '-15%'],
                        fontSize: 60,
                        fontWeight: 'bolder',
                        formatter: '$ {value}',
                        color: 'auto'
                    },
                    data:[{
                        value: value?value:0
                    }]
                }]
            };

                chart.setOption(option)
        }
    }

    customElements.define('com-sap-sample-echarts-gauge', SampleTemplate)
})()
