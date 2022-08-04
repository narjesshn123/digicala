import menu from '../../assets/image/menu.png'
import sold from '../../assets/image/sold.png'
import store from '../../assets/image/store.png'
import percent from '../../assets/image/percent.png'
import cent from '../../assets/image/cent.png'
import './Navmenustyle.css'
export const menuItems = [
    {icon:<img className='image' src={menu}/>},
    {tittle: "دسته بندی کالا ها ",

    submenu:[{tittle:"کالای دیجیتال"},

    {tittle:"کالای دیجیتال"},
    {tittle:"کالای دیجیتال",
submenu:[{tittle:"کالای دیجیتال"},
{tittle:"کالای دیجیتال",
submenu:[ {tittle:"کالای دیجیتال"},
{tittle:"کالای دیجیتال"},
{tittle:"کالای دیجیتال"}]},
{tittle:"کالای دیجیتال"},]},

    {tittle:"کالای دیجیتال"},
    {tittle:"کالای دیجیتال"},
    {tittle:"کالای دیجیتال"},

], 

},
{icon: <img className='image' src={store}/>},
    {tittle: "سوپرمارکت "},
    {icon: <img className='image' src={sold}/>},
    {tittle: "پرفروش ترین ها"},
    {icon: <img className='image' src={percent}/>},
    {tittle: "تخفیف ها و پیشنهاد ها"},
    {icon: <img className='image' src={cent}/>},
    {tittle: "شگفت انگیزها"}
]
export const MenuTwoItems = [
    {tittle:"سوالی دارید؟"},
    {tittle: "!فروشنده شوید"}
]
