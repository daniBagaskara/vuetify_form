import { useAuthStore } from '@/stores/auth'

export default function authMiddleware(to, from, next) {
    const auth = useAuthStore()

    if (to.meta.auth && !auth.isAuthenticated) {
        return next('/login')
    }

    if (to.meta.auth === false && auth.isAuthenticated) {
        return next('/dashboard')
    }

    next()
}
