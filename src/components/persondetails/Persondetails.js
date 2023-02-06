import React,{useState,useEffect,useRef} from 'react'
import {CloseIcon} from "../../components/SVG/CartIconSvg"
import { Formik } from "formik"
import {useDispatch } from 'react-redux'
import axios from 'axios'
import { useTranslation} from 'react-i18next';
import {hiddenLocation,hiddenCart} from "../../redux/langSlice"
import { Modal, useModal} from "@nextui-org/react";
import CompleteOrder from './../completeorder/CompleteOrder';


const Persondetails = ({setVisiblee}) => {

let dispatch = useDispatch()
const [countrycode,setCountryCode]= useState("")
const [countryname,setCountryName]= useState("")

const [phonecode,setPhoneCode]= useState("")
const [countryerror, setCountryError] = useState("")
const [t,i18n] = useTranslation()
let language= i18n.language;
let newFormRef =useRef(null)

const { setVisible, bindings } = useModal();

const getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        setCountryCode(data.country_code);
    }).catch((error) => {
        setCountryError(error)
    });
};

useEffect(()=> {
    getGeoInfo()
    newFormRef.current.dispatchEvent(
        new Event("submit", { cancelable: false, bubbles: false })
      );
},[])

// determine the country
let allcountrycodes = [
    ["AF","93"],
    ["AL", "355"],
    ["AS", "1-684"],
    ["AD", "376"],
    ["AO", "244"],
    ["AI", "1-264"],
    ["AQ", "672"],
    ["AG", "1-268"],
    ["AR", "54"],
    ["AM", "374"],
    ["AW", "297"],
    ["AU", "61"],
    ["AT", "43"],
    ["AZ", "994"],
    ["BS", "1-242"],
    ["BH", "973"],
    ["BD", "880"],
    ["BB", "1-246"],
    ["BY", "375"],
    ["BE", "32"],
    ["BZ", "501"],
    ["BJ", "229"],
    ["BM", "1-441"],
    ["BT", "975"],
    ["BO", "591"],
    ["BQ", "599"],
    ["BA", "387"],
    ["BW", "267"],
    ["BV", "47"],
    ["BR", "55"],
    ["IO", "246"],
    ["BN", "673"],
    ["BG", "359"],
    ["BF", "226"],
    ["BI", "257"],
    ["KH", "855"],
    ["CM", "237"],
    ["CA", "1"],
    ["CV", "238"],
    ["KY", "1-345"],
    ["CF", "236"],
    ["TD", "235"],
    ["CL", "56"],
    ["CN", "86"],
    ["CX", "61"],
    ["CC", "61"],
    ["CO", "57"],
    ["KM", "269"],
    ["CG", "242"],
    ["CD", "243"],
    ["CK", "682"],
    ["CR", "506"],
    ["HR", "385"],
    ["CU", "53"],
    ["CW", "599"],
    ["CY", "357"],
    ["CZ", "420"],
    ["CI", "225"],
    ["DK", "45"],
    ["DJ", "253"],
    ["DM", "1-767"],
    ["DO", "1-809"],
    ["EC", "593"],
    ["EG", "20"],
    ["SV", "503"],
    ["GQ", "240"],
    ["ER", "291"],
    ["EE", "372"],
    ["ET", "251"],
    ["FK", "500"],
    ["FO", "298"],
    ["FJ", "679"],
    ["FI", "358"],
    ["FR", "33"],
    ["GF", "594"],
    ["PF", "689"],
    ["TF", "262"],
    ["GA", "241"],
    ["GM", "220"],
    ["GE", "995"],
    ["DE", "49"],
    ["GH", "233"],
    ["GI", "350"],
    ["GR", "30"],
    ["GL", "299"],
    ["GD", "1-473"],
    ["GP", "590"],
    ["GU", "1-671"],
    ["GT", "502"],
    ["GG", "44"],
    ["GN", "224"],
    ["GW", "245"],
    ["GY", "592"],
    ["HT", "509"],
    ["HM", "672"],
    ["VA", "379"],
    ["HN", "504"],
    ["HK", "852"],
    ["HU", "36"],
    ["IS", "354"],
    ["IN", "91"],
    ["ID", "62"],
    ["IR", "98"],
    ["IQ", "964"],
    ["IE", "353"],
    ["IM", "44"],
    ["IL", "972"],
    ["IT", "39"],
    ["JM", "1-876"],
    ["JP", "81"],
    ["JE", "44"],
    ["JO", "962"],
    ["KZ", "7"],
    ["KE", "254"],
    ["KI", "686"],
    ["KP", "850"],
    ["KR", "82"],
    ["KW", "965"],
    ["KG", "996"],
    ["LA", "856"],
    ["LV", "371"],
    ["LB", "961"],
    ["LS", "266"],
    ["LR", "231"],
    ["LY", "218"],
    ["LI", "423"],
    ["LT", "370"],
    ["LU", "352"],
    ["MO", "853"],
    ["MK", "389"],
    ["MG", "261"],
    ["MW", "265"],
    ["MY", "60"],
    ["MV", "960"],
    ["ML", "223"],
    ["MT", "356"],
    ["MH", "692"],
    ["MQ", "596"],
    ["MR", "222"],
    ["MU", "230"],
    ["YT", "262"],
    ["MX", "52"],
    ["FM", "691"],
    ["MD", "373"],
    ["MC", "377"],
    ["MN", "976"],
    ["ME", "382"],
    ["MS", "1-664"],
    ["MA", "212"],
    ["MZ", "258"],
    ["MM", "95"],
    ["NA", "264"],
    ["NR", "674"],
    ["NP", "977"],
    ["NL", "31"],
    ["NC", "687"],
    ["NZ", "64"],
    ["NI", "505"],
    ["NE", "227"],
    ["NG", "234"],
    ["NU", "683"],
    ["NF", "672"],
    ["MP", "1-670"],
    ["NO", "47"],
    ["OM", "968"],
    ["PK", "92"],
    ["PW", "680"],
    ["PS", "970"],
    ["PA", "507"],
    ["PG", "675"],
    ["PY", "595"],
    ["PE", "51"],
    ["PH", "63"],
    ["PN", "870"],
    ["PL", "48"],
    ["PT", "351"],
    ["PR", "1-789"],
    ["QA", "974"],
    ["RO", "40"],
    ["RU", "7"],
    ["RW", "250"],
    ["RE", "262"],
    ["BL", "590"],
    ["SH", "290"],
    ["KN", "1-869"],
    ["LC", "1-758"],
    ["MF", "590"],
    ["PM", "508"],
    ["VC", "1-784"],
    ["WS", "685"],
    ["SM", "378"],
    ["ST", "239"],
    ["SA", "966"],
    ["SN", "221"],
    ["RS", "381"],
    ["SC", "248"],
    ["SL", "232"],
    ["SG", "65"],
    ["SX", "1-721"],
    ["SK", "421"],
    ["SI", "386"],
    ["SB", "677"],
    ["SO", "252"],
    ["ZA", "27"],
    ["GS", "500"],
    ["SS", "211"],
    ["ES", "34"],
    ["LK", "94"],
    ["SD", "249"],
    ["SR", "597"],
    ["SJ", "47"],
    ["SZ", "268"],
    ["SE", "46"],
    ["CH", "41"],
    ["SY", "963"],
    ["TW", "886"],
    ["TJ", "992"],
    ["TZ", "255"],
    ["TH", "66"],
    ["TL", "670"],
    ["TG", "228"],
    ["TK", "690"],
    ["TO", "676"],
    ["TT", "1-868"],
    ["TN", "216"],
    ["TR", "90"],
    ["TM", "993"],
    ["TC", "1-649"],
    ["TV", "688"],
    ["UG", "256"],
    ["UA", "380"],
    ["AE", "971"],
    ["GB", "44"],
    ["US", "1"],
    ["UM", "1"],
    ["UY", "598"],
    ["UZ", "998"],
    ["VU", "678"],
    ["VE", "58"],
    ["VN", "84"],
    ["VG", "1-284"],
    ["VI", "1-340"],
    ["WF", "681"],
    ["EH", "212"],
    ["YE", "967"],
    ["ZM", "260"],
    ["ZW", "263"],
];
  
  // on change select
  let onChangeCountry = (e,handleChange) => {
     e.persist = () => {}
     handleChange(e)
     if (e.target.value == "") {
        setCountryCode("")
        setPhoneCode("")
     }
     else{
        setCountryCode(e.target.value)
     }
    
  }

  
  let loopselectedoption = () => { 
    return  allcountrycodes.map(country => {
        if(country[0] === countrycode){
            setCountryName(t(country[0]))
            setPhoneCode(country[1])
        }
        return (
                <option value={country[0]} selected={country[0] === countrycode ? "selected" : "" }>{t(country[0])}</option>
        )
       
     })
  }

  useEffect(() => {
    loopselectedoption()
  }, [countrycode,phonecode])

let handleSubmit = async(data) => {
      console.log(data);
//    await axios.post()
}


let hiddenlocation = () => {
    setVisiblee(false)
    dispatch(hiddenLocation())
    dispatch(hiddenCart())
    setTimeout(() => {
      dispatch(hiddenLocation(true))
      dispatch(hiddenCart(true))
    },500);
}

  return (
    <div className="form-screen overflow-auto ">
        <div className="container bg-white">
            <h4 className="header w-full bg-white shadow">
            {t('personaldetails')}
                <div className="close" onClick={hiddenlocation}>
                    <span >
                        <CloseIcon />
                    </span>
                </div>
            </h4>
            <Modal
                scroll
                fullScreen
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
              >
                <CompleteOrder setVisibleeee={setVisible} countrycode={t('countrycode')} />
            </Modal>
              
            <Formik
            initialValues={{name:"",countrycode:"",countryname:"",phonecode:"", phone:"" ,address:"", email: '', accept:false}}
            validate={values => {
                const errors = {};
                // validation name
                if (!values.name) {
                        errors.name = t('reqiredname'); 
                }
                else if (values.name.length > 50) {
                        errors.name = t('namelength');  
                }
                //validation phone
                if (!values.phone) {
                        errors.phone = t('reqiredphone');    
                }
                
                else if (isNaN(values.phone)) {
                        errors.phone = t('nanphone');   
                }
                else if (values.phone.length > 16) {
                        errors.phone = t('phonelength');  
                }
                
                // validation address
                if (!values.address) {
                        errors.address = t('addressrequire');
                }
                else if (values.address.length > 50) {
                        errors.address = t('addresslength');    
                }
                //validation email
                if (values.email) {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = t('emailinvalid');
                        }
                }    
                // validation checkbox
                if (!values.accept) {
                        errors.accept = t('requiredaccept');  
                } 
                return errors;
            }}
            onSubmit={(values, { setSubmitting}) => {
                setSubmitting(true);
                setTimeout(() => {
                handleSubmit({"user-details":JSON.stringify({...values,}),"cart-details":localStorage.getItem("cart"),"location-coordinates":sessionStorage.getItem("location"),"language":language
                })
                localStorage.setItem("cart",JSON.stringify({}))
                setSubmitting(false);
                setVisible(true)
                },400);            
            }}
            >
                {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            
        }) => (
            // action="/en?language=en" method="post"
            
    <form  id="orderplacement-form" accept-charset="UTF-8"  ref={newFormRef} onSubmit={handleSubmit} >
        <div className="js-form-item form-item js-form-type-textfield form-item-name js-form-item-name form-no-label">
            <input autocomplete="off" data-drupal-selector="edit-name" type="text" id="edit-name" name="name" size="60" placeholder={t('form-name')} aria-required="true" onChange={handleChange} onBlur={handleBlur} value={values.name} 
            className={errors.name && touched.name && errors.name ? "form-text required error-border" : "form-text required"} />
        </div> 
        <div className='validation-box'>
            <span className='error-validation'>{errors.name && touched.name && errors.name}</span>
        </div>
        <div className="js-form-item form-item js-form-type-select form-item-countrycode js-form-item-countrycode form-no-label">
            <select data-drupal-selector="edit-countrycode" id="edit-countrycode" name="countrycode" className="form-select required" required="required" aria-required="true"  value={values.countrycode=countrycode}
            onChange={(e)=> onChangeCountry(e,handleChange)} >
                <option value="" selected={phonecode ? "selected" : "" } >- Select Country -</option>
                {
                    loopselectedoption()
                }
            </select>

        </div> 
        <input  type="hidden" name="countryname"  value={values.countryname=countryname}  />
        <input  type="hidden" name="phonecode"  value={values.phonecode=phonecode}  />
        <div className="js-form-item form-item js-form-type-tel form-item-phone js-form-item-phone">
            <label for="edit-phone" className="js-form-required form-required formphonecode">{phonecode && phonecode }</label>
            <input autocomplete="off" data-drupal-selector="edit-phone" type="tel" id="edit-phone" name="phone" size="30" placeholder={t('form-phone')}  aria-required="true" onChange={handleChange} onBlur={handleBlur}  
            value={values.phone} className={errors.phone && touched.phone && errors.phone ? "form-tel required error-border" : "form-tel required"} />
        </div>
        <div className='validation-box'>
            <span className='error-validation'>{errors.phone && touched.phone && errors.phone}</span>
        </div>
        <div className="js-form-item form-item js-form-type-textfield form-item-address js-form-item-address form-no-label">
            <input autocomplete="off" data-drupal-selector="edit-address" type="text" id="edit-address" name="address"  size="60" placeholder={t('form-address')} aria-required="true" onChange={handleChange} onBlur={handleBlur} value={values.address} className={errors.address && touched.address && errors.address ? "form-text required error-border" : "form-text required"} />
        </div>
        <div className='validation-box'>
            <span className='error-validation'>{errors.address && touched.address && errors.address}</span>
        </div>
        <div className="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">
            <input autocomplete="off" data-drupal-selector="edit-email" id="edit-email" name="email" size="30"  placeholder={t('form-email')} onChange={handleChange}
                onBlur={handleBlur} value={values.email} className={errors.email && touched.email && errors.email ? "form-email error-border" : "form-email"} />
        </div>
        <div className='validation-box'>
            <span className='error-validation'>{errors.email && touched.email && errors.email}</span>
        </div>
        <div className="js-form-item form-item js-form-type-textarea form-item-instructions js-form-item-instructions form-no-label">
            <div>
                <textarea autocomplete="off" data-drupal-selector="edit-instructions" id="edit-instructions" name="instructions" rows="5" cols="60" placeholder="Instructions" className="form-textarea"></textarea>
            </div>
        </div>
        <div className="js-form-item form-item js-form-type-checkbox form-item-accept js-form-item-accept">
            <input data-drupal-selector="edit-accept" type="checkbox" id="edit-accept" name="accept" aria-required="true" onChange={handleChange}
                onBlur={handleBlur} value={values.accept} className={errors.accept && touched.accept && errors.accept ? "accept form-checkbox required error-border" : "accept form-checkbox required"} />
            <label for="edit-accept" className="option js-form-required form-required"> {t('condition')}</label>
        </div>
        <div className='validation-box'>
            <span className='error-validation'>{errors.accept && touched.accept && errors.accept}</span>
        </div>
        <div className="placeOrder bg-white w-full">
            <input data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value={t('placeorder')} className="button button--primary js-form-submit form-submit" disabled={isSubmitting} />
        </div>
    </form>
    )}
            </Formik> 
            
      </div>
    </div> 
  )
}

export default Persondetails




