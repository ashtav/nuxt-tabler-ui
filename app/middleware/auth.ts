import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
    const app = useAppStore()
    const auth = useAuthStore()
    const cookie = useCookie('token')

    auth.isLogged = cookie.value != null

    const { isClient, isServer } = useNuxtApp()

    // console.log('middleware ia active', import.meta.client, import.meta.server, `logged: ${auth.isLogged}`)

    // skip middleware on server
    // if (import.meta.server) return
    if (isServer) return

    // skip middleware on client side entirely
    // if (import.meta.client) return

    // if user is unauthorization, show login form
    app.backdrop = !auth.isLogged

    // if (!auth.isLogged) {
    //     return navigateTo('/');
    // }
})