const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://hpgmpogv:IqgEUguEvCGrCJoodfjQyt6NA1tI3l5n@kashin.db.elephantsql.com/hpgmpogv');

const Models = require('./models.js')(sequelize,Sequelize);


const main = async () => { 
	await sequelize.authenticate();
	await sequelize.sync({force:true});
	
	let wm = await Models.museum.create({name: "The Whitney Museum"});
	let chsd = await Models.museum.create({name: "Cooper-Hewitt Smithsonian Design Museum"});
	
	let esm = await Models.artwork.create({title:"Early Sunday Morning", year:1930 , medium: "Oil Paint"});
	let eh = await Models.artist.create({name:"Edward Hopper"});
	await esm.setMuseum(wm);
	await esm.setArtist(eh);
	
	let cm = await Models.artwork.create({title:"Children Meeting", year:1978 , medium: "Oil Paint"});
	let em = await Models.artist.create({name:"Elizabeth Murray"});
	await cm.setMuseum(wm);
	await cm.setArtist(em);
	
	let pv = await Models.artwork.create({title:"Peacock Vase", year:1890 , medium: "Glass"});
	let lct = await Models.artist.create({name:"Louis Comfort Tiffany"});
	await pv.setMuseum(chsd);
	await pv.setArtist(lct);
}

main();