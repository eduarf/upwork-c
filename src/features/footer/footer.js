/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  footerItems: [
    {
      id: nanoid(),
      title: "For Clients",
      subtitles: [
        "How to Hire",
        "Talent Marketplace",
        "Project Catalog",
        "Hire an Agency",
        "Enterprise",
        "Any Hire",
        "Contract-to-Hire",
        "Direct Contracts",
        "Hire Worldwide",
        "Hire in the USA",
      ],
      isOpen: true,
    },
    {
      id: nanoid(),
      title: "For Talent",
      subtitles: [
        "How to Find Work",
        "Direct Contracts",
        "Find Freelance Jobs Worldwide",
        "Find Freelance Jobs in the USA",
      ],
      isOpen: true,
    },
    {
      id: nanoid(),
      title: "Resources",
      subtitles: [
        "Help & Support",
        "Success Stories",
        "Upwork Reviews",
        "Resources",
        "Blog",
        "Community",
        "Affiliate Program",
        "Free Business tools",
      ],
      isOpen: true,
    },
    {
      id: nanoid(),
      title: "Company",
      subtitles: [
        "About Us",
        "Leadership",
        "Investor Relations",
        "Careers",
        "Out Impact",
        "Press",
        "Contact Us",
        "Trust,Safety & Security",
        "Modern Slavery Statement",
      ],
      isOpen: true,
    },
  ],
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    footerToggle: (state, action) => {
      state.footerItems.map((item) => {
        if(item.title === action.payload){
          item.isOpen = !item.isOpen;
        }
        else {
          return;
        }
      })
    },
    footerToggleFalse: (state, action) => {
      state.footerItems.forEach((item) => {
        item.isOpen = false;
      });
    },
    footerToggleTrue: (state, action) => {
      state.footerItems.forEach((item) => {
        item.isOpen = true;
      });
    },
  },
});

export const { footerToggleFalse, footerToggle, footerToggleTrue } = footerSlice.actions;

export default footerSlice.reducer;
