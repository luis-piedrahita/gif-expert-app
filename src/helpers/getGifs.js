export const getGifs = async (category) => {
	const key = '3x1g37ecV9K7qfdmNxmHu6RypTGAIoEY';
	const query = encodeURI(category); //'rick and morty';
	const limit = '10';
	const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&api_key=${key}`;
	const response = await fetch(url);
	const { data } = await response.json();
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});
	return gifs;
};
