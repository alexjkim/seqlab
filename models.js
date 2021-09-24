module.exports = (sequelize,Sequelize) => {
	const Museum = sequelize.define(
		"museums",
		{
			name:Sequelize.STRING
		}
	);

	const Artwork = sequelize.define(
		"artworks",
		{
			title:Sequelize.STRING, 
			year:Sequelize.INTEGER,
			medium:Sequelize.STRING
		}
	);

	const Artist = sequelize.define(
		"artists",
		{
			name: Sequelize.STRING
		}
	);

	Museum.hasMany(Artwork);
	Artwork.belongsTo(Museum);
	Artist.hasMany(Artwork);
	Artwork.belongsTo(Artist);
	
	return {museum: Museum, artwork: Artwork, artist: Artist}
};

