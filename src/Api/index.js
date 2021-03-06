import { first } from "../assets";
import { second } from "../assets";
import { third } from "../assets";
import { fourth } from "../assets";
import { fifth } from "../assets";

const items = [
	{
		id: 1,
		name: "UNEO",
		image: first,
		price: "N 199",
		quantity: 2,
		size: "",
		number: null,
	},
	{
		id: 2,
		name: "US Polo",
		image: second,
		price: "N 299",
		quantity: 3,
		size: "",
		number: null,
	},
	{
		id: 3,
		name: "HERO",
		image: third,
		price: "N 199",
		quantity: 2,
		size: "",
		number: null,
	},
	{
		id: 4,
		name: "UNEO",
		image: fourth,
		price: "N 199",
		quantity: 2,
		size: "",
		number: null,
	},
	{
		id: 5,
		name: "Wild Craft",
		image: fifth,
		price: "N 150",
		quantity: 3,
		size: "",
		number: null,
	},
];

const cart = [];

export function faceMasks() {
	console.log(items);
	return items;
}

export function myCart() {
	return cart;
}
