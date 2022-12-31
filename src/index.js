const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC0WP5P-ufpRfjbNrmOWwLBQ&part=snippet%2Cid&order=date&maxResults=20';

const container = document.getElementById('container') || null;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '209a3ab431msh3f122ff72944b9ap1be1fejsn29138e3f8a55',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchVideos = async (urlAPI) => {
  const response = await fetch(urlAPI, options);
  const channel = await response.json();
	return channel;
}

const displayVideos = async () => {
	const channel = await fetchVideos(API);
	const view = `
		${channel.items.map(item => `
			<div class="group relative">
				<a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${item.snippet.title}
					</h3>
				</div>
				</a>
			</div>
		`).join('')}
	`;
	if(container){
		container.innerHTML = view;
	}
}

(async () => {
	try {
		await displayVideos();
	} catch (error) {
		console.error(error);
	}
})();