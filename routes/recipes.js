import { Router } from "express";
import * as recipesCtrl from "../controllers/recipes.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', recipesCtrl.index)

// show
router.get('/:id', recipesCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// create
router.post('/', checkAuth, recipesCtrl.create)

// update
router.put('/:id', checkAuth, recipesCtrl.update)

// delete
router.delete ('/:id', checkAuth, recipesCtrl.delete)



export{ 
  router
}

