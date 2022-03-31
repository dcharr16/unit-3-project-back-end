import { Router } from "express";
import * as recipesCtrl from "../controllers/recipes.js"

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', recipesCtrl.index)


/*---------- Protected Routes ----------*/


export{ 
  router
}

