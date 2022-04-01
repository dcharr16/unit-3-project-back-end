import { Router } from "express";
import * as recipesCtrl from "../controllers/recipes.js"

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', recipesCtrl.index)


/*---------- Protected Routes ----------*/
// create
router.post('/', recipesCtrl.create)

// update
router.put('/:id', recipesCtrl.update)

// delete
router.delete ('/:id', recipesCtrl.delete)

// show
router.show ()


export{ 
  router
}

