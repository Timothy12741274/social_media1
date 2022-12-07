import MyPage from "../../../pages/myPage/MyPage";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


export const list = [
    {
        icon: AccountCircleOutlinedIcon,
        name: 'My page',
        path: '/',
        component: MyPage
    },
    {
        icon: NewspaperOutlinedIcon,
        name: 'News',
        path: '/news',
        component: MyPage
    },
    {
        icon: ChatBubbleOutlineOutlinedIcon,
        name: 'Messages',
        path: '/messages',
        component: MyPage
    },
    {
        icon: CallOutlinedIcon,
        name: 'Phone Calls',
        path: '/phoneCalls',
        component: MyPage
    },
    {
        icon: GroupOutlinedIcon,
        name: 'Friends',
        path: '/friends',
        component: MyPage
    },
    {
        icon: GroupsOutlinedIcon,
        name: 'Societies',
        path: '/societies',
        component: MyPage
    },
    {
        icon: InsertPhotoOutlinedIcon,
        name: 'Friends',
        path: '/friends',
        component: MyPage
    },
    {
        icon: LibraryMusicOutlinedIcon,
        name: 'Photos',
        path: '/albums',
        component: MyPage
    },
    {
        icon: OndemandVideoOutlinedIcon,
        name: 'Music',
        path: '/music',
        component: MyPage
    },
    {
        icon: AirplayOutlinedIcon,
        name: 'Videos',
        path: '/videos',
        component: MyPage
    },
    {
        icon: SportsEsportsOutlinedIcon,
        name: 'Games',
        path: '/games',
        component: MyPage
    },
    {
        icon: SentimentSatisfiedAltOutlinedIcon,
        name: 'Stickers',
        path: '/stickers',
        component: MyPage
    },
    {
        icon: ShoppingBagOutlinedIcon,
        name: 'Market',
        path: '/market',
        component: MyPage
    },



]