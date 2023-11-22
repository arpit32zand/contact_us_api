import express from "express";
const router = express.Router();

router.route("/contact").post((req, res) => {
    const email = req.body.email;
    const msg = req.body.msg;
    const name = req.body.name;

    // const newMsg = new Msg({
    //     email,
    //     msg,
    //     name
    // });

    // newMsg
    // .save()
    // .then(() => 
    res.send({
        result: "Received"
    })
    // )
    // .catch(err => res.status(400).json("error: " + err));
});

export { router as registerRoute };