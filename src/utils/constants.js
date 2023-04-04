import React from "react";
import { GiWorld } from "react-icons/gi";

import { HiOutlineMap, HiOutlineFire } from "react-icons/hi";
export const features = [
  {
    id: 1,
    title: "Explore The World",
    Icon: GiWorld,
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, hic.",
  },
  {
    id: 2,
    title: "Meet Nature",
    Icon: HiOutlineMap,
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, hic.",
  },
  {
    id: 3,
    title: "New Adventure",
    Icon: HiOutlineFire,
    p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, hic.",
  },
];

export const reviews = [
  {
    id: 1,
    img: "/rev-1.jpg",
    name: "mary smith",
    title: "Had An Amazying Time With My Friends",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repudiandae illo velit quae eaque neque, fuga aspernatur maiores. Consequatur, neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repudiandae illo velit quae eaque neque, fuga aspernatur maiores. Consequatur, neque.",
  },
  {
    id: 2,
    img: "/rev-2.jpg",
    name: "jack wilson",
    title: "Great Experience , My Life Is Completely Different Now",
    p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repudiandae illo velit quae eaque neque, fuga aspernatur maiores. Consequatur, neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis repudiandae illo velit quae eaque neque, fuga aspernatur maiores. Consequatur, neque.",
  },
];

export const links = [
  { id: 1, link: "#", title: "company" },

  { id: 2, link: "#", title: "contact us" },
  { id: 3, link: "#", title: "careers" },
  { id: 4, link: "#", title: "privacy" },
  { id: 5, link: "#", title: "policy terms" },
];

export const prices = [
  {
    id: 1,
    title: "the sea explorer",
    bgimg:
      "linear-gradient(to left top, rgba(255, 119, 48, 0.5), rgba(255, 185, 0, 0.3)), url(/pricing-1.jpg)",
    bgtxt: "linear-gradient(to left top, #ff7730, rgba(255, 185, 0, 0.8))",
    i1: "3 day tours",
    i2: "up to 30 people",
    i3: "2 tour guides",
    i4: "sleep in cozy hotels",
    i5: "difficulty: easy",
    bgback: "linear-gradient(to left top, #ff7730, #ffb900)",
    price: "$250",
    txtback: "#ff7730",
  },
  {
    id: 2,
    title: "the forest hiker",
    bgimg:
      "linear-gradient(to left top, rgba(85, 197, 122, 0.5), rgba(126, 213, 103, 0.3)), url(/pricing-2.jpg)",
    bgtxt: "linear-gradient(to left top, #55c57a,rgba(126, 213, 103, .8))",
    i1: "7 day tours",
    i2: "up to 30 people",
    i3: "5 tour guides",
    i4: "sleep in tents",
    i5: "difficulty: medium",
    bgback: "linear-gradient(to left top, #28b485, #7ed567)",
    price: "$750",
    txtback: "#28b485",
  },
  {
    id: 3,
    title: "the snow adventure",
    bgimg:
      "linear-gradient(to left top, rgba(86, 67, 250, 0.5), rgba(41, 152, 255, 0.3)), url(/pricing-3.jpg)",
    bgtxt: "linear-gradient(to left top, #5643fa, rgba(41, 152, 255, .8))",
    i1: "5 day tours",
    i2: "up to 15 people",
    i3: "6 tour guides",
    i4: "sleep in cozy hotels",
    i5: "difficulty: hard",
    bgback: "linear-gradient(to left top, #5643fa, #2998ff)",
    price: "$900",
    txtback: "#5643fa",
  },
];

export const menu = [
  {
    id: 1,
    to: "#about",
    name: "about",
  },
  {
    id: 2,
    to: "#features",
    name: "features",
  },
  {
    id: 3,
    to: "#tours",
    name: "popular tours",
  },
  {
    id: 4,
    to: "#feedback",
    name: "feedback",
  },
  {
    id: 5,
    to: "#book",
    name: "book now",
  },
];
