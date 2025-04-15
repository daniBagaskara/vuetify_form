import authMiddleware from './middlewares/auth'

export function registerGlobalMiddlewares(router) {
    router.beforeEach((to, from, next) => {
        // Bisa tambahkan middleware lain di sini
        authMiddleware(to, from, next)
    })
}
