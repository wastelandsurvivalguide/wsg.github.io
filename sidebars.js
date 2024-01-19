/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // TutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  /*
          GuideSidebar: [
            'intro',
            'hello',
            {
              type: 'category',
              label: 'Guide',
              items: ['Guide-basics/create-a-document'],
            },
          ],
           */
  sidebar: [
    "intro",
    "ui",
    "gameplay",
    "content",
    "visuals",
    "finish",
    "faq",
    {
      type: "category",
      label: "Appendix",
      items: [
        "contributors",
        "incompatible",
        {
          type: "link",
          label: "LOD Guide",
          href: "https://vivanewvegas.moddinglinked.com/lod.html",
        },
        {
          type: "link",
          label: "Tools to Avoid",
          href: "https://vivanewvegas.moddinglinked.com/avoid-tools.html",
        },
        {
          type: "link",
          label: "Mods to Avoid",
          href: "https://vivanewvegas.moddinglinked.com/avoid-mods.html",
        },
        {
          type: "link",
          label: "Dogmas",
          href: "https://moddinglinked.com/dogmas.html",
        },
        {
          type: "link",
          label: "xEdit - The Basics",
          href: "https://moddinglinked.com/xedit.html",
        },
        {
          type: "link",
          label: "xEdit - The Method",
          href: "https://moddinglinked.com/themethod.html",
        },
      ],
    },
  ],
};

module.exports = sidebars;