import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    dropdown_menus:[
      { title: 'Home', link: '/' },
    ],
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about-us',
    dropdown_menus:[
      { title: 'ABOUT US', link: '/about-us' },
      { title: 'SERVICES', link: '/service' },
      
    ],
  },
  {
    id: 3,
    title: 'WORK',
    link: '/work',
    dropdown_menus:[
      { title: 'work', link: '/work' },
    ],
    
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
    dropdown_menus:[
      { title: 'Contact', link: '/contact' },
     
    ]
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id:1,
    title: 'Home',
    link: '/',
    dropdown_menus:[
    ]
  },
  {
    id: 2,
    title: 'Pages',
    link: '#',
    dropdown_menus:[
    ]
  },
  {
    id: 3,
    title: 'Work',
    link: '/work',
    dropdown_menus:[
    ]
  },
  
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
    dropdown_menus:[
    ]
  }
]