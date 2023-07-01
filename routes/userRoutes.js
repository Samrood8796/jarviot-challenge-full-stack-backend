import express from 'express'
import { analytics, authGoogle, callbackUrl, newToken, revoke } from '../cotrollers/userControllers.js'

const router = express.Router()

router.get('/auth/google', authGoogle)
router.get('/auth/google/callback', callbackUrl)
router.get('/analytics/:id', analytics)
router.get('/revoke/:id', revoke)




export default router