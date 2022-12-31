"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./global.d.ts");
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC0WP5P-ufpRfjbNrmOWwLBQ&part=snippet%2Cid&order=date&maxResults=20';
const container = document.getElementById('container') || null;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '209a3ab431msh3f122ff72944b9ap1be1fejsn29138e3f8a55',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
const fetchVideos = (urlAPI) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(urlAPI, options);
    const channel = yield response.json();
    return channel;
});
const displayVideos = () => __awaiter(void 0, void 0, void 0, function* () {
    const channel = yield fetchVideos(API);
    const view = `
		${channel.items.map(item => `
			<div class="group relative">
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
			</div>
		`).join('')}
	`;
    if (container) {
        container.innerHTML = view;
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield displayVideos();
    }
    catch (error) {
        console.error(error);
    }
}))();
