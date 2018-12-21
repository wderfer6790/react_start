import Home from './components/Home';
import About from './components/About';
import Songs from './components/Songs/index';
import SongList from './components/Songs/SongList';
import SongDetail from './components/Songs/SongDetail';
import NotFound from './components/NotFound';

const songs = [
    { id:1, title:"Fallin' for you", musician:'Colbie callet', youtube_link:'PABUl_EX_hw' },
    { id:2, title:"Can't hurry love", musician:'The supremes', youtube_link:'EJDPhjQft04' },
    { id:3, title:"Landslide", musician:'Dixie chicks', youtube_link:'V2N7gYom9-A' },
    { id:4, title:"Can't let go", musician:'Linda ronstadt', youtube_link:'P-EpGKXmoe4' },
    { id:5, title:"Doctor my eyes", musician:'Jackson Browne', youtube_link:'7JlFKS_1oZk' },
    { id:6, title:"We gotta get you a woman", musician:'Todd Rundgren', youtube_link:'EyUjbBViAGE' },
    { id:7, title:"Hip to my heart", musician:'Band Perry', youtube_link:'vpLCFnD9LFo' },
    { id:8, title:"Rolling in the deep", musician:'Adele', youtube_link:'EvK8pDK6IQU' }
];

/**
 * /songs 아래 component, Songs는 실재로는 존재하지 않는 component지만
 * /songs 아래 index.js가 있기 때문에 이 컴포넌트가 돈다. 
 * 
 * ※ 이유는 모르겠지만 /songs path를 ucfirst 하면 react vdom에 index component가 잡히지 않는다. 
 * 
 */
const routes = [
	{ path: '/', exact: true, component: Home },
	{ path: '/about', component: About	},
	{ 
        path: '/songs', 
        component: Songs,
        routes : [
			{ path: '/songs', exact: true, component: SongList },
            { path: '/songs/:id', component:SongDetail }
        ]
    },
    { path: '*', component: NotFound }
]

export { songs, routes };