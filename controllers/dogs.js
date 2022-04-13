var dogs = require('../models/dogs'); 
 
// List of all dogss 
exports.dogs_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: dogs list'); 
}; 
 
// for a specific dogs. 
exports.dogs_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: dogs detail: ' + req.params.id); 
}; 
 
// Handle dogs create on POST. 
exports.dogs_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: dogs create POST'); 
}; 
 
// Handle dogs delete form on DELETE. 
exports.dogs_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: dogs delete DELETE ' + req.params.id); 
}; 
 
// Handle dogs update form on PUT. 
exports.dogs_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: dogs update PUT' + req.params.id); 
}; 

// List of all dogs
exports.dogs_list = async function(req, res) { 
    try{ 
        thedogs = await dogs.find(); 
        res.send(thedogs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.dogs_view_all_Page = async function(req, res) { 
    try{ 
        thedogs = await dogs.find(); 
        res.render('dogs', { title: 'dogs Search Results', results: thedogs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 