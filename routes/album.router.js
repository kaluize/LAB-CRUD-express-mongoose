import express from "express";
import AlbumModel from "../models/album.model.js";

const albumRoute = express.Router();


// ROTA POST ALBUMS
albumRoute.post("/new-album", async (req, res) => {
    try {
        const form = req.body;
        const newAlbum = await AlbumModel.create(form);
        return res.status(201).json(newAlbum);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
})


// ROTA GET ALL ALBUMS
albumRoute.get("/albums", async (req,res) => {
    try{
        const albums = await AlbumModel.find({});
        console.log(albums);
        return res.status(200).json(albums);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
})


// ROTA GET ALBUM BY ID
albumRoute.get("/albums/:albumId", async (req,res) => {
    try{
        const { albumId } = req.params;
        const album = await AlbumModel.findById(albumId);
        console.log(album);
        return res.status(200).json(album);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
})


// ROTA PUT ALBUM BY ID
albumRoute.put("/albums/:albumId", async (req,res) => {
    try{
        const { albumId } = req.params;
        const albumUpdate = await AlbumModel.findByIdAndUpdate(
            albumId,
            {...req.body},
            {new: true, runValidators: true});
        console.log(albumUpdate);
        return res.status(200).json(albumUpdate);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
})


// ROTA DELETE ALBUM BY ID
albumRoute.delete("/albums/:albumId", async (req,res) => {
    try{
        const { albumId } = req.params;
        const albumDelete = await AlbumModel.findByIdAndDelete(albumId);
        if(!albumDelete){
            return res.status(400).json({msg: `Álbum não encontrado`});
        }
        console.log(albumDelete);
        return res.status(200).json(albumDelete);

    } catch (error) {
        console.log(error);
        return res.status(400).json(error.errors);
    }
})

export default albumRoute;