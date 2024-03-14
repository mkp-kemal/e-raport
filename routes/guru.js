var express = require('express');
var router = express.Router();
let {
  viewGuru,
  actionCreate,
  actionUpdate,
  actionDelete,
  actionUpdateStatus
} = require("../controllers/guruController")

const auth = require('../middlewares/auth')

router.get("/admin/guru", auth.isLogin, viewGuru)
router.post("/admin/guru", actionCreate)
router.post("/admin/guru/update", actionUpdate)
router.get("/admin/guru/delete/:id", actionDelete)
router.get("/admin/guru/status/:id", actionUpdateStatus)


module.exports = router;
