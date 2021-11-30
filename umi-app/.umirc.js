export default {
    dva: {
        hmr: true
    },
    proxy: {
        "/api": {
            target: "http://localhost:5008/",
            changeOrigin: true
        }
    }
}