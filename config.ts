export default (env: string) => {
    const config = {
        test: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017'
        },
        development: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017'
        },
        production: {
            host: 'http://localhost',
            port: 3000,
            db_url: 'mongodb://localhost:27017'
        }
    }

    //return Object.keys(config).includes(env) ? config[env] : config['development']
    return env === 'test' || env === 'development' || env === 'production' ? config[env] : config['development']
}