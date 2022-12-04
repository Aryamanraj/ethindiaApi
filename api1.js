const express = require('express')
const app = express()
const port = 8383
const cors = require('cors');
var crypto = require('crypto');

app.use(express.json())

app.post('/addDoc', async(req, res)=>{
    const { doctor_name, doctor_qualification, doctor_contact, doctor_address, doctor_lisense } = req.body
    var hash = crypto.createHash('md5').update([doctor_name, doctor_qualification, doctor_contact, doctor_address, doctor_lisense]).digest('hex');

    sendFunc(hash, doctor_name, doctor_qualification, doctor_contact, doctor_address, doctor_lisense)

    const res3 = await stateRef.set({
        hash
    }, { merge: true })
    res.status(200).send(res3)
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))