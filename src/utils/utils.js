import { toast } from 'react-toastify';
import Swal from 'sweetalert2'


export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right'
    })
}

export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right'
    })
}
export const Bookingcnfrm = (msg,navigate) => {
    Swal.fire({
        title: msg,
        text: 'Want to see all your bookings',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33', 
        confirmButtonText: 'Yes!'
     }).then((result) => {
        if (result.isConfirmed) { // Check if the user confirmed
            navigate('/mybookings'); // Navigate if confirmed
        }
     })
}

