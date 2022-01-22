import * as React from "react"

import Seo from "../components/seo"
import styled from 'styled-components'
import {Container, Typography} from '@material-ui/core'
import {spacing, text} from '../styles/mixins'
import NextButton from '../scenes/ContactPage/components/BottomBar/GalaxyButton'
import MotionBtn from "../components/MotionBtn";
import useToolTip from "../hooks/useToolTip";
import useRefreshMouseListeners from "../hooks/useRefreshMouseListeners";

const NotFoundContainer = styled.div`
  //border: thin solid red;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EffectContainer = styled.section`
  position: absolute;
  top: -100px;
  
  width: 900px;
  margin: 0 auto;
  
  opacity: .3;
  filter: blur(3px);
`

const NotFoundTxtContainer = styled( Container )`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  //border: thin solid red;
  width: 100%;
  
  
  & > :first-child{
    font-weight: 900;
    letter-spacing: 2px;
    color: #a4b5c0 ;
    font-family: 'Elianto-Regular',serif;
  }
  
  p{
    max-width: 50ch;
    color: #a4b5c0 ;
    font-weight: lighter;
    letter-spacing: 1.1px;
    ${text(1)};
    
    ${spacing('mb', 3)};
  }
`

const NotFoundPage = () => {

  useToolTip('[data-tooltip-text]')
  useRefreshMouseListeners('[data-pointer]')
  
  return (

      <NotFoundContainer>
        <Seo title="404: Not found" />
        <EffectContainer>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
               viewBox="0 0 1262 766.449">
            <g id="_404.js" data-name="404.js" transform="translate(-241.307 -1326.115)">
              <text id="_4" data-name="4" transform="translate(246.307 2048.115)" fill="#5d6c7b"
                    font-size="690" font-family="Elianto-Regular, Elianto"><tspan x="0" y="0">4</tspan></text>
              <text id="_4-2" data-name="4" transform="translate(996.307 2049.115)" fill="#5d6c7b"
                    font-size="690" font-family="Elianto-Regular, Elianto"><tspan x="0" y="0">4</tspan></text>
              <g id="alien_1_" data-name="alien (1)" transform="translate(654.315 1610.935)">
                <path id="Path_278" data-name="Path 278" d="M287.175-772.713c-24.529,5.325-48.25,22.108-59.546,42.118-4.2,7.423-7.1,16.7-8.956,28.24-2.1,13.152-4.438,25.981-6.051,33a73.617,73.617,0,0,0,7.1,50.267c2.663,4.841,9.037,15.734,12.668,21.463,2.9,4.6,6.213,15.734,9.279,31.387,4.841,24.529,7.746,30.58,21.7,45.426,4.2,4.518,5.325,6.374,6.778,10.973.888,2.985,3.469,11.458,5.729,18.8,4.922,16.218,7.907,28.482,8.553,35.583.484,4.68-.565,18.154-1.694,21.866-.4,1.452-.726,1.452-36.228,3.066-26.384,1.21-44.7,2.824-62.935,5.648-8.391,1.21-17.67,2.5-20.494,2.743-17.186,1.533-53.253,9.924-72.7,16.863-16.863,6.052-18.8,6.939-25.9,12.1-13.878,10.247-15.25,19.042-4.6,29.289,4.438,4.357,8.956,7.1,18.235,11.3,4.115,1.856,7.5,3.711,7.5,4.034a26.5,26.5,0,0,1-2.5,4.922c-2.5,4.034-2.582,4.518-2.259,11.3.323,8.795,2.1,12.829,6.7,15.33a15.773,15.773,0,0,1,5.245,5.083c4.034,6.7,7.02,10.086,10.489,12.022,2.985,1.694,4.438,1.936,9.844,1.775,6.051-.081,6.374,0,7.262,1.856.968,2.259,4.841,3.873,9.037,3.873,6.536,0,16.621-7.02,19.607-13.636,2.663-5.729,2.179-9.36-1.694-14.6-2.743-3.792-2.824-3.954-1.775-7.423,1.533-5.164,2.9-5.406,18.074-2.9,6.939,1.13,19.607,2.824,28,3.712,8.472.888,18.8,2.178,23,2.824a119.455,119.455,0,0,0,16.7,1.21c4.922,0,13.8.565,19.768,1.291a104.85,104.85,0,0,0,16.137.807,116.81,116.81,0,0,1,15.33.4c10.489.888,61.483-.161,84.156-1.775,6.213-.4,17.105-1.13,24.206-1.533,16.218-.888,40.989-3.469,59.143-6.132,17.59-2.582,18.4-2.5,21.382,1.936l2.34,3.389-4.034,4.357a22.264,22.264,0,0,0-5,8.149c-.968,3.47-.888,4.115.484,6.7,1.936,3.631,7.423,7.665,13.475,9.924,7.5,2.824,17.59,1.21,19.526-3.147.565-1.291,1.291-1.694,2.421-1.452,2.34.646,15.088-2.663,16.783-4.276.807-.807,3.147-4.841,5.245-9.037,3.631-7.181,3.954-7.665,7.423-8.795,4.68-1.614,5.809-4.034,6.294-12.668.323-5.971.161-6.939-1.775-10.409-1.13-2.017-2.1-3.873-2.1-3.954,0-.323,5.971-2.743,9.279-3.712,8.311-2.5,17.59-9.118,21.866-15.653,5.245-7.988,1.775-16.218-10.489-24.932-9.279-6.616-22.592-12.022-40.746-16.621-5.325-1.291-10.651-2.824-11.861-3.227-4.438-1.694-30.9-6.7-51.155-9.6-24.932-3.631-59.062-6.536-94.726-8.149-10.166-.4-18.558-.888-18.719-1.049-.081-.081-.645-3.469-1.21-7.423-1.775-13.636-.081-25.255,6.858-47.6,1.936-6.213,4.357-14.12,5.245-17.59,2.259-8.391,3.47-10.57,8.875-16.3A78.019,78.019,0,0,0,369.8-540.821c3.066-6.052,4.115-9.763,7.746-28.563,3.47-17.347,5-21.785,11.457-32.6,13.071-21.947,17.59-34.372,18.235-50.429.4-8.956.161-11.054-1.694-18.961-1.13-4.922-2.985-14.685-4.115-21.785-3.47-22.189-6.616-32.194-13.394-42.118-11.457-16.863-31.548-30.822-52.2-36.309-7.02-1.856-9.6-2.1-24.771-2.34C296.857-774.165,292.984-774,287.175-772.713Zm44.861,3.228a92.416,92.416,0,0,1,42.683,23.4,69.1,69.1,0,0,1,20.172,34.856c2.259,9.2,2.582,12.829,1.291,12.829-.484,0-3.55-5.567-6.858-12.264-3.308-6.778-6.051-11.861-6.051-11.377s3.308,9.037,7.342,18.961c4.034,9.844,8.149,20.494,9.279,23.56,5.971,17.106,5.809,31.79-.4,48.573-5.406,14.766-9.682,21.543-23.883,37.842-2.743,3.066-6.051,7.1-7.5,8.956-3.147,4.034-9.36,15.572-8.795,16.137.242.242,1.21-.968,2.1-2.663,3.873-7.746,16.057-22.027,16.863-19.768a58.53,58.53,0,0,1-1.775,8.714c-1.049,4.438-2.743,12.668-3.712,18.477-2.743,15.653-6.132,23.8-14.6,34.372-4.841,6.052-24.771,25.5-31.306,30.419-11.538,8.714-22.673,8.956-34.292.646-6.536-4.6-28.966-26.627-33.808-33.162-8.553-11.457-10.005-15.411-13.878-37.116-1.21-6.616-2.743-13.474-3.308-15.25-1.21-3.389-1.452-6.939-.484-6.939,1.775.081,10.489,10.086,15.008,17.347,3.308,5.245,3.147,3.066-.161-2.824-2.824-4.922-7.988-11.7-16.7-21.785-9.279-10.812-11.861-14.523-16.137-23.641-4.68-10.005-6.616-16.137-8.23-25.335-2.421-14.524-.081-24.529,14.2-59.466,3.55-8.875,6.374-16.3,6.132-16.46-.161-.242-.645.323-.888,1.13-.323.807-2.663,5.89-5.164,11.215-6.374,13.555-8.875,15.25-6.858,4.841a78.911,78.911,0,0,1,9.36-25.578c11.538-19.365,35.905-35.583,60.03-39.778C301.134-772.309,323.484-771.664,332.036-769.485ZM288.708-492.248c3.308,13.394,6.051,23.4,6.7,24.125.323.4.242-.726-.161-2.421-1.049-4.2-4.115-23.8-3.792-24.125.161-.161,2.663.888,5.487,2.259,4.6,2.259,6.051,2.5,12.1,2.582,6.051,0,7.5-.323,12.426-2.663,2.985-1.372,5.567-2.582,5.648-2.582.484,0-2.017,16.46-3.147,21.382a30.783,30.783,0,0,0-.968,5.729c.323.4,2.259-6.293,5.729-20.01l2.663-10.247,6.213-5.809c3.389-3.147,6.374-5.567,6.616-5.325.484.4-2.259,11.377-4.115,16.7-.726,2.017-2.9,9.924-4.922,17.67-3.227,12.748-3.55,15.008-3.55,23.56,0,13.959,1.694,20.978,8.472,34.937,5.729,11.861,11.377,15.411,28.8,17.832,13.636,1.936,17.59,2.824,21.624,4.841A34.518,34.518,0,0,1,403.444-383c5.406,7.181,7.262,12.264,8.956,24.287.888,5.971,2.1,13.878,2.743,17.509,1.533,8.553,1.533,8.876-.565,10.247-6.132,4.034-125.709,7.827-158.387,5-7.988-.645-21.059-1.452-29.047-1.694-19.2-.726-25.255-1.452-27.272-3.469-1.614-1.614-1.614-1.614.242-10.409.968-4.761,2.5-10.893,3.308-13.555s2.259-7.423,3.147-10.489c3.47-11.215,9.6-20.656,16.541-25.416,5.406-3.712,10.812-5.487,21.14-6.858,10.973-1.452,18.8-3.147,22.189-4.922,7.181-3.712,13.717-13.959,18.154-28.563,1.856-6.051,2.1-8.311,2.179-18.961.081-13.313-.968-18.719-7.5-39.94-4.518-14.524-5.567-18.4-5.083-18.881.161-.242,3.227,2.017,6.616,5C287.094-498.7,287.094-498.7,288.708-492.248ZM225.692-413.5c1.291,1.291.4,3.147-1.452,3.147a1.379,1.379,0,0,1-1.533-1.452C222.707-414.305,224.078-415.112,225.692-413.5Zm178.558,7.181a.809.809,0,0,1-.807.807.868.868,0,0,1-.807-.807.808.808,0,0,1,.807-.807A.762.762,0,0,1,404.25-406.317Zm24.206,1.694c0,.968-2.34,1.936-2.985,1.291a2.031,2.031,0,0,1,0-1.694C425.955-406.317,428.456-405.914,428.456-404.623ZM180.75-400.669a1.492,1.492,0,0,1-2.824.807,1.671,1.671,0,0,1,1.694-2.421C180.266-402.283,180.75-401.557,180.75-400.669Zm-62.128,4.357a2.362,2.362,0,0,1-.726,1.694c-.968.565-1.936-.968-1.291-2.017C117.331-397.845,118.622-397.6,118.622-396.312Zm329.2,1.291c0,.4-.565.807-1.21.807s-1.21-.4-1.21-.807c0-.484.565-.807,1.21-.807S447.821-395.505,447.821-395.021ZM497.846-393a1.241,1.241,0,0,1-1.21,1.21,1.241,1.241,0,0,1-1.21-1.21,1.241,1.241,0,0,1,1.21-1.21A1.241,1.241,0,0,1,497.846-393Zm19.365,3.147a2.362,2.362,0,0,1-.726,1.694c-.968.565-1.936-.968-1.291-2.017C515.92-391.39,517.211-391.148,517.211-389.857Zm-315.483,5.325a.809.809,0,0,1-.807.807.868.868,0,0,1-.807-.807.808.808,0,0,1,.807-.807A.762.762,0,0,1,201.728-384.532Zm220.273,0a.809.809,0,0,1-.807.807.868.868,0,0,1-.807-.807.809.809,0,0,1,.807-.807A.762.762,0,0,1,422-384.532ZM76.665-380.9c0,.645-.323,1.21-.726,1.21-1.049,0-1.775-1.291-1.13-1.936C75.7-382.515,76.665-382.111,76.665-380.9Zm67.454,2.582c-.807.807-1.533-.4-.807-1.452.484-.887.646-.887.968,0A1.683,1.683,0,0,1,144.118-378.319Zm26.788,1.13a1.2,1.2,0,0,1-1.049.807,1.2,1.2,0,0,1-1.049-.807c-.161-.484.323-.888,1.049-.888S171.068-377.674,170.906-377.19Zm342.513.323c3.631,1.694,5.89,5.406,8.311,12.99a30.1,30.1,0,0,0,5.164,10.328c3.954,4.76,5.245,8.553,4.115,11.861-1.049,2.985.4,2.34,1.694-.726.807-2.017.888-2.1,1.452-.565,1.13,2.663.888,11.538-.4,14.6a7.287,7.287,0,0,1-3.792,3.954l-2.663,1.049-.484-4.276c-.645-5.729-2.743-9.682-10.409-19.929-5.971-7.988-12.91-20.978-12.91-23.964.081-1.452,3.147-5.245,4.922-5.971S510.756-378.158,513.419-376.867Zm18.477,2.985c-1.21,1.21-2.1.323-1.452-1.452.4-1.049.726-1.21,1.452-.484S532.622-374.608,531.9-373.881ZM109.827-372.51c2.34,2.34,3.227,6.7,1.614,7.665a27.1,27.1,0,0,0-2.582,5.487c-1.049,2.824-4.922,9.6-8.714,15.169-7.181,10.489-9.682,15.976-9.763,21.14a7.921,7.921,0,0,1-.323,3.066c-.081,0-1.372-.4-2.824-.888a6.043,6.043,0,0,1-3.712-3.712c-1.372-3.227-1.614-13.717-.4-15.572.726-1.049.807-1.049.807.081a6.33,6.33,0,0,0,1.21,2.824c1.049,1.372,1.13,1.291.645-1.452-.645-4.2.081-6.294,3.712-11.135a27.147,27.147,0,0,0,4.6-9.6C97.563-372.913,104.017-378.238,109.827-372.51Zm350.9.484c.807.968.807,1.694.161,3.227-1.775,3.792-6.536,1.694-5.487-2.421C455.97-373.559,459.117-374.043,460.731-372.026ZM199.308-370.9a1.534,1.534,0,0,1-.807,1.291c-.4.242-.807-.081-.807-.726,0-.726.4-1.291.807-1.291A.745.745,0,0,1,199.308-370.9Zm299.345.484c3.066,1.614,5.245,4.518,8.391,11.3a56.551,56.551,0,0,0,6.051,9.682c5,5.971,10.57,15.33,11.135,18.558.242,1.694.081,3.308-.565,4.034-.888,1.049-.807,1.13.4.726,1.291-.484,1.372-.242.888,1.775a86.228,86.228,0,0,1-4.6,10.489c-4.276,8.714-5.729,10.005-10.893,10.005-3.954,0-8.391-2.017-8.391-3.792a33.731,33.731,0,0,1,1.614-5.89,30.581,30.581,0,0,0,1.614-7.1c0-2.582.081-2.663,1.775-1.452a7.59,7.59,0,0,0,4.276,1.21l2.421-.081-2.663-.645c-3.47-.807-5.487-2.743-6.132-5.729-.565-2.743-3.712-7.5-8.472-12.829-3.55-3.954-5-6.616-7.988-14.524-2.985-8.23-3.066-9.279-.565-12.587C490.262-371.622,494.216-372.671,498.653-370.412Zm-372.124,2.824a12.3,12.3,0,0,1,3.954,4.438c1.21,2.582,1.21,3.066.081,5.487a30.513,30.513,0,0,0-1.856,5.406c-1.049,5-4.115,10.731-8.472,16.137a53.868,53.868,0,0,0-5.89,8.875c-.888,2.017-1.936,4.438-2.421,5.406a7.958,7.958,0,0,1-3.712,2.9c-2.663,1.13-2.743,1.21-.807,1.291a6.442,6.442,0,0,0,3.631-1.13c2.259-1.694,2.743-1.452,2.743,1.372a31.15,31.15,0,0,0,1.775,7.665c2.1,5.809,1.614,6.939-3.631,8.391-6.536,1.775-10.086-.242-13.636-7.746-1.049-2.259-2.743-5.245-3.631-6.778-1.291-2.1-1.775-4.034-1.775-7.665.081-6.778,1.936-10.731,11.3-23.883a57.246,57.246,0,0,0,5.89-10.489C114.184-367.911,120.155-371.461,126.529-367.588Zm25.174,4.034a.809.809,0,0,1-.807.807.868.868,0,0,1-.807-.807.809.809,0,0,1,.807-.807A.762.762,0,0,1,151.7-363.554Zm-62.935,2.421c0,.4-.565.807-1.21.807s-1.21-.4-1.21-.807c0-.484.565-.807,1.21-.807S88.768-361.617,88.768-361.133Zm393.587,1.372c.888.807,2.743,4.438,4.115,8.149,2.743,7.342,4.68,10.57,9.521,15.734,6.778,7.262,7.746,12.748,2.985,17.186-2.743,2.582-1.452,2.985,1.533.484,1.21-1.049,1.372-1.049,1.372.081a47.678,47.678,0,0,1-2.421,7.827c-1.291,3.631-2.421,7.5-2.421,8.633,0,3.631-2.1,5.083-7.423,5.083-4.115,0-5.567-.484-10.408-3.227-6.132-3.631-7.827-5.567-8.553-10.005-.4-2.5-.081-3.227,2.421-5.729,2.017-2.017,3.55-2.824,4.761-2.663,1.694.242,1.856.565,1.694,5.406-.161,6.132,1.372,5.729,2.017-.565.323-3.631.484-3.954,2.1-3.55l1.694.4-1.775-1.936c-1.21-1.372-2.017-3.712-2.582-7.342-.888-6.455-1.614-7.907-6.778-13.313-3.954-4.2-6.051-5.406-5.083-3.066a1.68,1.68,0,0,1-.968,1.936c-1.775.968-8.875,2.259-15.492,2.9l-5.245.484,2.421-1.533a58,58,0,0,0,7.423-7.02c4.2-4.6,5.245-5.406,7.02-5.083,1.856.4,2.1.161,2.1-1.856a7.777,7.777,0,0,1,4.276-7.423C474.205-361.536,480.337-361.536,482.355-359.761Zm-336.542,1.856c2.743,1.614,5.083,5.325,5.083,8.069,0,1.21.484,1.614,2.259,1.614,1.614,0,3.389,1.21,6.616,4.518a42.475,42.475,0,0,0,7.262,5.971c3.469,1.856,2.824,1.936-7.1.4-12.506-1.936-12.184-1.856-11.619-3.873.4-1.614.242-1.614-2.259.484-2.743,2.34-6.858,7.1-8.149,9.6a31.274,31.274,0,0,0-1.452,7.181c-.565,4.2-1.21,6.213-2.663,7.746l-1.856,2.017,2.1-.565c1.856-.484,2.1-.242,2.179,1.856a15.974,15.974,0,0,0,1.21,5.083c1.21,2.663,1.21,2.663.807-2.663-.565-6.213.323-7.262,4.438-5.164,3.469,1.775,5.245,4.922,4.68,8.149-.726,3.712-2.824,6.051-8.472,9.6-5.325,3.308-8.956,4.2-13.233,3.389-2.985-.565-3.469-1.372-5.245-8.149a59.637,59.637,0,0,0-2.985-8.311c-2.259-5.406-2.179-6.858.161-4.841a13.141,13.141,0,0,0,3.066,1.775c1.291.4,1.21.161-.4-1.13a10.154,10.154,0,0,0-2.5-1.614c-1.21,0-2.5-5-2.017-7.585.323-1.533,2.663-5.487,5.406-9.117,5.648-7.262,7.1-9.844,9.6-17.509.968-3.066,2.5-6.213,3.308-7.02C136.13-360.084,142.343-360,145.813-357.906Z" transform="translate(-52.847 774.018)"/>
                <path id="Path_279" data-name="Path 279" d="M295.218-647.019A22.011,22.011,0,0,0,290.054-645c-.4.4,1.049.161,3.147-.484,12.99-3.873,36.712,3.712,48.412,15.492,5.89,5.971,10.651,14.766,13.636,25.335,1.775,5.971,2.017,6.455,2.017,3.712.081-4.922-2.259-13.233-5.406-19.445-3.954-7.746-13.878-17.59-21.543-21.3C319.021-647.261,304.094-649.52,295.218-647.019Z" transform="translate(-110.835 743.21)"/>
                <path id="Path_280" data-name="Path 280" d="M445.992-646.584a53.852,53.852,0,0,0-30.5,19.042c-3.47,4.438-7.827,13.555-8.876,18.477-1.694,7.746-2.017,11.135-1.049,10.57a2.694,2.694,0,0,0,.888-2.1c0-2.743,5.325-16.7,8.069-21.382,3.47-5.729,11.3-13.071,17.59-16.379,12.506-6.7,28.4-9.763,36.874-7.1,5,1.533,5.648,1.13,1.049-.726C464.792-648.279,454.222-648.521,445.992-646.584Z" transform="translate(-138.966 743.179)"/>
                <path id="Path_281" data-name="Path 281" d="M293.508-638.595c-5.164,1.614-8.149,3.47-10.812,6.7-5.406,6.536-6.132,14.846-2.017,23.56,2.582,5.648,12.1,15.008,18.639,18.477,13.232,6.939,36.067,8.553,45.749,3.147,3.066-1.694,3.308-2.1,3.55-5.648.565-8.714-6.616-24.771-15.25-33.969-6.051-6.536-11.457-10.005-18.316-11.941C308.838-639.966,298.349-640.128,293.508-638.595Zm18.316,3.389c6.7,2.34,9.6,4.6,8.069,6.132-.726.726-2.179.4-6.374-1.21-7.746-2.985-13.636-3.873-19.687-2.9a32.063,32.063,0,0,0-5.729,1.21.376.376,0,0,1-.645-.323c0-.726,7.262-3.631,10.893-4.438C302.3-637.627,306.337-637.142,311.824-635.206Zm15.25,8.391c1.856,1.049,2.017,3.631.323,4.357-1.21.4-4.438-2.017-4.438-3.389C322.958-627.7,324.653-628.025,327.073-626.815Zm6.374,6.7a2.278,2.278,0,0,1-.565,1.614c-.726.726-2.743-1.049-2.179-1.937C331.35-621.57,333.448-621.328,333.448-620.118ZM301.98-593.411c3.308,2.017,5.487,3.712,4.841,3.712-2.1,0-9.2-4.6-12.1-7.746-1.533-1.775-1.936-2.34-.807-1.372A89.1,89.1,0,0,0,301.98-593.411Zm44.458,1.936c-.565,2.1-4.115,5.164-4.115,3.55,0-.484.726-1.291,1.614-1.775,1.13-.565,1.614-1.694,1.614-3.469s.242-2.259.726-1.452A4.465,4.465,0,0,1,346.438-591.474Z" transform="translate(-107.914 741.161)"/>
                <path id="Path_282" data-name="Path 282" d="M448.463-638.853c-8.069,2.1-16.7,7.826-22.592,15.088-9.682,12.184-16.218,32.759-11.457,36.228,5.809,4.276,23.238,5.245,36.389,2.017a44.949,44.949,0,0,0,22.511-12.668c6.858-6.7,10.086-13.313,10.086-20.414-.081-8.714-4.034-14.927-11.942-18.719-2.985-1.372-5.487-1.856-11.861-2.017A58.7,58.7,0,0,0,448.463-638.853ZM459.84-634.9c1.936,1.21.807,3.712-1.856,3.873-13.475,1.13-22.511,6.939-33.646,21.7-1.775,2.42-3.55,4.357-3.873,4.357-1.21,0,8.149-15.25,11.78-19.284,5-5.567,10.489-8.795,17.025-10.167C455.886-635.707,458.468-635.787,459.84-634.9Zm7.181,1.372c.645,1.694-1.049,3.389-2.259,2.179-1.049-1.049-.4-3.47.888-3.47C466.133-634.819,466.7-634.254,467.021-633.528Zm13.636,15.411c-.726,7.826-3.631,13.232-9.279,17.67a33.136,33.136,0,0,1-5.083,3.55c-1.694,0-.161-2.1,4.76-6.7,6.132-5.809,8.23-9.763,8.311-15.734,0-2.582.323-4.2.888-4.2C480.9-623.523,481.06-621.909,480.657-618.117ZM416.673-593.75c-.242,1.856-.081,3.308.484,3.631a2.031,2.031,0,0,1,.888,1.452c0,.484-.726.242-1.614-.565-1.775-1.614-2.017-3.712-.807-6.132C416.915-597.623,417.157-597.219,416.673-593.75Z" transform="translate(-140.872 741.097)"/>
                <path id="Path_283" data-name="Path 283" d="M270.085-605.066c-.565,4.115,2.985,12.184,8.875,19.849,10.893,14.443,24.448,21.463,42.441,22.108l8.875.323-7.665-1.13c-17.59-2.743-26.868-7.181-37.519-17.832-6.858-7.02-11.135-13.313-13.475-20.01C270.892-604.017,270.166-605.551,270.085-605.066Z" transform="translate(-105.954 732.726)"/>
                <path id="Path_284" data-name="Path 284" d="M493.477-601.278c-2.582,8.795-14.766,22.915-25.255,29.289-6.374,3.792-15.169,6.7-24.932,8.069l-8.069,1.21,6.051.081a54.378,54.378,0,0,0,40.02-16.541c7.585-7.746,14.766-20.9,13.878-25.093C494.929-605.07,494.283-603.86,493.477-601.278Z" transform="translate(-146.349 732.568)"/>
                <path id="Path_285" data-name="Path 285" d="M401.244-517.742c-2.017,2.259-2.824,3.873-2.663,5.245.323,2.824,1.694,2.421,2.5-.645a12.877,12.877,0,0,1,2.743-4.76c1.049-1.21,1.614-2.34,1.21-2.663C404.633-520.809,402.938-519.6,401.244-517.742Z" transform="translate(-137.385 712.049)"/>
                <path id="Path_286" data-name="Path 286" d="M379.188-517.733a14.8,14.8,0,0,1,2.582,5.325c.484,2.5.726,2.743,1.694,1.775,1.372-1.372.323-4.841-2.34-7.746C378.462-521.2,376.687-520.637,379.188-517.733Z" transform="translate(-132.354 711.958)"/>
                <path id="Path_287" data-name="Path 287" d="M382.543-466.56c-3.389,1.21-7.665,5.245-7.665,7.342,0,.888.4.807,1.856-.565,2.582-2.5,5.164-3.227,10.651-3.308,4.922,0,10.086,1.614,12.748,4.034,1.775,1.614,1.856,0,0-2.824-1.614-2.5-8.553-5.89-11.942-5.809A20.531,20.531,0,0,0,382.543-466.56Z" transform="translate(-131.594 699.111)"/>
                <path id="Path_288" data-name="Path 288" d="M388.762-456.457c0,.4,1.614.726,3.631.726,2.259,0,3.308-.323,2.663-.726C393.684-457.264,388.762-457.264,388.762-456.457Z" transform="translate(-134.989 696.512)"/>
                <path id="Path_289" data-name="Path 289" d="M350.487-415.985a6.169,6.169,0,0,0,1.856,1.614c.242,0-.242-.726-1.049-1.614a6.169,6.169,0,0,0-1.856-1.614C349.2-417.6,349.68-416.872,350.487-415.985Z" transform="translate(-125.358 686.862)"/>
                <path id="Path_290" data-name="Path 290" d="M353.691-402.1a6.17,6.17,0,0,0,1.856,1.614c.242,0-.242-.726-1.049-1.614a6.169,6.169,0,0,0-1.856-1.614C352.4-403.714,352.884-402.988,353.691-402.1Z" transform="translate(-126.141 683.467)"/>
                <path id="Path_291" data-name="Path 291" d="M371.673-399.758c0,1.13,8.633,5,12.022,5.406l2.9.323-2.824-1.13a62.428,62.428,0,0,1-7.02-3.227C372.077-400.726,371.673-400.807,371.673-399.758Z" transform="translate(-130.81 682.657)"/>
                <path id="Path_292" data-name="Path 292" d="M372.269-395.291c.565.565,1.21.807,1.452.565s-.161-.726-.968-.968C371.623-396.178,371.543-396.1,372.269-395.291Z" transform="translate(-130.841 681.579)"/>
                <path id="Path_293" data-name="Path 293" d="M388.888-395.595a16.861,16.861,0,0,0,4.034,0c.968-.161,0-.323-2.259-.323C388.485-395.918,387.6-395.756,388.888-395.595Z" transform="translate(-134.873 681.561)"/>
                <path id="Path_294" data-name="Path 294" d="M409.007-359.046c-.081,1.13-.4,3.469-.565,5.245-.4,2.824-.323,2.985.4,1.21a12.739,12.739,0,0,0,.565-5.245C409.249-359.611,409.088-360.176,409.007-359.046Z" transform="translate(-139.742 672.687)"/>
                <path id="Path_295" data-name="Path 295" d="M378.534-341.665c.726,4.76,1.775,5.809,1.372,1.372a9.872,9.872,0,0,0-1.13-4.2C378.211-345.054,378.131-344.086,378.534-341.665Z" transform="translate(-132.426 669.023)"/>
                <path id="Path_296" data-name="Path 296" d="M397.221-324.694c-1.452,3.792-3.873,13.959-4.841,20.494a70.518,70.518,0,0,1-1.291,7.181c-.726,2.582-1.775-.726-3.066-9.2-1.291-9.279-2.5-13.8-3.631-14.523-.4-.242-.4.726,0,2.1a113.509,113.509,0,0,1,1.614,12.264c1.049,12.022,3.954,19.526,6.616,16.863.4-.4,1.291-5.164,1.936-10.651.646-5.406,1.856-13.475,2.743-17.912C399-326.146,398.915-329.051,397.221-324.694Z" transform="translate(-133.846 664.638)"/>
                <path id="Path_297" data-name="Path 297" d="M361.06-304.171a34.433,34.433,0,0,0,1.13,6.052,39.044,39.044,0,0,1,1.21,8.23c0,6.294-2.34,7.584-14.524,8.149-2.421.081-4.438.484-4.438.968,0,1.21,6.132,2.179,10.812,1.614,3.55-.484,5-1.13,7.1-3.227,3.227-3.227,3.469-6.294,1.049-15.572C361.383-305.543,361.141-306.189,361.06-304.171Z" transform="translate(-124.15 659.366)"/>
                <path id="Path_298" data-name="Path 298" d="M415.379-300.74c-1.856,6.132-2.5,14.766-1.291,17.025,1.614,3.066,5.567,4.518,12.345,4.518,3.954.081,6.616-.323,7.262-.968.726-.726,0-.968-3.712-.968-6.536,0-11.538-1.452-13.394-3.873-1.936-2.421-2.017-6.455-.4-14.2C417.638-306.145,417.235-307.033,415.379-300.74Z" transform="translate(-141.031 659.323)"/>
                <path id="Path_299" data-name="Path 299" d="M322.337-272.582c-1.452.484-.484.646,3.469.726,3.47.081,5.325-.242,5-.726C330.245-273.55,325.242-273.55,322.337-272.582Z" transform="translate(-118.59 651.579)"/>
                <path id="Path_300" data-name="Path 300" d="M449.64-272.562c0,.484,2.259.807,5.487.726,4.2-.081,4.841-.242,2.985-.726C454.481-273.45,449.64-273.45,449.64-272.562Z" transform="translate(-149.875 651.559)"/>
                <path id="Path_301" data-name="Path 301" d="M285.163-268.255c0,.4.4.565.807.323.484-.242.807-.646.807-.888,0-.161-.323-.323-.807-.323A.884.884,0,0,0,285.163-268.255Z" transform="translate(-109.656 650.56)"/>
                <path id="Path_302" data-name="Path 302" d="M277.13-264.064c-.323.484.484.565,2.178.242,3.55-.646,3.873-1.049.807-1.049C278.744-264.871,277.373-264.548,277.13-264.064Z" transform="translate(-107.674 649.515)"/>
                <path id="Path_303" data-name="Path 303" d="M271.91-258.752c-1.13.323-1.614.726-1.21.968.484.242,2.259,0,4.034-.565,2.34-.726,2.663-.968,1.21-.968A17.363,17.363,0,0,0,271.91-258.752Z" transform="translate(-106.084 648.157)"/>
                <path id="Path_304" data-name="Path 304" d="M321.476-255.6c0,1.049,3.066,1.694,8.23,1.694,7.1,0,16.863,1.533,20.414,3.227,4.841,2.34,5.89,4.76,6.858,16.218.484,5.487,1.049,10.328,1.21,10.812.726,1.694-.565-21.947-1.291-24.367-.968-3.066-4.68-5.567-10.651-7.181C341.567-256.409,321.476-256.812,321.476-255.6Z" transform="translate(-118.535 647.428)"/>
                <path id="Path_305" data-name="Path 305" d="M426.642-255.168c-10.328,2.663-10.893,3.389-12.184,16.379-1.856,18.074-1.291,20.575.807,3.873.807-5.89,1.937-11.3,2.582-12.345,2.1-3.227,7.746-5.083,17.59-5.971,13.555-1.13,15.9-1.452,15.411-2.34C450.122-256.621,431.322-256.3,426.642-255.168Z" transform="translate(-140.998 647.398)"/>
                <path id="Path_306" data-name="Path 306" d="M269.09-253.362a8.045,8.045,0,0,0-3.631,1.614c-.807.807-.645.888.646.4a21.776,21.776,0,0,1,3.47-.968,4.493,4.493,0,0,0,2.259-1.13c.242-.4.323-.726.161-.645S270.542-253.684,269.09-253.362Z" transform="translate(-104.717 646.882)"/>
                <path id="Path_307" data-name="Path 307" d="M351.381-247.559c0,.645.4.968.807.726a1.534,1.534,0,0,0,.807-1.291.745.745,0,0,0-.807-.726C351.784-248.85,351.381-248.286,351.381-247.559Z" transform="translate(-125.848 645.598)"/>
                <path id="Path_308" data-name="Path 308" d="M263.936-245.5c-1.936,1.452-.565,1.533,2.1,0q1.936-1.089.726-1.21A6.329,6.329,0,0,0,263.936-245.5Z" transform="translate(-104.243 645.076)"/>
                <path id="Path_309" data-name="Path 309" d="M354.687-245.377c0,.888.242,1.13.484.484a1.634,1.634,0,0,0-.081-1.533C354.848-246.749,354.606-246.265,354.687-245.377Z" transform="translate(-126.652 645.03)"/>
                <path id="Path_310" data-name="Path 310" d="M358.329-244.355c-.807,2.017.081,2.34,1.13.4.484-.968.565-1.694.081-1.694C359.135-245.646,358.571-245.081,358.329-244.355Z" transform="translate(-127.47 644.815)"/>
                <path id="Path_311" data-name="Path 311" d="M360.916-241.325c-.807,2.1-.807,2.179.323.726a6.209,6.209,0,0,0,1.21-2.259C362.449-244.068,361.884-243.5,360.916-241.325Z" transform="translate(-128.04 644.286)"/>
                <path id="Path_312" data-name="Path 312" d="M261.386-239.316c-1.049.484-1.856,1.21-1.856,1.614,0,.645,1.372.081,4.034-1.775C265.179-240.526,263.646-240.445,261.386-239.316Z" transform="translate(-103.388 643.487)"/>
                <path id="Path_313" data-name="Path 313" d="M363.975-239.1a3.267,3.267,0,0,0-.645,2.259c.242.645.726.323,1.372-.807C365.911-239.9,365.427-240.791,363.975-239.1Z" transform="translate(-128.759 643.429)"/>
                <path id="Path_314" data-name="Path 314" d="M389.672-231.981a18.739,18.739,0,0,0-.807,5.083c0,1.775.242,1.614,1.452-1.13,1.372-3.066,1.372-3.066,2.259-1.21.968,1.936.968,1.936.968.161.081-2.1-1.533-5.89-2.42-5.89C390.8-234.966,390.076-233.594,389.672-231.981Z" transform="translate(-135.011 642.203)"/>
                <path id="Path_315" data-name="Path 315" d="M258.954-232.023c-.242.4-.161.807.323.807a1.884,1.884,0,0,0,1.291-.807c.242-.484.161-.807-.323-.807A1.645,1.645,0,0,0,258.954-232.023Z" transform="translate(-103.214 641.68)"/>
                <path id="Path_316" data-name="Path 316" d="M365.265-228.738c0,.4.4.565.807.323.484-.242.807-.645.807-.888,0-.161-.323-.323-.807-.323A.884.884,0,0,0,365.265-228.738Z" transform="translate(-129.243 640.897)"/>
                <path id="Path_317" data-name="Path 317" d="M370.926-206.111c0,2.9.161,4.034.323,2.582a28.464,28.464,0,0,0,0-5.245C371.087-210.145,370.926-209.016,370.926-206.111Z" transform="translate(-130.627 635.94)"/>
                <path id="Path_318" data-name="Path 318" d="M413.647-204.726c0,2.017.161,2.824.323,1.775a13.677,13.677,0,0,0,0-3.631C413.808-207.55,413.647-206.743,413.647-204.726Z" transform="translate(-141.074 635.362)"/>
                <path id="Path_319" data-name="Path 319" d="M674.993-219.562a5.487,5.487,0,0,0,.807,2.017c.4.646.807.807.807.4a5.01,5.01,0,0,0-.807-2.017C675.4-219.8,674.993-220.046,674.993-219.562Z" transform="translate(-204.981 638.499)"/>
                <path id="Path_320" data-name="Path 320" d="M682.469-183.125c0,.968.4,1.694.807,1.694.484,0,.807-.484.807-1.13a2.031,2.031,0,0,0-.807-1.694C682.873-184.5,682.469-184.013,682.469-183.125Z" transform="translate(-206.809 629.818)"/>
                <path id="Path_321" data-name="Path 321" d="M117.687-242.368c-1.452,1.049-1.452,1.13.646.726,1.21-.242,2.179-.726,2.179-1.13C120.511-243.821,119.462-243.659,117.687-242.368Z" transform="translate(-68.453 644.28)"/>
                <path id="Path_322" data-name="Path 322" d="M105.161-214.45c-.726,2.1-.565,2.582.4.968.484-.807.726-1.694.484-1.856C105.888-215.579,105.484-215.176,105.161-214.45Z" transform="translate(-65.529 637.42)"/>
                <path id="Path_323" data-name="Path 323" d="M98.7-178.373c-.323.807-.4,1.694-.081,1.936.807.807,1.452-.323,1.049-1.936C99.345-179.745,99.345-179.745,98.7-178.373Z" transform="translate(-63.99 628.616)"/>
                <path id="Path_324" data-name="Path 324" d="M652.671-221.494c-.081,1.049,7.665,12.829,8.876,13.636,2.017,1.21,1.21-.565-2.743-5.809-2.34-3.147-4.6-6.455-5.164-7.262C653.155-221.736,652.671-222.059,652.671-221.494Z" transform="translate(-199.523 638.978)"/>
                <path id="Path_325" data-name="Path 325" d="M648.229-160.874c-1.049,2.985-.565,3.954,1.775,3.954,1.614-.081,1.614-.161.4-.888-1.049-.565-1.291-1.372-.888-3.147C650.085-164.1,649.359-164.021,648.229-160.874Z" transform="translate(-198.308 624.672)"/>
                <path id="Path_326" data-name="Path 326" d="M139.684-235.205c-2.9,1.21-2.179,1.533,2.985,1.372,4.115-.161,4.68-.323,3.47-1.21C144.605-236.173,142.266-236.254,139.684-235.205Z" transform="translate(-73.667 642.442)"/>
                <path id="Path_327" data-name="Path 327" d="M124.317-216.167a62.383,62.383,0,0,1-4.6,7.02c-3.227,4.276-4.2,6.294-2.5,5.245,1.13-.646,6.7-9.118,7.907-12.022C126.576-219.152,125.85-219.394,124.317-216.167Z" transform="translate(-68.386 638.169)"/>
                <path id="Path_328" data-name="Path 328" d="M133.3-157.914c.161,1.936-.161,3.147-1.049,3.792-1.21.888-1.21.968,0,1.049,2.5,0,3.308-2.017,1.936-5l-1.21-2.663Z" transform="translate(-72.041 624.052)"/>
                <path id="Path_329" data-name="Path 329" d="M639.07-186.778c1.452,1.936,2.582,4.115,2.582,4.841,0,.888.242.968.888.323,1.372-1.372-.484-4.357-4.438-7.5C637.214-189.844,637.618-188.876,639.07-186.778Z" transform="translate(-195.846 631.05)"/>
                <path id="Path_330" data-name="Path 330" d="M630.64-167.941a1.271,1.271,0,0,0,1.614.242c1.694-.565,1.533-1.049-.484-1.049C630.882-168.748,630.318-168.426,630.64-167.941Z" transform="translate(-194.113 626.011)"/>
                <path id="Path_331" data-name="Path 331" d="M631.731-145.706c-1.452.161-2.663.645-2.663,1.13,0,1.21,4.518.807,5.648-.484.565-.645.726-1.13.323-1.049C634.635-146.109,633.1-145.867,631.731-145.706Z" transform="translate(-193.751 620.477)"/>
                <path id="Path_332" data-name="Path 332" d="M160.947-221.823c-.968,1.21-.968,1.291.484.726a27.406,27.406,0,0,1,4.438-1.291l2.824-.645-3.308-.081C163.125-223.194,161.673-222.71,160.947-221.823Z" transform="translate(-79.116 639.307)"/>
                <path id="Path_333" data-name="Path 333" d="M141.418-184.21c-2.421,2.5-3.469,6.213-1.775,6.213.484,0,.807-.726.807-1.694a10.636,10.636,0,0,1,2.1-4.438C145.21-187.6,144.726-187.679,141.418-184.21Z" transform="translate(-73.868 630.418)"/>
                <path id="Path_334" data-name="Path 334" d="M150.3-164.927a4.259,4.259,0,0,0,2.017,0c.484-.242.081-.4-1.049-.4S149.731-165.169,150.3-164.927Z" transform="translate(-76.614 625.175)"/>
                <path id="Path_335" data-name="Path 335" d="M147.388-142.408c0,1.21,3.873,1.936,5.487,1.049,1.13-.726,1.049-.807-.807-.888a13.138,13.138,0,0,1-3.389-.484C147.953-142.973,147.388-142.893,147.388-142.408Z" transform="translate(-75.965 619.681)"/>
              </g>
            </g>
          </svg>

        </EffectContainer>

        <NotFoundTxtContainer maxWidth='lg'>
          <Typography gutterBottom variant='h2'>Nothing is here</Typography>
          <Typography >
            Navigate your spaceship somewhere else.
            there is nothing here. double-check the address you entered.
          </Typography>

          <MotionBtn  text='Go Back'/>

        </NotFoundTxtContainer>

      </NotFoundContainer>
  )
}

export default NotFoundPage
