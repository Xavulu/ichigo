import toast from 'react-hot-toast';  
import { Err } from 'ts-results';


const errorNotif = () => toast('something went wrong, retrying in 6 seconds...', {
    icon: '❌', 
    style: {
        background: '#9D0045', 
        color: '#FFFFFF', 
        opacity: "0.7"
    }
});

export default errorNotif;