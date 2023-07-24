import { useState } from "react"

export const useValidate = () =>{
    const [error, setError] = useState({})
    const patternName = /^[A-ZА-ЯЁ'][a-z-а-яё' ]+[a-zа-яё']?$/g;
    const patternPhone = /^\+375\(\d{2}\)\d{7}$/;
    const patternStreet = /[A-Za-z0-9 a-zA-Zа-яА-ЯёЁ]/g;
	const patternHouse = /^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i;
	const patternFlat = /^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i;
	const patternEntrance = /[1-9][0-9]{0,2}/;
	const patternFloor = /[1-9][0-9]{0,2}/;

    const validate = (name, value) =>{
        switch (name) {
            case 'name':{
                if (value.length < 4 || value.length > 10){
                    setError({...error, name:'incorrect length name'})
                } else if  (!patternName.test(value)) {
					setError({ ...error, name: "Incorrect name" });
                } else {
                    setError({...error, name:''})
                }
                break
            }
            case 'phone':{
                if (!patternPhone.test(value)) {
					setError({ ...error, phone: "Please enter correct mobile number" });
				} else {
					setError({ ...error, phone: "" });
				}
				break;
            }
            case 'street':{
                if (value.length < 4) {
					setError({ ...error, street: "Incorrect length street" });
				} else if (!patternStreet.test(value)) {
					setError({ ...error, street: "Incorrect name street" });
				} else {
					setError({ ...error, street: "" });
				}
				break;
			}
            case 'house':{
                if (!patternHouse.test(value)) {
					setError({ ...error, house: "Incorrect number house" });
				} else {
					setError({ ...error, house: "" });
				}
				break;
			}
            default: break
        }

    }

    return {error, validate}
}