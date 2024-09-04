module.exports = {
    apps: [
        {
            name: 'happyllamastravel',
            port: '6002',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
