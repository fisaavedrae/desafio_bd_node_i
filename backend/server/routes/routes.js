const express = require("express");
const router = express.Router();
const { getPosts, addPost, editPost, deletePost } = require("../../database/consultas.js");
const { isValidUrl } = require("../../server/validation/validation");


router.get('/posts', async (req, res) => {

    const results = await getPosts()
    res.json(results)

})

router.post('/posts', async (req, res) => {

    const { titulo, imgSrc, descripcion } = req.body
    if (!titulo || !imgSrc || !descripcion) {
        res.status(400).json({ message: 'Debe ingresar toda la información' })
        return
    } else {
        if (!isValidUrl(imgSrc)) {
            res.status(400).json({ message: 'Debe ingresar una URL valida' })
            return
        } else {
            await addPost(titulo, imgSrc, descripcion, 0)
            res.status(200).json({ message: 'Post agregado' })
        }
    }
})

router.put('/posts/like/:id', async (req, res) => {
    const { id } = req.params
    const { likes } = req.body
    await editPost(id, likes + 1)
    res.status(200).json({ message: 'Like agregado' })
})

router.delete('/posts/:id', async (req, res) => {

    const { id } = req.params
    await deletePost(id)
    res.status(200).json({ message: 'Post eliminado' })
})



module.exports = router;