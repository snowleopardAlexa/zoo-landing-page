import React from 'react';

import { GiHiking, GiSharkFin, GiDolphin, GiJellyfish } from 'react-icons/gi';
import { SiFoodpanda} from 'react-icons/si';
import { MdBackHand } from 'react-icons/md';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f9b0f" />;

export const featuresData = [
	{
		name: 'Feed our Animals',
		description: 'Come and feed our animals!',
		icon: iconStyle(SiFoodpanda),
		imgClass: 'one',
	},
	{
		name: 'Pat our cats',
		description: 'Pat our human friendly Cheetahs',
		icon: iconStyle(MdBackHand),
		imgClass: 'two',
	},
	{
		name: 'Hike on the trail',
		description: 'Hike on our trail',
		icon: iconStyle(GiHiking),
		imgClass: 'three',
	},
	{
		name: 'Watch Sharks',
		description: 'Watch Sharks in our main aquarium',
		icon: iconStyle(GiSharkFin),
		imgClass: 'four',
	},
	{
		name: 'Dance with Dolphines',
		description: 'Swim with our playful Dolphins.',
		icon: iconStyle(GiDolphin),
		imgClass: 'five',
	},
	{
		name: 'Observe Jellyfish',
		description:
			'Colorful elly fishes will inspire you!',
		icon: iconStyle(GiJellyfish),
		imgClass: 'six',
	},
];