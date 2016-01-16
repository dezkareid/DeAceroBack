/**
 * MapController
 *
 * @description :: Server-side logic for managing maps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function (req, res) {
		sails.sockets.subscribers('message');
    res.view();
  },
  joinroom: function(req, res) {
     sails.socket.join(req.socket,"mapa");
     console.log("suscrito");
	},
	avisa: function (req, res) {
		data = { hola: 'message' }
    sails.sockets.blast(data);;
    res.json(200, { hola: 'message' });
	}
};

